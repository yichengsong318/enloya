import React, {Component} from 'react';
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { updateData, loadMe } from "../../redux/actions";
import { withRouter, NavLink } from "react-router-dom";

import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

import {post, remove} from '../../helpers/RemoteApi';

import '../../assets/billing.css';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }
  }


  handleChange = (event) => {
    if (event.error) {
      this.setState({error: event.error.message});
    } else {
      this.setState({error: null});
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {stripe, elements, userId, userType, loadMe} = this.props;
    const {token} = await stripe.createToken(elements.getElement(CardElement));
    if (token && token.id) {
      post('customers/add-card', {
        type: userType,
        id: userId,
        token: token.id
      }).then(() => {
        elements.getElement(CardElement).clear();
        loadMe(() => {
          NotificationManager.success(
            "The credit card was successfully added!",
            "Success !",
            3000,
            null,
            null,
            ''
          );
        });
      })
    }
  };

  render() {
    return (
      <form className="my-5 p-4 bg-lighter" onSubmit={this.handleSubmit}>
        {this.state.error &&
          <div className="alert alert-danger" role="alert">{this.state.error}</div>}
        <h5 className="mt-2 mb-3">Add a credit card</h5>
        <div className="row">
          <div className="col-sm-6">
            <CardElement options={CARD_ELEMENT_OPTIONS} onChange={(e) => this.handleChange(e)}/>
          </div>
          <div className="col-sm-6">
            <div className="text-left pr-0">
              <button type="submit" className="btn btn-yellow px-5">Add the card</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const InjectedCheckoutForm = (props) => (
  <ElementsConsumer>
    {({stripe, elements}) => (
      <CheckoutForm stripe={stripe} elements={elements}
        userId={props.userId} userType={props.userType} loadMe={props.loadMe}/>
    )}
  </ElementsConsumer>
);

const stripePromise = loadStripe("pk_test_ZbpDLpu7alIoXGpdqS34AClR");

export class Billing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ''
    }
  }

  deleteCard = (id) => {
    const {userInfo, userType} = this.props;

    if (!this.props.loading) {
      remove('customers/remove-card/' + id, {
        userId: userInfo.id,
        userType: userType
      }).then(() => {
        this.props.loadMe(() => {
          NotificationManager.success(
            "The credit card was successfully removed!",
            "Success !",
            3000,
            null,
            null,
            ''
          );
        });
      });
    }
  }

  render () {
    const { userInfo, userType, loadMe } = this.props;
    let currentPlan = null;
    if (userInfo.paymentInfo && userInfo.paymentInfo.premium) {
      if (userInfo.paymentInfo.subscriptions && userInfo.paymentInfo.subscriptions.length > 0) {
        currentPlan = userInfo.paymentInfo.subscriptions[0].plan.nickname;
      }
    }


    return (
      <div className="py-4 px-2 account-settings">
        {userType === 'lawyer' &&
          <>
            <h2 className="mt-2 mb-3">Current billing plan</h2>
            <hr/>
            <div>
              <div className="py-5">
                {currentPlan ?
                  <h6 className="mb-4">Your current plan is: <strong>{currentPlan}</strong></h6>
                  :
                  <h6 className="mb-4">You don't have any plan currently. Please upgrade to get access to great features.</h6>
                }
                <NavLink className="btn btn-yellow" to="/upgrade">Upgrade your plan</NavLink>
              </div>
            </div>
          </>
        }
        <h2 className="mt-2 mb-3">Billing methods</h2>
        <hr/>
        <h5 className="mb-2">Credit Cards</h5>
        { userInfo.paymentInfo && userInfo.paymentInfo.cards && userInfo.paymentInfo.cards.map(card => {
            return (
              <div key={card.id} className="credit-card">
                <div className="d-flex justify-content-between">
                  <h6 className="d-flex w-100 mt-3 mb-2">
                    {(card.brand === 'MasterCard' || card.brand === 'Visa') &&
                      <img className="credit-card-icon" src={require('../../assets/icons/' + card.brand + '.png')} alt={card.brand} />}
                    <div className="mr-4">****{card.last4}</div>
                    <div>Exp. Date: {card.exp_month}/{card.exp_year}</div>
                  </h6>
                  <div>
                    <span className="btn btn-link" onClick={() => {this.deleteCard(card.id)}}>Delete</span>
                  </div>
                </div>
                <hr className="my-1"/>
              </div>
            );
          }
        )}

        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm userId={userInfo.id} userType={userType} loadMe={loadMe}/>
        </Elements>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;

  return { userType, userInfo, user };
};

const mapActionToProps = {
  updateData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Billing));

import React, {Component} from 'react';
import { connect } from "react-redux";

import { get } from "../helpers/RemoteApi";
import {withRouter} from 'react-router-dom';

import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import { NotificationManager } from "react-notifications";
import { updateData, readData, loadMe, emptyCart } from "../redux/actions";

import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, ElementsConsumer} from '@stripe/react-stripe-js';

import {post} from '../helpers/RemoteApi';

import '../assets/billing.css';

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
  };

  render() {
    return (
      <form className="my-5 p-4 bg-lighter" onSubmit={this.handleSubmit}>
        {this.state.error && 
          <div className="alert alert-danger" role="alert">{this.state.error}</div>}
        <h5 className="mt-2 mb-3">Add a credit card</h5>
        <div className="row">
          <div className="col-sm-12">
            <CardElement options={CARD_ELEMENT_OPTIONS} onChange={(e) => this.handleChange(e)}/>
          </div>
          <div className="col-sm-12 mt-4">
            <div className="text-left pr-0">
              <button type="submit" className="btn btn-primary btn-block px-5">Add the card</button>
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

export class Upgrade extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      error: '',
      currentCard: null,
      cartServices: [],
      totalAmount: 0
    }
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('plans');
    this.loadServices();
  }

  loadServices = () => {
    get('services/query-ids', {ids: this.props.cartServices}).then(res => {
      let amount = res.data.reduce((pv, cv) => {return pv + parseInt(cv.price)}, 0);
      this.setState({
        cartServices: res.data,
        totalAmount: amount
      });
    });
  };

  checkout = async () => {
    post('customers/buy-services', {
      type: this.props.userType,
      id: this.props.userInfo.id,
      services: this.props.cartServices,
      cardId: this.state.currentCard ? this.state.currentCard.id : null
    }).then(() => {
      this.props.history.push('/checkout-success');
      this.props.emptyCart();
    })
  };
  
  render () {
    const { userInfo, userType, loadMe } = this.props;
    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 container mt-5 pt-5">
          <div className="row">
            {!this.state.currentCard && 
            <div className="col-sm-5 mx-auto">
              <div className="bg-white p-4 my-5">
                <h5 className="mb-2">Your cart</h5>
                <hr/>
                <div className="row">
                  {this.state.cartServices.map((cs, i) => {
                    return (
                      <div className="col-sm-12" key={i}>
                        <div className="row">
                          <div className="col-8 col-sm-8 mb-3">
                            <p className="checkout-title">{cs.title}</p>
                            <span className="font-12">{cs.lawyer.firstname + ' ' + cs.lawyer.lastname}</span>
                          </div>
                          <div className="col-4 col-sm-4 text-right">
                            <p className="checkout-title">${cs.price}</p>
                            <span className="font-12 text-danger c-pointer" 
                              onClick={() => {this.removeItem(cs.id)}}>Delete</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                  <div className="col-8 col-sm-8 mb-3">
                    <p className="checkout-title">Total</p>
                  </div>
                  <div className="col-4 col-sm-4 text-right text-bold"><span>${this.state.totalAmount}</span></div>
                </div>
                <h5 className="mb-2">Select a credit cart</h5>
                <hr/>
                { userInfo.paymentInfo && userInfo.paymentInfo.cards && userInfo.paymentInfo.cards.map(card => {
                    return (
                      <div key={card.id} className="credit-card">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="d-flex w-100 mb-0">
                          {(card.brand === 'MasterCard' || card.brand === 'Visa') &&
                            <img className="credit-card-icon" src={require('../assets/icons/' + card.brand + '.png')} alt={card.brand} />}
                            <div className="mr-4">****{card.last4}</div>
                            <div>Exp. Date: {card.exp_month}/{card.exp_year}</div>
                          </h6>
                          <div>
                            <span className="btn btn-primary" onClick={() => {this.setState({currentCard: card})}}>Select</span>
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
            </div>
            }
            {this.state.currentCard && 
            <div className="col-sm-5 mx-auto">
              <div className="btn btn-link float-left mr-2 text-dark" 
                onClick={() => {this.setState({currentCard: null})}}>Go back</div>
              <div className="bg-white p-4 my-5">
                <h5 className="mb-2">Summary</h5>
                <hr/>
                <div>
                  <h5 className="mb-4">Your total checkout</h5>  
                  <div className="credit-plan">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="d-flex w-100 justify-content-between mb-0">
                        <div className="mr-4">{this.state.cartServices.length} element(s)</div>
                        <div>${this.state.totalAmount}</div>
                      </h6>
                    </div>
                  </div>
                  <h5 className="mb-4 mt-5">Your credit card</h5>   
                  <div key={this.state.currentCard.id} className="credit-card">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="d-flex w-100 mb-0">
                      {(this.state.currentCard.brand === 'MasterCard' || this.state.currentCard.brand === 'Visa') &&
                        <img className="credit-card-icon" src={require('../assets/icons/' + this.state.currentCard.brand + '.png')} alt={this.state.currentCard.brand} />}
                        <div className="mr-4">****{this.state.currentCard.last4}</div>
                        <div>Exp. Date: {this.state.currentCard.exp_month}/{this.state.currentCard.exp_year}</div>
                      </h6>
                    </div>
                  </div>   
                  <div className="col-sm-12 mt-4">
                    <div className="text-left pr-0">
                      <button type="submit" className="btn btn-primary btn-block px-5"
                        onClick={() => {this.checkout()}}>Proceed to payment</button>
                    </div>
                  </div> 
                </div>        
              </div>
            </div>
            }
        </div>
        </div>
        <Footer FooterData={FooterData} kind="otherPage"/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data, cart }) => {
  const { userType, userInfo, user } = authUser;
  const { cartServices } = cart;

  return { 
    userType, 
    userInfo, 
    user, 
    cartServices 
  };
};

const mapActionToProps = {
  updateData,
  readData,
  loadMe,
  emptyCart
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Upgrade));

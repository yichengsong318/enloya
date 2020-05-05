import React, { Component } from 'react';
import { connect } from "react-redux";
import { get } from "../helpers/RemoteApi";
import { removeFromCart } from "../redux/actions";
import { Link, withRouter } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';

export class Checkout extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cartServices: [],
      totalAmount: 0
    };
  }

  infoDesc = React.createRef();

  handleMouseOver = () => {
    this.infoDesc.current.classList.remove('d-none');
  }

  handleMouseOut = () => {
    this.infoDesc.current.classList.add('d-none');
  }

  removeItem = (id) => {
    this.props.removeFromCart(id);
    this.loadServices();
  }

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    if (this.props.cartServices.length > 0) {
      get('services/query-ids', {ids: this.props.cartServices}).then(res => {
        console.log(res.data);
        let amount = res.data.reduce((pv, cv) => {return pv + parseInt(cv.price)}, 0);
        this.setState({
          cartServices: res.data,
          totalAmount: amount
        });
      });
    }
  };

  render () {
    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 container">
          <AlertArea/>
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <div className="bg-white p-4 my-5 border-radius-8">
                <h1 className="text-center mb-4">Your cart</h1>
                <div className="row">
                  <div className="col-sm-12 mb-3">
                    <p className="checkout-summary">Summary</p>
                  </div>
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
                  <div className="col-sm-12 mb-3">
                    <div ref={this.infoDesc} className="d-none tooltip-details">This helps us operate our platform and continue bringing better legal.solutions for your legal pains.</div>
                    <p className="checkout-title mb-3">
                      Service Fee
                      <img
                          src={require('../img/information.png')}
                          alt=""
                          className="cursor-pointer mb-4"
                          onMouseOver={() => this.handleMouseOver()}
                          onMouseOut={() => this.handleMouseOut()}
                          style={{ width: "12px"}}
                      />
                    </p>
                  </div>
                  <div className="col-8 col-sm-8 mb-3">
                    <p className="checkout-title">Total</p>
                  </div>
                  <div className="col-4 col-sm-4 text-right text-bold"><span>${this.state.totalAmount}</span></div>

                </div>
                <hr/>
                <div className="py-3">
                  <Link to="/search" className="btn btn-yellow col-12 checkout-btn">Continue shopping</Link>
                  <Link to="/checkout-confirm" className="btn btn-yellow bg-yellow col-12 checkout-btn checkout-btn-go mt-3">Go to checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, cart }) => {
  const { userInfo } = authUser;
  const { cartServices } = cart;

  return {
    userInfo,
    cartServices
  };
};

const mapActionToProps = {
  removeFromCart
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Checkout));

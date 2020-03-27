import React from 'react';

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';

function Checkout() {
    const infoDesc = React.createRef();
    const handleMouseOver = () => {
        infoDesc.current.classList.remove('d-none');
    }
    const handleMouseOut = () => {
        infoDesc.current.classList.add('d-none');
    }
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
                <div className="col-8 col-sm-8 mb-3">
                  <p className="checkout-title">Service One name</p>
                  <span className="font-12">Lawyer name</span>
                </div>
                <div className="col-4 col-sm-4 text-right">
                    <p className="checkout-title">$9.99</p>
                    <span className="font-12 text-danger">Delete</span>
                </div>
                <div className="col-8 col-sm-8 mb-3">
                  <p className="checkout-title">Service Two name</p>
                  <span className="font-12">Lawyer name</span>
                </div>
                <div className="col-4 col-sm-4 text-right">
                    <p className="checkout-title">$3.99</p>
                    <span className="font-12 text-danger">Delete</span>
                </div>
                <div className="col-sm-12 mb-3">
                  <div ref={infoDesc} className="d-none tooltip-details">This helps us operate our platform and continue bringing better legal.solutions for your legal pains.</div>
                  <p className="checkout-title mb-3">
                    Service Fee
                    <img
                        src={require('../img/information.png')}
                        alt=""
                        className="cursor-pointer mb-4"
                        onMouseOver={() => handleMouseOver()}
                        onMouseOut={() => handleMouseOut()}
                        style={{ width: "12px"}}
                    />
                  </p>
                </div>
                <div className="col-8 col-sm-8 mb-3">
                  <p className="checkout-title">Total</p>
                </div>
                <div className="col-4 col-sm-4 text-right text-bold"><span>$13.98</span></div>

              </div>
              <hr/>
              <div className="py-3">
                <a href="/checkout-success" className="btn btn-primary mr-5 col-12 checkout-btn">Continue shopping</a>
                <a href="/checkout-success" className="btn btn-primary bg-yellow ml-5 col-12 checkout-btn checkout-btn-go">Go to checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

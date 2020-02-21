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
            <div className="bg-white p-4 my-5">
              <h1 className="text-center mb-4">Your card</h1>
              <div className="row">
                <div className="col-sm-12 mb-3">
                  <p className="checkout-summary">Summary</p>
                </div>
                <div className="col-sm-8 mb-3">
                  <p className="checkout-title">Product 1</p>
                  <span className="font-12">A nice thing</span>
                </div>
                <div className="col-sm-4 text-right"><span>$9.99</span></div>
                <div className="col-sm-8 mb-3">
                  <p className="checkout-title">Product 2</p>
                  <span className="font-12">A nice thing</span>
                </div>
                <div className="col-sm-4 text-right"><span>$3.99</span></div>
                <div className="col-sm-8 mb-3">
                  <p className="checkout-title">Total</p>
                </div>
                <div className="col-sm-4 text-right text-bold"><span>$13.98</span></div>
                <div className="col-sm-8 mb-3 mt-4">
                  <div ref={infoDesc} className="d-none tooltip-details">This helps us operate our platform and continue bringing better legal.solutions for your legal pains.</div>
                  <p className="checkout-title mb-3">
                    Service Fee
                    <img
                        src={require('../img/information.png')}
                        alt=""
                        className="ml-2 cursor-pointer"
                        onMouseOver={() => handleMouseOver()}
                        onMouseOut={() => handleMouseOut()}
                    />
                  </p>
                </div>
              </div>
              <hr/>
              <div className="mt-3">
                <p>In order to complete your transaction, we will transfer you over to Paypal's secure servers.</p>
              </div>
              <div className="py-3 ml-4">
                <a href="/checkout-success" className="btn btn-primary ml-5">Continue shopping</a>
                <a href="/checkout-success" className="btn btn-primary ml-3">Go to checkout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

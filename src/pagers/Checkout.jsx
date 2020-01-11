import React from 'react';

import { FormInput, FormCheck } from '../shared/FormElement';

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';

function Checkout() {
  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container">
        <AlertArea/>
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <div className="bg-white p-4 my-5">
              <h1 className="text-left common-title">Checkout</h1>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <FormCheck id="check-4" label="Pay by card"/>
                </div>
                <div className="col-sm-6"></div>
                <div className="col-sm-12">
                  <FormInput placeholder="Card Number" type="text" id="card-number" noHelp noLabel/>
                </div>
                <div className="col-sm-3 pr-1">
                  <FormInput placeholder="Month" type="number" id="month" noHelp noLabel/>
                </div>
                <div className="col-sm-3 px-1">
                  <FormInput placeholder="Year" type="number" id="year" noHelp noLabel/>
                </div>
                <div className="col-sm-6 pl-1">
                  <FormInput placeholder="Security Code" type="text" id="security" noHelp noLabel/>
                </div>
                <div className="col-sm-12">
                  <FormInput placeholder="Name on Card" type="text" id="security" noHelp noLabel/>
                </div>
              </div>
              <hr/>
              <FormCheck id="check-4" label="Pay with PayPal" />
              <div className="mt-3">
                <p>In order to complete your transaction, we will transfer you over to Paypal's secure servers.</p>
              </div>
              <div className="py-3">
                <a href="/checkout-success" className="btn btn-primary btn-block">Complete Order</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;

import React from 'react';

import { FormCheck, FormInput } from '../../shared/FormElement';

function Billing() {

  return (
    <div className="py-4 px-2 account-settings">
      <h2 className="mt-2 mb-3">Billing methods</h2>
      <div className="row">
        <div className="col-sm-6">
          <div>Card Number: 5678 6789 0123 4567</div>
          <div>Name: James Smith</div>
          <div>Adress: 456 Avenue JP II, Switzerland</div>
          <div className="edit-billing-method">Edit</div>
        </div>
        <div className="col-sm-3">
          <div>Expiry: 09/2021</div>
        </div>
        <div className="col-sm-3">
          <div>Security Code: 091</div>
        </div>
      </div>
      <div className="my-4 bg-lighter p-5">
        <div className="d-flex">
          <h4>Primary billing method</h4>
          <img src={require('../../img/visas-master.jpg')} alt="" className="float-left" style={{width: "10%", marginLeft: "25rem"}}/>
        </div>
        <hr/>
        <div className="row">
          <div className="col-sm-6">
            <label>Card number</label>
            <FormInput placeholder="Card Number" type="text" id="card-number" noHelp noLabel/>
          </div>
          <div className="col-sm-2">
            <label>Expiry</label>
            <FormInput placeholder="MM" type="number" id="month" noHelp noLabel/>
          </div>
          <div className="col-sm-2">
            <label>Year</label>
            <FormInput placeholder="YYY" type="number" id="security" noHelp noLabel/>
          </div>
          <div className="col-sm-2">
            <label>Security</label>
            <FormInput placeholder="Security code" type="number" id="security" noHelp noLabel/>
          </div>
          <div className="col-sm-6">
            <label>First Name</label>
            <FormInput placeholder="Fist Name" type="text" id="first-name" noHelp noLabel/>
          </div>
          <div className="col-sm-6">
            <label>Last Name</label>
            <FormInput placeholder="Last Name" type="text" id="last-name" noHelp noLabel/>
          </div>
          <div className="col-sm-6">
            <label>City</label>
            <FormInput placeholder="City" type="text" id="city" noHelp noLabel/>
          </div>
          <div className="col-sm-6">
            <label>Country</label>
            <FormInput placeholder="Country" type="text" id="country" noHelp noLabel/>
          </div>
        </div>
        <div className="mt-5">
          <div className="col-sm-12 text-right pr-0">
            <button type="button" className="btn btn-primary px-5">Save</button>
          </div>
        </div>
      </div>

      <div className="my-4 bg-lighter p-5">
        <h4>Secondary billing method</h4>
        <hr/>
        <div className="mt-5">
          <FormCheck id="check-4" label="Pay using PayPal as your billing methods" />
          <FormCheck id="check-5" label="Pay using Stripe as your billing methods" />
          <div className="col-sm-12 text-right pr-0">
            <button type="button" className="btn btn-primary px-5">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billing;

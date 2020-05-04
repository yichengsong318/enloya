import React from 'react';

import { FormDateSplit, FormSwitch, FormInput, FormSelect } from '../../shared/FormElement';

function BookingCreate() {

  return (
    <div className="py-4 px-4 account-settings">
      <h2 className="mt-2 mb-4">Create a booking selection</h2>
      <div className="my-4 bg-lighter p-5">
        <h4>Lets get started with a couple of questions</h4>
        <hr/>
        <div className="row">
          <div className="col-sm-9">
            <FormSwitch label="How often do you want to give a consultation" id="often" selected="part-time" choices={[
              { key: 'as-often-as-possible', label: 'As often as possible' },
              { key: 'part-time', label: 'Part-time' },
              { key: 'not-sure', label: 'Not sure yet' }
            ]} noHelp/>
          </div>
          <div className="col-sm-12">
            <FormSwitch label="How much notice do you need before providing a consultation" id="notice-frequency"
              selected="" choices={[
              { key: '0', label: '0 Days' },
              { key: '1', label: '1 Days' },
              { key: '2', label: '2 Days' },
              { key: '3', label: '3 Days' },
              { key: '4', label: '4 Days' },
              { key: '5', label: '5 Days' },
              { key: '6', label: '6 Days' },
              { key: '7', label: '7 Days' }
            ]} noHelp/>
          </div>
          <div className="col-sm-12">
            <FormSwitch label="How often do you want to give a consultation" id="often-2" selected="part-time" choices={[
              { key: 'anytime', label: 'Anytime' },
              { key: '1-month', label: '1 Month' },
              { key: '2-month', label: '2 Month' },
              { key: '3-month', label: '3 Month' },
              { key: '6-month', label: '6 Month' },
            ]} noHelp />
          </div>
          <div className="col-sm-12 mt-3"><h5>When clients can book ?</h5></div>
          <div className="col-sm-4">
            <FormDateSplit label="From" id="exp-from" />
          </div>
          <div className="col-sm-4">
            <FormDateSplit label="To" id="exp-to" />
          </div>
          <div className="col-sm-12 mt-3"><h5>Price per calculation</h5></div>
          <div className="col-sm-6">
            <FormInput label="Price" type="number" id="price" noHelp />
          </div>
          <div className="col-sm-6">
            <FormSelect label="Currency" id="currency" selected="" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: 'Currency One' },
              { value: 'two', label: 'Currency Two' },
              { value: 'three', label: 'Currency Three' }
            ]} noHelp />
          </div>
          <div className="col-sm-6">
            <FormSelect label="Time Period" id="period" selected="" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: 'Period One' },
              { value: 'two', label: 'Period Two' },
              { value: 'three', label: 'Period Three' }
            ]} noHelp />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-5">
        <div className="col-sm-12 text-right">
          <button type="button" className="btn btn-yellow px-5">Next</button>
        </div>
      </div>
    </div>
  );
}

export default BookingCreate;

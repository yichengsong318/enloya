import React from 'react';

import { FormCheck } from '../../shared/FormElement';

function BookingCreate() {

  return (
    <div className="py-4 px-4 account-settings">
      <h2 className="mt-2 mb-4">Create a booking selection</h2>
      <div className="my-4 bg-lighter p-5">
        <h4>Organization is the key to success</h4>
        <hr/>
        <p className="my-5">
          Client will book instant consultations through your profile. 
          Only get booked when you're available by keeping your calendar and settings up-to-date.
          Canceling disrupts client's plans and may even put in danger their assets and physical integrity.
          If you cancel because your calendar in inaccurate, you'll be charged a penalty fee and the dates 
          won't be available for anyone else to book. 
        </p>

        <FormCheck id="booking-create" 
          label="I hereby agree to keep my calendar and availability settings up-to-date"/>
      </div>
      <div className="mt-4 mb-5">
        <div className="col-sm-12 text-right">
          <button type="button" className="btn btn-primary px-5">Next</button>
        </div>
      </div>
    </div>
  );
}

export default BookingCreate;

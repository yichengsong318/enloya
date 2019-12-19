import React from 'react';

import CustomNavbar from '../components/CustomNavbar';

function CheckoutSuccess() {
  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-5 mx-auto">
            <div className="bg-white p-4 my-5">
              <h1 className="text-center common-title">Thank you for your order</h1>
              <p className="text-justify">
                You have received a confirmation email with the information about this order.
                You may want to contact your lawyer and inquire wheter s/he has
                all the information s/he need to deliver the service.
                Make sure to describe your situation clearly to allow the lawyer understand your legal
                pain in advance of your conversation with him/her. We highly recommend that you send
                your lawyer questions in advance of your conversation with him/her. Please note that some
                legal issues are more complex to assess than others; as a result, while in some cases an
                individual consultation might lead to solving your legal needs, complex cases will typically
                require more than a single consultation to be resolved. Either way, during the course of your
                consultation with your lawyer, we highly recommend you inquire about your legal options moving
                forward, as well as approximate budgets and timings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccess;

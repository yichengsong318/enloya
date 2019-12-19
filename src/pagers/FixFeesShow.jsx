import React from 'react';

import CustomNavbar from '../components/CustomNavbar';

function FixFeesShow() {

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mt-5 pt-5">
        <div className="row">
          <div className="col-sm-8 mx-auto">
            <div className="bg-white p-5 my-5">
              <h2 className="text-left common-title mb-4">Professional Legal Services</h2>
              <div className="row mb-4">
                <div className="col-sm-6">
                  <h4 className="text-16">Professional Legal services</h4>
                  <div className="price-fixed">$449.99</div>
                </div>
                <div className="col-sm-6">
                  <h4 className="text-16">Corporate Compliance</h4>
                  <div>Letter written</div>
                </div>
              </div>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus.
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus.
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus.
              </p>
              <div><span className="text-bold">Delivery Time:</span> 5 Days</div>
              <div className="row mt-5">
                <div className="col-sm-12">
                  <h4>FAQ</h4>
                  <p className="text-bold mt-3">Lorem ipsum dolor sit amet</p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus.
                  </p>
                  <p className="text-bold mt-3">Lorem ipsum dolor sit amet</p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus.
                  </p>
                  <p className="text-bold mt-3">Lorem ipsum dolor sit amet</p>
                  <p className="text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna,
                    sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-7 d-flex ml-auto mr-minus">
                  <a className="btn_get btn_hover" href="/">Send a message</a>
                  <a className="btn btn_get btn_get_two ml-2" href="/">Book a consultation</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FixFeesShow;

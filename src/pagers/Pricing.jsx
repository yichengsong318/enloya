import React from 'react';

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

function Pricing() {

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mt-5">
        <AlertArea/>
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <div className="bg-white p-5 my-5">
              <h1 className="text-center mb-4 font-3rem">Pricing</h1>
              <div className="mt-3 pricing-summary text-center mx-5 px-5">
                <p className="font-1-5rem px-15">In order to complete your transaction, we will transfer you over to Paypal's secure servers.</p>
              </div>
              <div className="row justify-content-md-center mt-5">
                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div class="card text-center card-shadow-custom">
                        <div class="card-header c-title">Free</div>
                        <div class="card-body">
                            <h1 class="card-title">$0<span className="font-12">/mo</span></h1>
                            <p class="card-text">1 user account</p>
                            <p class="card-text">5 services listening</p>
                            <a href="#" class="seo_btn seo_btn_one btn_hover wow fadeInUp">Sign up for free</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 mb-3">
                    <div class="card text-center card-shadow-custom">
                        <div class="card-header c-title">Pro</div>
                        <div class="card-body">
                            <h1 class="card-title">$49<span className="font-12">/mo</span></h1>
                            <p class="card-text">1 user account</p>
                            <p class="card-text">Unlimited services listening</p>
                            <a href="#" class="seo_btn seo_btn_one btn_hover wow fadeInUp btn-blue-sky">Get started</a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

export default Pricing;

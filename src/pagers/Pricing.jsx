import React, { useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';


const Pricing = ({ children, location: { pathname } }) => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mt-5">
        <AlertArea/>
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <div className="p-5 my-5 mobile-padding-x-0">
              <h1 className="text-center mb-4 font-3rem text-bold">Pricing</h1>
              <div className="mt-3 pricing-summary text-center mx-5 px-4 mobile-padding-x-0">
                <p className="font-1-6rem px-5 mobile-padding-x-0">Unlock new business opportunities with the power of digital trade</p>
                <p className="font-1-4rem px-5 mobile-padding-x-0">Start building your digital legal practice today</p>
              </div>
              <div className="row justify-content-md-center mt-5">
                <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
                    <div className="card text-center card-shadow-custom">
                        <div className="card-header c-title">Basic</div>
                        <div className="card-body pricing-card-body">
                            <h1 className="card-title">$49<span className="font-12">/mo</span></h1>
                            <p>Or $499 <span className="font-12">annually</span> </p>
                            <p className="card-text">1 user account</p>
                            <p className="card-text">5 service listings</p>
                            <a href="/" className="seo_btn seo_btn_one btn_hover bg-yellow mt-5">Sign up for free</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
                    <div className="card text-center card-shadow-custom">
                        <div className="card-header c-title">Pro</div>
                        <div className="card-body pricing-card-body">
                            <h1 className="card-title">$99<span className="font-12">/mo</span></h1>
                            <p>Or $999 <span className="font-12">annually</span> </p>
                            <p className="card-text">1 user account</p>
                            <p className="card-text">Unlimited service listings</p>
                            <a href="/" className="seo_btn seo_btn_one btn_hover bg-yellow btn-blue-sky mt-5">Get started</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
                    <div className="card text-center card-shadow-custom">
                        <div className="card-header c-title">Growth</div>
                        <div className="card-body pricing-card-body">
                            <h1 className="card-title">$199<span className="font-12">/mo</span></h1>
                            <p>Or $1999 <span className="font-12">annually</span> </p>
                            <p className="card-text">1 admin account"</p>
                            <p className="card-text">Unlimited service listings</p>
                            <p className="card-text">Invite up to 2 contributors</p>
                            <a href="/" className="seo_btn seo_btn_one btn_hover bg-yellow btn-blue-sky mt-1">Get started</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
                    <div className="card text-center card-shadow-custom">
                        <div className="card-header c-title">Enterprise</div>
                        <div className="card-body pricing-card-body pt-5">
                            <p className="card-text pt-4">Suited for law firms that want to digitize their entire legal practice. For a customized plan, please contact us at info@enloya.com.</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                  <p className="text-dark font-large"><b>Free during beta</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  )
};

export default Pricing;

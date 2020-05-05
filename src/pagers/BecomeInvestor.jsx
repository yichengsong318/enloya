import React, { useEffect } from 'react';

import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const BecomeInvestor = ({ children, location: { pathname } }) => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="bg-degraded py-5 mt_90 pt-5">
        <h1 className="text-center common-title text-white">Enloya would like to welcome investors</h1>
      </div>
      <div className="h-100 bg-white">
        <div className="row">
          <div className="col-sm-9 mx-auto">
            <div className="p-4 my-5">
              <h3 className="text-left common-title mb-3">Become an Enloya investor</h3>
              <p className="text-left">
                Enloya is currently seed funding and offers attractive investment scenarios to investors.
                We would be happy to provide you further information about our company at your request.
                Please contact us at <a class="enl-link" href="mailto:investors@enloya.com">investors@enloya.com</a>. Meanwhile, take a look at our company's
                <a className="text-primary" href="https://www.crunchbase.com/organization/enloya">Crunchbase</a>,
                <a className="text-primary" href="https://angel.co/company/enloya">Angelist</a>,
                <a className="text-primary" href="https://www.linkedin.com/company/enloyalaw">LinkedIn profiles</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

export default BecomeInvestor;

import React from 'react';

import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

function BecomeInvestor() {
  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="bg-degraded py-5 mt_100 pt-5">
        <h1 className="text-center common-title text-white">Enloya would like to welcome investors</h1>
      </div>
      <div className="h-100 container">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <div className="p-4 my-5">
              <h3 className="text-left common-title mb-3">Become an Enloya investor</h3>
              <p className="text-left">
                Enloya is currently seed funding and offers attractive investment scenarios to investors.
                We would be happy to provide you further information about our company at your request.
                Please contact us at <a class="enl-link" href="mailto:investors@enloya.com">investors@enloya.com</a>. Meanwhile, take a look at our company's Crunchbase,
                Angelist, LinkedIn profiles.
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

import React, { useEffect } from 'react';

import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const BecomeAmbassador = ({ children, location: { pathname } }) => {

    useEffect(() => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }, [pathname]);

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="bg-degraded py-5 mt_100 pt-5">
        <div className="h-100 container">
          <h3 className="text-center common-title text-white">
            Unlock business opportunities for lawyers and startups in your country
          </h3>
        </div>
      </div>
      <div className="h-100 container">
        <h3 className="text-left common-title my-5">Become an Enloya Ambassador</h3>
        <div className="row">
          <div className="col-sm-6">
            <div className="my-2">
              <p className="text-justify">
                At Enloya, our mission is to revolutionize the legal industry through the power of technology
                and globalization. We connect lawyers, startups, and legal technology developers worldwide,
                making it easier for lwayers to find new clients-especially from outside their own country or
                jurisdiction; for startups to access affordable legal services in just a few clicks; and for
                leagal technology developers to find new users. Enloya strives to supports productive activities,
                decent job creation, entrepreurship, creativity and innovation, and encourage the formalization and
                growth of small and medium-sized enterprises. We are seeking for motivated brand Ambassadors to join our team.
              </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="my-2">
              <p className="text-justify">
                As Enloya Ambassador, you will represent ENloya and spread the word about our exciting project in your country
                through social media, conferences, and by word of mouth. You will be Enloya's eyes in your country.
                Symergizing with other members in the team, you will bring perspective on domestic marketing needs and prospective solutions.
                The better you perfom, the more benefits you will receive.
              </p>
              <p className="text-justify">
                Ultimately, as Enloya Ambassador, you will be helping us in our mission to make legal services more accessible
                and affordable to millions of SMEs around the world. You will also contribute more quality work for the legal
                community in your country.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="my-5">
            <h4 className="text-left common-title mb-3">
              <a href="mailto:info@enloya.com" className="btn btn-yellow text-white btn-lg">Apply Now</a> to become an Enloya Ambassador and join us in our exciting journey. Go Enloya!
            </h4>
            <div className="text-justify mb-1">* Dependent upon and subject to meeting targets.</div>
            <div className="text-justify mb-1">** Subject to meeting our applicable conditions.</div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

export default BecomeAmbassador;

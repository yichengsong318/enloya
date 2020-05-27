import React, { useEffect } from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Teams from '../components/Team/Team';
import Footer from '../components/Footer/Footer';
// import Advisors from '../components/Team/Advisor';
// import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const Team = ({ children, location: { pathname } }) => {

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);

    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
            <Breadcrumb breadcrumbClass="custom-breadcrumb breadcrumb_area_three mt-5" imgName="Img-05.jpg" Ptitle="Our mission" Pdescription="To provide the best legal solution to fast growing companies!"/>
            <div className="container">
              <div className="who-we-are-container pb-3-1">
                <h3 className="pb-3">Who we are</h3>
                <p>
                <strong>Enloya</strong> is the most client-centric legal marketplace for startups. Our platform matches specific legal solutions to specific legal problems through
                the use of computer algorithms and carefully designed use-experience. In doing so, we have in mind what tipycal and atipycal startups struggle with, from opening a simple brick-and-mortar business to selling sophisticated goods and services accross borders.
                We make it easier for startups to accept affordable legal services in just a few clicks, and for lawyers to find new clients-especially from outside their own country
                or juridiction.
                </p>
                <p>
                <strong>Enloya</strong> builds upon goal 8:3 of the UN Sustainable Development Goals insofar as it strives to support productive activities, descent job creation, entrepreneurship, creativity and innovation, and encourage the formalization and growth of micro-, small- and medium-sizes enterprises.
                </p>
              </div>
            </div>
            <Teams/>
            <div className="container text-center py-5">
              Would you like to be part of our team? <a className="btn btn_get btn_get_two" href="/register">Join the team</a>
            </div>
            {/*<Advisors/>*/}
            <Footer FooterData={FooterData} kind="otherPage"/>
        </div>
    )
}
export default Team;

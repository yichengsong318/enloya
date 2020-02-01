import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Sservice from '../components/Service/Sservice/Sservice';
import AgencyAbout from '../components/About/AgencyAbout';
import Partner from '../components/Partner';
import ServiceData from '../components/Service/ServiceData';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
// import FooterTwo from '../components/Footer/FooterTwo';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="About Us" Pdescription=""/>
            <Sservice/>
            <AgencyAbout ServiceData={ServiceData}/>
            <Partner pClass="partner_logo_area_five bg_color"/>
            <Footer FooterData={FooterData} kind="otherPage"/>
        </div>
    )
}
export default About;

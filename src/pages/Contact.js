import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Contacts from '../components/Contacts';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const About = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png" Ptitle="Contact Us" Pdescription="Interested in being part of the #EnloyaRevolution? Want to know more about Enloya's big plans? Are you looking for legal solutions? Get in touch!"/>
            <Contacts/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default About;

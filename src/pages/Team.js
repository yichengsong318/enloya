import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Teams from '../components/Team/Team';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
const Team =()=>{
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area breadcrumb_area_three" imgName="Img-05.jpg" Ptitle="The Enloya dream team" Pdescription="Passionated people with different skills are building your great digital legal service!"/>
            <Teams/>
            <FooterTwo FooterData={FooterData}/>
        </div>
    )
}
export default Team;

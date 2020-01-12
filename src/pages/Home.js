import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import DesignBanner from '../components/Banner/DesignBanner';
import Service from '../components/Service/Service';
import InnoSuisse from '../components/InnoSuisse';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

export default function Home () {
  return (
    <div className="body_wrapper">
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" isHome/>
      <DesignBanner/>
      <Service/>
      <InnoSuisse />
        {/*<Subscribe FooterData={FooterData}/>*/}
      <Footer FooterData={FooterData}/>
    </div>
  )
}

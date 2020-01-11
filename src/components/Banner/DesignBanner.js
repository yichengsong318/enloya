import React from 'react';
import Reveal from 'react-reveal/Reveal/';
import { Link as ScrolLink } from 'react-scroll';

const DesignBanner = () => {
  return(
    <section className="seo_home_area">
      <div className="home_bubble">
        <div className="bubble b_one"></div>
        <div className="bubble b_two"></div>
        <div className="bubble b_three"></div>
        <div className="bubble b_four"></div>
        <div className="bubble b_five"></div>
        <div className="bubble b_six"></div>
        <div className="triangle b_seven" data-parallax='{"x": 20, "y": 150}'><img src={require('../../img/seo/triangle_one.png')} alt=""/></div>
        <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src={require('../../img/seo/triangle_two.png')} alt=""/></div>
        <div className="triangle b_nine"><img src={require('../../img/seo/triangle_three.png')} alt=""/></div>
      </div>
      <div className="banner_top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left seo_banner_content">
              <Reveal effect="fadeInUp" duration={500}><h2>Unlock the <span>digital lawyer</span> in you</h2></Reveal>
              <Reveal effect="fadeInUp" duration={1000}><p className="wow fadeInUp" data-wow-delay="0.5s">Start building your new, global client-base</p></Reveal>
              <Reveal effect="fadeInLeft" duration={1200}><a href="/register" className="seo_btn seo_btn_one btn_hover wow fadeInLeft">Get Started</a></Reveal>
              <ScrolLink title="Service" className="seo_btn seo_btn_two btn_hover wow fadeInRight" to="whatwedo" spy smooth duration={300} >Learn more</ScrolLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default DesignBanner;

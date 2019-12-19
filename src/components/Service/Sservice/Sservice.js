import React, {Component} from 'react';
import Stserviceitems from './StserviceItem';
import Reveal from 'react-reveal/Reveal';
class Sservice extends Component{
    render(){
        return(
            <section className="agency_service_area bg_color">
                <div className="container">
                    <h2 className="f_size_30 f_600 t_color3 l_height40 text-center mb_90 wow fadeInUp" data-wow-delay="0.2s">Find lawyers and legal services<br/> wherever you are.</h2>
                    <div className="row mb_30">
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1100}><Stserviceitems iShap="icon_shape1.png"  Sicon="ti-panel" text="Our mission" description="At Enloya, our mission is to revolutionize the legal industry by leveraging the power of technology and globalization." btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1400}><Stserviceitems iShap="icon_shape2.png"  Sicon="ti-layout-grid2" text="Your benefits" description="We make it easier for startups to access affordable legal services in just a few clicks, and for lawyers to find new clients—especially from outside their own country or jurisdiction." btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        <Reveal effect="fadeInUp" duration={1700}><Stserviceitems iShap="icon_shape3.png"  Sicon="ti-gallery" text="Our goal" description="Enloya strives to support decent job creation, entrepreneurship, digital disruption, creativity and innovation, as well as to propel growing businesses around the world to sell their goods and services internationally." btn="Read More" bicon="arrow_right"/></Reveal>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Sservice;

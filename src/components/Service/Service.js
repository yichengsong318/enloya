import React from 'react';
import { Element } from 'react-scroll';
import SeoTitle from '../Title/SeoTitle';
import Fade from 'react-reveal/Fade';
import ServiceData from '../../components/Service/ServiceData';
import HRService from '../../components/Service/HRService';

const Service = () => {
    return(
        <React.Fragment>
            <Element className="seo_service_area sec_pad" name="whatwedo">
                <div className="container">
                    <SeoTitle Title='We connect lawyers and entrepreneurs' TitleP='We provide quick and easy access to quality lawyers fostering maximum pricing transparency in the marketplace, making the process of buying legal services fast, agile and affordable.'/>
                    <div className="row seo_service_info">
                        <Fade bottom duration={500}>
                            <div className="col-lg-6 col-md-12">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/speed.svg')} alt="" style={{width: '4rem'}}/>
                                    <span className="span-for-lawyer ml-4">For lawyers</span>
                                    <a href=".#">
                                        <h4>Skyrocket your legal business</h4>
                                    </a>
                                    <ul>
                                      <li>Reach new entrepreneur clients worldwide</li>
                                      <li>Find remote legal jobs in your area of expertise</li>
                                      <li>Manage your legal business digitally</li>
                                    </ul>
                                    <a href="/signup-lawyer" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Apply now</a>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom duration={700} >
                            <div className="col-lg-6 col-md-12">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/court.svg')} alt="" style={{width: '4rem'}}/>
                                    <a href=".#">
                                        <h4>Hire a lawyer for a tailored solution</h4>
                                    </a>
                                    <ul>
                                      <li>Find, compare, and access legal solutions in just a few clicks</li>
                                      <li>Reduce your legal risks at a fraction of the cost</li>
                                      <li>Maximum price transparency (surprises no more!)</li>
                                    </ul>
                                    <a href="/signup-client" className="seo_btn seo_btn_one btn_hover wow fadeInUp">Learn more</a>
                                </div>
                            </div>
                        </Fade>
                        {/*<Fade bottom duration={1000}>
                            <div className="col-lg-4 col-md-6">
                                <div className="seo_service_item">
                                    <img src={require('../../img/seo/icon5.png')} alt=""/>
                                    <a href=".#">
                                        <h4>Email Marketing</h4>
                                    </a>
                                    <p>Twit cras excuse my French matie boy grub it's all gone to pot off his nut butty horse play blow off pardon you hanky panky.!</p>
                                    <a href=".#"><i className="arrow_right"></i></a>
                                </div>
                            </div>
                        </Fade>
                        <div className="col-lg-12 text-center mt_40">
                            <a href=".#" className="seo_btn seo_btn_one btn_hover">All Features</a>
                        </div>*/}
                    </div>
                </div>
            </Element>
            <Element className="seo_features_one sec_pad" name="howitworks">
                <div className="container">
                    <div className="row ">
                      <div className="col-sm-12 text-center">
                        <h2 className="fadeInUp how-it-works">How it works</h2>
                      </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-lg-6 mt-5 pt-5">
                            <div className="seo_features_img">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2>Lawyers and law firms</h2>
                                    <p>Take your legal practice to new levels. Find new clients, increase sales and team up with colleagues around the globe. Whether you work independently or at a law firm.</p>
                                    <div className="media seo_features_item pr-0">
                                        <div className="icon"><img src={require('../../img/seo/signup.svg')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Sign up</h3>
                                            <ul>
                                              <li>Create your profile</li>
                                              <li>Get verified (it's quick and easy)</li>
                                              <li>Generous trial period for beta-testers</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item pr-0">
                                        <div className="icon two"><img src={require('../../img/seo/get-paid.svg')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Get hired</h3>
                                            <ul>
                                              <li>Find new entrepreneur clients from around the globe</li>
                                              <li>Land rewarding projects</li>
                                              <li>Manage your entire legal business through the platform</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item pr-0">
                                        <div className="icon two"><img src={require('../../img/seo/hired.svg')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Get paid</h3>
                                            <ul>
                                              <li>Cause you deserve it</li>
                                              <li>No transaction fee taken (yup - none, nada, zero, zilch)</li>
                                              <li>Grow your business</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </Element>
            <section className="seo_features_one sec_pad" name="howbusinessworks">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="seo_features_img seo_features_img_two">
                                <div className="round_circle"></div>
                                <div className="round_circle two"></div>
                                <img src={require('../../img/seo/features_img_two.png')} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center">
                            <Fade bottom cascade>
                                <div className="seo_features_content">
                                    <h2 className="wow fadeInUp">Businesses</h2>
                                    <div className="media seo_features_item pr-0">
                                        <div className="icon"><img src={require('../../img/seo/search.svg')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Search</h3>
                                            <ul>
                                              <li>Search for lawyers and legal solutions</li>
                                              <li>Or post your project and have lawyers bid on them</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item pr-0">
                                        <div className="icon"><img src={require('../../img/seo/hired.svg')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Hire</h3>
                                            <ul>
                                              <li>Purchase tailored legal solutions</li>
                                              <li>Transparent, fixed-fee pricing</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="media seo_features_item pr-0">
                                        <div className="icon"><img src={require('../../img/seo/job-done.svg')} alt=""/></div>
                                        <div className="media-body">
                                            <h3>Get the job done</h3>
                                            <ul>
                                              <li>Legal pains, gone!</li>
                                              <li>Rate your lawyer once a job is completed</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <HRService ServiceData={ServiceData}/>
        </React.Fragment>
    )
}

export default Service;

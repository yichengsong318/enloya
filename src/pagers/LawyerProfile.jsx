import React, {Component} from 'react';
import { connect } from "react-redux";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Switch, Route, NavLink, Redirect, withRouter, Link } from "react-router-dom";
import { PopupWidget } from 'react-calendly';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import pic from '../assets/fff.png';

import facebookIcon from '../assets/facebook_enloya.svg';
import twitterIcon from '../assets/twitter_enloya.svg';
import youtubeIcon from '../assets/youtube_enloya.svg';
import linkedinIcon from '../assets/linkedin_enloya.svg';
import websiteIcon from '../assets/website_enloya.svg';

import countries from '../constants/countries';

import FixedServices from './lawyer-profile/FixedServices';
import FeeArrangements from './lawyer-profile/FeeArrangements';
import About from './lawyer-profile/About';

import { faGraduationCap, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { readData, loadMe } from "../redux/actions";
import { get } from "../helpers/RemoteApi";

export class LawyerProfile extends Component {

  constructor(props) {
    super(props);

    const id = props.match.params.lawyerId;
    const publicLink = props.match.params.publicLink;

    console.log(id, publicLink);

    this.state = {
      lawyerId: id || (props.userInfo && props.userInfo.id),
      lawyerPublicLink: publicLink || (props.userInfo && props.userInfo.publicLink) || '',
      userInfo: {},
      copied: false,
      titleCLasses: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.lawyerId  || (this.props.userInfo && this.props.userInfo.id);
    const publicLink = this.props.match.params.publicLink;

    console.log(this.state.lawyerId, this.state.lawyerPublicLink)
    if (id) {
      get('lawyers/' + this.state.lawyerId, {}).then(res => {
        this.loadRessources(res.data);
      })
    } else if (publicLink) {
      get('lawyers/by-public-link', {publicLink: this.state.lawyerPublicLink}).then(res => {
        console.log(res.data.id)
        this.setState({lawyerId: res.data.id})
        this.loadRessources(res.data);
      })
    }
  }

  loadRessources = (data) => {
    const currentlawyer = data;
    const titleSize = currentlawyer.title || '';
    const classes = titleSize.length >= 45 && 'text-elipsis-vertical';
    this.setState({userInfo: currentlawyer, titleCLasses: classes});
    this.readPr('proexperiences', 'proexperiences');
    this.readPr('licences', 'licences');
    this.readPr('memberships', 'memberships');
    this.readPr('publications', 'publications');
    this.readPr('academic-degrees', 'academicDegrees');
    this.readPr('specializations', 'specializations');
  }

  getMin = (arr, attrib) => {
    return (arr.length && arr.reduce(function(prev, curr){
        return prev[attrib] < curr[attrib] ? prev : curr;
    })) || null;
  };

  getMax = (arr, attrib) => {
    return (arr.length && arr.reduce(function(prev, curr){
        return prev[attrib] > curr[attrib] ? prev : curr;
    })) || null;
  };

  readPr = (endpoint, prop, hideNotif) => {
    this.props.readData(endpoint, {lawyer: this.state.lawyerId}, () => {
      this.setState({[prop]: this.props[prop]});
    });
  };

  getCountry = (code) => {
    const country = countries.find(c => c.value === code);
    return country ? country.label : "";
  }

  handleCopyUrl = () => {
      this.setState({ copied: true });
      setTimeout(() => {
        this.setState({ copied: false });
      }, 5000);
  }

  render () {
    let { path, url } = this.props.match;
    const { proexperiences, licences, academicDegrees, memberships, publications } = this.props;
    const { userInfo } = this.state;

    const socialLinks = userInfo.socialLinks || {};

    const specializations = userInfo.specializations || [];

    const currentPosition = proexperiences && proexperiences.find(pe => pe.id === userInfo.currentPosition);
    const currentPositionLabel = currentPosition ? currentPosition.title + ' at ' + currentPosition.where : null;

    const formatedLicences = licences &&licences.map(l => l.country);
    const uniqueLicencedIn = formatedLicences&&formatedLicences.filter((v, i, a) => a.indexOf(v) === i)

    const licencedYear = licences && this.getMin(licences, 'since');

    const lastMajor = academicDegrees && this.getMax(academicDegrees, 'year');

    const userLocation = userInfo.city + ', ' + this.getCountry(userInfo.country);

    const availableLink = this.state.lawyerPublicLink ? this.state.lawyerPublicLink : this.state.lawyerId;

    const shareLink = `${window.origin}/l/${availableLink}`; //Lawyer public profile link


    // this need to be replaced dynamically after the Backend fielled in his
    // Celendly URL for the lawyer from his account settings
    const appointmentUrl = "https://calendly.com/azizmashkour";

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"
          isProfile q="team_url"/>
        <div className="bg-white mt_75 pt-2">
          <div className="pb-4 mx-5">
            <div className="row mx-0 align-items-center pt-3">
              <div className="col-sm-12 px-0 lawyer-card-large">
                <div className="row">
                  <div className="col-md-2 col-sm-12 ml-auto mr-4">
                    <img src={userInfo.profilePic || pic} className="w-100c img-pic-user-large mr-4 border-radius-8" alt="user_pic" />
                  </div>
                  <div className="col-md-9 com-sm-12">
                      <div className="row">
                        { this.state.copied ? (<span className="copied-success">Lowyer profile URL Copied!</span>) : ''}
                        <div className="col-md-8 col-lg-8 col-sm-12">
                            <h2 className={`${this.state.titleCLasses} font-weight-bold text-left`}>
                              {userInfo.title}
                              {/* <img src={special} alt="en_pic" className="img-fluid special-profil ml-3"/> */}
                            </h2>
                        </div>
                        <div className="col-md-4 col-lg-4 col-sm-12 text-right">
                        <CopyToClipboard
                            text={shareLink}
                            onCopy={this.handleCopyUrl}
                        >
                          <img src={require("../img/share.png")} alt="share" className="h-20 cursor-pointer"/>
                        </CopyToClipboard>
                        </div>
                      </div>
                    <div className="lawyer-name-profile">{userInfo.firstname} {userInfo.lastname}</div>
                    <div className="font-weight-bold">{currentPositionLabel}</div>
                    {/*<div className="mt-1">
                      {userInfo.shortDescription}
                    </div>*/}
                    <div className="col-md-12 p-0 col-sm-12">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary-o mr-2" />
                      <span>{lastMajor && (lastMajor.degree + ', ' + lastMajor.year + ' at ' + lastMajor.university)}</span>
                    </div>
                    <div className="row align-items-center">
                      {/* <div className="col-sm-4 mb-2">
                        <div className="d-flex align-items-center">
                          <Ratings rate={4} total={5} />
                          <span className="ml-2 mt-1">4.0 (11,345 ratings)</span>
                        </div>
                      </div> */}
                      <div className="col-sm-4 mt-2 line-height-1-1">Licensed in: {this.getCountry(uniqueLicencedIn && uniqueLicencedIn[0])}</div>
                      <div className="col-sm-4 mt-2 line-height-1-1">Licensed since: {licencedYear && licencedYear.since}</div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 mb-2 col-sm-12">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-o mr-2" />
                        <span>{userLocation}</span>
                        <div className="d-flex">
                          {socialLinks.linkedin && <div className="social-icon">
                            <a href={socialLinks.linkedin}><img className="img-fluid" src={linkedinIcon} alt="linkedin"/></a>
                          </div>}
                          {socialLinks.twitter && <div className="social-icon">
                            <a href={socialLinks.twitter}><img className="img-fluid" src={twitterIcon} alt="twitter"/></a>
                          </div>}
                          {socialLinks.facebook && <div className="social-icon">
                            <a href={socialLinks.facebook}><img className="img-fluid" src={facebookIcon} alt="facebook"/></a>
                          </div>}
                          {socialLinks.youtube && <div className="social-icon">
                            <a href={socialLinks.youtube}><img className="img-fluid" src={youtubeIcon} alt="youtube"/></a>
                          </div>}
                          {socialLinks.website && <div className="social-icon">
                            <a href={socialLinks.website}><img className="img-fluid" src={websiteIcon} alt="website"/></a>
                          </div>}
                        </div>
                      </div>
                      <div className="col-md-8 mt-2 col-sm-12 line-height-1-6">
                        <span className="font-weight-bold mr-2">Area(s) of expertise</span>
                        <span>{specializations.slice(0, 5).map(s => s.label).join(', ')}</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col-sm-12 px-0">
              <div className="mt-3 mt-5-mobile relative-position">
                <NavLink activeClassName="selected" className="toplink mobile-toplink" to={`${url}/fixed-services`}>Fixed Price Services</NavLink>
                <NavLink activeClassName="selected" className="toplink mobile-toplink" to={`${url}/fees`}>Fees</NavLink>
                <NavLink activeClassName="selected" className="toplink mobile-toplink" to={`${url}/about`}>About me</NavLink>
                {/*<NavLink activeClassName="selected" className="toplink mobile-toplink" to={`${url}/fee-arrangements`}>Fee Arrangements</NavLink>*/}
                <Link to={'/conversations'} className="btn btn-yellow message-me-now">Message me now</Link>
              </div>
              <div className="bg-white mt-2 p-3 border-radius-8">
                <Switch>
                  <Redirect exact from={path} to={`${path}/fixed-services`}/>
                  <Route path={`${path}/fixed-services`}>
                    <FixedServices kind="lawyer_profile" publicLink={this.state.publicLink}
                      lawyerId={this.state.lawyerId} showCreate={false} />
                  </Route>
                  <Route path={`${path}/about`}>
                    <About userInfo={userInfo}
                      proexperiences={proexperiences}
                      academicDegrees={academicDegrees}
                      memberships={memberships}
                      publications={publications}
                      />
                  </Route>
                  <Route path={`${path}/fees`}>
                    <FeeArrangements userInfo={userInfo} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <PopupWidget
          color="#5288C7"
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
          text="Book appointment"
          textColor="#ffffff"
          url={appointmentUrl}
        />
        <Footer FooterData={FooterData} kind="otherPage"/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const {
    proexperiences,
    licences,
    academicDegrees,
    specializations,
    memberships,
    publications, } = data;

  return {
    userType,
    userInfo,
    user,
    proexperiences,
    licences,
    memberships,
    publications,
    academicDegrees,
    specializations
  };
};

const mapActionToProps = {
  readData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(LawyerProfile));

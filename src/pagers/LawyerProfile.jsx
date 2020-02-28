import React, {Component} from 'react';
import { connect } from "react-redux";

import { Switch, Route, NavLink, Redirect, withRouter } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import pic from '../assets/fff.png';

import facebookIcon from '../assets/facebook_enloya.svg';
import twitterIcon from '../assets/twitter_enloya.svg';
import youtubeIcon from '../assets/youtube_enloya.svg';
import linkedinIcon from '../assets/linkedin_enloya.svg';

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

    this.state = {
      lawyerId: id || props.userInfo.id,
      userInfo: {}
    };
  }

  componentDidMount() {

    get('lawyers/' + this.state.lawyerId, {}).then(res => {
      this.setState({userInfo: res.data});
    })

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

  render () {
    let { path, url } = this.props.match;
    const { proexperiences, licences, academicDegrees, memberships, publications } = this.props;
    const { userInfo } = this.state;

    const socialLinks = userInfo.socialLinks || {};

    const specializations = userInfo.specializations || [];

    const currentPosition = proexperiences && proexperiences.find(pe => pe.id === userInfo.currentPosition);
    const currentPositionLabel = currentPosition ? currentPosition.title + ' at ' + currentPosition.where : null;

    const licencedCities = licences && licences.map(l => l.where).join(', ');
    const licencedYear = licences && this.getMin(licences, 'since');

    const lastMajor = academicDegrees && this.getMax(academicDegrees, 'year');

    const userLocation = userInfo.city + ', ' + this.getCountry(userInfo.country);

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"
          isProfile q="team_url"/>
        <div className="bg-white mt_75 pt-2">
          <div className="container pb-4">
            {/* <AlertArea/> */}
            {/* <div className="text-left py-4">
              <Link className="text-dark" to="/search">
                <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
                <span>Back to search results</span>
              </Link>
            </div> */}
            <div className="row mx-0 align-items-center">
              <div className="col-sm-12 px-0 d-flex lawyer-card-large align-items-top">
                <div>
                  <img src={userInfo.profilePic || pic} className="img-pic-user-large mr-4" alt="user_pic" />
                </div>
                <div className="w-100">
                  <h2 className="font-weight-bold">
                    {userInfo.title}
                    {/* <img src={special} alt="en_pic" className="img-fluid special-profil ml-3"/> */}
                  </h2>
                  <div className="lawyer-name-profile">{userInfo.firstname} {userInfo.lastname}</div>
                  <div className="font-weight-bold">{currentPositionLabel}</div>
                  <div className="mt-1">
                    {userInfo.shortDescription}
                  </div>
                  <div className="row align-items-center">
                    {/* <div className="col-sm-4 mb-2">
                      <div className="d-flex align-items-center">
                        <Ratings rate={4} total={5} />
                        <span className="ml-2 mt-1">4.0 (11,345 ratings)</span>
                      </div>
                    </div> */}
                    <div className="col-sm-4 mt-2 line-height-1-1">Licensed in: {licencedCities}</div>
                    <div className="col-sm-4 mt-2 line-height-1-1">Licensed since: {licencedYear && licencedYear.since}</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 mb-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary-o mr-2" />
                      <span>{userLocation}</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary-o mr-2" />
                      <span>{lastMajor && (lastMajor.degree + ', ' + lastMajor.year + ' at ' + lastMajor.university)}</span>
                    </div>
                    <div className="col-sm-12 mb-2">
                      <span className="font-weight-bold mr-3">Area(s) of expertise</span>
                      <span>{specializations.map(s => s.label).join(', ')}</span>
                    </div>
                  </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="container floating-box-wrapper py-4">
          <div className="floating-box py-3 px-4">
            <h4 className="text-center mb-3">Contact me</h4>
            <button type="button" className="btn btn-outline-primary btn-block">Send a message</button>
          </div>
        </div>*/}
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-sm-12 px-0">
              <div className="mt-5">
                <NavLink activeClassName="selected" className="toplink" to={`${url}/fixed-services`}>Fixed Price Services</NavLink>
                <NavLink activeClassName="selected" className="toplink" to={`${url}/about`}>About</NavLink>
                <NavLink activeClassName="selected" className="toplink" to={`${url}/fee-arrangements`}>Fee Arrangements</NavLink>
              </div>
              <div className="bg-white mt-2 p-3">
                <Switch>
                  <Redirect exact from={path} to={`${path}/fixed-services`}/>
                  <Route path={`${path}/fixed-services`}>
                    <FixedServices kind="lawyer_profile" lawyerId={this.state.lawyerId} showCreate={false} />
                  </Route>
                  <Route path={`${path}/about`}>
                    <About userInfo={userInfo}
                      proexperiences={proexperiences}
                      academicDegrees={academicDegrees}
                      memberships={memberships}
                      publications={publications}
                      />
                  </Route>

                  <Route path={`${path}/fee-arrangements`}>
                    <FeeArrangements userInfo={userInfo} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
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

import React, {Component} from 'react';
import { connect } from "react-redux";

import { Switch, Route, NavLink, Redirect, withRouter } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import pic from '../assets/pic-large.jpg';

import FixedServices from './lawyer-profile/FixedServices';
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

  render () {
    let { path, url } = this.props.match;
    const { proexperiences, licences, academicDegrees, specializations } = this.props;
    const { userInfo } = this.state;
    const currentPosition = proexperiences && proexperiences.find(pe => pe.id === userInfo.currentPosition);
    const currentPositionLabel = currentPosition ? currentPosition.title + ' at ' + currentPosition.where : null;

    const licencedCities = licences && licences.map(l => l.where).join(', '); 
    const licencedYear = licences && this.getMin(licences, 'since');

    const lastMajor = academicDegrees && this.getMax(academicDegrees, 'year');

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" 
          isProfile q="team_url"/>
        <div className="bg-white mt_100 pt-5">
          <div className="container pb-4">
            <AlertArea/>
            {/* <div className="text-left py-4">
              <Link className="text-dark" to="/jobs">
                <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
                <span>Back to search results</span>
              </Link>
            </div> */}
            <div className="row mx-0 align-items-center">
              <div className="col-sm-12 px-0 d-flex lawyer-card-large">
                <div>
                  <img src={userInfo.profilePic || pic} className="img-pic-user-large mr-4" alt="user_pic" />
                </div>
                <div className="w-100">
                  <h2 className="font-weight-bold">
                    {userInfo.title}
                    {/* <img src={special} alt="en_pic" className="img-fluid special-profil ml-3"/> */}
                  </h2>
                  <div>{userInfo.firstname} {userInfo.lastname}</div>
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
                    <div className="col-sm-4 mb-2 pt-1">Licensed in: {licencedCities}</div>
                    <div className="col-sm-4 mb-2 pt-1">Licensed since: {licencedYear && licencedYear.since}</div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4 mb-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary mr-2" />
                      <span>{userInfo.location}</span>
                    </div>
                    <div className="col-sm-4 mb-2">
                      <FontAwesomeIcon icon={faGraduationCap} className="text-primary mr-2" />
                      <span>{lastMajor && (lastMajor.degree + ', ' + lastMajor.year + ' at ' + lastMajor.university)}</span>
                    </div>
                    <div className="col-sm-12 mb-2">
                      <span className="font-weight-bold mr-3">Area(s) of expertise</span>
                      <span>{specializations.map(s => s.label).join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container floating-box-wrapper py-4">
          <div className="floating-box py-3 px-4">
            <h4 className="text-center mb-3">Contact me</h4>
            <button type="button" className="btn btn-outline-primary btn-block">Send a message</button>
          </div>
        </div>
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-sm-12 px-0">
              <div className="mt-5">
                <NavLink activeClassName="selected" className="toplink" to={`${url}/fixed-services`}>Fixed Price Services</NavLink>
                <NavLink activeClassName="selected" className="toplink" to={`${url}/about`}>About</NavLink>
              </div>
              <div className="bg-white mt-2 p-3">
                <Switch>
                  <Redirect exact from={path} to={`${path}/fixed-services`}/>
                  <Route path={`${path}/fixed-services`}>
                    <FixedServices kind="lawyer_profile" lawyerId={this.state.lawyerId} showCreate={false} />
                  </Route>
                  <Route path={`${path}/about`}>
                    <About userInfo={userInfo} proexperiences={proexperiences} academicDegrees={academicDegrees}/>
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
        <FooterTwo FooterData={FooterData}/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { proexperiences, licences, academicDegrees, specializations } = data;

  return { userType, userInfo, user, proexperiences, licences, academicDegrees, specializations };
};

const mapActionToProps = {
  readData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(LawyerProfile));

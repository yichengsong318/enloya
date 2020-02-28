import React from 'react';
import { connect } from "react-redux";

import General from './account-settings/General';
import GeneralBasic from './account-settings/GeneralBasic';
import Professional from './account-settings/Professional';
import Billing from './account-settings/Billing';
import Team from './account-settings/Team';
import Notifications from './account-settings/Notifications';
import SocialLinks from './account-settings/SocialLinks';
import FixFees from './account-settings/FixFees';
import FixFeesCreate from './account-settings/FixFeesCreate';
import FixFeesEdit from './account-settings/FixFeesEdit';
import FixFeesDetail from './account-settings/FixFeesDetail';
import Booking from './account-settings/Booking';
import BookingCreate from './account-settings/BookingCreate';
import BookingCreateTwo from './account-settings/BookingCreateTwo';
import CustomNavbar from '../components/CustomNavbar';
import FeeArrangements from './account-settings/FeeArrangements';

import AlertArea from '../components/AlertArea';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import ScrollToTopRoute from '../ScrollToTopRoute';

import {
  Switch,
  NavLink,
  useRouteMatch,
  withRouter,
  Redirect
} from "react-router-dom";

function AccountSettings(props) {

  let { path, url } = useRouteMatch();

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
      <div className="h-100 container mb-5 mt_75">
        <AlertArea/>
        <h1 className="h3 my-5 text-bold">Account Settings</h1>
        <div className="row px-3">
          <div className="col-sm-3 sidemenu">
            <div className="">
              {
                props.userType === 'client' ?
                <NavLink activeClassName="selected" className="sidelink" to={`${url}/general-client`}>General Information</NavLink>
              :
                <>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/general-lawyer`}>General Information</NavLink>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/professional-bg`}>Professional background</NavLink>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/fix-fee-services`}>Fix-fee Services</NavLink>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/social-links`}>Social Links</NavLink>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/fee-arrangements`}>Fee Arrangements</NavLink>
                </>
              }
              {/* <NavLink activeClassName="selected" className="sidelink" to={`${url}/billing`}>Billing methods</NavLink> */}
              {/*<NavLink activeClassName="selected" className="sidelink" to={`${url}/teams`}>Teams</NavLink>*/}
              <NavLink activeClassName="selected" className="sidelink" to={`${url}/notifications`}>Notification settings</NavLink>
              {/*<NavLink activeClassName="selected" className="sidelink" to={`${url}/booking`}>Booking Settings</NavLink>*/}
              {/* <NavLink activeClassName="selected" className="sidelink" to={`${url}/booking-create`}>Booking Settings Create</NavLink> */}
            </div>
          </div>
          <div className="col-sm-9 bg-white">
            <div className="h-100">
              <Switch>
                <Redirect exact from={path} to={`${path}/general-${props.userType}`}/>
                <ScrollToTopRoute path={`${path}/general-lawyer`} component={General}/>
                <ScrollToTopRoute path={`${path}/general-client`} component={GeneralBasic}/>
                <ScrollToTopRoute path={`${path}/professional-bg`} component={Professional}/>
                <ScrollToTopRoute path={`${path}/billing`} component={Billing}/>
                <ScrollToTopRoute path={`${path}/teams`} component={Team}/>
                <ScrollToTopRoute path={`${path}/notifications`} component={Notifications}/>
                <ScrollToTopRoute path={`${path}/fix-fee-services`} component={FixFees}/>
                <ScrollToTopRoute path={`${path}/fix-fee-services-create`} component={FixFeesCreate}/>
                <ScrollToTopRoute path={`${path}/fix-fee-services-edit`} component={FixFeesEdit}/>
                <ScrollToTopRoute path={`${path}/fix-fee-services-detail`} component={FixFeesDetail}/>
                <ScrollToTopRoute path={`${path}/social-links`} component={SocialLinks}/>
                <ScrollToTopRoute path={`${path}/fee-arrangements`} component={FeeArrangements}/>
                <ScrollToTopRoute path={`${path}/booking`} component={Booking}/>
                <ScrollToTopRoute path={`${path}/booking-create`} component={BookingCreate}/>
                <ScrollToTopRoute path={`${path}/booking-create-two`} component={BookingCreateTwo}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

const mapStateToProps = ({ authUser }) => {
  const { userType } = authUser;

  return { userType };
};

const mapActionToProps={}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(AccountSettings));

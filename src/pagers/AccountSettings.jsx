import React from 'react';
import { connect } from "react-redux";

import General from './account-settings/General';
import GeneralBasic from './account-settings/GeneralBasic';
import Professional from './account-settings/Professional';
import Billing from './account-settings/Billing';
import Team from './account-settings/Team';
import Notifications from './account-settings/Notifications';
import FixFees from './account-settings/FixFees';
import FixFeesCreate from './account-settings/FixFeesCreate';
import FixFeesEdit from './account-settings/FixFeesEdit';
import FixFeesDetail from './account-settings/FixFeesDetail';
import Booking from './account-settings/Booking';
import BookingCreate from './account-settings/BookingCreate';
import BookingCreateTwo from './account-settings/BookingCreateTwo';
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

import {
  Switch,
  Route,
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
      <div className="h-100 container my-5 mt_100 pt-5">
        <h1 className="h3 my-5">Account Settings</h1>
        <div className="row">
          <div className="col-sm-3 sidemenu">
            <div className="">
              {
                props.userType === 'client' ? 
                <NavLink activeClassName="selected" className="sidelink" to={`${url}/general-client`}>General Information</NavLink>
              :
                <>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/general-lawyer`}>General Information</NavLink>
                  <NavLink activeClassName="selected" className="sidelink" to={`${url}/professional-bg`}>Professional background</NavLink>
                </>
              }
              <NavLink activeClassName="selected" className="sidelink" to={`${url}/billing`}>Billing methods</NavLink>
              {/*<NavLink activeClassName="selected" className="sidelink" to={`${url}/teams`}>Teams</NavLink>*/}
              <NavLink activeClassName="selected" className="sidelink" to={`${url}/notifications`}>Notification settings</NavLink>
              <NavLink activeClassName="selected" className="sidelink" to={`${url}/fix-fee-services`}>Fix-fee Services</NavLink>
              {/*<NavLink activeClassName="selected" className="sidelink" to={`${url}/booking`}>Booking Settings</NavLink>*/}
              <NavLink activeClassName="selected" className="sidelink" to={`${url}/booking-create`}>Booking Settings Create</NavLink>
            </div>
          </div>
          <div className="col-sm-9 bg-white">
            <div className="h-100">
              <Switch>
                <Redirect exact from={path} to={`${path}/general-${props.userType}`}/>
                <Route path={`${path}/general-lawyer`}>
                  <General />
                </Route>
                <Route path={`${path}/general-client`}>
                  <GeneralBasic />
                </Route>
                <Route path={`${path}/professional-bg`}>
                  <Professional />
                </Route>
                <Route path={`${path}/billing`}>
                  <Billing />
                </Route>
                <Route path={`${path}/teams`}>
                  <Team />
                </Route>
                <Route path={`${path}/notifications`}>
                  <Notifications />
                </Route>
                <Route path={`${path}/fix-fee-services`}>
                  <FixFees />
                </Route>
                <Route path={`${path}/fix-fee-services-create`}>
                  <FixFeesCreate />
                </Route>
                <Route path={`${path}/fix-fee-services-edit`}>
                  <FixFeesEdit />
                </Route>
                <Route path={`${path}/fix-fee-services-detail`}>
                  <FixFeesDetail />
                </Route>
                <Route path={`${path}/booking`}>
                  <Booking />
                </Route>
                <Route path={`${path}/booking-create`}>
                  <BookingCreate />
                </Route>
                <Route path={`${path}/booking-create-two`}>
                  <BookingCreateTwo />
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

const mapStateToProps = ({ authUser }) => {
  const { userType } = authUser;

  return { userType };
};

const mapActionToProps={}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(AccountSettings));

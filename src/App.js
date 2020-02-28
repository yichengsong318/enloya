import React, {Component} from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import { connect } from "react-redux";

/*------ Pages-----*/
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Process from './pages/Process';
import Team from './pages/Team';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import SignUpLawyer from './pages/SignUpLawyer';
import SignUpClient from './pages/SignUpClient';
import Portfolio2col from './pages/Portfolio-2col';
import Portfolio3col from './pages/Portfolio-3col';
import Portfoliofull4col from './pages/Portfolio-fullwidth-4col';
import PortfolioSingle from './pages/PortfolioSingle';
import Bloglist from './pages/Bloglist';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';
import ScrollToTopRoute from './ScrollToTopRoute';
import Landing from './pages/Landing';

import CheckoutSuccess from './pagers/CheckoutSuccess';
import TermsOfUse from './pagers/TermsOfUse';
import FixFeesShow from './pagers/FixFeesShow';
import PrivacyPolicy from './pagers/PrivacyPolicy';
import CookiesPreferences from './pagers/CookiesPreferences';
import BecomeInvestor from './pagers/BecomeInvestor';
import BecomeAmbassador from './pagers/BecomeAmbassador';
import Checkout from './pagers/Checkout';
import Pricing from './pagers/Pricing';

import Jobs from './pagers/Jobs';
import JobDetail from './pagers/JobDetail';
import Contracts from './pagers/Contracts';
import SearchResults from './pagers/SearchResults';
import ServiceSearchResults from './pagers/ServiceSearchResults';
import LawyerProfile from './pagers/LawyerProfile';
import AccountSettings from './pagers/AccountSettings';
import ValidateAccount from './pagers/ValidateAccount';

import { loadMe } from "./redux/actions";

class App extends Component{
  componentDidMount() {
    this.props.hideLoader();
    if (this.props.user) {
      this.props.loadMe();
    }
  }

  render() {
    return(
      <div>
        <NotificationContainer />
        <Router>
          <Switch>
            <ScrollToTopRoute exact={true} path={'/'} component={Home} />
            <ScrollToTopRoute path="/about" component={About} />
            <ScrollToTopRoute path="/service" component={Service} />
            <ScrollToTopRoute path="/process" component={Process} />
            <ScrollToTopRoute path="/team" component={Team} />
            <ScrollToTopRoute path="/portfolio-2col" component={Portfolio2col} />
            <ScrollToTopRoute path="/portfolio-3col" component={Portfolio3col} />
            <ScrollToTopRoute path="/portfolio-fullwidth-4col" component={Portfoliofull4col} />
            <ScrollToTopRoute path="/portfolioSingle" component={PortfolioSingle} />
            <ScrollToTopRoute path="/bloglist" component={Bloglist} />
            <ScrollToTopRoute path="/blogSingle" component={BlogSingle} />
            <ScrollToTopRoute path="/contact" component={Contact} />
            <ScrollToTopRoute path="/landing" component={Landing} />
            <ScrollToTopRoute path="/login" component={Login} />
            <ScrollToTopRoute path="/forgot-password" component={ForgotPassword} />
            <ScrollToTopRoute path="/reset-password" component={ResetPassword} />
            <ScrollToTopRoute path="/register" component={Register} />
            <ScrollToTopRoute path="/signup-lawyer" component={SignUpLawyer} />
            <ScrollToTopRoute path="/signup-client" component={SignUpClient} />
            <ScrollToTopRoute path="/checkout" component={Checkout} />
            <ScrollToTopRoute path="/pricing" component={Pricing} />
            <ScrollToTopRoute path="/checkout-success" component={CheckoutSuccess} />
            <ScrollToTopRoute path="/terms-of-use" component={TermsOfUse} />
            <ScrollToTopRoute path="/fix-fee-services-show" component={FixFeesShow} />
            <ScrollToTopRoute path="/privacy-policy" component={PrivacyPolicy} />
            <ScrollToTopRoute path="/cookies-preferences" component={CookiesPreferences} />
            <ScrollToTopRoute path="/become-investor" component={BecomeInvestor} />
            <ScrollToTopRoute path="/become-ambassador" component={BecomeAmbassador} />
            <ScrollToTopRoute path="/contact" component={ScrollToTopRoute} />
            <ScrollToTopRoute path="/jobs" component={Jobs} />
            <ScrollToTopRoute path="/job-detail" component={JobDetail} />
            <ScrollToTopRoute path="/contracts" component={Contracts} />
            <ScrollToTopRoute path="/search-lawyer" component={SearchResults} />
            <ScrollToTopRoute path="/search" component={ServiceSearchResults} />
            <ScrollToTopRoute path="/lawyer-profile/:lawyerId" component={LawyerProfile} />
            <ScrollToTopRoute path="/account-settings" component={AccountSettings} />
            <ScrollToTopRoute path="/confirm-token" component={ValidateAccount} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;

  return { user };
};

const mapActionToProps = {
  loadMe
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(App);

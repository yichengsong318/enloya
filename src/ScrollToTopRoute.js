import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { loadMe, logoutUser } from "./redux/actions";
import { connect } from "react-redux";

import './App.css';

class ScrollToTopRoute extends Component {

  componentDidMount() {
    if (this.props.hideLoader) {
      this.props.hideLoader()
    }
    if (this.props.user) {
      this.props.loadMe(null, (err, status) => {
        if (status === 401) {
          if (this.props.authRequired) {
            this.props.history.replace('/login')
            this.props.logoutUser();
          }
        }
      });
    } else {
      if (this.props.authRequired) {
        this.props.history.replace('/login')
        this.props.logoutUser();
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.path === this.props.location.pathname && this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { component: Component, ...rest } = this.props;

    return <Route {...rest} render={props => (<Component {...props} />)} />;
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;

  return { user };
};

const mapActionToProps = {
  loadMe,
  logoutUser
};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(ScrollToTopRoute));

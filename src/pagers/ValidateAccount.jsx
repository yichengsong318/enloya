import React, {Component} from 'react';
import { connect } from "react-redux";
import queryString from 'query-string';

import {withRouter} from 'react-router-dom';
import { get } from '../helpers/RemoteApi';

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

class ValidateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checking: true,
      success: false
    };
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    if (params.token) {
      get('auth/confirm-token', {token: params.token}).then((res) => {
        this.setState({checking: false, success: true})
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 container mt-5 pt-5">
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <div className="bg-white p-4 my-5">
                <h2 className="text-center common-title">{this.state.checking ? 'Checking....' : 'Thank you !'}</h2>
                <p className="text-justify">
                  {this.state.checking ? 
                    'Please wait for us to confirm your account...' 
                    : 
                    'Your account was successfully confirmed. Thanks for taking time to complete the process.'}
                </p>
              </div>
            </div>
          </div>
        </div>
        <FooterTwo FooterData={FooterData}/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  return {};
};

const mapActionToProps = {};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(ValidateAccount));
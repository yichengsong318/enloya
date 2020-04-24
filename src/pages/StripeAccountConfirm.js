import React, {Component} from 'react';
import { connect } from "react-redux";
import queryString from 'query-string';
import {withRouter} from 'react-router-dom';
import { post } from '../helpers/RemoteApi';
import { NotificationManager } from "react-notifications";

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

class StripeAccountConfirm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checking: true,
      success: false,
      failure: false,
      errorMessage: ''
    };
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    if (params.code) {
      const {userInfo, userType} = this.props;
      post('customers/save-account', {
        type: userType,
        id: userInfo.id,
        code: params.code
      }).then(() => {
        NotificationManager.success(
          "The credit card was successfully added!",
          "Success !",
          3000,
          null,
          null,
          ''
        );
        this.setState({checking: false, success: false, failure: true,});
        this.props.history.push('/account-settings/billing');
      })
    } else {
      this.setState({checking: false, success: false, failure: true});
    }
  }

  render() {
    return (
      <div className="body_wrapper">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        
        { this.state.checking ? 
        <div className="h-100 container mt-5 pt-5">
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <div className="bg-white p-4 my-5">
                <h2 className="text-center common-title">{this.state.checking ? 'Saving....' : 'Thank you !'}</h2>
                <p className="text-justify">
                  Please wait for us to update and save your account...
                </p>
              </div>
            </div>
          </div>
        </div>
        : 
          (this.state.failure &&
            <div className="h-100 container mt-5 pt-5">
              <div className="row">
                <div className="col-sm-5 mx-auto">
                  <div className="bg-white p-4 my-5">
                    <h2 className="text-center common-title">{this.state.checking ? 'Checking....' : 'Sorry !'}</h2>
                    <p className="text-center">
                      Something went wrong !
                    </p>
                  </div>
                </div>
              </div>
            </div>)
        }
        <FooterTwo FooterData={FooterData}/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { languages } = data;

  return { userType, userInfo, user, languages };
};

const mapActionToProps = {
};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(StripeAccountConfirm));
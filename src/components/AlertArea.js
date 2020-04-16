import React, {Component} from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
import { get } from '../helpers/RemoteApi';
import { NotificationManager } from "react-notifications";

class AlertArea extends Component {
  // componentDidMount() {
  // }

  resendConfirmMsg = () => {
    const userType = this.props.userType;
    get(userType + 's/resend-confirm-mail').then(() => {
      NotificationManager.success("The mail was resent successfully!", "Done !", 3000);
    });
  };

  render() {
    const isConfirmed = this.props.userInfo && this.props.userInfo.isConfirmed;
    const isValidated = this.props.userInfo && this.props.userInfo.isValidated;
    return (
      <>
        { !isConfirmed &&
          <div className="row mb-2 pt-1">
            <div className="col-sm-12">
              <div className="alert alert-info mb-0 mt-4">
                <div>Please confirm your account to have a full experience of Enloya. if you don't find the mail,
                  <span className="btn btn-link" onClick={this.resendConfirmMsg}>We can resend it to you</span>
                </div>
              </div>
            </div>
          </div>
        }
        { this.props.userType === 'lawyer' && !isValidated &&
          <div className="row mb-2">
            <div className="col-sm-12">
              <div className="alert alert-warning mb-0">
                <div>Your account is currently under validation.
                  Please update your information as much as possible.
                  We will contact you as soon as possible.
                </div>
              </div>
            </div>
          </div>
        }
      </>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user, userType, userInfo } = authUser;

  return { user, userType, userInfo };
};

const mapActionToProps = {};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(AlertArea));

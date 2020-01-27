import React, {Component} from 'react';
import { connect } from "react-redux";
import queryString from 'query-string';

import {withRouter} from 'react-router-dom';
import { get, post } from '../helpers/RemoteApi';

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checking: true,
      success: false,
      failure: false,
      errorMessage: '',
      reset: {
        token: '', 
        password: '',
        confirmPassword: ''
      }
    };
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    if (params.token) {
      get('auth/reset-password-check', {token: params.token}).then((res) => {
        this.setState({
          checking: false, 
          success: true, 
          failure: false,
          reset: {
            ...this.state.reset,
            token: params.token
          }
        });
      }, (err) => {
        this.setState({checking: false, success: false, failure: true,});
      });
    } else {
      this.setState({checking: false, success: false, failure: true});
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.props.loading) {
      post('auth/reset-password', this.state.reset).then(() => {
        this.setState({errorMessage: ''});
        this.props.history.push('/login');
      }, (ans) => {
        this.setState({errorMessage: ans.response.data.message});
      });
    }
  }

  handleFormChange = (name, value) => {
    this.setState({reset: { ...this.state.reset, [name]: value}});
  };


  render() {
    return (
      <div className="body_wrapper">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>

        { this.state.checking ? 
        <div className="h-100 container mt-5 pt-5">
          <div className="row">
            <div className="col-sm-5 mx-auto">
              <div className="bg-white p-4 my-5">
                <h2 className="text-center common-title">{this.state.checking ? 'Checking....' : 'Thank you !'}</h2>
                <p className="text-justify">
                  Please wait for us to check your account...
                </p>
              </div>
            </div>
          </div>
        </div>
        : 
          (this.state.failure ?
            <div className="h-100 container mt-5 pt-5">
              <div className="row">
                <div className="col-sm-5 mx-auto">
                  <div className="bg-white p-4 my-5">
                    <h2 className="text-center common-title">{this.state.checking ? 'Checking....' : 'Sorry !'}</h2>
                    <p className="text-center">
                      Your token has expired !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          :
            <div className="subscribe_form_info s_form_info_two text-center mb-0">
              <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 mt_70 pt_70">Select a new password</h2>
              <form action="#" className="subscribe-form" onSubmit={e => this.onFormSubmit(e)}>
                { this.state.errorMessage && 
                  <div className="alert alert-danger">{this.state.errorMessage}</div> 
                }
                <input type="password" className="form-control" placeholder="New password"
                  onChange={e => this.handleFormChange('password', e.target.value)}/> 
                <input type="password" className="form-control" placeholder="Confirm password"
                  onChange={e => this.handleFormChange('confirmPassword', e.target.value)}/>
                <button type="submit" className="btn_hover btn_four mt_40">Reset Password</button>
              </form>
            </div>)
        }
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
)(ResetPassword));
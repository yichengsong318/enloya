import React, {Component} from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
// import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import SocialLogin from '../components/SocialLogin';

import { connect } from "react-redux";
import { loginUser } from "../redux/actions";
import {apiConfig} from '../constants/defaultValues'; 

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email : '',
        password : ''
      }
    }
  }

  createPopup = () => {
    const url = apiConfig.apiURL + 'auth/linkedin';
    const width = 800;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2.5;

    window.addEventListener("message", (event) => {
      if (event.origin !== apiConfig.apiDomain)
        return;
    
      localStorage.setItem('user_token', event.data);
      localStorage.setItem('user_type', 'lawyer');

      this.props.loadMe(() => {
        this.props.history.push('/account-settings');
      });
    }, false);

    this.externalWindow = window.open(
      url,
      'Sign in with LinkedIn',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.props.loading) {
      this.props.loginUser(this.state.login, () => {
        this.props.history.push('/account-settings');
      });
    }
  }


  handleFormChange = (name, value) => {
    this.setState({login: {...this.state.login, [name]: value}});
  };

  render() {
    return (
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 mt_70 pt_70">Member login</h2>
          <SocialLogin linkedinClick={() => {this.createPopup()}}/>
          <h6 className="my-2">Or</h6>
          {/* <hr className="mw-300"/> */}
          <form action="#" className="subscribe-form" onSubmit={e => this.onFormSubmit(e)}>
            { this.props.errorMessage &&
              <div className="alert alert-danger">{this.props.errorMessage}</div>
            }
            <input type="email" className="form-control" placeholder="Your email"
              onChange={e => this.handleFormChange('email', e.target.value)}/>
            <input type="password" className="form-control mt-3" placeholder="Your password"
              onChange={e => this.handleFormChange('password', e.target.value)}/>
            <button type="submit" className="btn_hover btn_four mt_40 btn-block">Login</button>
          </form>
          <div className="mt-2 text-center">
            <Link className="auth-link" to="/forgot-password">Have trouble logging in ?</Link>
          </div>
        </div>
        <Footer FooterData={FooterData} kind="otherPage"/>
      </div>
    )
  }
}

const mapStateToProps = ({ authUser }) => {
  const { errorMessage } = authUser;

  return { errorMessage };
};

const mapActionToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);

import React, {Component} from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

import { get } from "../helpers/RemoteApi";

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      email : '',
      infoMessage: '',
      errorMessage: ''  
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.props.loading) {
      get('auth/forgot-password', {email: this.state.email}).then(() => {
        this.setState({infoMessage: "The mail was sent to your email address successfully!", errorMessage: ''});
      }, () => {
        this.setState({errorMessage: "The email don't exist!", infoMessage: ''});
      });
    }
  }

  handleFormChange = (name, value) => {
    this.setState({email: value});
  };

  render () {
    return(
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 mt_70 pt_70 mw-600 mx-auto">Please enter your email address so we can send you a new password.</h2>
          <form action="#" className="subscribe-form" onSubmit={e => this.onFormSubmit(e)}>
            { this.state.errorMessage && 
              <div className="alert alert-danger">{this.state.errorMessage}</div> 
            }
            { this.state.infoMessage && 
              <div className="alert alert-success">{this.state.infoMessage}</div> 
            }
            <input type="email" className="form-control" placeholder="Your email"
              onChange={e => this.handleFormChange('email', e.target.value)}/>
            <button type="submit" className="btn_hover btn_four mt_40">Forgot Password</button>
          </form>
          <div className="mt-2 text-center">
            <Link className="auth-link" to="/login">Try logging again</Link>
          </div>
        </div>
        <FooterTwo FooterData={FooterData}/>
      </div>
    )
  }
}

export default ForgotPassword;


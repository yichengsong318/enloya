import React, { Component } from 'react';
import { connect } from "react-redux";

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import SocialLogin from '../components/SocialLogin';

import { createData } from "../redux/actions";
import { loginUser } from "../redux/actions";

export class SignUpLawyer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      login: {
        firstname : '',
        lastname : '',
        email : '',
        password : ''
      }  
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (!this.props.loading) {
      this.props.createData('lawyers', this.state.login, () => {
        const userInfo = {
          email: this.state.login.email,
          password: this.state.login.password
        };

        this.props.loginUser(userInfo, () => {
          this.props.history.push('/account-settings');
        });
      });
    }
  }

  handleFormChange = (name, value) => {
    this.setState({login: {...this.state.login, [name]: value}});
  };

  render() {
    return(
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb-0 mt_70 pt_70">Unlock the digital lawyer in you</h2><br/>
          <p className="text-black text-center mb-4">Get started - <strong>it's free</strong></p>
          <SocialLogin />
          <form action="#" className="subscribe-form" onSubmit={e => this.onFormSubmit(e)}>
            <input type="text" className="form-control mt-3" placeholder="First Name"
              onChange={e => this.handleFormChange('firstname', e.target.value)}/>
            <input type="text" className="form-control mt-3" placeholder="Last Name"
              onChange={e => this.handleFormChange('lastname', e.target.value)}/>
            <input type="email" className="form-control mt-3" placeholder="Email"
              onChange={e => this.handleFormChange('email', e.target.value)}/>
            <input type="password" className="form-control mt-3" placeholder="Password"
              onChange={e => this.handleFormChange('password', e.target.value)}/>
            <p className="text-black small mt-3">
              By Clicking Join now, you agree to Enloya's Terms of Use Agreement,
              Privacy Policy and Cookie Policy</p>
              <button type="submit" className="btn_hover btn_four mt_40 btn-block">Join now</button>
          </form>
        </div>
        <FooterTwo FooterData={FooterData}/>
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {};
};

const mapActionToProps = {
  createData,
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SignUpLawyer);

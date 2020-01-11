import React, { Component } from 'react';
import { connect } from "react-redux";

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import SocialLogin from '../components/SocialLogin';

import { FormSelect } from '../shared/FormElement';

import { createData, readData } from "../redux/actions";
import { loginUser } from "../redux/actions";

export class SignUpLawyer extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      login: {
        typeInputs: [],
        firstname : '',
        lastname : '',
        email : '',
        password : ''
      }  
    }
  }
  
  componentDidMount() {
    const {readData} = this.props;
    readData('lawyer-types');
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    if (!this.props.loading) {
      window.scrollTo(0, 100);

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
    if (name === "typeInputs") {
      value = [value];
    }
    this.setState({login: {...this.state.login, [name]: value}});
  };

  render() {
    const lawyerTypes = this.props.lawyerTypes || [];
    return(
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb-0 mt_70 pt_70">Unlock the digital lawyer in you</h2><br/>
          <p className="text-black text-center mb-4">Get started - <strong>it's free</strong></p>
          <SocialLogin />
          <form action="#" className="subscribe-form" onSubmit={e => this.onFormSubmit(e)}>
            { this.props.errorMessage && 
              <div className="alert alert-danger">{this.props.errorMessage}</div> 
            }
            <input type="text" className="form-control mt-3" placeholder="First Name"
              onChange={e => this.handleFormChange('firstname', e.target.value)}/>
            <input type="text" className="form-control mt-3" placeholder="Last Name"
              onChange={e => this.handleFormChange('lastname', e.target.value)}/>
            <input type="email" className="form-control mt-3" placeholder="Email"
              onChange={e => this.handleFormChange('email', e.target.value)}/>
            <input type="password" className="form-control mt-3 mb-4" placeholder="Password"
              onChange={e => this.handleFormChange('password', e.target.value)}/>
            <FormSelect id="types" 
              placeholder="Lawyer Type" 
              selected={this.state.typeInputs}
              name="typeInputs" onChange={this.handleFormChange}
              choices={[
                { value: null, label: 'Please Select a Type' },
                ...lawyerTypes.map(ind => {ind.value = ind.id; return ind})
              ]}
              noHelp/>
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

const mapStateToProps = ({data}) => {
  const { lawyerTypes, errorMessage } = data;
  return { lawyerTypes, errorMessage };
};

const mapActionToProps = {
  createData,
  readData,
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SignUpLawyer);

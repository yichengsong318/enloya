import React, { Component } from 'react';
import { connect } from "react-redux";
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
import { FormSwitch, FormInput, FormSelect, FormUpload } from '../shared/FormElement';

import { createData, readData } from "../redux/actions";
import { loginUser } from "../redux/actions";
import countries from "../constants/countries";

export class SignUpClient extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      login: {
        type : 'individual',
        firstname : '',
        lastname : '',
        email : '',
        password : '',
        companyPictureFile: '',
        companyName : '',
        companySize : '',
        industryInputs : [],
        city : '',
        country : '',
        position : '',
        profilePicFile: ''
      }  
    }
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('industries');
  }

  onFormSubmit = () => {
    if (!this.props.loading) {
      window.scrollTo(0, 0);
      this.props.createData('clients', this.state.login, () => {
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
    if (name === 'industryInputs') {
      value = [value];
    }
    this.setState({login: {...this.state.login, [name]: value}});
  };

  render() {
    return(
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 m0">I'm looking for a lawyer</h2><br/>
          <form action="#" className="subscribe-form2">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  { this.props.errorMessage && 
                    <div className="alert alert-danger">{this.props.errorMessage}</div> 
                  }
                  <FormSwitch name="type" onChange={this.handleFormChange}
                    label="I am" id="typeUser" selected="individual" choices={[
                    { key: 'business', label: 'Business' },
                    { key: 'individual', label: 'Individual' }
                  ]} noHelp/>
                  <FormInput label="First Name" type="text" id="firstname" 
                    name="firstname" onChange={this.handleFormChange} noHelp/>
                  <FormInput label="Last Name" type="text" id="lastname" 
                    name="lastname" onChange={this.handleFormChange} noHelp/>
                  <FormInput label="Email" type="email" id="email" 
                    name="email" onChange={this.handleFormChange} noHelp/>
                  <FormInput label="Password" type="password" id="password" 
                    name="password" onChange={this.handleFormChange} noHelp/>
                </div>

                <div className="col-sm-7">
                  <FormSelect label="Industry" id="industry" selected="" 
                    name="industryInputs" onChange={this.handleFormChange}
                    choices={this.props.industries.map(ind => {ind.value = ind.id; return ind})} noHelp/>
                </div>
                <div className="col-sm-12">
                  <FormInput label="Your city" type="text" id="city" 
                    name="city" onChange={this.handleFormChange}
                    placeholder="" noHelp/>
                              
                  <FormSelect label="Country" id="countries" selected={this.state.login.country} 
                    name="country" onChange={this.handleFormChange}
                    choices={countries} noHelp />
                </div>
                {this.state.login.type === "business" && 
                  <>
                    <div className="col-sm-12">
                      <FormInput label="Company Name" type="text" id="companyname" 
                        name="companyName" onChange={this.handleFormChange} noHelp/>
                    </div>
                    <div className="col-sm-10">
                      <FormSwitch label="Company Size" id="companysize" selected="" 
                        name="companySize" onChange={this.handleFormChange}
                        choices={[
                          { key: '1-10', label: '1-10' },
                          { key: '11-100', label: '11-100' },
                          { key: '101-500', label: '101-500' },
                          { key: '500+', label: '500+' }
                        ]} noHelp/>
                    </div>
                    <div className="col-sm-12">
                      <FormUpload label="Logo Upload" id="logoUpload"
                        name="companyPictureFile" onChange={this.handleFormChange} noHelp/>
                      <FormInput label="Position" type="text" id="position"
                        name="position" onChange={this.handleFormChange}
                        noHelp/>
                    </div>
                  </>
                }
                <div className="col-sm-12 text-right mt-5">
                  <button type="button" onClick={this.onFormSubmit}
                    className="btn btn_get btn_get_two btn-block">Sign up</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <FooterTwo FooterData={FooterData}/>
     </div>
    )
  }
}

const mapStateToProps = ({ data }) => {
  const { industries, errorMessage } = data;

  return { industries, errorMessage };
};

const mapActionToProps = {
  createData,
  readData,
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SignUpClient);


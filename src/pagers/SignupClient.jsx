import React from 'react';
import { connect } from "react-redux";

import { FormSwitch, FormInput, FormSelect, FormUpload } from '../shared/FormElement';

import {withRouter} from "react-router-dom";
import { readData } from "../redux/data/actions";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('industries');
  }

  render() {
    return (
      <div className="App">
        <div className="h-100 container">
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="auth-block-sm card p-4">
                <div className=" card-body">
                  <h1 className="text-left mt-2">I'm looking for a lawyer</h1>
                  <div className="row">
                    <div className="col-sm-7 pt-4">
                      <p className="text-danger d-none">Your email or password appears to be incorrect. Please try again !</p>
                      <FormSwitch label="I am" id="typeUser" selected="individual" choices={[
                        { key: 'business', label: 'Business' },
                        { key: 'individual', label: 'Individual' }
                      ]}/>
                      <FormInput label="First Name" type="text" id="firstname"/>
                      <FormInput label="Last Name" type="text" id="lastname"/>
                      <FormInput label="Email" type="email" id="email"/>
                      <FormInput label="Password" type="password" id="password"/>
                    </div>
                    <div className="col-sm-12">
                      <FormInput label="Company Name" type="text" id="companyname"/>
                    </div>
                    <div className="col-sm-10">
                      <FormSwitch label="Company Size" id="companysize" selected="101-500" choices={[
                        { key: '1-10', label: '1-10' },
                        { key: '11-100', label: '11-100' },
                        { key: '101-500', label: '101-500' },
                        { key: '500+', label: '500+' }
                      ]} />
                    </div>
                    <div className="col-sm-7">
                      <FormSelect label="Industry" id="industry" selected="individual" choices={[
                        { value: 'undefined', label: 'Please Select' },
                        { value: 'business', label: 'Business' },
                        { value: 'individual', label: 'Individual' }
                      ]} />
                    </div>
                    <div className="col-sm-12">
                      <FormUpload label="Logo Upload" id="logoUpload"/>
                    </div>
                    <div className="col-sm-7">
                      <FormInput label="Your location" type="text" id="location" placeholder="Country / State / Provinence"/>
                      <FormInput label="Position" type="text" id="position" />
                    </div>
                    <div className="col-sm-12 text-right">
                      <button type="button" className="btn btn-primary">Go Premium</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  const { industries } = data;

  return { industries };
};

const mapActionToProps = {
  readData 
};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Login));

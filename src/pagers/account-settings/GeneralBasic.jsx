import React, {Component} from 'react';
import { connect } from "react-redux";
import { FormText, FormInput, FormSelect, FormUploadImage, FormCity } from '../../shared/FormElement';
import { NotificationManager } from "react-notifications";

import { updateData, readData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";

import timezones from "../../constants/timezones";
import countries from "../../constants/countries";

export class GeneralBasic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        languageInputs : props.userInfo.languages.map(l => l.id) || [],
        city : props.userInfo.city || '',
        country : props.userInfo.country || '',
        timezone : props.userInfo.timezone || '',
        address : props.userInfo.address || '',
        vatID: props.userInfo.vatID || '',
      }
    }
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('languages');
  }

  onFormSubmit = () => {
    if (!this.props.loading) {
      this.props.updateData('clients', this.props.userInfo.id, this.state.user, () => {
        this.props.loadMe(() => {
          NotificationManager.success(
            "The changes were saved!",
            "Success !",
            3000,
            null,
            null,
            ''
          );
          this.setState({
            user: {
              languageInputs : this.props.userInfo.languages.map(l => l.id) || [],
              city : this.props.userInfo.city || '',
              country : this.props.userInfo.country || '',
              timezone : this.props.userInfo.timezone || '',
              address : this.props.userInfo.address || '',
              vatID: this.props.userInfo.vatID || '',
              hasFile: true
            }
          });
        });
      });
    }
  }

  handleFormChange = (name, value) => {
    this.setState({user: {...this.state.user, [name]: value}});
  };


  handleFormImageChange = (name, value, onComplete) => {
    let userPic = {hasFile: true};
    userPic[name] = value;
    this.props.updateData('clients', this.props.userInfo.id, userPic, () => {
      this.props.loadMe(() => {
        NotificationManager.success(
          "The picture was successfully saved!",
          "Success !",
          3000,
          null,
          null,
          ''
        );
        onComplete();
      });
    });
  }

  render () {
    const { userInfo } = this.props;
    return (
      <div className="py-4 px-2">
        <h2 className="mt-2 mb-3">General Information</h2>
        <div className="row mt-4">
          <div className="col-sm-5">
            <FormUploadImage label="Profile Image" id="profileImage" value={userInfo.profilePic}
              name="profilePicFile" onChange={this.handleFormImageChange} noHelp/>
          </div>
          <div className="col-sm-5">
            <FormText label="First Name" id="firstname" value={userInfo.firstname} noHelp/>
            <FormText label="Last Name" id="lastname" value={userInfo.lastname} noHelp/>
            <FormText label="Email" id="email" value={userInfo.email} noHelp/>

            <FormCity label="City" type="text" id="city"
              value={this.state.user.city} name="city" onChange={this.handleFormChange} noHelp/>

            <FormSelect label="Country" id="countries" selected={this.state.user.country}
              name="country" onChange={this.handleFormChange}
              choices={countries} noHelp />

            <FormSelect label="Languages" id="languages"
              selected={this.state.user.languageInputs} isMulti
              name="languageInputs" onChange={this.handleFormChange}
              choices={this.props.languages.map(ind => {ind.value = ind.id; return ind})}
              noHelp/>
            <FormInput label="VAT ID" type="number" id="vatid"
              value={this.state.user.vatID} name="vatID" onChange={this.handleFormChange} noHelp />


            <FormSelect label="Timezones" id="timezones" selected={this.state.user.timezone} 
              name="timezone" onChange={this.handleFormChange}
              choices={timezones} noHelp />

            <FormInput label="Address" type="text" id="address"
              value={this.state.user.address} name="address" onChange={this.handleFormChange} noHelp />
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-sm-12 text-right">
            <button onClick={this.onFormSubmit} type="button" className="btn btn-yellow px-5">Save</button>
          </div>
        </div>
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
  updateData,
  readData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(GeneralBasic));

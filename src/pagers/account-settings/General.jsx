import React, {Component} from 'react';
import { connect } from "react-redux";
import { FormText, FormInput, FormSelect, FormUpload } from '../../shared/FormElement';
import { NotificationManager } from "react-notifications";
import { updateData, readData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class General extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      user: {
        companyPictureFile: null,
        profilePicFile: null,
        companyName : props.userInfo.companyName || '',
        companyUrl : props.userInfo.companyUrl || '',
        languageInputs : props.userInfo.languages ? props.userInfo.languages.map(l => l.id) : [],
        location : props.userInfo.location || '',
        timezone : props.userInfo.timezone || '',
        address : props.userInfo.address || '',
        vatID: props.userInfo.vatID || '',
        hasFile: true,
      }  
    }
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('languages');
  }

  onFormSubmit = () => {
    console.log(this.state.user);
    if (!this.props.loading) {
      this.props.updateData('lawyers', this.props.userInfo.id, this.state.user, () => {
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
              companyPictureFile: null,
              profilePicFile: null,
              companyName : this.props.userInfo.companyName || '',
              companyUrl : this.props.userInfo.companyUrl || '',
              languageInputs : this.props.userInfo.languages ? this.props.userInfo.languages.map(l => l.id) : [],
              location : this.props.userInfo.location || '',
              timezone : this.props.userInfo.timezone || '',
              address : this.props.userInfo.address || '',
              vatID: this.props.userInfo.vatID || ''
            }  
          });
        });
      });
    }
  }

  handleFormChange = (name, value) => {
    this.setState({user: {...this.state.user, [name]: value}});
  };

  render () {
    const { userInfo } = this.props;
    return (
      <div className="py-4 px-2">
        <h2 className="mt-2 mb-3">General Information</h2>
        <div className="row">
          <div className="col-sm-5">
            <FormUpload label="Upload Logo" id="logoUpload" 
              name="companyPictureFile" onChange={this.handleFormChange} noHelp/>
            {
              userInfo.companyPicture && 
              <img src={userInfo.companyPicture} className="img-pic-user-medium mt-2" alt="user_pic" />
            }
          </div>
          <div className="col-sm-5">
            <FormInput label="Company Name" type="text" id="companyname" 
              value={this.state.user.companyName} 
              name="companyName" onChange={this.handleFormChange}
              noHelp/>
            <FormInput label="Company Website" type="url" id="companywebsite" 
              value={this.state.user.companyUrl} 
              name="companyUrl" onChange={this.handleFormChange} 
              noHelp/>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-5">
            <FormUpload label="Profile Image" id="profileImage" 
              name="profilePicFile" onChange={this.handleFormChange} noHelp/>
            {
              userInfo.profilePic && 
              <img src={userInfo.profilePic} className="img-pic-user-medium mt-2" alt="user_pic" />
            }
          </div>
          <div className="col-sm-5">
            <FormText label="First Name" id="firstname" value={userInfo.firstname} noHelp/>
            <FormText label="Last Name" id="lastname" value={userInfo.lastname} noHelp/>
            <FormText label="Email" id="email" value={userInfo.email} noHelp/>
            {/* <FormInput label="Email" type="email" id="email" noHelp/> */}
            {/* <FormInput label="Password" type="password" id="password" noHelp/> */}

            <FormInput label="Your location" type="text" id="location" 
              value={this.state.user.location} name="location" onChange={this.handleFormChange} noHelp/>

            <FormSelect label="Languages" id="languages" 
              selected={this.state.user.languageInputs} isMulti
              name="languageInputs" onChange={this.handleFormChange}
              choices={[
                { value: 'undefined', label: 'Please Select' },
                ...this.props.languages.map(ind => {ind.value = ind.id; return ind})
              ]}
              noHelp/>

            <FormInput label="VAT ID" type="number" id="vatid" 
              value={this.state.user.vatID} name="vatID" onChange={this.handleFormChange} noHelp />

            <FormSelect label="Timezones" id="timezones" selected={this.state.user.timezone} 
              name="timezone" onChange={this.handleFormChange}
              choices={[
                { value: 'undefined', label: 'Please Select' },
                { value: 'utc-10', label: 'UTC/GMT +10 hours' },
                { value: 'utc-8', label: 'UTC/GMT +8 hours' },
                { value: 'utc-7', label: 'UTC/GMT +7 hours' }
              ]} noHelp />
            <FormInput label="Address" type="text" id="address"
              value={this.state.user.address} name="address" onChange={this.handleFormChange} noHelp />
          </div>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-sm-12 text-right">
            <button onClick={this.onFormSubmit} type="button" className="btn btn-primary px-5">Save</button>
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
)(General));


import React, {Component} from 'react';
import { connect } from "react-redux";
import { FormInput } from '../../shared/FormElement';
import { NotificationManager } from "react-notifications";
import { updateData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class SocialLinks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socialLinks: {
        linkedin: this.props.userInfo.socialLinks.linkedin,
        twitter: this.props.userInfo.socialLinks.twitter,
        facebook: this.props.userInfo.socialLinks.facebook,
        youtube: this.props.userInfo.socialLinks.youtube,
        website: this.props.userInfo.socialLinks.website
      }
    }
  }

  componentDidMount() {
  }

  onFormSubmit = () => {
    if (!this.props.loading) {
      this.props.updateData(this.props.userType + 's', this.props.userInfo.id,
        {socialLinks: this.state.socialLinks}, () => {
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
            socialLinks: {
              linkedin: this.props.userInfo.socialLinks.linkedin,
              twitter: this.props.userInfo.socialLinks.twitter,
              facebook: this.props.userInfo.socialLinks.facebook,
              youtube: this.props.userInfo.socialLinks.youtube,
              website: this.props.userInfo.socialLinks.website,
            }
          });
        });
      });
    }
  }

  handleChange = (name, value) => {
    this.setState({socialLinks: {...this.state.socialLinks, [name]: value}});
  };

  render () {
    return (
      <div className="py-4 px-4 account-settings">
        <h2 className="mt-2 mb-4">Social Links Settings</h2>
        <div className="my-4">
          <div className="row">
            <div className="col-sm-7">
              <FormInput label="Linkedin" type="text" id="linkedin"
                value={this.state.socialLinks.linkedin} name="linkedin" onChange={this.handleChange} noHelp/>

              <FormInput label="Twitter" type="text" id="twitter"
                value={this.state.socialLinks.twitter} name="twitter" onChange={this.handleChange} noHelp/>

              <FormInput label="Facebook" type="text" id="facebook"
                value={this.state.socialLinks.facebook} name="facebook" onChange={this.handleChange} noHelp/>

              <FormInput label="Youtube" type="text" id="youtube"
                value={this.state.socialLinks.youtube} name="youtube" onChange={this.handleChange} noHelp/>

              <FormInput label="Website" type="text" id="website"
                value={this.state.socialLinks.website} name="website" onChange={this.handleChange} noHelp/>
            </div>
            <div className="col-sm-7 mt-4 text-right">
              <button onClick={this.onFormSubmit} type="button" className="btn btn-yellow px-5">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ authUser }) => {
  const { userType, userInfo, user } = authUser;
  userInfo.socialLinks = userInfo.socialLinks || {};
  return { userType, userInfo, user };
};

const mapActionToProps = {
  updateData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(SocialLinks));

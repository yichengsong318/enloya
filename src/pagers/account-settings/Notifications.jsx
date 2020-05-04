import React, {Component} from 'react';
import { connect } from "react-redux";
import { FormCheck } from '../../shared/FormElement';
import { NotificationManager } from "react-notifications";
import { updateData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class Notifications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: {
        notifActive: this.props.userInfo.notifications.notifActive,
        emailActive: this.props.userInfo.notifications.emailActive,
        endorsement: this.props.userInfo.notifications.endorsement,
        jobposted: this.props.userInfo.notifications.jobposted,
        jobsubmitted: this.props.userInfo.notifications.jobsubmitted,
        jobrejected: this.props.userInfo.notifications.jobrejected,
        interviewstatus: this.props.userInfo.notifications.interviewstatus,
        offeraccepted: this.props.userInfo.notifications.offeraccepted,
        projectexpired: this.props.userInfo.notifications.projectexpired,
        reviewposted: this.props.userInfo.notifications.reviewposted,
        contractbegins: this.props.userInfo.notifications.contractbegins,
        contractmodified: this.props.userInfo.notifications.contractmodified,
        contractended: this.props.userInfo.notifications.contractended,
        contractstart: this.props.userInfo.notifications.contractstart,
        contractreview: this.props.userInfo.notifications.contractreview,
        teaminvite: this.props.userInfo.notifications.teaminvite,
        teamaccept: this.props.userInfo.notifications.teamaccept,
        teamreject: this.props.userInfo.notifications.teamreject,
        teamdenied: this.props.userInfo.notifications.teamdenied,
        enloyamail: this.props.userInfo.notifications.enloyamail
      }
    }
  }

  componentDidMount() {
  }

  onFormSubmit = () => {
    if (!this.props.loading) {
      this.props.updateData(this.props.userType + 's', this.props.userInfo.id,
        {notifications: this.state.notifications}, () => {
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
            notifications: {
              notifActive: this.props.userInfo.notifications.notifActive,
              emailActive: this.props.userInfo.notifications.emailActive,
              endorsement: this.props.userInfo.notifications.endorsement,
              jobposted: this.props.userInfo.notifications.jobposted,
              jobsubmitted: this.props.userInfo.notifications.jobsubmitted,
              jobrejected: this.props.userInfo.notifications.jobrejected,
              interviewstatus: this.props.userInfo.notifications.interviewstatus,
              offeraccepted: this.props.userInfo.notifications.offeraccepted,
              projectexpired: this.props.userInfo.notifications.projectexpired,
              reviewposted: this.props.userInfo.notifications.reviewposted,
              contractbegins: this.props.userInfo.notifications.contractbegins,
              contractmodified: this.props.userInfo.notifications.contractmodified,
              contractended: this.props.userInfo.notifications.contractended,
              contractstart: this.props.userInfo.notifications.contractstart,
              contractreview: this.props.userInfo.notifications.contractreview,
              teaminvite: this.props.userInfo.notifications.teaminvite,
              teamaccept: this.props.userInfo.notifications.teamaccept,
              teamreject: this.props.userInfo.notifications.teamreject,
              teamdenied: this.props.userInfo.notifications.teamdenied,
              enloyamail: this.props.userInfo.notifications.enloyamail
            }
          });
        });
      });
    }
  }

  handleChange = (name, value) => {
    this.setState({notifications: {...this.state.notifications, [name]: value}});
  };

  render () {
    const { userInfo } = this.props;

    return (
      <div className="py-4 px-4 account-settings">
        <h2 className="mt-2 mb-4">Notifications Settings</h2>
        <div className="my-4">
          <FormCheck id="check-1" label={"Sending notifications to " + userInfo.email}
            value={userInfo.notifications.notifActive}
            name="notifActive" onChange={this.handleChange}/>
          <FormCheck id="check-2" label={"Send an email to " + userInfo.email + " when: "}
            value={userInfo.notifications.emailActive}
            name="emailActive" onChange={this.handleChange}/>
        </div>
        <div className="my-4 bg-lighter p-5">
          <h4>Endorsememts</h4>
          <hr/>
          <FormCheck id="check-3" label="An endorsement is ready for your review"
            value={userInfo.notifications.endorsement}
            name="endorsement" onChange={this.handleChange}/>
        </div>
        <div className="my-4 bg-lighter p-5">
          <h4>Job/Project Postings and Proposals</h4>
          <hr/>
          <FormCheck id="check-4" label="A job advertisment is posted"
            value={userInfo.notifications.jobposted}
            name="jobposted" onChange={this.handleChange}/>
          <FormCheck id="check-5" label="A proposal is submitted"
            value={userInfo.notifications.jobsubmitted}
            name="jobsubmitted" onChange={this.handleChange}/>
          <FormCheck id="check-6" label="A proposal is rejected"
            value={userInfo.notifications.jobrejected}
            name="jobrejected" onChange={this.handleChange}/>
          <FormCheck id="check-7" label="An interview is accepted, declined or withdraw"
            value={userInfo.notifications.interviewstatus}
            name="interviewstatus" onChange={this.handleChange}/>
          <FormCheck id="check-8" label="An offer is accepted"
            value={userInfo.notifications.offeraccepted}
            name="offeraccepted" onChange={this.handleChange}/>
          <FormCheck id="check-9" label="A project posting has expired"
            value={userInfo.notifications.projectexpired}
            name="projectexpired" onChange={this.handleChange}/>
          <FormCheck id="check-10" label="A review is posted"
            value={userInfo.notifications.reviewposted}
            name="reviewposted" onChange={this.handleChange}/>
        </div>
        <div className="my-4 bg-lighter p-5">
          <h4>Contracts</h4>
          <hr/>
          <FormCheck id="check-11" label="A hire is made or contract begins"
            value={userInfo.notifications.contractbegins}
            name="contractbegins" onChange={this.handleChange}/>
          <FormCheck id="check-12" label="Contract terms are modified"
            value={userInfo.notifications.contractmodified}
            name="contractmodified" onChange={this.handleChange}/>
          <FormCheck id="check-13" label="A contracts ends"
            value={userInfo.notifications.contractended}
            name="contractended" onChange={this.handleChange}/>
          <FormCheck id="check-14" label="Time logging begins"
            value={userInfo.notifications.contractstart}
            name="contractstart" onChange={this.handleChange}/>
          <FormCheck id="check-15" label="A time entry is ready for your review"
            value={userInfo.notifications.contractreview}
            name="contractreview" onChange={this.handleChange}/>
        </div>
        <div className="my-4 bg-lighter p-5">
          <h4>Teams</h4>
          <hr/>
          <FormCheck id="check-16" label="Someone sends me an invitation to join a team"
            value={userInfo.notifications.teaminvite}
            name="teaminvite" onChange={this.handleChange}/>
          <FormCheck id="check-17" label="Someone accepts an invitation to join your team"
            value={userInfo.notifications.teamaccept}
            name="teamaccept" onChange={this.handleChange}/>
          <FormCheck id="check-18" label="Someone rejects an invitation to join a team"
            value={userInfo.notifications.teamreject}
            name="teamreject" onChange={this.handleChange}/>
          <FormCheck id="check-19" label="Team access is revoked"
            value={userInfo.notifications.teamdenied}
            name="teamdenied" onChange={this.handleChange}/>
        </div>
        <div className="my-4 bg-lighter p-5">
          <h4>Communications from Enloya</h4>
          <hr/>
          <FormCheck id="check-20"
            label="Someone sends me a private message to help me get the most out of Enloya (e.g. emails regarding your purchases)"
            value={userInfo.notifications.enloyamail}
            name="enloyamail" onChange={this.handleChange}/>
        </div>
        <div className="row mt-4 mb-5">
          <div className="col-sm-12 text-right">
            <button onClick={this.onFormSubmit} type="button" className="btn btn-yellow px-5">Save</button>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ authUser }) => {
  const { userType, userInfo, user } = authUser;
  userInfo.notifications = userInfo.notifications || {};
  return { userType, userInfo, user };
};

const mapActionToProps = {
  updateData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Notifications));

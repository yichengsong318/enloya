import React, {Component} from 'react';
import { connect } from "react-redux";
import { FormInput } from '../../shared/FormElement';
import { NotificationManager } from "react-notifications";
import { updateData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class Appointements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calendlyUrl: this.props.userInfo.calendlyUrl,
    }
  }

  componentDidMount() {}

  onFormSubmit = () => {
    if (!this.props.loading) {
      this.props.updateData(this.props.userType + 's', this.props.userInfo.id,
        {calendlyUrl: this.state.calendlyUrl}, () => {
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
            calendlyUrl: this.props.userInfo.calendlyUrl,
          });
        });
      });
    }
  }

  handleChange = (name, value) => {
    this.setState({calendlyUrl: value});
  };

  render () {
    return (
      <div className="py-4 px-4 account-settings">
        <h2 className="mt-2 mb-4">Appointements Settings</h2>
        <div className="my-4">
          <div className="row">
            <div className="col-sm-7">
              <FormInput label="Calendly account URL(Eg:https://calendly.com/johndoe)" type="text" id="calendlyUrl"
                name="calendly" onChange={this.handleChange} noHelp/>

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
  userInfo.calendlyUrl = userInfo.calendlyUrl || {};
  return { userType, userInfo, user };
};

const mapActionToProps = {
  updateData,
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Appointements));

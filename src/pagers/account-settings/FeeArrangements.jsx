import React, {Component} from 'react';
import { connect } from "react-redux";
import { FormInput, FormCheck} from '../../shared/FormElement';
import { NotificationManager } from "react-notifications";
import { updateData, loadMe } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class FeeArrangements extends Component {
  constructor(props) {
    super(props);

    const other = this.props.userInfo.feeArrangements && 
      this.props.userInfo.feeArrangements.find(fa => fa[0] === '#');

    this.state = {
      otherFee: other ? true : false,
      otherText: other ? other.slice(1) : '',
      hourlyRate: this.props.userInfo.hourlyRate || '',
      feeArrangements: this.props.userInfo.feeArrangements ? 
        this.props.userInfo.feeArrangements.filter(fa => fa[0] !== '#') : []
    }
  }

  componentDidMount() {
  }

  onFormSubmit = () => {
    if (!this.props.loading) {
      let feeArrangements = this.state.feeArrangements;

      feeArrangements = feeArrangements.filter(fa => fa[0] !== '#');

      if (this.state.otherFee) {
        feeArrangements.push('#' + this.state.otherText);
      }

      const d = {
        hourlyRate: this.state.hourlyRate, 
        feeArrangements
      }; 
      
      this.props.updateData(this.props.userType + 's', this.props.userInfo.id, d, () => {
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
            other: false,
            hourlyRate: this.props.userInfo.hourlyRate,
            feeArrangements: this.props.userInfo.feeArrangements
          });
        });
      });
    }
  }

  handleChange = (name, value, add) => {
    if (name === 'feeArrangements') {
      if (value) {
        value = [...this.state.feeArrangements, add];
      } else {
        value = this.state.feeArrangements.filter(ti => ti !== add);
      }
      this.setState({feeArrangements: value});
    } else {
      this.setState({[name]: value});
    }
  };

  render () {
    return (
      <div className="py-4 px-4 account-settings">
        <h2 className="mt-2 mb-4">Fee arrangements Settings</h2>
        <div className="my-4">
          <div className="row">
            <div className="col-sm-7">
              <FormInput label="Hourly Rate (average)" type="text" id="hourlyRate"
                value={this.state.hourlyRate} name="hourlyRate" onChange={this.handleChange} noHelp/>
            
              <div className="mt-5 mb-4">
                <h4>Fee arrangements</h4>
                <hr/>
                <FormCheck id="fa-hourly" 
                  label="Hourly rate" val="Hourly rate"
                  value={this.state.feeArrangements.indexOf('Hourly rate') > -1} 
                  name="feeArrangements" onChange={this.handleChange}/>
                
                <FormCheck id="fa-flat" 
                  label="Flat fees" val="Flat fees"
                  value={this.state.feeArrangements.indexOf('Flat fees') > -1} 
                  name="feeArrangements" onChange={this.handleChange}/>
                
                <FormCheck id="fa-contigency" 
                  label="Contingency fees" val="Contingency fees"
                  value={this.state.feeArrangements.indexOf('Contingency fees') > -1} 
                  name="feeArrangements" onChange={this.handleChange}/>
                
                <FormCheck id="fa-retainer" 
                  label="Retainer" val="Retainer"
                  value={this.state.feeArrangements.indexOf('Retainer') > -1} 
                  name="feeArrangements" onChange={this.handleChange}/>
                
                <FormCheck id="fa-other" 
                  label="Other" value={this.state.otherFee} 
                  name="otherFee" onChange={this.handleChange}/>

                {this.state.otherFee && <FormInput label="" type="text" id="otherText"
                  value={this.state.otherText} name="otherText" onChange={this.handleChange} noHelp/>}
              </div>
            </div>
            <div className="col-sm-7 mt-4 text-right">
              <button onClick={this.onFormSubmit} type="button" className="btn btn-primary px-5">Save</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ authUser }) => {
  const { userType, userInfo, user } = authUser;
  return { userType, userInfo, user };
};

const mapActionToProps = {
  updateData, 
  loadMe
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FeeArrangements));


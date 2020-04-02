import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../../redux/actions";
import { get, remove, put } from '../../helpers/RemoteApi';
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import Moment from 'react-moment';
import { NotificationManager } from "react-notifications";
import countries from "../../constants/fullCountries";

export class FixFeesDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      service: {
        category: {},
        subcategory: {},
        deliveryTime: {},
        lawyer: {},
        industries: [],
        faq: [],
        requirements: [],
        types: [],
        tags: []
      }
    };
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search);
    if (params.sid) {
      get('services/' + params.sid).then((res) => {
        if (res.status === 200) {
          this.setState({service: res.data});
        }
      });
    }
  }

  publishService = () => {
    const params = queryString.parse(this.props.location.search);
    const isPublished = this.state.service.isPublished;

    if (params.sid) {
      put('services/' + params.sid, {isPublished: !isPublished}).then((res) => {
        if (res.status === 200) {
          this.setState({service: res.data});
          NotificationManager.success(
            "The service was successfully " + (isPublished ? "unpublished" : "published") + "!",
            "Success !",
            3000,
            null,
            null,
            ''
          );
        }
      });
    }
  }

  deleteService = () => {
    const params = queryString.parse(this.props.location.search);
    if (params.sid) {
      remove('services/' + params.sid).then((res) => {
        if (res.status === 200) {
          this.props.history.push("/account-settings/fix-fee-services");
        }
      });
    }
  }

  getCountry = (code) => {
    const country = countries.find(c => c.value === code);
    return country ? country.label : "";
  }

  render () {
    const serv = this.state.service;
    const clientTypes = serv.types.map(t => t.label).join(', ');
    const industry = serv.industries.map(t => t.label).join(', ');
    const tags = serv.tags.join(', ');
    const isPublished = serv.isPublished;
    const country = this.getCountry(serv.country);

    return (
      <div className="py-4 px-4 account-settings">
        <h2 className="mt-2 mb-3">Fixed-Fee Service Detail</h2>
        <div className="pb-4 text-right">
          <a href={"/account-settings/fix-fee-services-edit?sid=" + serv.id} className="btn btn-primary px-5 col-12 col-md-4">Edit the service</a>
          <span className={ isPublished ? "btn btn-warning ml-3 col-12 mobile-margin-top mobile-ml-0 col-md-3" : "btn btn-success ml-3 col-12 mobile-margin-top mobile-ml-0 col-md-3"} onClick={this.publishService}>
            { isPublished ? "Unpublish the service" : "Publish the service"}
          </span>
          <span className="btn btn-danger ml-3 col-12 mobile-margin-top mobile-ml-0 col-md-3" onClick={this.deleteService}>Delete the service</span>
        </div>
        <div className="bg-lighter px-4 py-4">
          <div className="d-flex justify-content-between">
            <div>
              <h4>General</h4>
            </div>
          </div>
          <hr className="my-4"/>
          <table className="table table-borderless">
            <tbody>
              <tr><th>Title</th><td>{serv.title}</td></tr>
              <tr><th>Category</th><td>{serv.category && serv.category.label}</td></tr>
              <tr><th>Subcategory</th><td>{(serv.subcategory && serv.subcategory.label ) || "N/A"}</td></tr>
              <tr><th>Client Type</th><td>{clientTypes}</td></tr>
              <tr><th>Industry</th><td>{industry}</td></tr>
              <tr><th>Search Tags</th><td>{tags}</td></tr>
              <tr><th>Country</th><td>{country}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-lighter px-4 py-4 my-5">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Description and pricing</h4>
            </div>
          </div>
          <hr className="my-4"/>
          <table className="table table-borderless">
            <tbody>
              <tr><th>Price</th><td>${serv.price}</td></tr>
              <tr><th>Short Description</th><td>{serv.shortDescription}</td></tr>
              <tr><th>Description</th><td>{serv.longDescription}</td></tr>
              <tr><th>Client Type</th><td>{clientTypes}</td></tr>
              <tr><th>Delivery Time</th><td>{serv.deliveryTime.amount + ' ' + serv.deliveryTime.unit}</td></tr>
              <tr><th>Estimated Time Delivery</th><td>
                <Moment format="DD MMMM YYYY">
                  {serv.estimatedTime}
                </Moment>
                </td></tr>
            </tbody>
          </table>
        </div>
        <div className="bg-lighter px-4 py-4 my-5">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Frequently asked questions</h4>
            </div>
          </div>
          <hr className="my-4"/>
          <table className="table table-borderless">
            <tbody>
              {serv.faq.map((qa, i) => {
                return (
                  <React.Fragment key={i}>
                    <tr><th className="w-25">Question</th><th>{qa.question}</th></tr>
                    <tr><th className="w-25">Answer</th><td>{qa.answer}</td></tr>
                  </React.Fragment>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-lighter px-4 py-4 my-5">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Requirements</h4>
            </div>
          </div>
          <hr className="my-4"/>
          <table className="table table-borderless">
            <tbody>
              {serv.requirements.map((req, i) => {
                return (
                  <tr key={i}><th className="w-25">Requirement {i + 1}</th><td>{req.requirement} ({req.type || 'Text'})</td></tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userInfo } = authUser;
  const { services } = data;

  return {
    userInfo,
    services
  };
};

const mapActionToProps = {
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FixFeesDetail));

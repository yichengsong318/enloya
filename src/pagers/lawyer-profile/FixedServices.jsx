import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import FixedServiceCard from "../../shared/FixedServiceCard";
import { get } from "../../helpers/RemoteApi";

export class FixedServices extends Component {
  constructor(props) {
    super(props);

    this.shouldLoad = true;
  }

  shouldComponentUpdate() {
    if (this.shouldLoad) {
      const {readData} = this.props;
      if (this.props.lawyerId) {
        readData('services', {lawyer: this.props.lawyerId, isPublished: true});
        readData('licences', {lawyer: this.props.lawyerId});
        this.shouldLoad = false;
      } else if (this.props.publicLink) {
        get('lawyers/by-public-link', {publicLink: this.props.publicLink}).then(res => {
          readData('services', {lawyer: res.data.id, isPublished: true});
          readData('licences', {lawyer: res.data.id});
          this.shouldLoad = false;
        })
      }
    }
    return true;
  }

  render () {
    const {licences} = this.props;
    const formatedLicences = licences &&licences.map(l => l.country);
    const uniqueLicencedIn = formatedLicences&&formatedLicences.filter((v, i, a) => a.indexOf(v) === i)

    return (
      <div className="px-2 pb-4 fixed-services">
        <div className="row mx-auto">
          {this.props.services.map(srv => {
            return (
              <div className="col-sm-4 px-1" key={srv.id}>
                <FixedServiceCard
                  kind="lawyer_profile"
                  sid={srv.id}
                  name={srv.title}
                  company={srv.lawyer && srv.lawyer.companyName}
                  price={srv.price}
                  currency={srv.currency}
                  deliverable={srv.deliverable}
                  category={srv.category && srv.category.label}
                  deliveryTime={srv.deliveryTime}
                  fullDescription={srv.longDescription}
                  lawyer={srv.lawyer && srv.lawyer}
                  licencedCities={uniqueLicencedIn && uniqueLicencedIn}
                  />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userInfo } = authUser;
  const { services, licences } = data;

  return {
    userInfo,
    services,
    licences
  };
};

const mapActionToProps = {
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FixedServices));

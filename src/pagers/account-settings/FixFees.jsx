import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../../redux/actions";
import { withRouter, Link } from "react-router-dom";
import FixedServiceCard from "../../shared/FixedServiceCard";


export class FixFees extends Component {
  componentDidMount() {
    const {readData} = this.props;
    readData('services', {lawyer: this.props.userInfo.id});
    readData('licences', 'licences');
  }

  render () {
    const {licences} = this.props;
    const formatedLicences = licences &&licences.map(l => l.country);
    const uniqueLicencedIn = formatedLicences&&formatedLicences.filter((v, i, a) => a.indexOf(v) === i)
    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-2 mb-3 pl-4">Fix-fee Services</h2>
        <div className="pb-4 text-right">
          <Link to="/account-settings/fix-fee-services-create"
            className="btn btn-yellow px-5">Create a new service</Link>
        </div>
        <div className="py-4 fixed-services">
          <div className="row mx-auto">
            {this.props.services.map(srv => {
              return (
                <div className="col-sm-12 col-md-6 px-1" key={srv.id}>
                  <FixedServiceCard
                    kind="lawyer_services"
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
    licences,
  };
};

const mapActionToProps = {
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FixFees));

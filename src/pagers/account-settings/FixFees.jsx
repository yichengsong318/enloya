import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import FixedServiceCard from "../../shared/FixedServiceCard";


export class FixFees extends Component {
  componentDidMount() {
    const {readData} = this.props;
    readData('services', {lawyer: this.props.userInfo.id});
  }

  render () {
    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-2 mb-3 pl-4">Fix-fee Services</h2>
        <div className="pb-4 text-right">
          <a href="/account-settings/fix-fee-services-create" className="btn btn-primary px-5">Create a new service</a>
        </div>
        <div className="px-2 py-4 fixed-services">
          <div className="row mx-auto p-2">
            {this.props.services.map(srv => {
              return (
                <div className="col-sm-4" key={srv.id}>
                  <FixedServiceCard
                    kind="lawyer_services"
                    sid={srv.id}
                    name={srv.title}
                    company={srv.lawyer.companyName}
                    price={srv.price}
                    service={srv.category.label}
                    description={srv.shortDescription}
                    fullDescription={srv.longDescription}
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
)(FixFees));

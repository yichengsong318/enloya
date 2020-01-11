import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import FixedServiceCard from "../../shared/FixedServiceCard";


export class FixedServices extends Component {
  componentDidMount() {
    const {readData} = this.props;
    readData('services', {lawyer: this.props.lawyerId, isPublished: true});
  }

  render () {
    return (
      <div className="px-2 py-4 fixed-services">
        <div className="row mx-auto p-2">
          {this.props.services.map(srv => {
            return (
              <div className="col-sm-3" key={srv.id}>
                <FixedServiceCard
                  kind="lawyer_profile"
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
)(FixedServices));

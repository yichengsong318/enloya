import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../../redux/actions";
import { withRouter } from "react-router-dom";

export class Orders extends Component {
  componentDidMount() {
    const {readData} = this.props;
    const params = this.props.userType === 'lawyer' ? {lawyer: this.props.userInfo.id} : {client: this.props.userInfo.id}; 
    readData('orders', params);
  }

  render () {
    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-2 mb-3 pl-4">Orders</h2>
        <div className="pb-4 text-right">
        </div>
        <div className="py-4 fixed-orders">
          <div className="row mx-auto">
            {this.props.orders.map(order => {
              return (
                <div className="col-sm-8 px-1" key={order.id}>
                  <div className="d-flex justify-content-between">
                    <h6 className="my-2">{order.serviceData.service.title}</h6>
                    <h6 className="my-2">{order.client.firstname + ' ' + order.client.lastname}</h6>
                  </div>
                  <hr/>
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
  const { userInfo, userType } = authUser;
  const { orders } = data;

  return {
    userInfo,
    userType,
    orders
  };
};

const mapActionToProps = {
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(Orders));

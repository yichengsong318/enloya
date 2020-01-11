import React, {Component} from 'react';
import { connect } from "react-redux";
import { readData } from "../redux/actions";
import { get } from '../helpers/RemoteApi';
import { withRouter } from "react-router-dom";
import queryString from 'query-string';
import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';

export class FixFeesShow extends Component {

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

  render () {
    const serv = this.state.service;
    // const clientTypes = serv.types.map(t => t.label).join(', ');
    // const industry = serv.industries.map(t => t.label).join(', ');
    // const isPublished = serv.isPublished;

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 container mt-5 pt-5">
          <AlertArea/>
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="bg-white p-5 my-5">
                <h2 className="text-left common-title mb-4">{serv.title}</h2>
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <h4 className="text-16">{serv.category && serv.category.label}</h4>
                    <div className="price-fixed">${serv.price}</div>
                  </div>
                  <div className="col-sm-6">
                    <h4 className="text-16">{(serv.subcategory && serv.subcategory.label ) || "N/A"}</h4>
                    <div>{serv.lawyer.companyName}</div>
                  </div>
                </div>
                <p className="text-justify">
                  {serv.shortDescription}
                </p>
                <p className="text-justify">
                  {serv.longDescription}
                </p>
                <div><span className="text-bold">Delivery Time:</span> {serv.deliveryTime.amount + ' ' + serv.deliveryTime.unit}</div>
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <h4>FAQ</h4>
                    {serv.faq.map((qa, i) => {
                      return (
                        <React.Fragment key={i}>
                          <p className="text-bold mt-3">{qa.question}</p>
                          <p className="text-justify">{qa.answer}</p>
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-sm-12">
                    <h4>Requirements</h4>
                    {serv.requirements.map((req, i) => {
                      return (
                        <React.Fragment key={i}>
                          <p className="text-bold mt-3">Requirement {i + i}</p>
                          <p className="text-justify">{req.requirement}</p>
                        </React.Fragment>
                      )
                    })}
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-sm-7 d-flex ml-auto mr-minus">
                    <a className="btn_get btn_hover" href="/">Send a message</a>
                    <a className="btn btn_get btn_get_two ml-2" href="/">Book a consultation</a>
                  </div>
                </div> */}
              </div>
            </div>
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
)(FixFeesShow));

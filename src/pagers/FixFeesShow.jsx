import React, {Component} from 'react';
import { connect } from "react-redux";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { readData, addToCart, removeFromCart } from "../redux/actions";
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

  handleCopyUrl = () => {
      this.setState({ copied: true });
      setTimeout(() => {
        this.setState({ copied: false });
      }, 5000);
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
    const params = queryString.parse(this.props.location.search);
    const shareLink = `${window.origin}/fix-fee-services-show?sid=${params.sid}`;

    const isInCart = this.props.cartServices.find(cs => cs === serv.id);

    // const contStyle = {
    //   link: {
    //     fontWeight: "bold",
    //     color: "#fff",
    //     textDecoration: "underline",
    //   }
    // }

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" q="team_url"/>
        <div className="h-100 container mt-5 pt-5">
          <AlertArea/>
          <div className="row">
            <div className="col-sm-8 mx-auto">
              <div className="bg-white my-5 border-radius-8">
                <div className="px-5 pt-5 bg-blurd pb-2">
                    <div className="row">
                      <div className="col-md-11 col-lg-11 col-sm-11">
                          <h2 className="text-left common-title mb-4 text-white">{serv.title}</h2>
                      </div>
                      <div className="col-md-1 col-lg-1 col-sm-1 text-right">
                      { this.state.copied ? (<span className="copied-success text-white mt-3">Fix fee service URL Copied!</span>) : ''}
                      <CopyToClipboard
                          text={shareLink}
                          onCopy={this.handleCopyUrl}
                      >
                        <img alt="" src={require("../img/share-icon.png")} className="h-20 cursor-pointer"/>
                      </CopyToClipboard>
                      </div>
                    </div>
                    <div className="row mb-4">
                      <div className="col-sm-12">
                        <h4 className="text-16">
                          <a href={`lawyer-profile/${serv.lawyer && serv.lawyer.id}`} className="text-white text-bold text-underlined">{serv.lawyer.firstname && serv.lawyer.firstname} {serv.lawyer.lastname && serv.lawyer.lastname}</a>
                        </h4>
                      </div>
                      <div className="col-sm-6">
                        <h4 className="text-16 text-white">{serv.category && serv.category.label}</h4>
                        <div className="price-fixed text-white">{
                          serv.currency === '$' || serv.currency === 'CHF' ? 
                            serv.currency + '' + serv.price : 
                            serv.currency === '€' ? serv.price + '€' : '$' + serv.price}</div>
                      </div>
                      <div className="col-sm-6">
                        <h4 className="text-16 text-white">{(serv.subcategory && serv.subcategory.label ) || "N/A"}</h4>
                        {/* <div>{serv.lawyer.companyName}</div> */}
                      </div>
                    </div>
                </div>
                <div className="p-5">
                    <p className="text-justify">
                      {serv.shortDescription}
                    </p>
                    <p className="text-justify">
                      {serv.longDescription}
                    </p>
                    <div><span className="text-bold">Deliverable:</span> {serv.deliverable || ' '}</div>
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
                              <p className="text-bold mt-3">Requirement {i + 1}</p>
                              <p className="text-justify">{req.requirement}</p>
                            </React.Fragment>
                          )
                        })}
                      </div>
                      <div className="col-sm-12 text-right">
                        {
                          isInCart ?
                          <span className="badge badge-secondary px-4 py-2">Added to the cart</span>
                          :
                          <button className="btn btn-yellow px-5 bg-yellow"  onClick={() => {this.props.addToCart(serv.id)}}>
                            Save and add to cart
                          </button>
                        }
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data, cart }) => {
  const { userInfo } = authUser;
  const { services } = data;
  const { cartServices } = cart;

  return {
    userInfo,
    services,
    cartServices
  };
};

const mapActionToProps = {
  readData,
  addToCart,
  removeFromCart
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FixFeesShow));

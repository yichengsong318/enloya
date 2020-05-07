import React, { Component } from 'react';
import { connect } from "react-redux";
import { get } from "../helpers/RemoteApi";
import { readData } from "../redux/actions";
import { withRouter } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import { FormCheck } from '../shared/FormElement';

import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import FixedServiceCardNew from "../shared/FixedServiceCardNew";
import queryString from 'query-string';

export class ServiceSearchResults extends Component {
  constructor (props) {
    super(props);

    const params = queryString.parse(this.props.location.search) || {};

    this.state = {
      isGrid: true,
      pagination: 9,
      pageStep: 9,
      serviceResults: [],
      filter: {
        subcategories: [],
        categories: [],
        industries: [],
        clientTypes: []
      },
      query: {
        search: params.q || '',
        country: params.c || '',
      },
      more: {
        subcategories: false,
        categories: false,
        clientTypes: false
      }
    };
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('categories');
    readData('client-types');

    this.search();
  }

  componentDidUpdate(prevProps) {
    const oldParams = queryString.parse(prevProps.location.search) || {};
    const params = queryString.parse(this.props.location.search) || {};

    if (!(oldParams.q === params.q && oldParams.c === params.c)) {
      this.setState({
        query: {
          search: params.q || '',
          country: params.c || '',
        }
      }, () => {
        this.search();
      });
    }
  }

  search = () => {
    get('services/search', {filter: this.state.filter, query: this.state.query}).then(res => {
      this.setState({
        serviceResults: res.data
      });
    });
  };

  handleFilterChange = (name, value, add) => {
    if (value) {
      value = [...this.state.filter[name], add];
    } else {
      value = this.state.filter[name].filter(elm => elm !== add);
    }
    this.setState({filter: {...this.state.filter, [name]: value}}, () => {
      this.search();
    });
  };

  handleQueryChange = (name, value) => {
    this.setState({query: {...this.state.query, [name]: value}});
  };

  showMore = (name) => {
    this.setState({more: {...this.state.more, [name]: !this.state.more[name]}});
  };

  showMoreItems = () => {
    this.setState({pagination: this.state.pagination + this.state.pageStep});
  };

  toggle = () => {
    this.setState({isGrid: !this.state.isGrid});
  }

  render () {
    const partFilter = 3;
    const isGrid = this.state.isGrid;

    const { clientTypes, categories } = this.props;

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
        <div className="pb-3 mt_75">
          <div className="container">
            <AlertArea/>
          </div>
          {/* <div className="container-fluid bg-light-blue pt-3 pb-1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-sm-4">
                  <FormInput placeholder="Search" type="text"
                    value={this.state.query.search}
                    name="search" onChange={this.handleQueryChange}
                    noLabel noHelp />
                </div>
                <div className="col-sm-2">
                  <button type="button" className="btn btn-yellow px-5"
                    onClick={() => {this.search()}}>Search</button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="h-100 container">
          <div className="mb-2 d-flex justify-content-between align-items-center mt-5">
            <h3 className="text-left common-title">Showing results</h3>
            <div onClick={this.toggle} className="c-pointer">
            { isGrid ?
              <div>
                <span>List</span>
                <FontAwesomeIcon icon={faThList} className="text-dark ml-2" />
              </div>
              :
              <div>
                <span>Grid</span>
                <FontAwesomeIcon icon={faTh} className="text-dark ml-2" />
              </div>
            }
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <div className="mb-3">
                <h5>Category</h5>
                {categories
                  .filter(cat => !cat.parent)
                  .map(cat => {
                    return (
                      <FormCheck id={"check-" + cat.id} key={cat.id} label={cat.label} val={cat.id}
                        name="categories" onChange={this.handleFilterChange}
                        />
                    );
                  }).slice(0, this.state.more.categories ? categories.length : partFilter)}
                <span className="btn btn-link" onClick={() => {this.showMore('categories')}}>
                  {this.state.more.categories ? 'Show less' : 'Show all'}
                </span>
              </div>

              <div className="mb-3">
                <h5>Subcategory</h5>
                {categories
                  .filter(cat => cat.parent)
                  .map(cat => {
                    return (
                      <FormCheck id={"checksub-" + cat.id} key={cat.id} label={cat.label} val={cat.id}
                        name="subcategories" onChange={this.handleFilterChange}
                        />
                    );
                  }).slice(0, this.state.more.subcategories ? categories.length : partFilter)}
                <span className="btn btn-link" onClick={() => {this.showMore('subcategories')}}>
                  {this.state.more.subcategories ? 'Show less' : 'Show all'}
                </span>
              </div>


              <div className="mb-3">
                <h5>Client Type</h5>
                {clientTypes.map(ltype => {
                  return (
                    <FormCheck id={"check-" + ltype.id} key={ltype.id} label={ltype.label} val={ltype.id}
                      name="clientTypes" onChange={this.handleFilterChange}
                      />
                  );
                }).slice(0, this.state.more.clientTypes ? clientTypes.length : partFilter)}
                <span className="btn btn-link" onClick={() => {this.showMore('clientType')}}>
                  {this.state.more.clientTypes ? 'Show less' : 'Show all'}
                </span>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="mb-5 mx-auto">
                <div className="row mt-3">
                  {
                    this.state.serviceResults.map(service => {
                      const isInCart = this.props.cartServices.find(cs => cs === service.id);
                      return (
                        <div key={service.id} className={ isGrid ? "col-sm-6 mb-3" : "col-sm-12 mb-3"} >
                          {/*<FixedServiceCard
                            kind="lawyer_profile"
                            sid={service.id}
                            name={service.title}
                            company={service.lawyer && service.lawyer.companyName}
                            price={service.price}
                            category={service.category && service.category.label}
                            deliveryTime={service.deliveryTime}
                            fullDescription={service.longDescription}
                            />*/}
                          <FixedServiceCardNew
                            kind="lawyer_profile"
                            sid={service.id}
                            name={service.title}
                            company={service.lawyer && service.lawyer.companyName}
                            price={service.price}
                            category={service.category && service.category.label}
                            deliveryTime={service.deliveryTime}
                            fullDescription={service.longDescription}
                            lawyer={service.lawyer}
                            isGrid={isGrid}
                            isInCart={isInCart}
                            />
                        </div>
                      );
                    }).slice(0, this.state.pagination)
                  }
                </div>
                {
                  this.state.pagination < this.state.serviceResults.length &&

                  <div className="btn btn-default btn-block bg-white py-2 font-weight-bold"
                  onClick={() => {this.showMoreItems()}}>
                    Show more results
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <Footer FooterData={FooterData} kind="otherPage"/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data, cart }) => {
  const { userInfo } = authUser;
  const { services, categories, clientTypes } = data;
  const { cartServices } = cart;

  return {
    userInfo,
    services,
    categories,
    clientTypes,
    cartServices
  };
};

const mapActionToProps = {
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(ServiceSearchResults));

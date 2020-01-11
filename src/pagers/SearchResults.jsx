import React, { Component } from 'react';
import { connect } from "react-redux";
import { get } from "../helpers/RemoteApi";
import { readData } from "../redux/actions";
import { withRouter } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import AlertArea from '../components/AlertArea';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

import { FormInput, FormCheck } from '../shared/FormElement';

import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LawyerCard from '../shared/LawyerCard';

export class SearchResults extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isGrid: true,
      pagination: 9,
      pageStep: 9,
      lawyerResults: [],
      filter: {
        languages: [],
        specializations: [],
        lawyerTypes: []
      },
      query: {
        name: '',
        licencedIn: '',
        location: '',
        university: ''
      },
      more: {
        languages: false,
        specializations: false,
        lawyerTypes: false
      }
    };
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('specializations');
    readData('lawyer-types');
    readData('languages');

    this.search();
  }

  search = () => {
    get('lawyers/search', {filter: this.state.filter, query: this.state.query}).then(res => {
      this.setState({
        lawyerResults: res.data
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

    const { lawyerTypes, languages, specializations } = this.props;

    return (
      <div className="App">
        <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
        <div className="py-5 mt_100">
          <div className="container">
            <AlertArea/>
            <div className="row">
              <div className="col-sm-4">
                <FormInput placeholder="Name" type="text" 
                  value={this.state.query.name}
                  name="name" onChange={this.handleQueryChange}
                  noLabel noHelp />
              </div>
              <div className="col-sm-4">
                <FormInput placeholder="Location" type="text" 
                  value={this.state.query.location}
                  name="location" onChange={this.handleQueryChange}
                  noLabel noHelp />
              </div>
              <div className="col-sm-4">
                <FormInput placeholder="Licensed in" type="text" 
                  value={this.state.query.licencedIn}
                  name="licencedIn" onChange={this.handleQueryChange}
                  noLabel noHelp />
              </div>
              <div className="col-sm-4">
                <FormInput placeholder="University" type="text" 
                  value={this.state.query.university}
                  name="university" onChange={this.handleQueryChange}
                  noLabel noHelp />
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-primary px-5" 
                  onClick={() => {this.search()}}>Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-100 container">
          <div className="my-4 d-flex justify-content-between align-items-center">
            <h3 className="text-left common-title mb-3">Showing results</h3>
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
                <h5>Level of experience</h5>
                <FormCheck id="junior" label="Junior" />
                <FormCheck id="midlevel" label="Mid Level" />
                <FormCheck id="senior" label="Senior" />
              </div>
              <div className="mb-3">
                <h5>Language</h5>
                {languages.map(lang => {
                  return (
                    <FormCheck id={"check-" + lang.id} key={lang.id} label={lang.label} val={lang.id}
                      name="languages" onChange={this.handleFilterChange}
                      />
                  );
                }).slice(0, this.state.more.language ? languages.length : partFilter)}
                <span className="btn btn-link" onClick={() => {this.showMore('language')}}>
                  {this.state.more.language ? 'Show less' : 'Show all'}
                </span>
              </div>
              
              <div className="mb-3">
                <h5>Specialization</h5>
                {specializations.map(spec => {
                  return (
                    <FormCheck id={"check-" + spec.id} key={spec.id} label={spec.label} val={spec.id}
                      name="specializations" onChange={this.handleFilterChange}
                      />
                  );
                }).slice(0, this.state.more.specialization ? specializations.length : partFilter)}
                <span className="btn btn-link" onClick={() => {this.showMore('specialization')}}>
                  {this.state.more.specialization ? 'Show less' : 'Show all'}
                </span>
              </div>
              <div className="mb-3">
                <h5>Lawyer Type</h5>
                {lawyerTypes.map(ltype => {
                  return (
                    <FormCheck id={"check-" + ltype.id} key={ltype.id} label={ltype.label} val={ltype.id}
                      name="lawyerTypes" onChange={this.handleFilterChange}
                      />
                  );
                }).slice(0, this.state.more.lawyerType ? lawyerTypes.length : partFilter)}
                <span className="btn btn-link" onClick={() => {this.showMore('lawyerType')}}>
                  {this.state.more.lawyerType ? 'Show less' : 'Show all'}
                </span>
              </div>
            </div>
            <div className="col-sm-9">
              <div className="mb-5 mx-auto">
                <div className="row">
                  {
                    this.state.lawyerResults.map(lawyer => {
                      const licencedCities = lawyer.licences && lawyer.licences.map(l => l.where).join(', '); 

                      return (
                        <div key={lawyer.id} className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3"} >
                          <LawyerCard type={isGrid ? "grid" : "list"}
                            lid={lawyer.id}
                            profilePic={lawyer.profilePic}
                            name={lawyer.firstname + ' ' + lawyer.lastname} 
                            title={lawyer.title} expertises={lawyer.specializations.map(s => s.label).join(', ')}
                            location={lawyer.location} languages={lawyer.languages.map(s => s.label).join(', ')}
                            status="Government ID Verified" registration={"Tradmark registration in " + licencedCities} />
                        </div>
                      );
                    }).slice(0, this.state.pagination)
                  }
                </div>
                { 
                  this.state.pagination < this.state.lawyerResults.length &&   
                  
                  <div className="btn btn-default btn-block bg-white py-2 font-weight-bold" 
                  onClick={() => {this.showMoreItems()}}>
                    Show more results
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <FooterTwo FooterData={FooterData}/>
      </div>
    );
  }
}

const mapStateToProps = ({ authUser, data }) => {
  const { userInfo } = authUser;
  const { services, specializations, lawyerTypes, languages } = data;

  return { 
    userInfo, 
    services,
    specializations,
    lawyerTypes,
    languages
  };
};

const mapActionToProps = {
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(SearchResults));

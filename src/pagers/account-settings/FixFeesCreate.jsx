import React, {Component} from 'react';
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { createData, readData } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import countries from "../../constants/fullCountries";

import { FormCheck, FormInput, FormSelect, FormTextArea, FormTag, FormDate } from '../../shared/FormElement';

export class FixFeesCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      service: {
        title: '',
        categoryId: '',
        subcategoryId: '',
        typeInputs: '',
        industryInputs: '',
        price: '',
        shortDescription: '',
        longDescription: '',
        deliveryTimeLength: 0,
        deliveryTimeUnits: '',
        estimatedTime: '',
        tags: [],
        faq: [],
        country: '',
        requirements: []
      },
      requirement: '',
      qQuestion: '',
      qAnswer: ''
    };
  } 

  componentDidMount() {
    const {readData, userInfo} = this.props;
    readData('client-types');
    readData('industries');
    readData('categories');
    readData('licences', {lawyer: userInfo.id});
  }

  onFormSubmit = () => {

    let s = {
      ...this.state.service, 
      lawyerId: this.props.userInfo.id,
    };

    s.deliveryTime = {
      amount: s.deliveryTimeLength,
      unit: s.deliveryTimeUnits
    };

    delete s.deliveryTimeLength;
    delete s.deliveryTimeUnits;

    if (!this.props.loading) {
      this.props.createData('services', s, () => {
        NotificationManager.success(
          "The service was successfully created!",
          "Success !",
          3000,
          null,
          null,
          ''
        );
        this.props.history.push('/account-settings/fix-fee-services');
      });
    }
  }

  onAddQuestion = () => {
    this.setState({service: {
      ...this.state.service, 
      faq: [...this.state.service.faq, {
        question: this.state.qQuestion,
        answer: this.state.qAnswer
      }]
    }});

    this.setState({qQuestion: ''});
    this.setState({qAnswer: ''});
  };

  deleteQuestion = (index) => {
    this.setState({service: {
      ...this.state.service, 
      faq: this.state.service.faq.filter((qa, i) => i !== index)
    }});
  };

  onAddRequirement = () => {
    this.setState({service: {
      ...this.state.service, 
      requirements: [...this.state.service.requirements, {
        requirement: this.state.requirement
      }]
    }});

    this.setState({requirement: ''});
  };

  deleteRequirement = (index) => {
    this.setState({service: {
      ...this.state.service, 
      requirements: this.state.service.requirements.filter((r, i) => i !== index)
    }});
  };

  handleFormChange = (name, value, add) => {
    if (name === 'typeInputs') {
      if (value) {
        value = [...this.state.service.typeInputs, add];
      } else {
        value = this.state.service.typeInputs.filter(ti => ti !== add);
      }

      this.setState({service: {...this.state.service, [name]: value}});
    } else if (name === 'industryInputs') {
      value = [value];
      this.setState({service: {...this.state.service, [name]: value}});
    } else if (name === 'qQuestion') {
      this.setState({qQuestion: value});
    } else if (name === 'qAnswer') {
      this.setState({qAnswer: value});
    } else if (name === 'requirement') {
      this.setState({requirement: value});
    } else {
      this.setState({service: {...this.state.service, [name]: value}});
    }
  };

  getMax = (arr, attrib) => {
    return (arr.length && arr.reduce(function(prev, curr){
        return prev[attrib] > curr[attrib] ? prev : curr;
    })) || null;
  };

  render () {
    const { categories, clientTypes, industries, licences } = this.props;

    const lastLicence = licences && this.getMax(licences, 'since');
    const defaultCountry = lastLicence && lastLicence.country;

    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-3 mb-5">Create New Fixed-Fee Service</h2>
        <div className="bg-lighter px-4 py-4">
          <h4>General</h4>
          <hr className="my-4"/>
          <div className="row">
            <div className="col-sm-6">
              <FormInput label="Title" type="text" id="serv-title" 
                value={this.state.service.title} 
                name="title" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-4 d-flex justify-content-start align-items-center">
              <div className="small mt-3">50 Characters max</div>
            </div>
            <div className="col-sm-6">
              <FormSelect label="Category" id="category" 
                selected={this.state.service.categoryId}
                name="categoryId" onChange={this.handleFormChange}
                  choices={categories
                    .filter(cat => !cat.parent)
                    .map(ind => {ind.value = ind.id; return ind})}
                noHelp/>
            </div>
            <div className="col-sm-6">
              <FormSelect label="Sub Category" id="subcategory" 
                selected={this.state.service.subcategoryId}
                name="subcategoryId" onChange={this.handleFormChange}
                choices={categories
                    .filter(cat => cat.parent && cat.parent.id === this.state.service.categoryId)
                    .map(ind => {ind.value = ind.id; return ind})}
                noHelp/>
            </div>
            <div className="col-sm-4 my-4">
              <h4>Client Type</h4>
              {clientTypes.map(ctp => {
                return (
                  <FormCheck id={"check-" + ctp.id} key={ctp.id} label={ctp.label} val={ctp.id}
                    name="typeInputs" onChange={this.handleFormChange}
                    />
                );
              })}
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-6">
              <FormSelect label="Industries" id="industry" 
                selected={this.state.service.industryInputs}
                name="industryInputs" onChange={this.handleFormChange}
                choices={industries.map(ind => {ind.value = ind.id; return ind})}
                noHelp/>
            </div>
            <div className="col-sm-8">
              <FormTag label="Search Tags" type="text" id="search" 
                value={this.state.service.tags} 
                name="tags" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-8">
              <FormSelect label="Country" id="countries" selected={this.state.service.country || defaultCountry} 
                name="country" onChange={this.handleFormChange}
                choices={countries} noHelp />
            </div>
          </div>
        </div>
        <div className="bg-lighter px-4 py-4 my-5">
          <h4>Description and pricing</h4>
          <hr className="my-4"/>
          <div className="row">
            <div className="col-sm-6">
              <FormInput label="Price" type="number" id="price" 
                value={this.state.service.price} 
                name="price" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-6">
              <FormInput label="Short Description" type="text" id="shortDescription" 
                value={this.state.service.shortDescription} 
                name="shortDescription" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-4 d-flex justify-content-start align-items-center">
              <div className="small mt-3">50 Characters max</div>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-9">
              <FormTextArea label="Description" rows="4" id="longDescription" 
                value={this.state.service.longDescription} 
                name="longDescription" onChange={this.handleFormChange} noHelp />
              <div className="small text-right">250 Characters max</div>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-4">
              <FormInput label="Delivery Time (Length)" type="number" id="deliverytimelength" 
                value={this.state.service.deliveryTimeLength} 
                name="deliveryTimeLength" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-4">
              <FormSelect label="Delivery Time (Units)" id="deliverytimeunit" 
                value={this.state.service.deliveryTimeUnits} 
                name="deliveryTimeUnits" onChange={this.handleFormChange}
                choices={[
                  { value: 'days', label: 'Days' },
                  { value: 'hours', label: 'Hours' }
                ]} noHelp />
            </div>
            <div className="col-sm-4">
              <FormDate label="Estimate Time Delivery" id="estimated-time" 
                value={this.state.service.estimatedTime}
                name="estimatedTime" onChange={this.handleFormChange} noHelp/>
            </div>
          </div>
        </div>
        <div className="bg-lighter px-4 py-4 my-5">
          <h4>Frequently asked questions</h4>
          <hr className="my-4"/>
          <div className="row">
            <div className="col-sm-9">
              {this.state.service.faq.map((qa,i) => {
                return (
                  <div key={i} className="d-flex justify-content-between mb-4">
                    <div>
                      <div>Q: <strong>{qa.question}</strong></div>
                      <div>A: {qa.answer}</div>
                    </div>
                    <div>
                      {/* <span className="btn btn-link mr-1" onClick={() => {this.startLEditing(licence)}}>Edit</span> */}
                      <span className="btn btn-link" onClick={() => {this.deleteQuestion(i)}}>Delete</span>
                    </div>
                  </div>
                )
              })}
              <FormTextArea label="Question" rows="2" id="question" 
                value={this.state.qQuestion} 
                name="qQuestion" onChange={this.handleFormChange}
                noHelp />
              <div className="small text-right">500 Characters max</div>
              <FormTextArea label="Answer" rows="2" id="answer" 
                value={this.state.qAnswer} 
                name="qAnswer" onChange={this.handleFormChange}
                noHelp />
              <div className="small text-right">500 Characters max</div>
              <div className="py-4 text-right">
                <button type="button" onClick={this.onAddQuestion} className="btn btn-primary px-5">Add Question</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lighter px-4 py-4 my-5">
          <h4>Please provide your clients a list of requirements</h4>
          <p className="font-italic">Structure your instructions as free text, multiple choice of file upload</p>
          <hr className="my-4"/>
          {this.state.service.requirements.map((r,i) => {
            return (
              <div key={i} className="d-flex justify-content-between mb-4">
                <div>
                  <div>Requirement: {r.requirement}</div>
                </div>
                <div>
                  <span className="btn btn-link" onClick={() => {this.deleteRequirement(i)}}>Delete</span>
                </div>
              </div>
            )
          })}
          <div className="bg-white p-4">
            <FormInput label="Please provide a requirement" type="text" id="requirement" 
              value={this.state.requirement} 
              name="requirement" onChange={this.handleFormChange}
              noHelp />
          </div>
          <div className="py-4 text-right">
            <button type="button" onClick={this.onAddRequirement} className="btn btn-primary px-5">Add requirement</button>
          </div>
        </div>
        <div className="pb-4 text-right">
          <button type="button" onClick={this.onFormSubmit} className="btn btn-primary px-5">Publish</button>
        </div>
      </div>
    );
  }  
}


const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { clientTypes, industries, categories, licences } = data;

  return { 
    userType, 
    userInfo, 
    user, 
    clientTypes,
    industries,
    categories,
    licences
  };
};

const mapActionToProps = {
  createData,
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FixFeesCreate));

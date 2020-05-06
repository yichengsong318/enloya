import React, {Component} from 'react';
import { connect } from "react-redux";
import { NotificationManager } from "react-notifications";
import { updateData, readData } from "../../redux/actions";
import { get } from '../../helpers/RemoteApi';
import queryString from 'query-string';
import { withRouter } from "react-router-dom";
import countries from "../../constants/fullCountries";

import { FormCheck, FormInput, FormSelect, FormTextArea, FormTag, FormDate } from '../../shared/FormElement';

export class FixFeesEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceId: '',
      service: {
        title: '',
        categoryId: '',
        subcategoryId: '',
        typeInputs: [],
        industryInputs: '',
        price: '',
        currency: '',
        deliverable: '',
        shortDescription: '',
        longDescription: '',
        deliveryTimeLength: 0,
        deliveryTimeUnits: '',
        estimatedTime: null,
        tags: [],
        faq: [],
        country: '',
        requirements: []
      },
      requirementType: '',
      requirement: '',
      qQuestion: '',
      qAnswer: ''
    };
  }

  componentDidMount() {
    const {readData} = this.props;
    readData('client-types');
    readData('industries');
    readData('categories');

    const params = queryString.parse(this.props.location.search);
    if (params.sid) {
      get('services/' + params.sid).then((res) => {
        if (res.status === 200) {
          const oldService = res.data;
          console.log(oldService);
          this.setState({
            service: {
              title: oldService.title || '',
              categoryId: oldService.category ? oldService.category.id : '',
              subcategoryId: oldService.subcategory ? oldService.subcategory.id : '',
              typeInputs: oldService.types ? oldService.types.map(t => t.id) : [],
              industryInputs: oldService.industries ? oldService.industries.map(ind => ind.id)[0] : [],
              price: oldService.price || 0,
              currency: oldService.currency || 0,
              deliverable: oldService.deliverable || '',
              shortDescription: oldService.shortDescription || '',
              longDescription: oldService.longDescription || '',
              deliveryTimeLength: oldService.deliveryTime ? oldService.deliveryTime.amount : 0,
              deliveryTimeUnits: oldService.deliveryTime ? oldService.deliveryTime.unit : '',
              tags: oldService.tags || [],
              faq: oldService.faq || [],
              country: oldService.country || '',
              requirements: oldService.requirements || []
            },
            serviceId: oldService.id
          }
        );
        }
      });
    }
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
      this.props.updateData('services', this.state.serviceId, s, () => {
        NotificationManager.success(
          "The service was successfully updated!",
          "Success !",
          3000,
          null,
          null,
          ''
        );
        this.props.history.push("/account-settings/fix-fee-services-detail?sid=" +  this.state.serviceId);
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
        requirement: this.state.requirement,
        type: this.state.requirementType
      }]
    }});

    this.setState({requirement: '', requirementType: 'Text'});
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

  render () {
    const { categories, clientTypes, industries } = this.props;

    const tags = this.state.service.tags.map(tag => {
      return {
        label: tag,
        value: tag.toLowerCase().replace(/\W/g, ''),
      };
    });

    console.log(this.state.service)

    return (
      <div className="py-4 px-2 account-settings">
        <h2 className="mt-3 mb-5">Update Fixed-Fee Service</h2>
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
                choices={categories.map(ind => {ind.value = ind.id; return ind})}
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
                    value={this.state.service.typeInputs.includes(ctp.id)}
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
                selected={tags}
                name="tags" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-8">
              <FormSelect label="Country" id="countries" selected={this.state.service.country}
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
            <div className="col-sm-4">
              <FormSelect label="Currency" id="currency"
                selected={this.state.service.currency}
                name="currency" onChange={this.handleFormChange}
                choices={[
                  { value: '$', label: 'US Dollars ($)' },
                  { value: '€', label: 'Euro (€)' },
                  { value: 'CHF', label: 'Swiss francs (CHF)' }
                ]} noHelp />
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
            <div className="col-sm-8">
              <FormInput label="Deliverable" type="text" id="deliverable"
                value={this.state.service.deliverable} maxLength={40}
                name="deliverable" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-4">
              <FormInput label="Estimated delivery (Length)" type="number" id="deliverytimelength"
                value={this.state.service.deliveryTimeLength}
                name="deliveryTimeLength" onChange={this.handleFormChange}
                noHelp />
            </div>
            <div className="col-sm-4">
              <FormSelect label="Estimated delivery (Units)" id="deliverytimeunit"
                selected={this.state.service.deliveryTimeUnits}
                name="deliveryTimeUnits" onChange={this.handleFormChange}
                choices={[
                  { value: 'days', label: 'Days' },
                  { value: 'hours', label: 'Hours' }
                ]} noHelp />
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
                <button type="button" onClick={this.onAddQuestion} className="btn btn-yellow px-5">Add Question</button>
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
                  <div>Requirement: {r.requirement} ({r.type || 'Text'})</div>
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
            <FormSelect label="Type of requirement" id="reqtype"
                selected={this.state.requirementType}
                name="requirementType" onChange={this.handleFormChange}
                choices={[{label: 'Text', value: 'Text'}, {label: 'Document', value: 'Document'}]}
                noHelp/>
          </div>
          <div className="py-4 text-right">
            <button type="button" onClick={this.onAddRequirement} className="btn btn-yellow px-5">Add requirement</button>
          </div>
        </div>
        <div className="pb-4 text-right">
          <button type="button" onClick={this.onFormSubmit} className="btn btn-yellow px-5">Update</button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({ authUser, data }) => {
  const { userType, userInfo, user } = authUser;
  const { clientTypes, industries, categories } = data;

  return {
    userType,
    userInfo,
    user,
    clientTypes,
    industries,
    categories
  };
};

const mapActionToProps = {
  updateData,
  readData
}

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(FixFeesEdit));

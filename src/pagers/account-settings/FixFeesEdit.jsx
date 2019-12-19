import React from 'react';

import { FormCheck, FormInput, FormSelect, FormTextArea } from '../../shared/FormElement';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FixFeesEdit() {

  return (
    <div className="py-4 px-2 account-settings">
      <h2 className="mt-2 mb-3">Fixed-Fee Services</h2>
      <div className="bg-lighter px-4 py-4">
        <div className="d-flex justify-content-between">
          <div>
            <h4>General</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-sm-6">
            <FormInput label="Title" type="text" id="pub-title" value="Professionnal Legal Requirements" noHelp />
          </div>
          <div className="col-sm-4 d-flex justify-content-start align-items-center">
            <div className="small mt-3">50 Characters max</div>
          </div>
          <div className="col-sm-6">
            <FormSelect label="Category" id="category" selected="main" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'main', label: 'Main Category' },
              { value: 'two', label: 'Category Two' },
              { value: 'three', label: 'Category Three' }
            ]} noHelp />
          </div>
          <div className="col-sm-6">
            <FormSelect label="Subcategory" id="subcategory" selected="sub" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'sub', label: 'Sub Category' },
              { value: 'two', label: 'Category Two' },
              { value: 'three', label: 'Category Three' }
            ]} noHelp />
          </div>
          <div className="col-sm-4 my-4">
            <h4>Client Type</h4>
            <FormCheck id="check-1" label="SME's" />
            <FormCheck id="check-2" label="Large enterprise" />
            <FormCheck id="check-3" label="Governments" />
            <FormCheck id="check-4" label="NGOs" />
            <FormCheck id="check-5" label="Think tanks" />
            <FormCheck id="check-6" label="International organizations" />
            <FormCheck id="check-7" label="Any client type" />
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-6">
            <FormInput label="Industry" type="text" id="industry" value="Law and Litigation" noHelp />
          </div>
          <div className="col-sm-8">
            <FormInput label="Search Tags" type="text" id="search" value="Law Litigation International" noHelp />
          </div>
        </div>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Description and pricing</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-sm-6">
            <FormInput label="Price" type="text" id="price" value="$499.99" noHelp />
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-6">
            <FormInput label="Short Description" type="text" id="shortdescription" value="Short description goes there" noHelp />
          </div>
          <div className="col-sm-4 d-flex justify-content-start align-items-center">
            <div className="small mt-3">50 Characters max</div>
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-9">
            <FormTextArea label="Description" rows="4" id="description" 
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus," 
              noHelp />
            <div className="small text-right">250 Characters max</div>
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-6">
            <FormSelect label="Delivery Time" id="deliverytime" selected="one" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: '5 days' },
              { value: 'two', label: 'Delivery Two' },
              { value: 'three', label: 'Delivery Three' }
            ]} noHelp />
          </div>
        </div>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Frequently asked questions</h4>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-sm-9">
            <FormTextArea label="Question" rows="4" id="question" 
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,"
              noHelp />
            <div className="small text-right">500 Characters max</div>
            <FormTextArea label="Answer" rows="4" id="answer" 
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, sit amet posuere magna. Donec scelerisque, lacus et dapibus porttitor, nisl purus rutrum lectus,"
              noHelp />
            <div className="small text-right">500 Characters max</div>
            <div className="py-4 text-right">
              <button type="button" className="btn btn-primary px-5">Add Question</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Please provide your clients a list of requirements</h4>
            <p className="font-italic">Structure your instructions as free text, multiple choice of file upload</p>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <hr className="my-4"/>
        <div className="bg-white p-4">
          <div className="float-right">
            <FontAwesomeIcon icon={faPen} className="form-basic-icon mr-2" />
            <FontAwesomeIcon icon={faTrash} className="form-basic-icon mr-2" />
          </div>
          <FormTextArea label="Please provide a requirement" rows="4" id="answer"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna"
            noHelp />
          <div className="row">
            <div className="col-sm-6">
              <FormSelect id="answertype" selected="" choices={[
                { value: 'undefined', label: 'Answer Type' },
                { value: 'one', label: '5 days' },
                { value: 'two', label: 'Delivery Two' },
                { value: 'three', label: 'Delivery Three' }
              ]} noHelp />              
            </div>
            <div className="col-sm-6 text-right">  
              <button type="button" className="btn btn-link px-4">Cancel</button>              
              <button type="button" className="btn btn-primary px-4">Add</button>              
            </div>
          </div>
        </div>  

        <div className="py-2 text-left">
          <span className="btn btn-link px-0">Add Another requirement</span>          
        </div>
      </div>
      <div className="pb-4 text-right">
        <button type="button" className="btn btn-primary px-5">Update</button>
      </div>
    </div>
  );
}

export default FixFeesEdit;

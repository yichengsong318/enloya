import React from 'react';

import { FormCheck, FormInput, FormSelect, FormTextArea } from '../../shared/FormElement';
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FixFeesCreate() {

  return (
    <div className="py-4 px-2 account-settings">
      <h2 className="mt-3 mb-5">Create New Fixed-Fee Service</h2>
      <div className="bg-lighter px-4 py-4">
        <h4>General</h4>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-sm-6">
            <FormInput label="Title" type="text" id="pub-title" noHelp />
          </div>
          <div className="col-sm-4 d-flex justify-content-start align-items-center">
            <div className="small mt-3">50 Characters max</div>
          </div>
          <div className="col-sm-6">
            <FormSelect label="Category" id="category" selected="" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: 'Categorie One' },
              { value: 'two', label: 'Categorie Two' },
              { value: 'three', label: 'Categorie Three' }
            ]} noHelp />
          </div>
          <div className="col-sm-6">
            <FormSelect label="Subcategory" id="subcategory" selected="" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: 'Categorie One' },
              { value: 'two', label: 'Categorie Two' },
              { value: 'three', label: 'Categorie Three' }
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
            <FormInput label="Industry" type="text" id="industry" noHelp />
          </div>
          <div className="col-sm-8">
            <FormInput label="Search Tags" type="text" id="search" noHelp />
          </div>
        </div>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <h4>Description and pricing</h4>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-sm-6">
            <FormInput label="Price" type="number" id="price" noHelp />
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-6">
            <FormSelect label="Short Description" id="shortdescription" selected="" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: 'Description One' },
              { value: 'two', label: 'Description Two' },
              { value: 'three', label: 'Description Three' }
            ]} noHelp />
          </div>
          <div className="col-sm-4 d-flex justify-content-start align-items-center">
            <div className="small mt-3">50 Characters max</div>
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-9">
            <FormTextArea label="Description" rows="4" id="description" noHelp />
            <div className="small text-right">250 Characters max</div>
          </div>
          <div className="col-sm-12"></div>
          <div className="col-sm-6">
            <FormSelect label="Delivery Time" id="deliverytime" selected="" choices={[
              { value: 'undefined', label: 'Please Select' },
              { value: 'one', label: 'Delivery One' },
              { value: 'two', label: 'Delivery Two' },
              { value: 'three', label: 'Delivery Three' }
            ]} noHelp />
          </div>
        </div>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <h4>Frequently asked questions</h4>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-sm-9">
            <FormTextArea label="Question" rows="4" id="question" noHelp />
            <div className="small text-right">500 Characters max</div>
            <FormTextArea label="Answer" rows="4" id="answer" noHelp />
            <div className="small text-right">500 Characters max</div>
            <div className="py-4 text-right">
              <button type="button" className="btn btn-primary px-5">Add Question</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lighter px-4 py-4 my-5">
        <h4>Please provide your clients a list of requirements</h4>
        <p className="font-italic">Structure your instructions as free text, multiple choice of file upload</p>
        <hr className="my-4"/>
        <div className="bg-white p-4">
          <div className="float-right">
            <FontAwesomeIcon icon={faPen} className="form-basic-icon mr-2" />
            <FontAwesomeIcon icon={faTrash} className="form-basic-icon mr-2" />
          </div>
          <FormInput label="Please provide a requirement" type="text" id="requirement" noHelp />
        </div>
        <div className="py-2 text-left">
          <span className="btn btn-link px-0">Add Another requirement</span>
        </div>
      </div>
      <div className="pb-4 text-right">
        <button type="button" className="btn btn-primary px-5">Publish</button>
      </div>
    </div>
  );
}

export default FixFeesCreate;

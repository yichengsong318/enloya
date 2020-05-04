import React from 'react';
import { Link } from "react-router-dom";

import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

import { FormInput, FormSelect } from '../shared/FormElement';
import { faMapMarkerAlt, faUserCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContractItem (props) {
  return (
    <div className="my-3">
      <hr/>
      <div className="row align-items-center">
        <div className="col-sm-5">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faUserCircle} className="icon-big mr-3"/>
            <div>
              <h5>{props.contractTitle}</h5>
              <div>
                <span>{props.clientName}</span>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary ml-4 mr-2" />
                <span>{props.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div>${props.inBudget} in Budget</div>
          <div>${props.inPending} in Pending</div>
          <div>${props.activeMilestone}</div>
        </div>
        <div className="col-sm-3 text-right">
          <Link class="btn btn-yellow px-2" to="#">Active Milestone</Link>
          <FontAwesomeIcon icon={faPlusCircle} className="text-dark ml-3" />
        </div>
      </div>
    </div>
  )
}

function Contracts() {
  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
      <div className="h-100 container">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <div className="p-5 my-5">
              <div className="my-4 p-4 bg-white">
                <h3 className="pl-4 common-title my-3">Contracts</h3>
                <div className="px-4 pt-4 pb-3">
                  <div className="row">
                    <div className="col-sm-4 pr-0">
                      <FormInput placeholder="Search Contracts" id="search" type="text" noHelp noLabel/>
                    </div>
                    <div className="col-sm-2 pl-0">
                      <button type="button" className="btn btn-yellow px-4 ml-4">Filter</button>
                    </div>
                  </div>
                </div>
                <div className="p-4 form-inline d-flex justify-content-between">
                  <div className="d-flex">
                    <label class="mr-2">Search By</label>
                    <div className="">
                      <FormSelect id="search-by" selected="start-date" choices={[
                        { value: 'undefined', label: 'Please Select' },
                        { value: 'start-date', label: 'Start Date' },
                        { value: 'end-date', label: 'End Date' }
                      ]} noHelp />
                    </div>
                  </div>
                  <Link to="/">Download CSV</Link>
                </div>
                <div className="my-4">
                  <ContractItem
                    contractTitle="Seeking general legal advice"
                    clientName="James Smith"
                    location="Cape Town, South Africa"
                    inBudget="4560.00"
                    inPending="0"
                    activeMilestone="No active milestones"
                    />
                  <ContractItem
                    contractTitle="Seeking general legal advice"
                    clientName="James Smith"
                    location="Cape Town, South Africa"
                    inBudget="4560.00"
                    inPending="0"
                    activeMilestone="No active milestones"
                    />
                  <ContractItem
                    contractTitle="Seeking general legal advice"
                    clientName="James Smith"
                    location="Cape Town, South Africa"
                    inBudget="4560.00"
                    inPending="0"
                    activeMilestone="No active milestones"
                    />
                  <ContractItem
                    contractTitle="Seeking general legal advice"
                    clientName="James Smith"
                    location="Cape Town, South Africa"
                    inBudget="4560.00"
                    inPending="0"
                    activeMilestone="No active milestones"
                    />
                  <ContractItem
                    contractTitle="Seeking general legal advice"
                    clientName="James Smith"
                    location="Cape Town, South Africa"
                    inBudget="4560.00"
                    inPending="0"
                    activeMilestone="No active milestones"
                    />
                  <ContractItem
                    contractTitle="Seeking general legal advice"
                    clientName="James Smith"
                    location="Cape Town, South Africa"
                    inBudget="4560.00"
                    inPending="0"
                    activeMilestone="No active milestones"
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer FooterData={FooterData} kind="otherPage"/>
    </div>
  );
}

export default Contracts;

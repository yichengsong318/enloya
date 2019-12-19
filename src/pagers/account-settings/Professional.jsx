import React from 'react';

import { FormDate, FormDateSplit, FormInput, FormSelect, FormUpload } from '../../shared/FormElement';

function Professional() {

  return (
    <div className="py-4 px-2 account-settings">
      <h2 className="mt-2 mb-3">Professional Background</h2>
      <div>
        <div className="d-flex justify-content-between">
          <h5>Headline</h5>
          <span className="btn btn-link">Edit</span>
        </div>
        <p>
          Daniel has extensive experience representing clients in technology transfer mattersand acting 
          as a main relationship for clients. He also advises clients on contractual liability issues. 
          He represents clients in the medtech and hightech industries.
        </p>
      </div>
      <div>
        <h5>Licences</h5>
        <div className="d-flex justify-content-between">
          <div>New York, 2015 (Licence # 110200)</div>
          <span className="btn btn-link">Delete</span>
        </div>
        <div className="d-flex justify-content-between">
          <div>UK, 2018 (Licence # 110200, Barrister)</div>
          <span className="btn btn-link">Delete</span>
        </div>
        <span className="btn btn-link px-0">Add Another Licence</span>
        <div className="bg-lighter px-3 py-4">
          <div className="row">
            <div className="col-sm-6">
              <FormInput label="Licensed in?" type="text" id="licensedin" placeholder="Country / State / Provinence" noHelp/>
              <FormInput label="Licence Number" type="number" id="licensednumber" noHelp/>
            </div>
            <div className="col-sm-10">
              <FormUpload dropColor="bg-white" label="Proof of license/admission to bar" id="proof" noHelp />
            </div>
            <div className="col-sm-6">
              <FormSelect label="Licensed since" id="licensedsince" selected="undefined" choices={[
                { value: 'undefined', label: 'Please Select' },
                { value: '2019', label: '2019' },
                { value: '2018', label: '2018' },
                { value: '2017', label: '2017' }
              ]} noHelp />
            </div>
            <div className="col-sm-12">
              <div className="p-4 text-right">
                <button type="button" className="btn btn-primary px-5">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5>Academic degrees:</h5>
        <div className="d-flex justify-content-between">
          <div>JD, Columbia University, 2015</div>
          <span className="btn btn-link">Delete</span>
        </div>
        <div className="d-flex justify-content-between">
          <div>Master of Law, London University, 2018</div>
          <span className="btn btn-link">Delete</span>
        </div>
        <span className="btn btn-link px-0">Add Another Degree</span>
        <div className="bg-lighter px-3 py-4">
          <div className="row">
            <div className="col-sm-6">
              <FormInput label="Degree" type="text" id="degree" placeholder="Degree" noHelp/>
              <FormInput label="University" type="text" id="university" placeholder="University" noHelp/>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-5">
              <FormInput label="Year" type="number" id="year" placeholder="Year" noHelp/>
            </div>
            <div className="col-sm-12">
              <div className="p-4 text-right">
                <button type="button" className="btn btn-primary px-5">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5>Professionnal Experience: </h5>
        <div className="d-flex justify-content-between my-3">
          <div>
            <div className="font-weight-bold">Associate, Linklaters</div>
            <div>February 2017 - Present</div>
            <div>London, UK</div>
            <div>Advising Fortune 500 companies in technology</div>
            <div>transfer issues</div>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <div className="d-flex justify-content-between my-3">
          <div>
            <div className="font-weight-bold">Summer Associate, Baker &amp; McKenzie</div>
            <div>February 2016 - Present</div>
            <div>London, UK</div>
            <div>Legal research for Fortune 500 companies in </div>
            <div>connection with technology transfer issues</div>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <span className="btn btn-link px-0">Add Another Experience</span>
        <div className="bg-lighter px-3 py-4">
          <div className="row">
            <div className="col-sm-4">
              <FormDateSplit label="From" id="exp-from" noIcon/>
            </div>
            <div className="col-sm-4">
              <FormDateSplit label="To" id="exp-to" noIcon/>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-8">
              <FormInput label="Title" type="text" id="exp-title" noHelp/>
            </div>
            <div className="col-sm-10">
              <FormInput label="Description" type="text" id="exp-description" noHelp/>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-12">
              <div className="p-4 text-right">
                <button type="button" className="btn btn-primary px-5">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5>Publications</h5>
        <div className="d-flex justify-content-between">
          <div>
            <div className="font-weight-bold">International Transfer Contracts in Nigeria</div>
            <div>Challenges for Tech Startups in the Medtech Sector,</div>
            <div>Journal of Legal Studies, 2010 available at</div>
            <div>www.jls.com</div>
          </div>
          <span className="btn btn-link">Edit</span>
        </div>
        <span className="btn btn-link px-0">Add Another Publication</span>
        <div className="bg-lighter px-3 py-4">
          <div className="row">
            <div className="col-sm-6">
              <FormInput label="Title" type="text" id="pub-title" noHelp/>
              <FormInput label="Publication Publisher" type="text" id="pub-publisher" noHelp/>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-4">
              <FormDate label="Publication Date" type="text" id="pub-date" placeholder="    /    /    " noHelp/>
            </div>
            <div className="col-sm-12"></div>
            <div className="col-sm-6">
              <FormInput label="Publication URL" type="url" id="pub-url" noHelp />
            </div>
            <div className="col-sm-12">
              <div className="p-4 text-right">
                <button type="button" className="btn btn-primary px-5">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h5>Memberships</h5>
        <div className="d-flex justify-content-between">
          <div>
            <div>Member, International Bar Association</div>
            <div>(www.ibanet.org)</div>
          </div>
        </div>
        <span className="btn btn-link px-0">Add Another Membership</span>
        <div className="bg-lighter px-3 py-4">
          <div className="row">
            <div className="col-sm-6">
              <FormInput label="Title" type="text" id="member-title" noHelp/>
              <FormInput label="Association/Society/Bar/Institution" type="text" id="member-type" noHelp/>
              <FormInput label="URL" type="url" id="member-url" noHelp/>
            </div>
            <div className="col-sm-12">
              <div className="p-4 text-right">
                <button type="button" className="btn btn-primary px-5">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;

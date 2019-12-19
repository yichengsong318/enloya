import React from 'react';

import { FormCheck } from '../../shared/FormElement';

function Notifications() {

  return (
    <div className="py-4 px-4 account-settings">
      <h2 className="mt-2 mb-4">Notifications Settings</h2>
      <div className="my-4">
        <FormCheck id="check-1" label="Sending notifications to m*****l@enloya.com" />
        <FormCheck id="check-2" label="Send an email to m*****l@enloya.com when: " />
      </div>
      <div className="my-4 bg-lighter p-5">
        <h4>Endorsememts</h4>
        <hr/>
        <FormCheck id="check-3" label="An endorsement is ready for your review" />
      </div>
      <div className="my-4 bg-lighter p-5">
        <h4>Job/Project Postings and Proposals</h4>
        <hr/>
        <FormCheck id="check-4" label="A job advertisment is posted" />
        <FormCheck id="check-5" label="A proposal is submitted" />
        <FormCheck id="check-6" label="A proposal is rejected" />
        <FormCheck id="check-7" label="An interview is accepted, declined or withdraw" />
        <FormCheck id="check-8" label="An offer is accepted" />
        <FormCheck id="check-9" label="A project posting has expired" />
        <FormCheck id="check-10" label="A review is posted" />
      </div>
      <div className="my-4 bg-lighter p-5">
        <h4>Contracts</h4>
        <hr/>
        <FormCheck id="check-11" label="A hire is made or contract begins" />
        <FormCheck id="check-12" label="Contract terms are modified" />
        <FormCheck id="check-13" label="A contracts ends" />
        <FormCheck id="check-14" label="Time logging begins" />
        <FormCheck id="check-15" label="A time entry is ready for your review" />
      </div>
      <div className="my-4 bg-lighter p-5">
        <h4>Teams</h4>
        <hr/>
        <FormCheck id="check-16" label="Someone sends me an invitation to join a team" />
        <FormCheck id="check-17" label="Someone accepts an invitation to join your team" />
        <FormCheck id="check-18" label="Someone rejects an invitation to join a team" />
        <FormCheck id="check-19" label="Team access is revoked" />
      </div>
      <div className="my-4 bg-lighter p-5">
        <h4>Communications from Enloya</h4>
        <hr/>
        <FormCheck id="check-20" 
          label="Someone sends me a private message to help me get the most out of Enloya (e.g. emails regarding your purchases)" />
      </div>
    </div>
  );
}

export default Notifications;

import React from 'react';

import pic from '../../assets/pic.png';

import { FormSwitch } from '../../shared/FormElement';

function Reviews() {
  return (
    <div className="px-5 py-4">
      <div className="d-flex">
        <FormSwitch label="" id="attorney" selected="attorney" choices={[
            { key: 'attorney', label: 'Attorney Endorments' },
            { key: 'client', label: 'Client Review' }
          ]} noHelp />
      </div>
      <div className="my-4">
        <div className="px-0 d-flex lawyer-card-large">
          <div>
            <img src={pic} className="img-pic-user-medium mr-4" alt="user_pic" />
          </div>
          <div className="mt">
            <h5 className="font-weight-bold">Daniel Smith</h5>
            <div>Litigation Attorney</div>
            <div>Relationship: Corporate Partners</div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec bibendum urna, sit amet posuere magna.
              Donec scelerisque, lacus et dapibus porttitor,
            </p>
          </div>
        </div>
        <div className="px-0 d-flex lawyer-card-large mt-4">
          <div>
            <img src={pic} className="img-pic-user-medium mr-4" alt="user_pic" />
          </div>
          <div className="mt">
            <h5 className="font-weight-bold">Daniel Smith</h5>
            <div>Litigation Attorney</div>
            <div>Relationship: Corporate Partners</div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum nec bibendum urna, sit amet posuere magna.
              Donec scelerisque, lacus et dapibus porttitor,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;

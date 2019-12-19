import React from 'react';
import FixedServiceCard from "../../shared/FixedServiceCard";

function FixedServices(props) {
  const classes = props.kind === 'lawyer_profile' ? 'fixed-services' : 'lawyer-fixed-services'
  return (
    <div className={`px-2 py-4 ${classes}`}>
      <FixedServiceCard
        kind={props.kind}
        name="Early Bird Package"
        company="LLC Corporation"
        price="450"
        service="30 minute Consultion,"
        description="LLC Corporation, Articles of incorporation"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum nec bibendum urna, sit amet posuere magna.
          Donec scelerisque, lacus et dapibus porttitor,"
        />
      <FixedServiceCard
        kind={props.kind}
        name="Early Bird Package"
        company="LLC Corporation"
        price="450"
        service="30 minute Consultion,"
        description="LLC Corporation, Articles of incorporation"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum nec bibendum urna, sit amet posuere magna.
          Donec scelerisque, lacus et dapibus porttitor,"
        />
      <FixedServiceCard
        kind={props.kind}
        name="Early Bird Package"
        company="LLC Corporation"
        price="450"
        service="30 minute Consultion,"
        description="LLC Corporation, Articles of incorporation"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum nec bibendum urna, sit amet posuere magna.
          Donec scelerisque, lacus et dapibus porttitor,"
        />
      <FixedServiceCard
        kind={props.kind}
        name="Early Bird Package"
        company="LLC Corporation"
        price="450"
        service="30 minute Consultion,"
        description="LLC Corporation, Articles of incorporation"
        fullDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum nec bibendum urna, sit amet posuere magna.
          Donec scelerisque, lacus et dapibus porttitor,"
        />
        { props.showCreate && (<div className="fixed-service text-center fixed-fees-create">
          <div className="body mt-5">
            <div className="add-more-services"><a href="/account-settings/fix-fee-services-create">+</a></div>
              <p className="add-more-services-text">Add a new service</p>
            </div>
          </div>)}
    </div>
  );
}

export default FixedServices;

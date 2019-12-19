import React from 'react';

import FixedServices from '../lawyer-profile/FixedServices';

function FixFees() {

  return (
    <div className="py-4 px-2 account-settings">
      <h2 className="mt-2 mb-3 pl-4">Fix-fee Services</h2>
      <FixedServices kind="lawyer_services" showCreate />
    </div>
  );
}

export default FixFees;

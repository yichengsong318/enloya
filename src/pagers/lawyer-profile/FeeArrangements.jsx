import React from 'react';
import Moment from 'react-moment';

function FeeArrangements(props) {
  const { hourlyRate, feeArrangements } = props.userInfo;

  return (
    <div className="px-4 py-4">
      <h4 className="mt-4">Hourly Rate</h4>
      <p className="text-justify">
        {hourlyRate} $
      </p>
      
      <h4 className="mt-4">Fee Arrangements</h4>
      <div className="text-justify">
        {feeArrangements && feeArrangements.map((fa, i) => {
          return (
            <div key={i}><strong>{fa[0] == "#" ? fa.slice(0) : fa}</strong></div>
          )
        })}
      </div>
    </div>
  );
}

export default FeeArrangements;

import React from 'react';

function FeeArrangements(props) {
  const { hourlyRate, hourlyRateCurrency, feeArrangements } = props.userInfo;

  return (
    <div className="px-4 py-4">
      <h4 className="mt-4">Hourly Rate</h4>
      <p className="text-justify pl-4">
      {
        hourlyRateCurrency === '$' || hourlyRateCurrency === 'CHF' ? 
          hourlyRateCurrency + '' + hourlyRate : 
          hourlyRateCurrency === '€' ? hourlyRate + '€' : '$' + hourlyRate}
      </p>
      
      <h4 className="mt-4">Fee Arrangements</h4>
      <div className="text-justify">
        <ul>
        {feeArrangements && feeArrangements.map((fa, i) => {
          return (
            <li key={i}><strong>{fa[0] === "#" ? fa.slice(0) : fa}</strong></li>
            )
        })}
        </ul>
      </div>
    </div>
  );
}

export default FeeArrangements;

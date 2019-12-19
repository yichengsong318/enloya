import React from 'react';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLogin (props) {
  let rates = Array(props.total).fill(0);
  for (let i = 0; i < props.rate && i < props.total; i++) {
    rates[i] = 1;
  }
  return (
    <div className="ratings d-flex my-2">
      {rates.map((r,i) => {
        return (
          <FontAwesomeIcon key={i} icon={faStar} className={r === 1 ? "star": "star-empty"}/>
        )
      })}
    </div>
  );
}
import React, { useState } from 'react';
import './ButtonSwitch.css';

export default function ButtonSwitch (props) {

  const [active, setActive] = useState(props.selected);

  function handleClick (choice) {
    setActive(choice.key);
    props.onChange(choice.key);
  }

  return (
    <div className="btn-group button-switch" role="group" aria-label="Button Switch">
      {props.choices.map(choice => {
        return (
          <span key={choice.key} onClick={() => handleClick(choice)}
            className={"btn " + (choice.key === active ? "btn-dark" : "btn-white bg-white")}>
            {choice.label}</span>)
      })}
    </div>
  );
}
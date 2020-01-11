import React from 'react';
import { faCalendar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ButtonSwitch from './ButtonSwitch';
import DropZone from './DropZone';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function FormSwitch(props) {
  return (
    <div className="form-group text-left">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <ButtonSwitch onChange={value => props.onChange(props.name, value)} id={props.id} selected={props.selected} choices={props.choices} />
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormSelect(props) {
  return (
    <div className="form-group text-left">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <Select 
          onChange={e => props.onChange(props.name, props.isMulti ? e.map(v => v.value) : e.value)} 
          placeholder={props.placeholder}
          className="form-control border-0 p-0" 
          value={props.isMulti ? 
            props.choices.filter(c => props.selected && props.selected.includes(c.value)) : 
            props.choices.find(c => props.selected === c.value)}
          options={props.choices} isMulti={props.isMulti}
          />
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormTag(props) {
  return (
    <div className="form-group text-left">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <CreatableSelect
          isMulti
          onChange={e => props.onChange(props.name, e.map(v => v.label))} 
          className="form-control border-0 p-0" 
          value={props.selected}
          options={props.choices}
          />
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormInput(props) {
  return (
    <div className="form-group text-left">
      {!props.noLabel && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <input type={props.type} onChange={e => props.onChange(props.name, e.target.value)} id={props.id} className="form-control"
          value={props.value} placeholder={props.placeholder} />
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormTextArea(props) {
  return (
    <div className="form-group text-left">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="d-flex">
        <textarea rows={props.rows} onChange={e => props.onChange(props.name, e.target.value)} 
          id={props.id} className="form-control h-100"
          placeholder={props.placeholder} value={props.value}></textarea>
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormDate(props) {
  return (
    <div className="form-group text-left">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="d-flex">
        <DatePicker onChange={date => props.onChange(props.name, date)} 
          readOnly={props.readOnly} selected={props.value} className="form-control"/>
        {!props.noIcon && <FontAwesomeIcon icon={faCalendar} className="form-date-icon" />}
      </div>
    </div>
  );
}

export function FormDateSplit(props) {
  return (
    <div className="form-group text-left">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="d-flex">
        <input type="number" id={props.id} className="form-control"
          value={props.valueMonth} placeholder="Month" />
        <input type="number" id={props.id + 'to'} className="form-control ml-3"
          value={props.valueYear} placeholder="Year" />
        {!props.noIcon && <FontAwesomeIcon icon={faCalendar} className="form-date-icon" />}
      </div>
    </div>
  );
}

export function FormCheck(props) {
  return (
    <div className="form-check text-left">
      <input type="checkbox" onChange={e => props.onChange(props.name, e.target.checked, props.val)}
        id={props.id} className="form-check-input" checked={props.value}/>
      <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export function FormText(props) {
  return (
    <div className="form-group text-left">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="d-flex">
        <span id={props.id}>{props.value}</span>
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormUpload(props) {
  return (
    <div className="form-group text-left">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="d-flex">
        <DropZone dropColor={props.dropColor} 
          onChange={e => props.onChange(props.name, e.target.files[0])}
          id={props.id} placeholder={props.placeholder} />
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

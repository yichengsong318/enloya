import React, {useState} from 'react';
import { faCalendar, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import ButtonSwitch from './ButtonSwitch';
import DropZone from './DropZone';
import DatePicker from "react-datepicker";
import ReactCrop from 'react-image-crop';

import imgToBlog from '../constants/imgToBlog';

import 'react-image-crop/dist/ReactCrop.css';

import "react-datepicker/dist/react-datepicker.css";

import AlgoliaPlaces from 'algolia-places-react';

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
    <div className={"form-group text-left" + (props.customClass ? ' ' + props.customClass : '')}>
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <Select
          onChange={e => props.onChange(props.name, props.isMulti ? e.map(v => v.value) : e.value)}
          placeholder={props.placeholder}
          className="p-0 w-100 border-black"
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
  const customOptions = props.choices && props.choices.slice(0, 5);
  return (
    <div className="form-group text-left">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <CreatableSelect
          isMulti
          onChange={e => {
            return props.onChange(props.name, e ? e.map(v => props.returnAll ? v : v.label) : [])
          }}
          className="p-0 w-100 border-black"
          value={props.selected}
          options={customOptions}
          />
        {!props.noHelp && <FontAwesomeIcon icon={faQuestion} className="form-question-icon" />}
      </div>
    </div>
  );
}

export function FormInput(props) {
  const publicLink = React.createRef();
  const handleMouseOver =()=>{
    publicLink.current.classList.remove('d-none');
  }

  const handleMouseOut =()=>{
    publicLink.current.classList.add('d-none');
  }

  return (
    <div className={"form-group text-left" + (props.customClass ? ' ' + props.customClass : '')}>
      {!props.noLabel && <label htmlFor={props.id}>{props.label}</label>}
       {props.showAlert &&(<div className="danger-zone">must contain 3-100 letters or numbers. Please do not use spaces, symbols, or special characters.</div>)}
      <div className="d-flex">
        <input type={props.type} onChange={e => props.onChange(props.name, e.target.value)} id={props.id}
          maxLength={props.maxLength ? props.maxLength : 300}
          className="form-control"
          value={props.value} placeholder={props.placeholder} />
        {!props.noHelp && <
          FontAwesomeIcon icon={faQuestion} className="form-question-icon"
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
          />}
        {props.message && <span ref={publicLink} className="d-none position-absolute warning-message">{props.message}</span>}
      </div>
    </div>
  );
}

export function FormUrl(props) {
  const publicLink = React.createRef();
  const handleMouseOver =()=>{
    publicLink.current.classList.remove('d-none');
  }

  const handleMouseOut =()=>{
    publicLink.current.classList.add('d-none');
  }

  return (
    <div className={"form-group text-left" + (props.customClass ? ' ' + props.customClass : '')}>
      {!props.noLabel && <label htmlFor={props.id}>{props.label}</label>}
       {props.showAlert &&(<div className="danger-zone">must contain 3-100 letters or numbers. Please do not use spaces, symbols, or special characters.</div>)}
      <div className="d-flex align-items-center">
        <h6 className=" mt-1 mr-3">{props.startsWith}</h6>
        <input type={props.type} onChange={e => props.onChange(props.name, e.target.value)} id={props.id}
          maxLength={props.maxLength ? props.maxLength : 300}
          className="form-control"
          value={props.value} placeholder={props.placeholder} />
        {!props.noHelp && <
          FontAwesomeIcon icon={faQuestion} className="form-question-icon"
            onMouseOver={() => handleMouseOver()}
            onMouseOut={() => handleMouseOut()}
          />}
        {props.message && <span ref={publicLink} className="d-none position-absolute warning-message">{props.message}</span>}
      </div>
    </div>
  );
}

export function FormCity(props) {
  return (
    <div className={"form-group text-left" + (props.customClass ? ' ' + props.customClass : '')}>
      {!props.noLabel && <label htmlFor={props.id}>{props.label}</label>}
      <div className="d-flex">
        <AlgoliaPlaces
          defaultValue={props.value}
          placeholder={props.placeholder || props.label}
          options={{
            appId: 'plHXOK0ULSLL',
            apiKey: '1229daf30ea13a3371d7f517598d65bf',
            language: 'en',
            // countries: ['se'],
            type: 'city',
            templates: {
              value: function(suggestion) {
                return suggestion.name;
              }
            }
          }}
          onChange={({ suggestion }) =>
            props.onChange(props.name, suggestion.name)}
          />
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

export function FormUploadImage(props) {
  const [crop, setCrop] = useState({
    aspect: 1,
    width: 80,
    unit: '%'
  });

  const [src, setSrc] = useState();
  const [img, setImg] = useState();
  const [saving] = useState();

  const handleChange = (imgFile) => {
    var reader = new FileReader();
    reader.onload = function(e) {
      setSrc(e.target.result);
    }
    reader.readAsDataURL(imgFile);
  };

  const saveChange = () => {
    imgToBlog(img, crop, 'profilepic').then(res => {
      props.onChange(props.name, res, () => {
        setSrc(null);
      });
    });
  };

  return (
    <div className="form-group text-left">
      <label htmlFor={props.id}>{props.label}</label>
      <div className="d-flex">
        <DropZone dropColor={props.dropColor}
          text="Select your profile picture"
          onChange={e => handleChange(e.target.files[0])}
          id={props.id} placeholder={props.placeholder} />
      </div>
      { src ?
        <div className="text-center p-4">
          <ReactCrop keepSelection={true}
            onImageLoaded={image => setImg(image)}
            src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />
          {saving ?
            <div class="m-2 p-3 text-center">Saving...</div>
            :
            <div>
              <span className="btn btn-sm btn-secondary mr-2" onClick={() => setSrc(null)}>Cancel</span>
              <span className="btn btn-sm btn-success" onClick={() => saveChange()}>Save</span>
            </div>
          }
        </div>
        :
        <div className="text-center p-4">
          {props.value &&
            <img src={props.value} alt="profile" className="img-fluid"/>
          }
        </div>
      }
    </div>
  );
}

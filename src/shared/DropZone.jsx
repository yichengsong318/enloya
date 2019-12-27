import React, { useState } from 'react';
import './DropZone.css';

import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropZone (props) {
  let [active, setActive] = useState(false);

  let fileInput = React.createRef();

  function handleClick () {
    fileInput.current.click();
  }

  function handleChange (e) {
    setActive(true);
    props.onChange(e);
  }

  return (
    <div id={props.id} className={'dropzone d-flex justify-content-center align-items-center ' + 
      (props.dropColor ? props.dropColor : '') + (active ? 'active' : '')} onClick={handleClick}>
      <input ref={fileInput} type="file" className="d-none" onChange={handleChange} />
      <FontAwesomeIcon icon={faCloudUploadAlt} className="file-icon" />
      <div>Drop files to upload or <span className="file-link">Browse</span></div>  
    </div>
  );
}

import React from 'react';
import './DropZone.css';

import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DropZone (props) {

  let fileInput = React.createRef();

  function handleClick () {
    fileInput.current.click();
  }

  return (
    <div id={props.id} className={'dropzone d-flex justify-content-center align-items-center ' + 
      (props.dropColor ? props.dropColor : '') }>
      <input ref={fileInput} type="file" className="d-none" />
      <FontAwesomeIcon icon={faCloudUploadAlt} className="file-icon" />
      <div>Drop files to upload or <span className="file-link" onClick={handleClick}>Browse</span></div>  
    </div>
  );
}

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function FixedServiceCard (props) {

    const shareLink = `${window.origin}/account-settings/fix-fee-services-detail?sid=${props.sid}`;
    const [state, setState] = useState({ copied: false });
    const hoverRef = React.createRef();

    const handleCopyUrl = () => {
        setState({ copied: true });
        setTimeout(() => {
          setState({ copied: false });
        }, 5000);
        hoverRef.current.classList.remove('hover_content');
    }
    const handleShare = () => {
        hoverRef.current.classList.add('hover_content');
    }
  return (
    <div className={`${props.kind === 'lawyer_profile' ? 'fixed-service-lawyer' : ''} fixed-service ex_team_item`}>
      <div className="bg-gray header">
        <a style={{color: '#4b505e'}}
          href={props.kind === 'lawyer_profile' ?
          "/fix-fee-services-show?sid=" + props.sid : "/account-settings/fix-fee-services-detail?sid=" + props.sid}>
          <div className="d-flex justify-content-between">
            <h5>
              <span style={{color: '#4b505e'}}>{props.name}</span>
              {/* <div>{props.company}</div> */}
            </h5>
            <div className="priced">${props.price}</div>
          </div>
          <div className="line-height-1-5">{props.deliveryTime && (props.deliveryTime.amount + " " + props.deliveryTime.unit + " consultation")}</div>
          <div className="line-height-1-5">{props.category}</div>
        </a>
      </div>
      <div className="body">
        <p>{props.fullDescription}</p>
        { props.kind === 'lawyer_profile' ? (
          <div>
            <button type="type" className="btn btn-primary btn-block">Buy Now</button>
            <div className="text-center mt-2">
              <button type="type" className="btn btn-primary btn-block mx-auto" onClick={handleShare}>Share</button>
            </div>
          </div>
        ) : (
          <>
          <a href={"/account-settings/fix-fee-services-detail?sid=" + props.sid} className="btn btn-primary btn-block btn-editable">Details</a></>
        )}
      </div>
      <div className={`${props.kind !== 'lawyer_profile' ? 'hover_content' : ''} fix-hover-content`} ref={hoverRef}>
      <div className="n_hover_content">
            <CopyToClipboard
                text={shareLink}
                onCopy={handleCopyUrl}
            >
              <button className="btn btn-primary btn-block">
                  { state.copied ?
                    <span
                      style={{color: '#47c431', float: 'right'}}
                    >
                      Web URL Copied!
                    </span>
                    :
                    <span>
                    Copy web URL
                    </span>
                  }
              </button>
            </CopyToClipboard>
      </div>
      </div>
    </div>
  );
}

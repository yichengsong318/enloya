import React from 'react';
import FooterData from '../components/Footer/FooterData';

export default function FixedServiceCard (props) {
  return (
    <div className="fixed-service">
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
          <div>{props.deliveryTime && (props.deliveryTime.amount + " " + props.deliveryTime.unit + " consultation")}</div>
          <div>{props.category}</div>
        </a>
      </div>
      <div className="body">
        <p>{props.fullDescription}</p>
        { props.kind === 'lawyer_profile' ? (
          <div>
            <button type="type" className="btn btn-primary btn-block">Buy Now</button>
            <div className="text-center mt-2">
              <button type="type" className="btn btn-primary btn-block mx-auto">Share</button>
            </div>
          </div>
        ) : (
          <>
          <a href={"/account-settings/fix-fee-services-edit?sid=" + props.sid} className="btn btn-primary btn-block">Edit</a></>
        )}
      </div>
      <div className="hover_content">
          <div className="n_hover_content">
              <ul className="list-unstyled">
                  {
                      FooterData.socialIcon.map(item=>{
                          return(
                              <li key={item.id}><a href={item.url}><i className={`${item.icon}`}></i></a></li>
                          )
                      })
                  }
              </ul>
              <div className="br"></div>
              <a href=".#">
                  <h3 className="f_p f_size_16 f_600 w_color">Copy web URL</h3>
              </a>
              <h5>Copy web URL</h5>
          </div>
      </div>
    </div>
  );
}

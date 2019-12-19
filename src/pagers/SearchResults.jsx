import React, { useState } from 'react';

import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

import { FormInput, FormCheck } from '../shared/FormElement';

import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LawyerCard from '../shared/LawyerCard';

function SearchResults() {
  const [isGrid, setIsGrid] = useState(true);

  const toggle = () => setIsGrid(!isGrid);

  return (
    <div className="App">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
      <div className="py-5 mt_100">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <FormInput placeholder="Specialization" type="text" noLabel noHelp />
            </div>
            <div className="col-sm-4">
              <FormInput placeholder="Location" type="text" noLabel noHelp />
            </div>
            <div className="col-sm-4">
              <FormInput placeholder="Licensed in" type="text" noLabel noHelp />
            </div>
            <div className="col-sm-4">
              <FormInput placeholder="University" type="text" noLabel noHelp />
            </div>
            <div className="col-sm-4">
              <FormInput placeholder="Language" type="text" noLabel noHelp />
            </div>
            <div className="col-sm-4">
              <button type="button" className="btn btn-primary px-5">Search</button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-100 container">
        <div className="my-4 d-flex justify-content-between align-items-center">
          <h3 className="text-left common-title mb-3">Showing results for 'Private Sector Lawyers'</h3>
          <div onClick={() => toggle()} className="c-pointer">
          { isGrid ?
            <div>
              <span>List</span>
              <FontAwesomeIcon icon={faThList} className="text-dark ml-2" />
            </div>
            :
            <div>
              <span>Grid</span>
              <FontAwesomeIcon icon={faTh} className="text-dark ml-2" />
            </div>
          }
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="mb-3">
              <h5>Level of experience</h5>
              <FormCheck id="junior" label="Junior" />
              <FormCheck id="midlevel" label="Mid Level" />
              <FormCheck id="senior" label="Senior" />
            </div>
            <div className="mb-3">
              <h5>Language</h5>
              <FormCheck id="english" label="English" />
              <FormCheck id="spanish" label="Spanish" />
              <FormCheck id="french" label="French" />
              <FormCheck id="russian" label="Russian" />
              <FormCheck id="german" label="German" />
              <FormCheck id="italian" label="Italian" />
              <span className="text-underline">Show all</span>
            </div>
            <div className="mb-3">
              <h5>Hourly Rate</h5>
              <FormCheck id="hr-under-100" label="$100 and below" />
              <FormCheck id="hr-100-300" label="$100-$300" />
              <FormCheck id="hr-300-500" label="$300-$500" />
              <FormCheck id="hr-500-above" label="$500 and above" />
            </div>
            <div className="mb-3">
              <h5>Specialization</h5>
              <FormCheck id="sp-antitrust" label="Antitrust" />
              <FormCheck id="hr-arbitration" label="Arbitration" />
              <FormCheck id="hr-asset-management" label="Asset Management" />
              <FormCheck id="hr-banking-finance" label="Banking and Finance" />
              <FormCheck id="hr-capital-markets" label="Capital Markets" />
              <FormCheck id="hr-chinese-law" label="Chinese Law" />
              <span className="text-underline">Show all</span>
            </div>
            <div className="mb-3">
              <h5>Lawyer Type</h5>
              <FormCheck id="researchers" label="Researchers" />
              <FormCheck id="independant-lawyers" label="Independant Lawyers" />
              <FormCheck id="lawfirmlaywers" label="Law firm lawyers" />
            </div>
          </div>
          <div className="col-sm-9">
            <div className="mb-5 mx-auto">
              <div className="row">
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard special type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={4} rateTotal={5}
                    hourRate="65" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3"}>
                  <LawyerCard type={ isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={5} rateTotal={5}
                    hourRate="105" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard special type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={4} rateTotal={5}
                    hourRate="65" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3"}>
                  <LawyerCard type={ isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={5} rateTotal={5}
                    hourRate="105" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard special type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={4} rateTotal={5}
                    hourRate="65" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3"}>
                  <LawyerCard type={ isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={5} rateTotal={5}
                    hourRate="105" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard special type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={ isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3" }>
                  <LawyerCard type={isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={4} rateTotal={5}
                    hourRate="65" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className={isGrid ? "col-sm-4 mb-3" : "col-sm-12 mb-3"}>
                  <LawyerCard type={ isGrid ? "grid" : "list"}
                    name="James Smith" title="Litigation Attorney" rateValue={5} rateTotal={5}
                    hourRate="105" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
              </div>
              <div class="btn btn-default btn-block bg-white py-2 font-weight-bold">
                Show more results
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTwo FooterData={FooterData}/>
    </div>
  );
}

export default SearchResults;

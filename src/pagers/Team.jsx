import React from 'react';

import Navbar from '../layout/Navbar';
import { FooterPro } from '../layout/Footer';

import LawyerCard from '../shared/LawyerCard';

function Team() {
  return (
    <div className="App">
      <Navbar type="app" kind="menu" />
      <div className="h-100 container">
        <div className="row">
          <div className="col-sm-10 mx-auto">
            <div className="my-5 p-4 mx-auto bg-white">
              <div className="d-flex mb-4">
                <div>
                  <div className="box-100 mr-4"></div>
                </div>
                <div>
                  <h3 className="text-left common-title mt-3 mb-3">Goergetown Patent Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, 
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, 
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec bibendum urna, 
                  </p>
                </div>
              </div>
              <h5 className="text-left common-title mb-3">Team members</h5>
              <div className="row">
                <div className="col-sm-4 mb-4">
                  <LawyerCard special type="grid" bordered
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className="col-sm-4 mb-4">
                  <LawyerCard type="grid" bordered
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className="col-sm-4 mb-4">
                  <LawyerCard type="grid" bordered
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className="col-sm-4 mb-4">
                  <LawyerCard special type="grid" bordered
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className="col-sm-4 mb-4">
                  <LawyerCard type="grid" bordered
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
                <div className="col-sm-4 mb-4">
                  <LawyerCard type="grid" bordered
                    name="James Smith" title="Litigation Attorney" rateValue={2} rateTotal={5}
                    hourRate="165" expertises="Litigation, Tradmark, Antritust"
                    location="Helsinborg Sweden" languages="Sweedish, English"
                    status="Government ID Verified" registration="Tradmark registration in Italy"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPro />
    </div>
  );
}

export default Team;

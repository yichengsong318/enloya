import React from 'react';
// import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
              <h3 className="pt-4-1 pb-3-1">Meet the team</h3>
                {/*<Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"/>*/}
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="Manuel Sanchez" memberd="CEO, Co-Founder"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Johanna Jacobsson" memberd="Co-Founder"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Sergey Polovinkin" memberd="Co-Founder"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_04.png" memberN="Revanth Pamballa" memberd="CTO, Co-founder"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_05.png" memberN="Prachi Bhave" memberd="Business Analyst"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_06.png" memberN="Darya Gunay" memberd="CMO"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_07.jpg" memberN="Gisela Pesarrodona" memberd="Digital Marketing advisor"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_08.png" memberN="Mashkour Abdel Aziz" memberd="Frontend Developer"/>
                    </div>
                    {/*<div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_09.png" memberN="Waleed Hamza" memberd="Co-Founder"/>
                    </div>*/}
                </div>
            </div>
        </section>

    )
}
export default Team;

import React from 'react';
// import Sectitle from '../Title/Sectitle';
import Advisoritem from '../Team/Advisoritem';
const Advisor =()=>{
    return(
        <section className="experts_team_area sec_pad">
            <div className="container">
              <h3 className="pt-4-1 pb-3-1">Advisors</h3>
                {/*<Sectitle sClass="sec_title text-center mb_70" Title="The Experts Team" tClass="t_color3" TitleP="Why I say old chap that is spiffing barney, nancy boy bleeder chimney pot richard cheers the little rotter.!"/>*/}
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <Advisoritem teamImage="team_001.jpg" memberN="John Elbing" memberd="Storytelling and Marketing Strategy"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Advisoritem teamImage="team_002.jpg" memberN="Olga Peters" memberd="Co-Founder"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Advisoritem teamImage="team_003.png" memberN="Michel Jaccard" memberd="Founder, Startup lawyer"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Advisoritem teamImage="team_004.jpg" memberN="Hubert Ritzdorf" memberd="Blockchain strategist, CTO, Chainsecurity"/>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Advisor;

import React from 'react';
import Moment from 'react-moment';

function About(props) {
  const { longDescription } = props.userInfo;
  const { proexperiences, academicDegrees } = props;

  return (
    <div className="px-4 py-4">
      <p className="text-justify">
        {longDescription}
      </p>
      <h4 className="mt-5">Career</h4>
      <div className="row">
        {proexperiences && proexperiences.map(pr => {
          return (
            <div className="col-sm-4" key={pr.id}>
              <h5>{pr.title}</h5>   
              <div>{pr.where}</div>       
              <div>
                <Moment format="YYYY">
                  {pr.fromDate}
                </Moment>
                {' - '}
                { pr.present ?
                  'Present'
                  :
                  <Moment format="YYYY">
                    {pr.toDate}
                  </Moment>
                }  
              </div>       
            </div>
          );
        })}
      </div>
      <h4 className="mt-5">Education</h4>
      <div className="row">
        {academicDegrees && academicDegrees.map(deg => {
          return (
            <div className="col-sm-4" key={deg.id}>
              <h5>{deg.degree}</h5>   
              <div>{deg.university}</div>       
              <div>{deg.year}</div>       
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default About;

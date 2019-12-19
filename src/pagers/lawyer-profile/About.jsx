import React from 'react';

function About() {
  return (
    <div className="px-4 py-4">
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum nec bibendum urna, sit amet posuere magna. 
        Donec scelerisque, lacus et dapibus porttitor,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum nec bibendum urna, sit amet posuere magna. 
        Donec scelerisque, lacus et dapibus porttitor,
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum nec bibendum urna, sit amet posuere magna. 
        Donec scelerisque, lacus et dapibus porttitor,
      </p>
      <h4 className="mt-5">Career</h4>
      <div className="row">
        <div className="col-sm-4">
          <h5>Partner</h5>   
          <div>Baker &amdiv; McKenzie, Geneva</div>       
          <div>2010 - present</div>       
        </div>
        <div className="col-sm-4">
          <h5>Senior Associate</h5>   
          <div>Baker &amdiv; McKenzie, Washington DC</div>       
          <div>2002 - 2010</div>       
        </div>
        <div className="col-sm-4">
          <h5>Partner</h5>   
          <div>Baker &amdiv; McKenzie, Washington DC</div>       
          <div>1995 - 2002</div>       
        </div>
      </div>
      <h4 className="mt-5">Education</h4>
      <div className="row">
        <div className="col-sm-4">
          <h5>Ph.D in International Law</h5>   
          <div>USC</div>       
          <div>2015</div>       
        </div>
        <div className="col-sm-4">
          <h5>Masters of Law</h5>   
          <div>Stanford University</div>       
          <div>2010</div>       
        </div>
      </div>
    </div>
  );
}

export default About;

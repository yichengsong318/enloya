import React from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';

const ResetPassword = () => {
  return(
    <div className="body_wrapper">
      <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
      <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 mt_70 pt_70">Please enter your email address so we can send you a new password.</h2>
          <form action="#" className="subscribe-form">
              <input type="email" className="form-control" placeholder="Your email"/>
              <button type="submit" className="btn_hover btn_four mt_40">Reset Password</button>
          </form>
          <div className="mt-2 text-center">
            <Link className="auth-link" to="/Login">Try logging again</Link>
          </div>
      </div>
      <FooterTwo FooterData={FooterData}/>
    </div>
  )
}

export default ResetPassword;

import React, {Component} from 'react';
import { Link } from "react-router-dom";
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer/Footer';
// import FooterTwo from '../components/Footer/FooterTwo';
import FooterData from '../components/Footer/FooterData';
// import SocialLogin from '../components/SocialLogin';

import { connect } from "react-redux";
import { loginUser } from "../redux/actions";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: {
        email : '',
        password : ''
      }
    }
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!this.props.loading) {
      this.props.loginUser(this.state.login, () => {
        this.props.history.push('/account-settings');
      });
    }
  }


  handleFormChange = (name, value) => {
    this.setState({login: {...this.state.login, [name]: value}});
  };

  render() {
    return (
      <div className="body_wrapper">
        <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" q="team_url"/>
        <div className="subscribe_form_info s_form_info_two text-center mb-0">
          <h2 className="f_600 f_size_30 l_height30 t_color3 mb_50 mt_70 pt_70">Member login</h2>
          {/* <SocialLogin /> */}
          <form action="#" className="subscribe-form" onSubmit={e => this.onFormSubmit(e)}>
            { this.props.errorMessage &&
              <div className="alert alert-danger">{this.props.errorMessage}</div>
            }
            <input type="email" className="form-control" placeholder="Your email"
              onChange={e => this.handleFormChange('email', e.target.value)}/>
            <input type="password" className="form-control mt-3" placeholder="Your password"
              onChange={e => this.handleFormChange('password', e.target.value)}/>
            <button type="submit" className="btn_hover btn_four mt_40 btn-block">Login</button>
          </form>
          <div className="mt-2 text-center">
            <Link className="auth-link" to="/ResetPassword">Have trouble logging in ?</Link>
          </div>
        </div>
        <Footer FooterData={FooterData}/>
      </div>
    )
  }
}


const mapStateToProps = ({ authUser }) => {
  const { errorMessage } = authUser;

  return { errorMessage };
};

const mapActionToProps = {
  loginUser
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);

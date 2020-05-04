import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link, NavLink, withRouter} from 'react-router-dom';
import Sticky from 'react-stickynode';
import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';
import { Link as ScrolLink, Events, scroller } from 'react-scroll';
import Dropdown from '../shared/Dropdown';
import { logoutUser } from "../redux/actions";
import countries from "../constants/fullCountries";
import { FormInput, FormSelect } from '../shared/FormElement';
import queryString from 'query-string';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);

    const params = queryString.parse(this.props.location.search) || {};

    this.state = {
      searchquery: params.q || '',
      searchcountry: params.c || '',
    };
  }

  componentDidMount() {
    $(window).on("load",function(){
      $('.mega_menu_two .scroll').mCustomScrollbar({
        mouseWheelPixels: 50,
        scrollInertia: 0
      })
    });

    Events.scrollEvent.register('begin', function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      // console.log("end", arguments);
    });

    if (window.location.search === '?q=whatwedo') { this.scrollToWhatWeDo(); }
    if (window.location.search === '?q=howitworks') { this.scrollToHowItWorks(); }
  }

  scrollToWhatWeDo() {
    scroller.scrollTo('whatwedo', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToHowItWorks() {
    scroller.scrollTo('howitworks', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleLogout = () => {
    this.props.logoutUser(() => {
      this.props.history.push('/login');
    });
  };

  handleSearchChange = (name, value) => {
    this.setState({[name]: value});
  };

  launchSearch = () => {
    this.props.history.push("/search?q=" +  this.state.searchquery + "&c=" + this.state.searchcountry);
  };


  render() {
    var {mClass, nClass, cClass, slogo, q, isHome} = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
          <header className="header_area">
            <nav className={`navbar navbar-expand-lg menu_one ${mClass} ${isHome ? '' : 'bg-white'}`}>
              <div className={`container ${cClass}`}>
                <Link className={`navbar-brand ${slogo}`} to="/">
                  <img src={require("../img/enloya-logo.svg")} alt="" style={{ height: "75px"}}/>
                  <img src={require("../img/enloya-logo.svg")} alt="logo" style={{ height: "75px"}}/>
                </Link>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menu_toggle">
                    <span className="hamburger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <span className="hamburger-cross">
                      <span></span>
                      <span></span>
                    </span>
                  </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {
                    !this.props.user &&
                    (
                      <ul className={`navbar-nav menu mx-auto ${nClass}`}>
                        <li className="nav-item">
                          { q === 'team_url' ?
                            (<NavLink title="Team" className="nav-link" to={`/?q=whatwedo`}>What we do</NavLink>)
                            :
                            (<ScrolLink title="Service" className="nav-link" to="whatwedo" spy smooth duration={300} >What we do</ScrolLink>)
                          }
                        </li>
                        <li className="dropdown submenu nav-item">
                          { q === 'team_url' ?
                            (<NavLink title="Team" className="nav-link" to={`/?q=howitworks`}>How it works</NavLink>)
                            :
                            (<ScrolLink title="Pages" className="nav-link" to="howitworks" spy smooth duration={300} >How it works</ScrolLink>)
                          }
                        </li>
                        <li className="nav-item">
                          <NavLink title="Pricing" className="nav-link" to="/pricing">Pricing</NavLink>
                        </li>
                      </ul>
                    )
                  }
                  {
                    this.props.user ?
                    (
                      <>
                        <ul className="navbar-nav mr-2 my-3 ml-auto">
                          <li className="nav-item dropdown">
                            <FormInput type="text" id="searchquery" customClass="mb-0 w-320"
                              value={this.state.searchquery} placeholder="Which legal job do you want done?"
                              name="searchquery" onChange={this.handleSearchChange}
                              noHelp noLabel/>
                          </li>
                          <li className="nav-item ml-2">
                            <div className="search-block">
                              <FormSelect id="countries"
                                placeholder="Where"
                                selected={this.state.searchcountry}
                                name="searchcountry" onChange={this.handleSearchChange}
                                choices={countries} noHelp customClass="d-inline-block mw-170 mr-2 mb-0"/>

                              <button type="button" className={"text-bold btn btn-yellow px-5 bg-yellow" +
                                (this.state.searchquery && this.state.searchcountry ? '' : ' disabled')}
                                onClick={this.launchSearch}
                                >Search</button>
                            </div>
                          </li>
                        </ul>
                        <Dropdown type="button"
                          userImage={this.props.userInfo.profilePic}
                          text={this.props.userInfo.firstname + ' ' + this.props.userInfo.lastname}
                          orientation="right">
                          <NavLink title="Account Settings" className="dropdown-item"
                            to="/account-settings/general-lawyer">Account Settings</NavLink>

                          { this.props.userType === 'lawyer' &&
                            <NavLink title="My Profile" className="dropdown-item"
                              to={"/lawyer-profile/" + this.props.userInfo.id}>My Profile</NavLink>}
                          <span className="dropdown-item" onClick={() => this.handleLogout()}>Logout</span>
                        </Dropdown>
                        {this.props.userType !== 'client' &&
                        <NavLink to="/checkout"><img src={require("../img/cart-icon.svg")} alt="" style={{ height: "25px", marginLeft: "10px"}}/></NavLink>}
                      </>
                    )
                    :
                    (
                      <div className="d-flex mobile-margin-bottom">
                        <NavLink className="btn_get btn_hover col-5" to="/login">Login</NavLink>
                        <NavLink className="btn btn_get btn_get_two col-5" to="/register">Sign Up</NavLink>
                      </div>
                    )
                  }
                </div>
              </div>
            </nav>
          </header>
        </Sticky>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user, userType, userInfo } = authUser;

  return { user, userType, userInfo };
};

const mapActionToProps = {
  logoutUser
};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(CustomNavbar));

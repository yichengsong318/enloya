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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


class CustomNavbar extends Component {
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
                          <NavLink title="Contact" className="nav-link" to="/contact">Contact</NavLink>
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
                            <Dropdown type="search" text={'Search'}
                              orientation="right">
                              <NavLink title="Lawyers" className="dropdown-item"
                                to="/search">Lawyers</NavLink>

                              <NavLink title="Services" className="dropdown-item"
                                to="/search-service">Services</NavLink>
                            </Dropdown>
                          </li>
                          <li className="nav-item ml-2">
                          <div className="search-block d-flex">
                              <input className="form-control mr-sm-2 input-search-w10rem" readOnly type="search"
                                placeholder="Where?" aria-label="Where"/>
                              <button type="button" className="btn btn-primary px-5">Search</button>
                              </div>
                          </li>
                        </ul>
                        <Dropdown type="button"
                          userImage={this.props.userInfo.profilePic}
                          text={this.props.userInfo.firstname + ' ' + this.props.userInfo.lastname}
                          orientation="right">
                          <NavLink title="Account Settings" className="dropdown-item"
                            to="/account-settings">Account Settings</NavLink>

                          { this.props.userType === 'lawyer' &&
                            <NavLink title="My Profile" className="dropdown-item"
                              to={"/lawyer-profile/" + this.props.userInfo.id}>My Profile</NavLink>}
                          <span className="dropdown-item" onClick={() => this.handleLogout()}>Logout</span>
                        </Dropdown>
                      </>
                    )
                    :
                    (
                      <>
                        <a className="btn_get btn_hover" href="/login">Login</a>
                        <a className="btn btn_get btn_get_two" href="/register">Sign Up</a>
                      </>
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

import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link, NavLink, withRouter} from 'react-router-dom';
import Sticky from 'react-stickynode';
import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';
import { Link as ScrolLink, Events, scroller } from 'react-scroll';


import { logoutUser } from "../redux/actions";

class CustomNavbar extends Component {
  componentDidMount() {
    $(window).on("load",function(){
      $('.mega_menu_two .scroll').mCustomScrollbar({
        mouseWheelPixels: 50,
        scrollInertia: 0
      })
    });

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
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
    var {mClass, nClass, cClass, slogo, q} = this.props;
    return (
      <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
        <header className="header_area">
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass}`}>
              <Link className={`navbar-brand ${slogo}`} to="/">
                <img src={require("../img/enloya-logo.png")} alt=""/>
                <img src={require("../img/enloya-logo.png")} alt="logo"/>
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
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
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
                {
                  this.props.user ?
                  (
                    <span className="btn_get btn_hover"
                      onClick={() => this.handleLogout()}>Logout</span>
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
  const { user } = authUser;

  return { user };
};

const mapActionToProps = {
  logoutUser
};

export default withRouter(connect(
  mapStateToProps,
  mapActionToProps
)(CustomNavbar));

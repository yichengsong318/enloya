import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal/Reveal';
import { Link as ScrolLink } from 'react-scroll';

class Footer extends Component {
    render(){
        let FooterData = this.props.FooterData;

        return(
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            {
                                FooterData.CompanyWidget.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInLeft" duration={500} key={1}>
                                            <div className="col-lg-3 col-md-6" >
                                                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s">
                                                    <p><b>Enloya</b>{widget.description}</p>
                                                    {/*<form action="#" className="f_subscribe_two mailchimp" method="post">
                                                        <input type="text" name="EMAIL" className="form-control memail" placeholder="Your email address"/>
                                                        <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                        <p className="mchimp-errmessage" style={{display: "none"}}></p>
                                                        <p className="mchimp-sucmessage" style={{display: "none"}}></p>
                                                    </form>*/}
                                                </div>
                                            </div>
                                        </Reveal>
                                    )
                                })
                            }
                            {
                                FooterData.AboutWidget.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                <ul className="list-unstyled f_list">
                                                    {
                                                        widget.menuItems.map(item =>{
                                                            return(
                                                                <li key={item.id}>
                                                                  <Link to={item.url !== 'blog' && item.url} className={`${item.url === 'howitworks' || item.url === 'whatwedo' || item.url === 'blog' || item.url === 'Help Center' ? 'd-none' : ''}`}>{item.text}</Link>
                                                                  {(item.url === 'whatwedo' && !this.props.kind) && <ScrolLink title="Home" to="whatwedo" spy smooth duration={300} style={{ cursor: 'pointer'}} >{item.text}</ScrolLink>}
                                                                  {(item.url === 'howitworks' && !this.props.kind) && <ScrolLink title="Home" to="howitworks" spy smooth duration={300} style={{ cursor: 'pointer'}} >{item.text}</ScrolLink>}
                                                                  {(item.url === 'whatwedo' && this.props.kind === 'otherPage') && (<a href="/?q=whatwedo" style={{ cursor: 'pointer'}} >{item.text}</a>)}
                                                                  {(item.url === 'howitworks' && this.props.kind === 'otherPage') && (<a href="/?q=howitworks" style={{ cursor: 'pointer'}} >{item.text}</a>)}
                                                                  {(item.url === 'blog' && <a href="http://blog.enloya.com" style={{ cursor: 'pointer'}} >{item.text}</a>)}
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        </Reveal>
                                    )
                                })
                            }
                            {
                                FooterData.SocialLinks.map(widget=>{
                                    return(
                                        <Reveal effect="fadeInLeft" duration={500} key={widget.id}>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                <h3 className="f-title f_600 t_color f_size_18">{widget.title}</h3>
                                                <div className="f_social_icon">
                                                    {
                                                        widget.menuItems.map(item =>{
                                                            return(
                                                                <a href={item.url} key={item.id}><i className={item.icon}></i></a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="f_widget about-widget pt_70 wow fadeInLeft" data-wow-delay="0.4s">
                                                  <ul className="list-unstyled f_list mt_11">
                                                    <li><Link to="/">Chemin Eugene-Rigot 2, 1202 Geneva, Switzerland</Link></li>
                                                    <li><Link to="/">info@enloya.com</Link></li>
                                                    <li><a href="http://help.enloya.com">Help Center</a></li>
                                                  </ul>
                                                </div>
                                            </div>
                                        </div>
                                        </Reveal>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/*<div className="footer_bg">
                        <div className="footer_bg_one"></div>
                        <div className="footer_bg_two"></div>
                    </div>*/}
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                                <p className="mb-0 f_400 p_o">Enloya SARL is registered and incorporated in Switzerland, company registration number 000010.</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <p>Made with <i className="icon_heart"></i> at <a href="/">Enloya</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;

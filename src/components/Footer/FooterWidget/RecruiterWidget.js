import React, {Component} from 'react';
import Reveal from 'react-reveal/Reveal';
class RecruiterWidget extends Component {
    render(){
        let FooterData = this.props.FooterData;
        var {ftitle} = this.props;
        return(
            <Reveal effect="fadeInUp" duration={1800}>
            <div className="col-lg-6 col-md-6 px-0 mx-0">
                <div className="f_widget about-widget wow fadeInLeft" data-wow-delay="0.4s">
                    <h3 className="f-title f_600 t_color f_size_18 mb-3 mt-5">{ftitle}</h3>
                    <ul className="list-unstyled f_list">
                        {
                            FooterData.recruiterSolution.map(item =>{
                                return(
                                    <li key={item.id}><a href={item.url}>{item.text}</a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            </Reveal>
        )
    }
}

export default RecruiterWidget;

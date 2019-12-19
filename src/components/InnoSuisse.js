import React, {Component} from 'react';

class InnoSuisse extends Component {
    render(){
        return(
            <React.Fragment>
                <section className="">
                    <div className="container">
                        <div className="seo_call_action_text">
                            <h2>Powered by</h2>
                            <img src={require('../img/seo/Innosuisse_logo.jpg')} alt=""/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default InnoSuisse;

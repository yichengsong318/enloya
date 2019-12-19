import React, {Component} from 'react';
import HRServiceItems from './HRServiceItems';

class HRService extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <section className="prototype_service_info">
                <div className="symbols-pulse active">
                    <div className="pulse-1"></div>
                    <div className="pulse-2"></div>
                    <div className="pulse-3"></div>
                    <div className="pulse-4"></div>
                    <div className="pulse-x"></div>
                </div>
                <div className="container">
                <h1 className="t_color3 l_height45 text-center mb-5" style={{fontWeight: 'bold'}}>Enloya can help you with</h1>
                    <h2 className="f_size_15 f_600 t_color3 l_height28 text-center mb_90">Get the job done with the lawyer of your choice. From simple contacts to sophisticated international disputes.<br/> Finding and hiring a lawyer has never been easier..</h2>
                    <div className="row p_service_info">
                            {
                                ServiceData.HRService.map(item => {
                                    return(
                                        <HRServiceItems iconUrl={item.iconUrl} HRtitle={item.HRtitles} HRdescription={item.HRdescription}  Hicon={item.Hicon} rclass={item.rclass} iclass={item.iclass} key={item.id}/>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>
        )
    }
}
export default HRService;

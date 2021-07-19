import React from 'react';
class SalonDetails extends React.Component {
    render() {
        return (
            <div className="  p-3">
                <div className="col-10 salonDetails p-3">
                        <div className='row'>
                            <img className='col-4'  src={require("../Images/salon1.jpg").default} alt="Sorry!"/>
                            <div className="col-8">
                                <h1>Looks Salon</h1>
                                <h4>Park Street</h4>
                                <h3>Kolkata</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <h3>Services</h3>
                                <h3>Reating</h3>
                            </div>
                            <div className="col-8">
                                <span>Hair Cut & Finish,</span>
                                <span>Hair Colour,</span>
                                <span>Hair Treatments</span>
                                <br/>
                               <span><img src={require("../Images/star_icon.png").default}/></span>
                               <span><img src={require("../Images/star_icon.png").default}/></span>
                               <span><img src={require("../Images/star_icon.png").default}/></span>
                               <span><img src={require("../Images/star_icon.png").default}/></span>
                               <span><img src={require("../Images/star_icon.png").default}/></span>
                            </div>
                        </div>
                    </div>
                    </div>
        )
    }
}
export default SalonDetails;
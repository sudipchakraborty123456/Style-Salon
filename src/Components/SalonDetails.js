import React from 'react';
class SalonDetails extends React.Component {
    render() {
        return (
            <div className="  p-3">
                <div className="col-11 salonDetails p-3 borderDesign" style={{margin:"0 auto"}}>
                    <div className='row'>
                        <img className='col-4' src={require("../Images/salon1.jpg").default} alt="Sorry!" style={{borderRadius:"10%"}}/>
                        <div className="col-8">
                            <h1>Looks Salon</h1>
                            <h4>Park Street</h4>
                            <h3>Kolkata</h3>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-4">
                            <h4>Services</h4>
                            <h4>Reating</h4>
                        </div>
                        <div className="col-8">
                            <span>Hair Cut & Finish,</span>
                            <span>Hair Colour,</span>
                            <span>Hair Treatments</span>
                            <br />
                            <div>
                                <span><img src={require("../Images/star_icon.png").default} height="20px"/></span>
                                <span><img src={require("../Images/star_icon.png").default} height="20px"/></span>
                                <span><img src={require("../Images/star_icon.png").default} height="20px" /></span>
                                <span><img src={require("../Images/star_icon.png").default} height="20px"/></span>
                                <span><img src={require("../Images/star_icon.png").default} height="20px"/></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SalonDetails;
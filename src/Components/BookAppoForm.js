import React from 'react';
import { withRouter } from 'react-router-dom';
class BookAppoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    bookAppoClicked=()=>{
        this.props.history.push("/bookappo");
    }
    render() {
        return (
            <div className="container-fluid my-5 mx-0 " style={{ backgroundColor: ' rgb(238,238,238)' }}>
                <div className="row text-center">
                        <h1>BOOK AN APPOINTMENT ONLINE</h1>
                        <p>Our online bookings service operates between 10:00a.m. and 6:00p.m.</p>
                        <p>During opening hours, we'll call you back within 1 hour to confirm your appointment. Outside opening hours we will call you soon after 10:00am</p>
                        <p>Your data is safe with us! We will only use your details to process your salon booking, and won't share them with third parties.</p>
                    </div>
                <div className="row text-center">
                    <div className="col-12 col-sm-12 col-lg-6 px-5">
                        <div className="bottomBorder">
                            <span><i class="material-icons">person</i></span>
                            <input type="text" placeholder="Name" className="input " />
                        </div>
                        <div className="bottomBorder">
                            <span><i class="material-icons">call</i></span>
                            <input type="number" placeholder="Contact" className="input " />
                        </div>
                        <div className="bottomBorder">
                            <span><i class="material-icons">email</i></span>
                            <input type="email" placeholder="Email Id" className="input " />
                        </div>
                        <div className="row">
                            <div className="bottomBorder text-center text-center col-12 col-sm-12 col-mg-4 col-lg-4">
                                <span><i class="material-icons">location_on</i></span>
                                <select className="input my-2">
                                    <option selected disabled> City</option>
                                    <option>Kolkata</option>
                                    <option>Mumbai</option>
                                    <option>Delhi</option>
                                    <option>Ghatal</option>
                                </select>
                            </div>
                            <div className="bottomBorder   text-center col-12 col-sm-12 col-mg-4 col-lg-4">
                                <select className="input  mx-5">
                                    <option selected disabled> Location</option>
                                    <option>Kolkata</option>
                                    <option>Mumbai</option>
                                    <option>Delhi</option>
                                    <option>Ghatal</option>
                                </select>
                            </div>
                            <div className="bottomBorder   text-center col-12 col-sm-12 col-mg-4 col-lg-4">
                                <select className="input  mx-5">
                                    <option selected disabled> Salon</option>
                                    <option>Looks Salon</option>
                                    <option>Lakme Salon</option>
                                    <option>Sandipan Salon</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-6 px-5">
                        <div className="bottomBorder">
                            <span><i class="material-icons">accessibility</i></span>
                            <select className="input ">
                                <option selected disabled> Gender</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="bottomBorder">
                            <span><i class="material-icons">content_cut</i></span>
                            <select className="input ">
                                <option selected disabled> Select Service</option>
                                <option>Hair Style </option>
                                <option>Makeup</option>
                                <option>Hair Texture</option>
                            </select>
                        </div>
                        <div className="bottomBorder">
                            <span><i class="material-icons">event</i></span>
                            <input type="date" placeholder="Preferred Date" className="input " />
                        </div>
                        <div className="bottomBorder">
                            <span><i class="material-icons">schedule</i></span>
                            <select className="input ">
                                <option selected disabled> Preferred Time</option>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row text-center lastButtomSection">
                    <div className="row lastButtomSection">
                        <button className="btn" onClick={this.bookAppoClicked} >Book Appointment</button>
                    </div>

                    <p>OR</p>
                    <div className="row ">
                        <h2>
                            Call Us @ <span>9999999999</span>
                        </h2>
                    </div>

                </div>
            </div>
        )

    }
}
export default withRouter(BookAppoForm);
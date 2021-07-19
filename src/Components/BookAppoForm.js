import React from 'react';

class BookAppoForm extends React.Component {
    render() {
        return (
            <div className="container ">
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
                        <button className="btn" >Book Appointment</button>
                    </div>

                    <p>OR</p>
                    <div className="row ">
                        <div className="col-12 col-sm-12 col-lg-4 callusMain">
                            <div className="callUs ">Call us @</div>
                        </div>
                        <a className="mobNo col-12 col-sm-12 col-lg-8">+9133333333, +9166666666</a>
                    </div>

                </div>
            </div>
        )

    }
}
export default BookAppoForm;
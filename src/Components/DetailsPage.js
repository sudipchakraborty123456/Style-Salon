import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from "../Components/Header";
import Buttom_Section from "../Components/Buttom_Section";
import "../Styles/DetailsPage.css";
class DetailsPage extends React.Component {
    render() {
        return (
            <>
             <Header/>
            <div className="container-fluid">
               
                <div className="container">
                    <div className="row text-center mt-3">
                        <Carousel dynamicHeight={false} showThumbs={false} stopOnHover={true} autoPlay={true} interval={3000} infiniteLoop={true}>
                            <div>
                                <img src={require('../Images/salon.jpg').default} />
                            </div>
                            <div>
                                <img src={require('../Images/salon1.jpg').default} />
                            </div>
                            <div>
                                <img src={require('../Images/salon2.jpg').default} />
                            </div>
                            <div>
                                <img src={require('../Images/salon3.jpg').default} />
                            </div>
                        </Carousel>
                    </div>
                    <br />
                    <div className="row">
                        <h1 className="col-12 col-sm-12 col-mg-6 col-lg-6">Looks Salon</h1>
                        <button className="btn col-12 col-sm-12 col-mg-6 col-lg-6">Book Appointment</button>
                    </div>
                    <div className="row">
                        <Tabs>
                            <TabList>
                                <Tab>Overview</Tab>
                                <Tab>Contact</Tab>
                            </TabList>
                            <TabPanel>
                                <h2>About This Salon</h2>
                                <h3>Services</h3>
                                <div className="row deatilsServices">
                                    <span className="col-12 col-sm-12 col-mg-3 col-lg-3 ">
                                        <h2>Hair Cut & Finish</h2>
                                        <ul>
                                            <li>Cut and Hair Care</li>
                                            <li>Shampoo & Conditioning</li>
                                            <li>Head Massage</li>
                                            <li>Beard Styling</li>
                                            <li>Hair/Beard Colouring</li>
                                        </ul>
                                    </span>
                                    <span className="col-12 col-sm-12 col-mg-3 col-lg-3">
                                        <h2>Hair Colour</h2>
                                        <ul>
                                            <li>Hi - Lites</li>
                                            <li>Beard Colour</li>
                                        </ul>
                                    </span>
                                    <span className="col-12 col-sm-12 col-mg-3 col-lg-3">
                                        <h2>Hair Texture</h2>
                                        <ul className="" style={{ textAlign: 'left' }}>
                                            <li>Smoothening</li>
                                            <li>Straightening</li>
                                            <li>Rebonding</li>
                                            <li>Perming</li>
                                        </ul>
                                    </span>

                                    <span className="col-12 col-sm-12 col-mg-3 col-lg-3">
                                        <h2 className="heading">Hair Treatments</h2>
                                        <ul className="" style={{ textAlign: 'left' }}>
                                            <li>Advanced Moisturising</li>
                                            <li>Hair Spa</li>
                                            <li>Scalp Treatments</li>
                                            <li>Colour Protection</li>
                                        </ul>
                                    </span>
                                    <img src={require("../Images/model1.jpg").default} alt="sorry!" height="400px"/>
                                </div>
                                
                                <div className="row deatilsServices">
                                    <span className="col-12 col-sm-12 col-mg-6 col-lg-6">
                                        <h2 className="heading">Skin Care</h2>
                                        <ul className="list" style={{ textAlign: 'left' }}>
                                            <li>Clean Ups</li>
                                            <li>Organic Treatments</li>
                                            <li>Facials</li>
                                            <li>Manicure</li>
                                            <li>Pedicure</li>
                                        </ul>
                                    </span>
                                    <span className="col-12 col-sm-12 col-mg-6 col-lg-6">
                                        <h2 className="heading">Beard Grooming</h2>
                                        <ul className="list" style={{ textAlign: 'left' }}>
                                            <li>Beard Trim</li>
                                            <li>Beard Colour</li>
                                            <li>Beard Styling</li>
                                            <li>Shave</li>
                                            <li>Luxury Shave & Beard Spa</li>
                                        </ul>
                                    </span>
                                    <br />
                                    <h2>Min Price : <span>$200</span></h2>


                                </div>
                            </TabPanel>
                            <TabPanel>
                                <h2>Phone number : <span>999999999</span></h2>
                                <h2>Address : 
                                    <span>
                                        ParkStreet, Kolkata, West Bengal
                                    </span></h2>
                            </TabPanel>
                        </Tabs>
                    </div>

                </div>
                
            </div>
            <Buttom_Section />
            </>
        )
    }
}
export default DetailsPage;
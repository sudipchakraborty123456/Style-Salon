import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Buttom_Section from "../Components/Buttom_Section";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loaders
import "../Styles/Home.css"
import BookAppoForm from "../Components/BookAppoForm"
class Home extends React.Component {
    gentsClicked=()=>{
        this.props.history.push("/service/gents");

    }
    ladiesClicked=()=>{
        this.props.history.push("/service/ladies");
    }
    render() {
        const thumb = ["Images/salon.jpg", "Images/salon1.jpg","Images/salon2.jpg","Images/salon3.jpg"]
        return (
            <div className="container-fluid">
                
                <div className="images mx-5 my-5">
                    <Carousel className="carousel" dynamicHeight={true} showThumbs={false} stopOnHover={true} autoPlay={true} interval={3000} infiniteLoop={true} >
                        {thumb.map((item, index) => {
                            return (<div>
                                <img src={require("../" + item).default} alt="Opps Sorry!"  />
                            </div>);
                        })
                        }
                    </Carousel>
                </div>
                <div className="row text-center">
                    <h1>OUR SERVICES</h1>
                </div>
                <div className="row">
                    <div className=" col-12 col-sm-12 col-mg-6 col-lg-6 text-center"  onClick={()=>this.gentsClicked()}>
                        <p>GENTS</p>
                        <img src={require("../Images/gents.jpg").default} className="gents"/>
                    </div>
                    <div className=" col-12 col-sm-12 col-mg-6 col-lg-6 text-center" onClick={()=>this.ladiesClicked()}>
                        <p>LADISE</p>
                        <img src={require("../Images/ladies.jpg").default} className="ladise"/>
                    </div>
                </div>
                <BookAppoForm/>
                <Buttom_Section />
            </div>
        );
    }
}
export default Home;
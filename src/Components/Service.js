import React from 'react';
import "../Styles/services.css";
import Buttom_Section from "../Components/Buttom_Section";
import BookAppoForm from "../Components/BookAppoForm";
import ServiceGents from "../Components/ServiceGents";
class Service extends React.Component {
    render() {
        return (
            <div>

                <ServiceGents />
                <BookAppoForm />
                <Buttom_Section />
            </div>
        );
    }
}
export default Service;
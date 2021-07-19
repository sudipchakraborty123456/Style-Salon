import React from 'react';
import GentsFilteroptions from './GentsFilterOption';
import LadiesFilperOptions from './LadiesFilterOption';
import SalonDetails from "../Components/SalonDetails";
import Buttom_Section from "../Components/Buttom_Section";
import "../Styles/salonFilter.css"
class SalonFinder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGender: ''
        };
    }
    genderSelected = (e) => {
        if (e.target.value == 'Gents') {
            this.setState({
                selectedGender: 'Gents'
            })
        } else if (e.target.value == 'Ladies') {
            this.setState({
                selectedGender: 'Ladies'
            })
        } else {
            this.setState({
                selectedGender: ''
            })
        }
    }
    render() {
        const { selectedGender } = this.state;
        return (
            <div className="container-fluid">
                <h3 className="text-center my-2">Saoln Finder</h3>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-mg-4 col-lg-4 p-3 filter '>
                        <div className='col-11 filterSection p-3 ml-3'>
                        <div className='row'>
                            <div className='col-12 col-sm-12 col-mg-4 col-lg-4'>Filters</div>
                            <button className="btn btn-primary col-12 col-sm-12 col-mg-8 col-lg-8">Reset All Filter</button>
                        </div>

                        <div>Select City</div>
                        <select>
                            <option value="">Kolkata</option>
                            <option value="">Mumbai</option>
                            <option value="">Channai</option>
                        </select>
                        <div>Select Location</div>
                        <select>
                            <option value="">Kolkata</option>
                            <option value="">Mumbai</option>
                            <option value="">Channai</option>
                        </select>
                        <div>Gender</div>
                        <select onChange={(e) => this.genderSelected(e)}>
                            <option value=""  selected>Select Gender</option>
                            <option value="Gents">Gents</option>
                            <option value="Ladies">Ladies</option>
                        </select>
                        {
                            selectedGender == 'Gents'
                                ?
                                <div>
                                    <GentsFilteroptions />
                                </div>
                                :
                                (
                                    selectedGender == 'Ladies'
                                        ?
                                        <div>
                                            <LadiesFilperOptions />
                                        </div>
                                        :
                                        <div>

                                        </div>
                                )
                        }
                    </div>
                    </div>
                    <div className='col-12 col-sm-12 col-mg-8 col-lg-8 rightSide p-3container'>
                    <SalonDetails/>
                    <SalonDetails/>
                    <SalonDetails/>
                    </div>
                </div>
                <Buttom_Section/>
            </div>
        )
    }
}
export default SalonFinder;
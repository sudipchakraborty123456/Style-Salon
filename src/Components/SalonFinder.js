import React from 'react';
import GentsFilteroptions from './GentsFilterOption';
import LadiesFilperOptions from './LadiesFilterOption';
import SalonDetails from "../Components/SalonDetails";
import "../Styles/salonFilter.css"
import Header from "../Components/Header";
import Buttom_Section from "../Components/Buttom_Section";
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
    salonDetailsClicked=()=>{
        this.props.history.push("/details");
    }
    render() {
        const { selectedGender } = this.state;
        return (
            <>
            <Header/>
            <div className="container-fluid">
                <h1 className="text-center my-2">Saoln Finder</h1>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-mg-4 col-lg-4 p-3 filter '>
                        <div className='col-11 borderDesign p-3 ml-3'>
                        <div className='row'>
                            <h2 className='col-12 col-sm-12 col-mg-4 col-lg-4'>Filters</h2>
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
                    <div className=' col-12 col-sm-12 col-mg-8 col-lg-8 rightSide p-3container'>
                    <a onClick={()=>this.salonDetailsClicked()}><SalonDetails /></a>
                    <a onClick={()=>this.salonDetailsClicked()}><SalonDetails /></a>
                    <a onClick={()=>this.salonDetailsClicked()}><SalonDetails /></a>
                    <a onClick={()=>this.salonDetailsClicked()}><SalonDetails /></a>
                    <a onClick={()=>this.salonDetailsClicked()}><SalonDetails /></a>
                    <a onClick={()=>this.salonDetailsClicked()}><SalonDetails /></a>
                    </div>
                </div>
            </div>
            <Buttom_Section/>
            </>
        )
    }
}
export default SalonFinder;
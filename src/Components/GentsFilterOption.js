import React from 'react';
import "../Styles/GentsFilterOption.css"
class GentsFilterOptions extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Hair Cut & Finish
                </div>
                <div>
                    <label className="labelOptions" className="labelOptions"><input type="checkbox"/>Cut and Hair Care</label>
                    <label className="labelOptions"><input type="checkbox"/>Shampoo & Conditioning</label>
                    <label className="labelOptions"><input type="checkbox"/>Head Massage</label>
                    <label className="labelOptions"><input type="checkbox"/>Beard Styling</label>
                    <label className="labelOptions"><input type="checkbox"/>Hair/Beard Colouring</label>
                </div>
                <br/>
                <div>
                Hair Colour
                </div>
                <div>
                    <label className="labelOptions"><input type="checkbox"/>Hair Colour(Ammonia & Ammonia Free)</label>
                    <label className="labelOptions"><input type="checkbox"/>Hi - Lites</label>
                    <label className="labelOptions"><input type="checkbox"/>Beard Colour</label>
                </div>
                <br/>

                <div>
                Hair Texture
                </div>
                <div>
                    <label className="labelOptions"><input type="checkbox"/>Straightening</label>
                    <label className="labelOptions"><input type="checkbox"/>Smoothening</label>
                    <label className="labelOptions"><input type="checkbox"/>Rebonding</label>
                    <label className="labelOptions"><input type="checkbox"/>Perming</label>
                </div>
                <br/>
                <div>
                Hair Treatments
                </div>
                <div>
                    <label className="labelOptions"><input type="checkbox"/>Hair Spa</label>
                    <label className="labelOptions"><input type="checkbox"/>Advanced Moisturising</label>
                    <label className="labelOptions"><input type="checkbox"/>Scalp Treatments</label>
                    <label className="labelOptions"><input type="checkbox"/>Colour Protection</label>
                </div>
                <br/>
                <div>
                Skin Care
                </div>
                <div>
                    <label className="labelOptions"><input type="checkbox"/>Clean Ups</label>
                    <label className="labelOptions"><input type="checkbox"/>Facials</label>
                    <label className="labelOptions"><input type="checkbox"/>Organic Treatments</label>
                    <label className="labelOptions"><input type="checkbox"/>Manicure</label>
                    <label className="labelOptions"><input type="checkbox"/>Pedicure</label>
                </div>
                <br/>
                <div>
                Beard Grooming
                </div>
                <div>
                    <label className="labelOptions"><input type="checkbox"/>Beard Trim</label>
                    <label className="labelOptions"><input type="checkbox"/>Beard Colour</label>
                    <label className="labelOptions"><input type="checkbox"/>Beard Styling</label>
                    <label className="labelOptions"><input type="checkbox"/>Shave</label>
                    <label className="labelOptions"><input type="checkbox"/>Luxury Shave & Beard Spa</label>
                </div>
            </div>
        )
    }
}
export default GentsFilterOptions;
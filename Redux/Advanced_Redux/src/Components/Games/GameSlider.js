import React from "react";
import Image from '../../LBP2.jpg';

const GameSlider = props => {

    return (
        <div className="pt-4">
            <div className="container">
                <img src={Image} className='img-fluid rounded3 shadow' alt="LBP3" />
            </div>
        </div>
    )

}
export default GameSlider;
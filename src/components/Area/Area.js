import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'
import './Area.css'
const Area = (props) => {
    const { img, location, city, tourDuration, bestTimeToGo, availableSeat, cost } = props.area
    const element = <FontAwesomeIcon icon={faList} />
    return (

        <div className="area">
            <div>
                <div className="area-img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 style={{ color: 'green', fontWeight: 'lighter' }}>{location}</h1>
                    <h4>City: <span>{city}</span></h4>
                    <h4>Tour Duration: <span>{tourDuration}</span></h4>
                    <h4>Best-Time-For-Travel: <span>{bestTimeToGo}</span></h4>
                    <h5>Available Seat: <span>{availableSeat}</span></h5>
                    <p>Total cost: <span>$ {cost}</span> </p>
                    <div>
                        <button onClick={() => props.handleAddToCart(props.area)} className="add-cart">{element} Add Location</button>
                        <button className="add-cart">
                            Details
                        </button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Area;
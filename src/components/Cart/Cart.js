import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    const element = <FontAwesomeIcon icon={faLocationArrow} />
    const total = cart.reduce((previous, area) => previous + area.cost, 0)

    return (
        <div>
            <div className="location-grand">
                <h2>{element}Location Added: {props.cart.length}</h2>
                <h3 style={{ marginLeft: '25px' }}>Grand Total:${total}</h3>
            </div>
            <div className="list">
                <h3 style={{ marginLeft: '20px' }}>List:</h3>
                <ul>
                    {
                        cart.map(area => <li
                            key={area.location}
                        >{area.location}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;
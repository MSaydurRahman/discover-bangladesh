import React, { useEffect, useState } from 'react';
import Area from '../Area/Area';
import Cart from '../Cart/Cart';
import './Registration.css'
const Registration = () => {
    const [areas, setAreas] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./fakeData.JSON')
            .then(res => res.json())
            .then(data => setAreas(data))
    }, [])
    const handleAddToCart = (area) => {
        const newCart = [...cart, area]
        setCart(newCart)
    }
    return (
        <div>
            <div className='registration-container'>
                <div className='area-container'>
                    {
                        areas.map(area => <Area
                            key={area.location}
                            area={area}
                            handleAddToCart={handleAddToCart}
                        >
                        </Area>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Registration;
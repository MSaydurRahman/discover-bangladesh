import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className="header">
                <nav>
                    <a href="/Shop">Home</a>
                    <a href="/Order">Visit</a>
                    <a href="/Mgeanage">About</a>
                    <input className="header-text" type="text" name="" id="" />
                    <button className="header-button">Search</button>
                </nav>
                <h1 style={{ fontWeight: 'lighter', fontSize: '50px' }}>Best Of Bangladesh</h1>
                <hr style={{ border: '2px solid', color: 'green', width: '400px' }} />
                <p style={{ fontWeight: 'lighter', fontSize: '20px' }}>Visit the best sight & attraction in Bangladesh as recomended by popular guide books, and beyond</p>
                <p style={{ fontWeight: 'lighter', fontSize: '20px' }}>Get your lowest budget tour at $99</p>
            </div>
        </div>
    );
};

export default Header;
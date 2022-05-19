import React from "react";

import './Navbar.css';

const Navbar = () => {

    let wins = localStorage.getItem('wins');
    return (
        <div className="navbar">
            <div className="navbar-container">
                <span>NOT Wordle 👍</span>
            </div>
            <div className="navbar-container">
                <span>WINS: { wins }</span>
            </div>
        </div>
    );
};

export default Navbar;
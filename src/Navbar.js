import React from "react";

import './Navbar.css';

const Navbar = () => {

    let wins = parseInt(localStorage.getItem('wins'));
    let loses = parseInt(localStorage.getItem('loses'));
    let ratio = wins / (wins + loses);
    ratio = ratio.toFixed(2);
    if (isNaN(ratio)) {
        ratio = 0;
    }
    return (
        <div className="navbar">
            <div className="navbar-container">
                <span>NOT Wordle 👍</span>
            </div>
            <div className="navbar-container">
                <span>WINS: { wins }</span>
            </div>
            <div className="navbar-container">
                <span>WIN RATIO: { ratio }</span>
            </div>
        </div>
    );
};

export default Navbar;
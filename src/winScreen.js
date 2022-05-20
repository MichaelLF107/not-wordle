import React from "react";
import './winScreen.css';

const WinScreen = () => {
    return (
        <div className="background">
            <div className="win-screen">
                <h1>YOU WON!</h1>
                <button className="win-btn" onClick={() => window.location.reload(false)}>Play Again</button>
            </div>
        </div>
    );
};

export default WinScreen;
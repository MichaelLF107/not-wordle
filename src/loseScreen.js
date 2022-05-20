import React from "react";
import './loseScreen.css';

const LoseScreen = () => {
    return (
        <div className="background">
            <div className="lose-screen">
                <h1>YOU LOST!</h1>
                <button className="lose-btn" onClick={() => window.location.reload(false)}>Play Again</button>
            </div>
        </div>
    );
}

export default LoseScreen;
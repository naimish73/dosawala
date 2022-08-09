import React from "react";
import "./firstPage.css";
import wave from "../../assets/home-firstPage-wave.png";

function FirstPage() {
    return (
        <div className="firstPage">
            <div className="firstPage-text">
                <div className="firstPage-text-large">
                    Welcome To Authentic <br /> South Indian Taste
                </div>
                <div className="firstPage-text-small">
                    <p>
                        Introducing first time ever! Unlimited South Indian Meal
                    </p>
                </div>
            </div>
            <div className="firstPage-button">
                <button>See Menu</button>
            </div>
            <img
                src={wave}
                alt="wave for styling"
                className="firstPage-waveImage"
            />
        </div>
    );
}

export default FirstPage;

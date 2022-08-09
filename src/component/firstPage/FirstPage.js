import React from "react";
import "./firstPage.css";
import wave from "../../assets/home-firstPage-wave.png";
import dosa1 from "../../assets/home-firstPage-dosa1.png";
import dosa2 from "../../assets/home-firstPage-dosa2.png";

function FirstPage() {
    return (
        <>
            <div className="firstPage">
                <div className="firstPage-text">
                    <div className="firstPage-text-large">
                        Welcome To Authentic <br /> South Indian Taste
                    </div>
                    <div className="firstPage-text-small">
                        Introducing first time ever! Unlimited South Indian Meal
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
                <div className="dosaImage">
                    <img className="dosaImage1" src={dosa1} alt="dosa" />
                    <img className="dosaImage2" src={dosa2} alt="dosa" />
                </div>
            </div>
        </>
    );
}

export default FirstPage;

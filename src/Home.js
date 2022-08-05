import React from "react";
import "./home.css";

function Home() {
    return (
        <div className="home">
            <div className="home-header">
                <div className="home-header-desktop">
                    <div className="home-header-desktop-logo">
                        <img src="images/logo.png" alt="dosawala logo" />
                    </div>
                    <div className="home-header-desktop-navItems"></div>
                </div>
                <div className="home-header-mobile"></div>
            </div>
        </div>
    );
}

export default Home;

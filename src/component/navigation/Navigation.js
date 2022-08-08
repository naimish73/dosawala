import React, { useState } from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import sideBar1 from "../../assets/header-navigationIcon-mobile.png";
import sideBar2 from "../../assets/header-navigationCrossIcon.png";

function Navigation() {
    const [sideBar, setSideBar] = useState(false);

    return (
        <>
            <div className="navigation">
                <div className="navigation-logo">
                    <Link to="/">
                        <img src={logo} alt="logo of dosawala" />
                    </Link>
                </div>

                {/* The bump on hovering feature is still pending to implement */}
                <div className="navigation-items">
                    {/*                 
                    Add the link of franchise menu and contact component to the navigation items
                */}
                    <Link to="/aboutus">About Us</Link>
                    <Link to="#">Franchise</Link>
                    <Link to="#">Menu</Link>
                    <Link to="#">Contact</Link>
                </div>
                <div className="navigation-sidebar">
                    <img
                        src={sideBar ? sideBar2 : sideBar1}
                        alt="sidebar logo"
                        onClick={() => {
                            !sideBar ? setSideBar(true) : setSideBar(false);
                        }}
                    />
                </div>
            </div>
            {sideBar ? (
                <div className="navigation-items-mobile">
                    <Link
                        className="navigation-items-mobile-link"
                        to="/aboutus"
                    >
                        About Us
                    </Link>
                    <Link className="navigation-items-mobile-link" to="#">
                        Franchise
                    </Link>
                    <Link className="navigation-items-mobile-link" to="#">
                        Menu
                    </Link>
                    <Link className="navigation-items-mobile-link" to="#">
                        Contact
                    </Link>
                </div>
            ) : null}
        </>
    );
}

export default Navigation;

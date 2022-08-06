import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import sideBar from "../../assets/header-navigationIcon.png";

function Navigation() {
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
                <div className="navigation-sideBar">
                    <img src={sideBar} alt="sidebar of navigation" />
                </div>
            </div>
            {/* <div className="test">
                <div className="test1">
                    <img className="img1" src={logo} />
                    <img className="img2" src={sideBar} />
                </div>
            </div> */}
        </>
    );
}

export default Navigation;

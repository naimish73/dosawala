import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation-logo">
                <Link to="/">
                    <img src={logo} alt="logo of dosawala" />
                </Link>
            </div>

            <div className="navigation-items" style={{ color: "white" }}>
                {/*                 
                    Add the link of franchise menu and contact component to the navigation items
                */}
                <Link to="/aboutus">About Us</Link>
                <Link to="#">Franchise</Link>
                <Link to="#">Menu</Link>
                <Link to="#">Contact</Link>
            </div>
        </div>
    );
}

export default Navigation;

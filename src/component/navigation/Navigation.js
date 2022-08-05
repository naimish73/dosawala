import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div className="navigation">
            <img src={logo} alt="logo of dosawala" />
            <div className="navigation-items">
                <Link to="/aboutus">About Us</Link>
            </div>
        </div>
    );
}

export default Navigation;

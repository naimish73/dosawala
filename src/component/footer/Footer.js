import React from "react";
import "./footer.css";
import rightArrow from "../../assets/home-footer-rightArrow.svg";
import facebook from "../../assets/home-footer-facebook.svg";
import twitter from "../../assets/home-footer-twitter.svg";
import instagram from "../../assets/home-footer-instagram.svg";
import phone from "../../assets/home-footer-phone.svg";
import upperArrow from "../../assets/home-footer-upperArrow.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-address">
                <div className="footer-address-head">Address</div>
                <div className="footer-address-content">
                    Head Office: Ground Floor, Savan Mall, behind Kargil Petrol
                    Pump Ahmedabad contact@dosawalaindia.com
                </div>
            </div>
            <div className="footer-contacts">
                <div className="footer-contacts-head">Store contacts:</div>
                <div className="footer-contacts-contact">
                    Sola road : 82380 11324
                </div>
                <div className="footer-contacts-contact">
                    Vaishnodevi : 6396772263
                </div>
                <div className="footer-contacts-contact">
                    Bhavnagar : 8145337482
                </div>
                <div className="footer-contacts-contact">
                    Mundra : 87358 82755
                </div>
            </div>
            <div className="footer-links">
                <div className="footer-links-head">User Link</div>
                <div>
                    <img src={rightArrow} alt="left arrow" />
                    <div>Our story</div>
                </div>
                <div>
                    <img src={rightArrow} alt="left arrow" />
                    <div>download menu</div>
                </div>
                <div>
                    <img src={rightArrow} alt="left arrow" />
                    <div>vison and growth</div>
                </div>
                <div>
                    <img src={rightArrow} alt="left arrow" />
                    <div>franchise</div>
                </div>
            </div>
            <div className="footer-socialMedia">
                <div className="footer-socialMedia-facebook">
                    <img src={facebook} alt="facebook logo" />
                    <div>Facebook</div>
                </div>
                <div className="footer-socialMedia-twitter">
                    <img src={twitter} alt="twitter logo" />
                    <div>Twitter</div>
                </div>
                <div className="footer-socialMedia-instagram">
                    <img src={instagram} alt="instagram logo" />
                    <div>Instagram</div>
                </div>
                <div className="footer-socialMedia-phone">
                    <img src={phone} alt="phone logo" />
                    <div>8510957376</div>
                </div>
            </div>
            <div className="footer-instagram">
                <div className="footer-instagram-head">Instagram</div>
                <div className="footer-instagram-image"></div>
                <div className="footer-instagram-image"></div>
                <div className="footer-instagram-image"></div>
                <div className="footer-instagram-image"></div>
                <div className="footer-instagram-image"></div>
                <div className="footer-instagram-image"></div>
            </div>
            <div className="footer-backToTop">
                <img src={upperArrow} alt="upper arrow" />
                <div>Back to Top</div>
            </div>
            <div>franchise</div>
        </div>
    );
}

export default Footer;

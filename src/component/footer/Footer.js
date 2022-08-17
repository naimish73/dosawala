import React from "react";
import "./footer.css";
import rightArrow from "../../assets/home-footer-rightArrow.svg";
import facebook from "../../assets/home-footer-facebook.svg";
import twitter from "../../assets/home-footer-twitter.svg";
import instagram from "../../assets/home-footer-instagram.svg";
import phone from "../../assets/home-footer-phone.svg";
import upperArrow from "../../assets/home-footer-upperArrow.svg";
import image1 from "../../assets/home-footer-image1.png";
import image2 from "../../assets/home-footer-image2.png";
import image3 from "../../assets/home-footer-image3.png";
import image4 from "../../assets/home-footer-image4.png";
import image5 from "../../assets/home-footer-image5.png";
import image6 from "../../assets/home-footer-image6.png";
import { HashRouter } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-address">
                    <div className="footer-address-head">Address</div>
                    <div className="footer-address-content">
                        Head Office: Ground Floor, Savan Mall, behind Kargil
                        Petrol Pump Ahmedabad contact@dosawalaindia.com
                    </div>
                </div>
                <div className="footer-contacts">
                    <div className="footer-contacts-head">Store contacts:</div>
                    <div className="footer-contacts-contact">
                        <div className="footer-contacts-contact1">
                            Sola road : 82380 11324
                        </div>
                        <div className="footer-contacts-contact2">
                            Vaishnodevi : 6396772263
                        </div>
                        <div className="footer-contacts-contact3">
                            Bhavnagar : 8145337482
                        </div>
                        <div className="footer-contacts-contact4">
                            Mundra : 87358 82755
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-links-head">User Link</div>
                    <div className="footer-links-list">
                        <img src={rightArrow} alt="left arrow" />
                        <span className="footer-links-list-items">
                            Our story
                        </span>
                    </div>
                    <div>
                        <img src={rightArrow} alt="left arrow" />
                        <span className="footer-links-list-items">
                            download menu
                        </span>
                    </div>
                    <div>
                        <img src={rightArrow} alt="left arrow" />
                        <span className="footer-links-list-items">
                            vison and growth
                        </span>
                    </div>
                    <div>
                        <img src={rightArrow} alt="left arrow" />
                        <span className="footer-links-list-items">
                            franchise
                        </span>
                    </div>
                </div>
                <div className="footer-socialMedia">
                    <div className="footer-socialMedia-head">Social Media</div>
                    <div className="footer-socialMedia-facebook">
                        <img src={facebook} alt="facebook logo" />
                        <span className="footer-socialMedia-items">
                            Facebook
                        </span>
                    </div>
                    <div className="footer-socialMedia-twitter">
                        <img src={twitter} alt="twitter logo" />
                        <span className="footer-socialMedia-items">
                            Twitter
                        </span>
                    </div>
                    <div className="footer-socialMedia-instagram">
                        <img src={instagram} alt="instagram logo" />
                        <span className="footer-socialMedia-items">
                            Instagram
                        </span>
                    </div>
                    <div className="footer-socialMedia-phone">
                        <img src={phone} alt="phone logo" />
                        <span className="footer-socialMedia-items">
                            8510957376
                        </span>
                    </div>
                </div>
                <div className="footer-instagram">
                    <div className="footer-instagram-head">Instagram</div>
                    <div className="footer-instagram-images">
                        <div className="footer-instagram-image">
                            <img src={image1} alt="images of dosa" />
                        </div>
                        <div className="footer-instagram-image">
                            <img src={image2} alt="images of dosa" />
                        </div>
                        <div className="footer-instagram-image">
                            <img src={image3} alt="images of dosa" />
                        </div>
                        <div className="footer-instagram-image">
                            <img src={image4} alt="images of dosa" />
                        </div>
                        <div className="footer-instagram-image">
                            <img src={image5} alt="images of dosa" />
                        </div>
                        <div className="footer-instagram-image">
                            <img src={image6} alt="images of dosa" />
                        </div>
                    </div>
                </div>
                <div
                    className="footer-backToTop"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img src={upperArrow} alt="upper arrow" />
                    <div className="footer-backToTop-content">Back to Top</div>
                </div>
            </div>
            <div className="footer-hr">
                <hr />
            </div>
            <div className="footer-copyright">
                Copyright © 2021.designed and devloped by{" "}
                <span className="footer-copyright-hilight"> dizayn.io </span>{" "}
                All Rights Reserved
            </div>
        </>
    );
}

export default Footer;

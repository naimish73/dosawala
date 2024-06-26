import React from "react";
import "./ourMenu.css";
import dosaImage from "../../assets/home-ourMenu-dosaImage.png";
import foodImage from "../../assets/home-ourMenu-foodImage.png";
import arrow from "../../assets/home-ourStory-arrow.svg";
import imageDining from "../../assets/home-ourMenu-imageDining.png";
import mailLogo from "../../assets/home-ourMenu-mailLogo.svg";
import mailLogoAlt from "../../assets/home-ourMenu-mailLogo.svg";
import phoneLogo from "../../assets/home-ourMenu-phoneLogo.svg";
import phoneLogoAlt from "../../assets/home-ourMenu-phoneLogo.svg";
import leftArrow from "../../assets/home-ourMenu-leftArrow.svg";
import rightArrow from "../../assets/home-ourMenu-rightArrow.svg";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import swiggy from "../../assets/home-ourMenu-swiggy-mobile.png";
import zomato from "../../assets/home-ourMenu-zomato-mobile.png";
import bigDosa from "../../assets/home-ourMenu-bigDosa-mobile.png";
import groupPhoto from "../../assets/home-ourMenu-groupPhoto-mobile.png";

function OurMenu(props) {
    return (
        <div className="ourMenu">
            <div className="ourMenu-findAbout">Find About</div>
            <div className="ourMenu-ourMenu">Our Menu</div>

            <div className="ourMenu-nav">
                <div id="vadai" className="ourMenu-nav-item">
                    Vadai & upma
                </div>
                <div className="ourMenu-nav-item" id="ourMenu-nav-item-classic">
                    Classic
                </div>
                <div className="ourMenu-nav-item">Premium</div>
                <div className="ourMenu-nav-item">Supreme</div>
                <div className="ourMenu-nav-item">Signature</div>
            </div>

            <div className="ourMenu-classic">
                <div className="ourMenu-classic-list">
                    <div className="ourMenu-classic-list-item">
                        saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        <span className="ourMenu-classic-list-item-price">
                            99
                        </span>
                    </div>
                    <div className="ourMenu-classic-list-item">
                        mysuru saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        139
                    </div>
                    <div className="ourMenu-classic-list-item">
                        nilgiri saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        139
                    </div>
                    <div className="ourMenu-classic-list-item">
                        palak saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        139
                    </div>
                    <div className="ourMenu-classic-list-item">
                        online saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        149
                    </div>
                    <div className="ourMenu-classic-list-item">
                        schezwan saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        149
                    </div>
                    <div className="ourMenu-classic-list-item">
                        paper saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        149
                    </div>
                    <div className="ourMenu-classic-list-item">
                        karamura saada dosai
                        <span className="ourMenu-classic-list-item-dotLine"></span>
                        149
                    </div>
                </div>
                <div className="ourMenu-classic-image">
                    <img src={dosaImage} alt="dosa beside list items" />
                </div>
            </div>
            <div className="ourMenu-extra-mobile">
                <img src={swiggy} alt="swiggy logo" className="swiggy" />
                <img src={zomato} alt="zomato logo" className="zomato" />
                <div className="ourMenu-extra-mobile-whooHoo">Whoo-hoo!!</div>
                <div className="ourMenu-extra-mobile-content">
                    Now you can order a meal right from your mobile via our
                    partner swiggi and zomato and enjoy south Indian cuisine at
                    home with the best offers and non-touch delivery.
                </div>
                <img
                    src={bigDosa}
                    alt="chef with big dosa"
                    className="bigDosa"
                />
            </div>
            <div className="ourMenu-vision">
                <div className="ourMenu-vision-foodImage">
                    <img src={foodImage} alt="full dish food" />
                </div>
                <div className="ourMenu-vision-content">
                    <div className="ourMenu-vision-content-head1">
                        Vision and Growth
                    </div>
                    <div className="ourMenu-vision-content-head2">
                        <span className="ourMenu-vision-content-head2-a">
                            A
                        </span>{" "}
                        Winning Franchise Team
                    </div>
                    <div className="ourMenu-vision-content-para">
                        <p className="ourMenu-vision-content-para1">
                            Dosawala strives to provide its customers, the
                            healthiest and wholesome meal at a very affordable
                            prices and to generate prots for the benet of the
                            franchise in a short duration of time. Dosawala
                            dedicate to ensure the success of our franchisee
                            associates by focussing and providing exclusive
                            support and service on committed environment
                        </p>
                        <p className="ourMenu-vision-content-para2">
                            To spread the product across the globe through our
                            chain of retail outlets. Our brand chain special
                            taste makers and ingredients will spread a standard
                            avor of taste all over the country
                        </p>
                        <p className="ourMenu-vision-content-para3">
                            Know more
                            <img
                                className="ourMenu-vision-content-arrow"
                                src={arrow}
                                alt="arrow"
                            />
                            <img src={arrow} alt="arrow" />
                            <img src={arrow} alt="arrow" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="ourMenu-contact">
                <div className="ourMenu-contact-content">
                    <div className="ourMenu-contact-content-head1">
                        contact for
                    </div>
                    <div className="ourMenu-contact-content-head2">
                        Franchise Inquiry
                    </div>
                    <div className="ourMenu-contact-mobile">
                        <img src={groupPhoto} alt="group of peple" />
                        <div className="ourMenu-contact-content-para1-alt">
                            we are looking for a winning group of people to be
                            part of our mission and run our franchise to a
                            different place across the country and create an
                            unmatched experience by maintaining the highest
                            standard of quality, hygiene, service and customer
                            satisfaction. and To repeatedly offer value addition
                            in all spheres thereby inducing loyalty by patrons.
                            To capture, recreate and replicate the brand
                            experience in as many areas as possible.
                        </div>
                    </div>
                    <p className="ourMenu-contact-content-para1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat null
                    </p>
                    <div className="ourMenu-contact-contect-info">
                        <p className="ourMenu-contact-content-mail">
                            <span>
                                <div className="ourMenu-contact-content-mail-image-logo">
                                    <img src={mailLogo} alt="email logo" />
                                </div>
                                <div className="ourMenu-contact-content-mail-image-logoAlt">
                                    <img src={mailLogoAlt} alt="email logo" />
                                </div>
                            </span>
                            <div className="ourMenu-contact-content-mail-info">
                                info@dosawalaindia.com
                            </div>
                            <div className="ourMenu-contact-content-mail-franchise">
                                franchise@dosawalaindia.com
                            </div>
                        </p>
                        <p className="ourMenu-contact-content-contact">
                            <span>
                                <div className="ourMenu-contact-content-phone-image-logo">
                                    <img src={phoneLogo} alt="phone logo" />
                                </div>
                                <div className="ourMenu-contact-content-phone-image-logoAlt">
                                    <img src={phoneLogoAlt} alt="phone logo" />
                                </div>
                            </span>

                            <div className="ourMenu-contact-content-phone">
                                +91 8510957376
                            </div>
                        </p>
                    </div>
                </div>
                <div className="ourMenu-contact-imageDining">
                    <img src={imageDining} alt="dining table" />
                </div>
            </div>
            <div className="ourMenu-contact-imageDining-desc">
                Authentic South Indian Taste. <br /> Introducing first time
                ever! Unlimited South Indian Meal
            </div>
            <div className="ourMenu-customer">
                <div className="ourMenu-customer-head1">What</div>
                <div className="ourMenu-customer-head2">
                    {" "}
                    <span className="ourMenu-customer-head2-o">O</span>ur
                    constomer says
                </div>
                <div className="ourMenu-customer-reviews">
                    <div className="ourMenu-customer-reviews-leftArrow">
                        <img src={leftArrow} alt="left arrow" />
                    </div>
                    <div className="ourMenu-customer-review">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat null”
                    </div>
                    <div className="ourMenu-customer-reviews-rightArrow">
                        <img src={rightArrow} alt="right arrow" />
                    </div>
                </div>
                <div className="ourMenu-customer-auther">Mr. sachin Rathor</div>
            </div>

            <div className="ourMenu-maps">
                <Map
                    google={props.google}
                    zoom={18}
                    defaultZoom={18}
                    initialCenter={{
                        lat: 23.077044612962485,
                        lng: 72.52145732490102,
                    }}
                >
                    <Marker
                        onClick={() =>
                            window.open(
                                "https://maps.app.goo.gl/ZrBqQQjBPg4zTgU38",
                                "_blank"
                            )
                        }
                        position={{
                            lat: 23.077044612962485,
                            lng: 72.52145732490102,
                        }}
                    />
                </Map>
            </div>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBKQ8Of6_RXTedGZJuFw144ETVfyY-ZKkY",
})(OurMenu);

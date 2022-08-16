import React from "react";
import "./ourMenu.css";
import dosaImage from "../../assets/home-ourMenu-dosaImage.png";
import foodImage from "../../assets/home-ourMenu-foodImage.png";
import arrow from "../../assets/home-ourStory-arrow.svg";
import imageDining from "../../assets/home-ourMenu-imageDining.png";

function OurMenu() {
    return (
        <div className="ourMenu">
            <div className="ourMenu-findAbout">Find About</div>
            <div className="ourMenu-ourMenu">Our Menu</div>
            <div className="ourMenu-nav">
                <span className="ourMenu-nav-item">Vadai & upma</span>
                <span
                    className="ourMenu-nav-item"
                    id="ourMenu-nav-item-classic"
                >
                    Classic
                </span>
                <span className="ourMenu-nav-item">Premium</span>
                <span className="ourMenu-nav-item">Supreme</span>
                <span className="ourMenu-nav-item">Signature</span>
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
                    <p className="ourMenu-vision-content-para1">
                        Dosawala strives to provide its customers, the
                        healthiest and wholesome meal at a very affordable
                        prices and to generate prots for the benet of the
                        franchise in a short duration of time. Dosawala dedicate
                        to ensure the success of our franchisee associates by
                        focussing and providing exclusive support and service on
                        committed environment
                    </p>
                    <p className="ourMenu-vision-content-para2">
                        To spread the product across the globe through our chain
                        of retail outlets. Our brand chain special taste makers
                        and ingredients will spread a standard avor of taste
                        all over the country
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
            <div className="ourMenu-contact">
                <div className="ourMenu-contact-content">
                    <div className="ourMenu-contact-content-head1">
                        contact for
                    </div>
                    <div className="ourMenu-contact-content-head2">
                        Franchise Inquiry
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
                    <p className="ourMenu-contact-content-mail"></p>
                    <p className="ourMenu-contact-content-contact"></p>
                </div>
                <div className="ourMenu-contact-imageDining">
                    <img src={imageDining} alt="dining table" />
                </div>
            </div>
        </div>
    );
}

export default OurMenu;

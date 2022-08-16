import React from "react";
import "./ourMenu.css";
import dosaImage from "../../assets/home-ourMenu-dosaImage.png";
import foodImage from "../../assets/home-ourMenu-foodImage.png";
import arrow from "../../assets/home-ourStory-arrow.svg";

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
                    <div>Vision and Growth</div>
                    <div>A Winning Franchise Team</div>
                    <p>
                        Dosawala strives to provide its customers, the
                        healthiest and wholesome meal at a very affordable
                        prices and to generate prots for the benet of the
                        franchise in a short duration of time. Dosawala dedicate
                        to ensure the success of our franchisee associates by
                        focussing and providing exclusive support and service on
                        committed environment
                    </p>
                    <p>
                        To spread the product across the globe through our chain
                        of retail outlets. Our brand chain special taste makers
                        and ingredients will spread a standard avor of taste
                        all over the country
                    </p>
                    <p className="ourMenu-vision-content">
                        Know more
                        <img
                            className="ourMenu-vision-content"
                            src={arrow}
                            alt="arrow"
                        />
                        <img src={arrow} alt="arrow" />
                        <img src={arrow} alt="arrow" />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OurMenu;

// import React, { useState } from "react";
import "./ourStory.css";
import peopleImage from "../../assets/home-ourStory-peopleImage.png";
import arrow from "../../assets/home-ourStory-arrow.svg";
import dish1 from "../../assets/home-ourStory-dish1.png";
import dish2 from "../../assets/home-ourStory-dish2.png";
import dish3 from "../../assets/home-ourStory-dish3.png";
import welcome from "../../assets/home-ourStory-welcome.png";
import peopleImageMobile from "../../assets/home-ourStory-peopleImage-mobile.png";

function OurStory() {
    // const [img, setImg] = useState(false);
    return (
        <div className="ourStory">
            <div className="ourStory-section">
                <img
                    src={peopleImage}
                    className="ourStory-section-desktopImage"
                    alt="group of people"
                />
                <div className="ourStory-section-mobileImage">
                    <img
                        src={peopleImageMobile}
                        className="ourStory-section-mobileImage"
                        alt="group of people mobile"
                    />
                </div>
                <div className="ourStory-section-content">
                    <div className="ourStory-section-content-head">
                        <span className="ourStory-section-content-head-o">
                            O
                        </span>
                        ur Story
                    </div>
                    <div className="ourStory-section-content-para">
                        <p className="ourStory-section-content-para1">
                            Dosawala is the best South Indian restaurant brand
                            that has more than a decade of experience in serving
                            authentic and contemporary delicacies of South
                            Indian cuisine. We are established to breathe a new
                            life into the traditional
                        </p>
                        <p className="ourStory-section-content-para1-mobile">
                            In a world that is increasingly coming closer, we
                            seek to promote the harmony of Indian culture,
                            cuisine and experience. Celebrating southern dining
                            in all its glory, we use the finest ingredients,
                            often flown in from different parts of South India,
                            to create mouth-watering delicacies for a truly
                            authentic and unforgettable dining experience.
                        </p>
                        <p className="ourStory-section-content-para2">
                            South Indian cuisine and present it to the world in
                            a new light. At Dosawala street, we endeavour to
                            cater a unique menu to food conscious customers by
                            modernising traditional south Indian recipes into
                            healthier & tastier dishes.
                        </p>
                        <p className="ourStory-section-content-para2-mobile">
                            providing the world with a different traditional
                            experience and considering our youth going to Morden
                            era we have created the cuisine and menu to serving
                            authentic and contemporary delicacies South Indian
                            food with our decade of experience.
                        </p>
                        <p className="ourStory-section-content-para3">
                            Know more
                            <img
                                className="ourStory-section-content-para3-image"
                                src={arrow}
                                alt="arrow"
                            />
                            <img src={arrow} alt="arrow" />
                            <img src={arrow} alt="arrow" />
                        </p>
                    </div>
                </div>
            </div>
            <div className="ourStory-image-mobile">
                <span className="ourStory-image-welcome-mobile">
                    <img src={welcome} alt="welcome" />
                </span>
                <span className="ourStory-image-text-mobile">
                    Test with Love
                </span>
            </div>
            <div className="ourStory-section-head">
                {/* ourStory-section-head-part1 is extra div added for adjustment also there is css added in this div */}
                <div className="ourStory-section-head-part1">
                    <div className="ourStory-section-head1">Discover</div>
                    <div className="ourStory-section-head2">
                        <span className="ourStory-section-head2-s">S</span>
                        pecial dish
                    </div>
                </div>
                <div className="ourStory-section-images">
                    <div className="ourStory-section-images-dishes">
                        <div className="ourStory-section-images-dish">
                            <img src={dish1} alt="dosa dish 1" />
                            <div className="ourStory-section-images-dish-name">
                                Kara Mura
                            </div>
                            <div className="ourStory-section-images-dish-type">
                                Masala dosa
                            </div>
                        </div>

                        <div className="ourStory-section-images-dish">
                            <img src={dish2} alt="dosa dish 2" />
                            <div className="ourStory-section-images-dish-name">
                                Rava schezwan Dosa
                            </div>
                            <div className="ourStory-section-images-dish-type">
                                supreme dosai
                            </div>
                        </div>

                        <div className="ourStory-section-images-dish">
                            <img src={dish3} alt="dosa dish 3" />
                            <div className="ourStory-section-images-dish-name">
                                Cone shape
                            </div>
                            <div className="ourStory-section-images-dish-type">
                                Special masala dosa
                            </div>
                        </div>
                    </div>
                    <div className="ourStory-section-images-welcome">
                        <img src={welcome} alt="welcome" />
                        <div className="ourStory-section-images-welcome-text">
                            Test with Love
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStory;

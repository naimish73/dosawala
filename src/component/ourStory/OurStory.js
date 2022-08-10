import React from "react";
import "./ourStory.css";
import peopleImage from "../../assets/home-ourStory-peopleImage.png";
import arrow from "../../assets/home-ourStory-arrow.svg";

function OurStory() {
    return (
        <div className="ourStory">
            <div className="ourStory-section">
                <img src={peopleImage} alt="group of people" />
                <div className="ourStory-section-content">
                    <div className="ourStory-section-content-head">
                        <span className="ourStory-section-content-head-o">
                            O
                        </span>
                        ur Story
                    </div>
                    <div className="ourStory-section-content-para">
                        <p>
                            Dosawala is the best South Indian restaurant brand
                            that has more than a decade of experience in serving
                            authentic and contemporary delicacies of South
                            Indian cuisine. We are established to breathe a new
                            life into the traditional
                        </p>
                        <p>
                            South Indian cuisine and present it to the world in
                            a new light. At Dosawala street, we endeavour to
                            cater a unique menu to food conscious customers by
                            modernising traditional south Indian recipes into
                            healthier & tastier dishes.
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
            <div className="ourStory-section-head">
                <div className="ourStory-section-head1">Discover</div>
                <div className="ourStory-section-head2">
                    <span className="ourStory-section-head2-s">S</span>
                    pecial dish
                </div>
            </div>
            <div className="ourStory-section-images"></div>
        </div>
    );
}

export default OurStory;

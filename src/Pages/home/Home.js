import React from "react";
import "./home.css";
import Navigation from "../../component/navigation/Navigation.js";
import FirstPage from "../../component/firstPage/FirstPage";
import OurStory from "../../component/ourStory/OurStory";

function Home() {
    return (
        <div>
            <Navigation />
            <FirstPage />
            <OurStory />
        </div>
    );
}

export default Home;

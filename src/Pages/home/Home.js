import React from "react";
import "./home.css";
import Navigation from "../../component/navigation/Navigation.js";
import FirstPage from "../../component/firstPage/FirstPage";
import OurStory from "../../component/ourStory/OurStory";
import OurMenu from "../../component/ourMenu/OurMenu";
import Footer from "../../component/footer/Footer";

function Home() {
    return (
        <div>
            <Navigation />
            <FirstPage />
            <OurStory />
            <OurMenu />
            <Footer />
        </div>
    );
}

export default Home;

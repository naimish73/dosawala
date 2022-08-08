import React from "react";
import "./home.css";
import Navigation from "../../component/navigation/Navigation.js";
import FirstPage from "../../component/firstPage/FirstPage";

function Home() {
    return (
        <div>
            <Navigation />
            <FirstPage />
        </div>
    );
}

export default Home;

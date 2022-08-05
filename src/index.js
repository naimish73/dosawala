import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Pages/home/Home.js";
import reportWebVitals from "./reportWebVitals";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import AboutUs from "./Pages/aboutUs/AboutUs.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Route>
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function App() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default App;

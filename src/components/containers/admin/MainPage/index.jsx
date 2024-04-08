import './index.css';
import TopBar from "../../../templates/topBar";
import React from "react";

const MainPage = () => {
    return (
        <div>
            <TopBar/>
            <div className="main-container">
                <section id="welcome" className="welcome-section">
                    <h2>Welcome to BuildRight Construction</h2>
                    <p>Your dream projects, realized.</p>
                </section>
                <footer className="footer">
                    <p>Contact us: info@buildrightconstructions.com</p>
                </footer>
            </div>
        </div>
    );
};

export default MainPage;
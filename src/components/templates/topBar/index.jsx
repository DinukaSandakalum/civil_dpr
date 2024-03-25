import {Link} from "react-router-dom";
import React from "react";

const TopBar = () => {
    return (
        <div>
            <header className="main-header">
                <h1>ABC Engineering Pvt Ltd</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Main</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default TopBar;
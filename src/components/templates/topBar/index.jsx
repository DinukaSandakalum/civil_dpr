import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const TopBar = () => {

    const user = useSelector(state => state.user);

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
                        {
                            (user && user.user && user.user.responseBody && user.user.responseBody.userRole === 'ADMIN'?
                                    <li><Link to="/projects">Projects</Link></li> : <></>
                            )
                        }
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default TopBar;
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/dashboard/projects'>Projects</Link></li>
                <li><Link to='/dashboard/contact'>Contact Us</Link></li>
                <li><Link to='/dashboard/About'>About</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;
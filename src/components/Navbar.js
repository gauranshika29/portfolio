import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="hero" smooth={true} duration={600} offset={-70}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={600} offset={-70}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={600} offset={-70}>Projects</Link></li>
                <li><Link to="experience" smooth={true} duration={600} offset={-70}>Experience</Link></li>
                <li><Link to="leadership" smooth={true} duration={600} offset={-70}>Leadership</Link></li>
                <li><Link to="contact" smooth={true} duration={600} offset={-70}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;

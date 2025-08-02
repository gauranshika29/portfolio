import React from 'react';
import './Hero.css';
import myPhoto from '../assets/hero.jpg';

const Hero = () => {
    return (
        <section id="hero" className="hero-container">
            <div className="hero-text">
                <h1>Hi, I’m Anshika Gaur </h1>
                <p>I am a final year Computer Science Student & Equity Advocate based in Ontario.</p>
                <div className="hero-buttons">
                    <a href="#projects" className="button">Latest Projects</a>
                    <a href="#about" className="button alt">More About Me</a>
                </div>
            </div>
            <div className="hero-image">
                <img src={myPhoto} alt="Anshika Gaur" />
            </div>
        </section>
    );
};

export default Hero;

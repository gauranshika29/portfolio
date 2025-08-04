// src/pages/ThankYou.js
import React from "react";
import './thankyou.css';
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thankyou-container">
      <h1>Thank You!</h1>
      <p>Your message has been sent successfully.</p>
      <Link to="/" className="home-link">Go back to Home</Link>
    </div>
  );
};

export default ThankYou;

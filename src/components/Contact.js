import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <motion.section
            className="contact"
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2>Contact</h2>
            <p>Email: <a href="mailto:gauranshika03@gmail.com">gauranshika03@gmail.com</a></p>
            <p>Location: Peterborough, Ontario</p>
            <p>GitHub: <a href="https://github.com/gauranshika29" target="_blank" rel="noopener noreferrer">Hi, look at my github profile here : anshikagaur</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/anshika-gaur-4bb65b221" target="_blank" rel="noopener noreferrer">Hi, look at my LinkedIn profile here : anshikagaur</a></p>
            <div className="contact-buttons">
                <a href="/resume.pdf" download className="button">Download Resume</a>
            </div>
        </motion.section>
    );
};

export default Contact;

import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.section
            className="about"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2>More About Me</h2>
            <p className="bio"><strong>
                Final-year BSc. (Honours) Computer Science student specializing in Data Analytics with a minor in Business at
                Trent University. Passionate about using data to inform equitable, community-based decision-making. Strong
                technical skills, leadership experience, and an interdisciplinary approach to social problem-solving.
            </strong></p>

            <table className="details">
                <tbody>
                    <tr>
                        <td><strong>Education:</strong></td>
                        <td>Trent University</td>
                    </tr>
                    <tr>
                        <td><strong>Degree:</strong></td>
                        <td>BSc. Honours in Computer Science specializing in Data Analytics with a Minor in Business Administration</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td><a href="mailto:gauranshika03@gmail.com">gauranshika03@gmail.com</a></td>
                    </tr>
                    <tr>
                        <td><strong>Location:</strong></td>
                        <td>Peterborough, Ontario</td>
                    </tr>
                </tbody>
            </table>

            <div className="buttons">
                <a href="/resume.pdf" download className="button">Download My CV</a>
                <a href="#contact" className="button alt">Contact Me Now</a>
            </div>
        </motion.section>
    );
};

export default About;

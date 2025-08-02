import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const certificates = [
    "Dean’s Honour Roll - Trent University",
    "AWS Certification for Data Analytics Fundamentals - Amazon Web Services (Jul 2022)",
    "IBMI Marketing and Communications Certificate - International Business Management Institute Germany (May 2021)",
    "Data Science and Machine Learning Internship Certificate - Edureka (Apr 2022)",
    "Star Space Technology and Aeronautical Rocketry - STAR (Jul 2022)",
];

const Certificates = () => {
    return (
        <motion.section
            className="certificates"
            id="certifications"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2>Licenses & Certifications</h2>
            <ul className="cert-list">
                {certificates.map((cert, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        {cert}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Certificates;

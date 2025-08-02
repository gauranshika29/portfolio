import React from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

const leadershipList = [
    "University Senate Committee (USC): Advocated for student concerns and implemented institutional improvements.",
    "Cyclical Program Review Committee (CPRC): Ensured programs met academic standards.",
    "Policy & Governance Committee: Helped develop policy and governance frameworks at Trent.",
    "Animal Care Committee: Reviewed and improved animal welfare policies on campus.",
    "Search Committee for the Next Dean of Science: Participated in dean selection process.",
    "Finance Committee: Provided financial oversight and budget recommendations.",
    "Special Appeals Committee: Evaluated student appeals for fair resolutions.",
    "PACHREA: Worked on equity and accessibility policies at the university.",
    "Inwendaamin Oki Committee: Contributed to Indigenous-focused student and community relations.",
    "Events Committee: Organized and executed engaging campus events.",
];

const Leadership = () => {
    return (
        <motion.section
            className="leadership"
            id="leadership"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2>Leadership & Committee Involvement</h2>
            <ul className="leadership-list">
                {leadershipList.map((item, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Leadership;

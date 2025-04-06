import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: "Vice President - Campaigns & Equity",
        org: "Trent Central Student Association (TCSA)",
        date: "Mar 2024 – Mar 2025",
        description: "Led initiatives promoting equity and inclusion on campus. Organized campaigns, events, and sat on several university committees."
    },
    {
        role: "Vice President at TCSCA",
        org: "Trent Computer Science Club Association (TCSCA)",
        date: "May 2024 – Mar 2025",
        description: "Ran hackathons, coding workshops, and collaborated with faculty to boost student engagement and community building."
    },
    {
        role: "UI/UX Designer & Integration Specialist",
        org: "PetFam (U.S. based startup, Remote)",
        date: "Apr 2024 – May 2024",
        description: "Designed intuitive UI screens for iOS, improved user experience using Zeus AI datasets, and ensured app performance."
    },
    {
        role: "Data Analytics & Research Intern",
        org: "ReliConnect (India)",
        date: "May 2024 – Sep 2024",
        description: "Created dashboards in Power BI/Tableau, handled data cleaning, ETL processes, and assisted with predictive modeling."
    }
];

const Experience = () => {
    return (
        <motion.section
            className="experience"
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2>Experience</h2>
            <div className="experience-grid">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="experience-card"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 180 }}
                    >
                        <h3>{exp.role}</h3>
                        <h4>{exp.org}</h4>
                        <p className="date">{exp.date}</p>
                        <p>{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;

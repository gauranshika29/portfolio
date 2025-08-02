import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        title: "PetFam App",
        image: "https://via.placeholder.com/400x250?text=PetFam+App",
        description: "Designed intuitive UI/UX for the Pet Fam iOS app. Utilized Zeus AI datasets and contributed to app integration and maintenance.",
    },
    {
        title: "ReliConnect Dashboards",
        image: "https://via.placeholder.com/400x250?text=ReliConnect",
        description: "Built dashboards using Power BI/Tableau. Performed ETL and predictive modeling during internship.",
    },
    {
        title: "Exploratory Data Analysis",
        image: "https://via.placeholder.com/400x250?text=EDA",
        description: "Analyzed open datasets using Python. Visualized data with Matplotlib & Seaborn.",
    },
    {
        title: "A* 8-Puzzle Solver",
        image: "https://via.placeholder.com/400x250?text=8-Puzzle",
        description: "Compared heuristics in A* search algorithm for solving the 8-puzzle efficiently.",
    },
    {
        title: "N-Queens Beam Search",
        image: "https://via.placeholder.com/400x250?text=N-Queens",
        description: "Implemented Local Beam Search for solving the N-Queens problem with optimized performance.",
    },
];

const Projects = () => {
    return (
        <motion.section
            className="projects"
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            <h2>Projects & Initiatives</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;

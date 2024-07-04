import React from 'react';
import './Experience.css';

const ExperienceItem = ({ title, company, duration }) => {
    return (
        <div className="experience-item">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{duration}</p>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        { title: 'Founder', company: 'Resistbot', duration: '2020 - Present' },
        { title: 'VP of Design', company: 'Causes', duration: '2013 - 2015' },
        { title: 'Founding Designer', company: 'Mint', duration: '2007 - 2009' },
    ];

    return (
        <div className="experience">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <ExperienceItem key={index} title={exp.title} company={exp.company} duration={exp.duration} />
            ))}
        </div>
    );
};

export default Experience;

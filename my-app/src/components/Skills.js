import React from 'react';
import './Skills.css';

const Skill = ({ name }) => {
    return (
        <div className="skill">
            <h3>{name}</h3>
        </div>
    );
};

const Skills = () => {
    const skills = [
        'Microsoft Excel',
        'Google Sheets',
        'Shopify',
        'Sales/Marketing strategies',
        'Data Management'
    ];

    return (
        <div className="skills">
            <h2>Skills Summary</h2>
            {skills.map((skill, index) => (
                <Skill key={index} name={skill} />
            ))}
        </div>
    );
};

export default Skills;

import React from 'react';
import './Skills.css';

const Skill = ({ name, level }) => {
    return (
        <div className="skill">
            <h3>{name}</h3>
            <p>Proficiency: {level}</p>
        </div>
    );
};

const Skills = () => {
    const skills = [
        { name: 'React', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'CSS', level: 'Intermediate' },
    ];

    return (
        <div className="skills">
            <h2>Skills</h2>
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} level={skill.level} />
            ))}
        </div>
    );
};

export default Skills;

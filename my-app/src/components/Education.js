import React from 'react';
import './Education.css';

const EducationItem = ({ institution, degree, years }) => {
    return (
        <div className="education-item">
            <h3>{institution}</h3>
            <p>{degree}</p>
            <p>{years}</p>
        </div>
    );
};

const Education = () => {
    const education = [
        { 
            institution: 'University of Southern Florida (Muma)', 
            degree: 'Bachelor of Science in Information Systems', 
            years: '2022-2025' 
        }
    ];

    return (
        <div className="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
                <EducationItem 
                    key={index} 
                    institution={edu.institution} 
                    degree={edu.degree} 
                    years={edu.years} 
                />
            ))}
        </div>
    );
};

export default Education;

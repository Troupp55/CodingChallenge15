import React from 'react';
import './Experience.css';

const ExperienceItem = ({ title, company, duration, details }) => {
    return (
        <div className="experience-item">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{duration}</p>
            <ul>
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            title: 'Sales Internship',
            company: 'JAMES ENGINEERING',
            duration: '2022-2023',
            details: [
                'Managed the company LinkedIn account with over 5,000 followers.',
                'Generated 15-25 calls or emails for potential leads daily.',
                'Utilized Google Sheets for systematic tracking and management of 10,000+ client’s data and sales interactions.',
                'Collaborated with various channel partners to enhance product reach and market penetration.',
                'Utilized persuasive communication skills to highlight the unique value of the products/services offered.'
            ]
        },
        {
            title: 'Part Owner',
            company: 'COLORADON5X',
            duration: '2019-2022',
            details: [
                'Created and managed a following of over 70,000 people on social media via Facebook and Instagram.',
                'Managed an online e-commerce Shopify store grossing over $100,000 in sales monthly.',
                'Replied and resolved over 15-20 inquiries via email and messenger daily.',
                'Marketed automotive products and services for the business.',
                'Completed basic mechanical work (oil changes, gaskets, and inspections).',
                'Proficiently sold 3-8 cosmetic products to customers daily.'
            ]
        },
        {
            title: 'Facility Manager',
            company: 'AUTOWASH',
            duration: '2020-2021',
            details: [
                'Ensured all machines and equipment are functioning as expected and communicated needs to parts, repairs and/or new equipment.',
                'Supported plans, and efficiently communicated updates for all repair and installation projects.',
                'Became a strong communicator, while effectively navigating Microsoft teams and making calls to vendors.'
            ]
        },
        {
            title: 'Porter',
            company: 'MERCEDES BENZ OF LOVELAND',
            duration: '2018-2019',
            details: [
                'Responsible for the intake of new/dealer-traded inventory, upkeep of new and used car lot.',
                'Moved client and dealership vehicles to and from service lane, service stalls and lot.',
                'Detailed and washed customer vehicles.'
            ]
        }
    ];

    return (
        <div className="experience">
            <h2>Experience</h2>
            {experiences.map((exp, index) => (
                <ExperienceItem 
                    key={index} 
                    title={exp.title} 
                    company={exp.company} 
                    duration={exp.duration} 
                    details={exp.details} 
                />
            ))}
        </div>
    );
};

export default Experience;

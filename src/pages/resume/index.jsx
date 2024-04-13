import React, { useEffect } from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './resume.css';

function ResumePage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#3b80e0');
        changeBackground('bg-resume');
        return () => {
            document.body.classList.remove('bg-resume');
            document.documentElement.style.removeProperty('--nav-item-bg-color');
        };
    }, []);
    return (
        <div id="full-stack-developer">
            <section >
                <h1>Full Stack Developer & Aerospace Engineering Student</h1>
                <h2>Experience & Education</h2>
                <ul>
                    <li>
                    <strong>Full Stack Developer/Aerospace Engineering</strong> - University of Central Florida/ Hillsborough Community College
                    <span>August 2023 - Present</span>
                    <p>Engaged in full-stack web development studies while advancing in Aerospace Engineering.</p>
                    </li>
                </ul> 

                <h2>Skills</h2>
                <ul>
                    <li>Cascading Style Sheets (CSS)</li>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>Web Development</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>Mysql2</li>
                    <li>Handlebars.js</li>
                    <li>Bootstrap</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Sequelize</li>
                    <li>Engineering Principles</li>

                </ul>

                <h2>Additional Experience</h2>
                <ul>
                    <li>
                    <strong>Field Sales Representative</strong> - Vivint Smart Home 
                    <span>February 2021 - December 2023</span>
                    <p>Door-to-door sales for Vivint smart home security solutions.</p>
                    </li>
                </ul>

                <h2>Military Service</h2>
                <ul>
                    <li>
                        <strong>Gun Team Leader/Substitute Weapons Squad Leader</strong> - US Army
                        <span>January 2019 - January 2020</span>
                        <p>Performed leadership roles, including acting as Weapons Squad Leader when necessary.</p>
                        <strong>Infantry Team Leader</strong> - US Army
                        <span>January 2017 - January 2019</span>
                        <p>Lead infantry personell through Air Field Seizures, Raids, Ambushes, Reconaissance missions.</p>
                        <strong>Infantry Paratrooper</strong>
                        <span>January 2015 - January 2017</span>
                        <p>Performed infantry duties, including reconnaissance, security, and tactical movements.</p>
                    </li>
                </ul>
                <a href="http://localhost:3001/download-resume" target="_blank" rel="noopener noreferrer" className="download-resume">
                    Download My Resume
                </a>

            </section>
            

        </div>
    );
}

export default ResumePage;
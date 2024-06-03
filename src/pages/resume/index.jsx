import React, { useEffect } from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './resume.css';
const backendURL2 = import.meta.env.VITE_BACKEND_ROUTE_RESUME

export default function ResumePage() {
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
            <section>       
                <h1>Professional Experience</h1>
                <h2>Freelance FullStack Developer</h2>
                <h3>May 2024 - Present</h3>
                <ul>
                    <li>
                        <strong>Code Development:</strong> Crafted software solutions tailored to specific client requirements.
                    </li>
                    <li>
                        <strong>Product Improvement:</strong> Provided strategic recommendations to enhance product functionality and align with client vision.
                    </li>
                    <li>
                        <strong>System Optimization:</strong> Ensured systems operated at peak efficiency through performance tuning and optimization.
                    </li>
                    <li>
                        <strong>Project Completion:</strong> Delivered high-quality solutions meeting client expectations and deadlines.
                    </li>
                </ul>
                <br></br>
                <h2>Sales Representative, Vivint</h2>
                <h3>February 2021 - December 2023</h3>
                <ul>
                    <li>
                        <strong>Marketing:</strong> Leveraged available resources to create effective self-advertisement campaigns.
                    </li>
                    <li>
                        <strong>Client Management:</strong> Maintained a personalized client list, offering tailored solutions to meet individual needs.
                    </li>
                    <li>
                        <strong>Merchandising:</strong> Demonstrated in-depth product knowledge to effectively sell and promote offerings.
                    </li>
                    <li>
                        <strong>Communication:</strong> Understood and addressed customer needs, providing services that matched their requirements.
                    </li>
                    <li>
                        <strong>Customer Service:</strong> Assisted customers in finding suitable products and services and maintaining customer satisfaction.
                    </li>
                </ul>
                <br></br>
                <h2>U.S. Army Sergeant (E-5)</h2>
                <h3>September 2015 - February 2020</h3>
                <ul>
                    <li>
                        <strong>Leadership:</strong> Led infantry teams of various sizes to successfully accomplish mission objectives.
                    </li>
                    <li>
                        <strong>Training:</strong> Conducted comprehensive training programs to prepare team members for critical assignments.
                    </li>
                    <li>
                        <strong>Planning:</strong> Coordinated manpower and equipment to efficiently complete objectives.
                    </li>
                    <li>
                        <strong>Readiness:</strong> Maintained operational readiness of personnel and equipment for emergency response.
                    </li>
                    <li>
                        <strong>Preparation:</strong> Utilized resources effectively to facilitate training, manage emergencies, and complete tasks promptly.
                    </li>
                    <li>
                        <strong>Standardization:</strong> Developed standardized procedures for handling diverse situations, ensuring consistent responses across units.
                    </li>
                </ul>
                <br></br>
                <h1>Education</h1>
                <h2>Full Stack Web Development Certificate</h2>
                <h3>University of Central Florida</h3>
                <p>Completed a comprehensive program covering front-end and back-end development, including JavaScript, HTML, CSS, Node.js, React.js, Express.js, MySQL, Handlebars.js, Bootstrap, MongoDB, Mongoose, and Sequelize.</p>
                <ul>
                    <strong>Technologies Learned:</strong>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL2</li>
                    <li>Handlebars.js</li>
                    <li>Bootstrap</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Sequelize</li>
                </ul>
                <br></br>
                <h2>Associate of Science in Engineering</h2>
                <h3>Hillsborough Community College</h3>
                <p>Completed a two-year program in engineering, including courses in mathematics, physics, and engineering principles.</p>
                <br></br>
                <h2>Military Education</h2>
                <ul>
                    <li>Ranger School</li>
                    <li>Ranger Assessment & Selection Program</li>
                    <li>Infantry One Station Unit Training (OSUT)</li>
                    <li>Basic Airborne course</li>
                    <li>Basic Leadership Course</li>
                </ul>
                <br></br>
                <h1>Skills</h1>
                <ul>
                    <li>Adaptable: Quick to adjust to new challenges and environments.</li>
                    <li>Hard-Working: Committed to delivering high-quality results consistently.</li>
                    <li>Resourceful: Skilled in finding innovative solutions to problems.</li>
                    <li>Reflective: Regularly evaluates performance for continuous improvement.</li>
                    <li>Flexible: Capable of handling multiple tasks and adapting to changing priorities.</li>
                    <li>Disciplined: Maintains a strong sense of duty and responsibility.</li>
                    <li>Reliable: Dependable and trustworthy in completing tasks.</li>
                    <li>Resilient: Able to recover quickly from setbacks and challenges.</li>
                    <li>Thorough: Ensures accuracy and completeness in all tasks.</li>
                    <li>Persuasive: Effective in convincing others and driving results.</li>
                    <li>Organized: Maintains a structured approach to managing tasks and projects.</li>
                    <li>Accurate: Pays close attention to detail to ensure precision.</li>
                    <li>Good Learner: Quickly grasps new concepts and skills.</li>
                </ul>
                <br></br>
                
            </section>
        </div>
    );
}

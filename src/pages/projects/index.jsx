import React, {useEffect} from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './projects.css';

function ProjectsPage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#791028');
        changeBackground('bg-projects');
        return () => {
            document.body.classList.remove('bg-projects');
            document.documentElement.style.removeProperty('--nav-item-bg-color');
        };
      }, []); 
    return (
        <div>
            <section id="projects">
                <h2>My Projects</h2>
                <div className="project ">
                    <h3>Project-1</h3>
                    <img src="./assets/project1.jpg" alt="Project 1"/>
                    <p>Project 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                </div>
                <div className="project ">
                    <h3>Project-2</h3>
                    <img src="./assets/project2.jpg" alt="Project 2"/>
                    <p>Project 2 description...</p>
                    <a href="#">Link to the deployed application</a>
                </div>
                <div className="project ">
                    <h3>Project-3</h3>
                    <img src="./assets/project3.jpg" alt="Project 3"/>
                    <p>Project 3 description...</p>
                    <a href="#">Link to the deployed application</a>
                </div>
            </section>

            <section id="Challenges">
                <h2>My Challenges</h2>
                <div className="challenge">
                    <img src="./assets/challenge1.jpg" alt="Challenge 1"/>
                    <p>Challenge 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 1</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge2.jpg" alt="Challenge 2"/>
                    <p>Challenge 2 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 2</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge3.jpg" alt="Challenge 3"/>
                    <p>Challenge 3 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 3</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge1.jpg" alt="Challenge 1"/>
                    <p>Challenge 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 1</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge2.jpg" alt="Challenge 2"/>
                    <p>Challenge 2 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 2</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge3.jpg" alt="Challenge 3"/>
                    <p>Challenge 3 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 3</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge1.jpg" alt="Challenge 1"/>
                    <p>Challenge 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 1</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge2.jpg" alt="Challenge 2"/>
                    <p>Challenge 2 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 2</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge3.jpg" alt="Challenge 3"/>
                    <p>Challenge 3 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 3</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge1.jpg" alt="Challenge 1"/>
                    <p>Challenge 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 1</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge2.jpg" alt="Challenge 2"/>
                    <p>Challenge 2 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 2</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge3.jpg" alt="Challenge 3"/>
                    <p>Challenge 3 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 3</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge1.jpg" alt="Challenge 1"/>
                    <p>Challenge 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 1</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge2.jpg" alt="Challenge 2"/>
                    <p>Challenge 2 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 2</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/challenge3.jpg" alt="Challenge 3"/>
                    <p>Challenge 3 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 3</h3>
                </div>
                <div className="challenge">
                    <img src="./assets/alt-gif6.gif" alt="Challenge 1"/>
                    <p>Challenge 1 description...</p>
                    <a href="#">Link to the deployed application</a>
                    <h3>Challenge 16</h3>
                </div>

            </section>

        </div>
    );
}

export default ProjectsPage;
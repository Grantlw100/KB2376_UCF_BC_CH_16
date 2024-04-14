import React from 'react';
import pj1 from './projects/pj1.png';
import pj2 from './projects/pj2.png';
import pj3 from './projects/pj3.jpeg';

const projectImages = {
    pj1,
    pj2,
    pj3
};

export default function ProjectCard({ title, imageUrlKey, projectUrl, repoUrl }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <p>
                {projectUrl !== '#' && (
                    <a href={projectUrl} title="View Live Project">
                        <i id='cardIcon' className="fas fa-globe"></i>
                    </a>
                )}
                <a href={repoUrl} title="View on GitHub">
                    <i id='cardIcon' className="fab fa-github"></i>
                </a>
            </p>
            <img src={projectImages[imageUrlKey]} alt={`Screenshot of ${title}`} />
            
        </div>
    );
}


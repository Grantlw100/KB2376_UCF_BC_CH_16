import React from 'react';
import Challenge1 from './challenges/Challenge1.png';
import Challenge2 from './challenges/Challenge2.png';
import Challenge3 from './challenges/Challenge3.png';
import Challenge4 from './challenges/Challenge4.png';
import Challenge5 from './challenges/Challenge5.png';
import Challenge6 from './challenges/Challenge6.png';
import Challenge7 from './challenges/Challenge7.png';
import Challenge8 from './challenges/Challenge8.png';
import Challenge9 from './challenges/Challenge9.png';
import Challenge10 from './challenges/Challenge10.jpg';
import Challenge11 from './challenges/Challenge11.png';
import Challenge12 from './challenges/Challenge12.jpg';
import Challenge13 from './challenges/Challenge13.png';

const challengeImages = {
    Challenge1,
    Challenge2,
    Challenge3,
    Challenge4,
    Challenge5,
    Challenge6,
    Challenge7,
    Challenge8,
    Challenge9,
    Challenge10,
    Challenge11,
    Challenge12,
    Challenge13
};

export default function ChallengeCard({ title, imageUrlKey, challengeUrl, repoUrl }) {
    return (
        <div className="challenge">
            <img src={challengeImages[imageUrlKey]} alt={`Screenshot of ${title}`} />
        
            <h3>{title}</h3>
            <p>
                <a href={repoUrl} title="View on GitHub"><i id='cardIcon' className="fab fa-github"></i></a>
            
                {challengeUrl !== '#' && (
                    <a href={challengeUrl} title="View Live Challenge"><i id='cardIcon' className="fas fa-globe"></i></a>
                )}
            </p>
            </div>
    );
}


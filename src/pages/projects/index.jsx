import React, { useEffect } from 'react';
import ProjectCard from '../../components/projectCard'; // ensure correct import path and naming
import ChallengeCard from '../../components/ChallengeCard';
import changeBackground from '../../utils/backgroundHelper';
import './projects.css';

export default function ProjectsPage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#791028');
        changeBackground('bg-projects');
        return () => {
            document.body.classList.remove('bg-projects');
            document.documentElement.style.removeProperty('--nav-item-bg-color');
        };
    }, []);

    const projects = [
        { id: 1, title: 'DopaMeme', imageUrlKey: 'pj1', projectUrl: 'https://jhettortle.github.io/Project-01/', repoUrl: 'https://github.com/Jhettortle/Project-01' },
        { id: 2, title: 'Flex-Flow Workout-Manager', imageUrlKey: 'pj2', projectUrl: 'https://workoutmanagerflexflow-c7e5c5afbfc1.herokuapp.com/login', repoUrl: 'https://github.com/humphreyt12/Flex-Flow' },
        { id: 3, title: 'ChatLingo', imageUrlKey: 'pj3', projectUrl: '#', repoUrl: 'https://github.com/Grantlw100/ChatLingo'}
    ];

    const challenges = [
        { id: 1, title: 'Basic HTML5 Implementation', imageUrlKey: 'Challenge1', challengeUrl: 'https://grantlw100.github.io/KB2376_UCF_BC_CH_1/', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_1' },
        { id: 2, title: 'Password Generator', imageUrlKey: 'Challenge2', challengeUrl: 'https://grantlw100.github.io/KB2376-UCF_BC_CH_3/', repoUrl: 'https://github.com/Grantlw100/KB2376-UCF_BC_CH_3' },
        { id: 3, title: 'Grizlet (JavaScript quiz)', imageUrlKey: 'Challenge3', challengeUrl: 'https://grantlw100.github.io/KB2376_UCF_BC_CH_4/index.html', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_4' },
        { id: 4, title: 'Weather Dashboard', imageUrlKey: 'Challenge4', challengeUrl: 'https://grantlw100.github.io/KB2376_UCF_BC_CH_6/', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_6' },
        { id: 5, title: 'Work Day Scheduler', imageUrlKey: 'Challenge5', challengeUrl: 'https://grantlw100.github.io/KB2376_UCF_BC_CH_5/', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_5' },
        { id: 6, title: 'ReadMe Generator', imageUrlKey: 'Challenge6', challengeUrl: '#', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_7' },
        { id: 7, title: 'Guick Notes', imageUrlKey: 'Challenge7', challengeUrl: 'https://guicknotes-cb320b68f205.herokuapp.com/', repoUrl: 'https://github.com/Grantlw100/KB2376-UCF_BC_CH_9' },
        { id: 8, title: 'Simple SVG Generator', imageUrlKey: 'Challenge8', challengeUrl: '#', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_8' },
        { id: 9, title: 'Employee Database Manager', imageUrlKey: 'Challenge9', challengeUrl: '#', repoUrl: 'https://github.com/Grantlw100/KB2376-UCF_BC_CH_10' },
        { id: 10, title: 'E-Commerce Backend', imageUrlKey: 'Challenge10', challengeUrl: '#', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_11'},
        { id: 11, title: 'ForeRunner Forum', imageUrlKey: 'Challenge11', challengeUrl: 'https://forerunnerforum-583ee4ed3c2e.herokuapp.com/', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_12'},
        { id: 12, title: 'Social Network Backend', imageUrlKey: 'Challenge12', challengeUrl: '#', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_14'},
        { id: 13, title: 'My Google Books', imageUrlKey: 'Challenge13', challengeUrl: 'https://kb2376-ucf-bc-ch-17.onrender.com/', repoUrl: 'https://github.com/Grantlw100/KB2376_UCF_BC_CH_17'},
    ];

    return (
        <div>
            <section id="projects">
                <h2>My Projects</h2>
                {projects.map(project => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </section>

            <section id="Challenges">
                <h2>My Challenges</h2>
                {challenges.map(challenge => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                ))}
            </section>
        </div>
    );
}

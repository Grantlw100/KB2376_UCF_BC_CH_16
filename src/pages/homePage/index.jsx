import React, { useEffect } from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './homePage.css';

function HomePage() {
    useEffect(() => {
        changeBackground('bg-home');
        return () => {
            document.body.classList.remove('bg-home');
        };
    }, []);
    return (
        <div>

            <section id="home-about" >
                <p id="pulse-animation" >
                    Hello, my name is Grant Williams, also known as Bucky by my family, 
                    Ranger Grant by many of my friends, and Grace by my covenant. 
                    I am incredibly passsionate about my education and my future 
                    and I have a wide variety of hobbies and interests. You can almost always find me outside or at the gym. 
                    If you would like to know more about my personal life check out my 
                    About me page, stalk me on Facebook and LinkedIn, or message me using the Contact page. 
                    This website is dedicated to showcasing my completed work throuhgout the 
                    UCF Full Stack Web Developer Bootcamp and any other endeavors I partake in. 
                    On the pages to follow you can find a brief but descriptional autobioraphy about 
                    yours truly which includes some key factors which make me who I am, some of my completed 
                    work as well as work still to be completed, as well as my resume on the last page. 
                    If you have any questions, comments, or suggestions for me you can reach out using 
                    any of the contact options at the bottom or the Contact page. Thank you for visiting 
                    my site and I hope you enjoy your stay.
                </p>
            </section>
        </div>
    );
}

export default HomePage;
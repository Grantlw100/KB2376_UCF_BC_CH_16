import React, {useEffect} from "react";
import changeBackground from "../../utils/backgroundHelper";
import './aboutMe.css';
import me from './me.jpg';

export default function AboutMePage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#243547');
        changeBackground('bg-about');
        return () => {
            document.documentElement.style.removeProperty('--nav-item-bg-color');
            document.body.classList.remove('bg-about');
        };
      }, []); 
    return (
        <div>
            <article id="careers">
            <section>
            <img src={me} id='me' alt="Grant Williams" />
                <header className="section-head"><h1>In the Beginning...</h1></header>
                <div className="career">
                
                    <h4>My Early Life</h4>
                    <sub>
                        <p>
                            Abandoned as a puppy... Just kidding. I am the oldest son out of four children and was incredibly fortunate to be born into a loving family. My father’s military career meant that I lived in more states and cities than I ever anticipated, but this experience has significantly shaped who I am today. 
                        </p>
                        <p>
                            Moving frequently from state to state and city to city made it challenging to maintain lasting friendships. Fortunately, I’ve always found it easy to make friends, so adapting wasn't a problem for me. I've grown accustomed to constant changes in my environment and lifestyle. As I matured, I gained a deeper understanding of regional cultures and their nuances.  
                        </p>
                        <p>
                            While in one city, people might jokingly call you a 'mutt,' elsewhere, you might be termed a 'halfbreed' (all in good fun). I’ve always relished the adventure of moving and experiencing new places; indeed, as they say, variety is the spice of life. Life hasn’t always been straightforward, but at the same time, it has been anything but dull. I have never shied away from a challenge. It's in my nature to tackle difficult tasks and make them seem effortless. I have a strong work ethic. Even if I don’t immediately see the value in a task, I still commit to performing it to the best of my ability. 
                        </p>
                        <p>
                            I am passionate about learning, whether it's about people, places, events, or even topics as mundane as mitochondria. I believe every new piece of knowledge makes the world less confusing and more fascinating. I'm a huge nerd with a bit of a jock streak, and sometimes a social butterfly, though I often prefer solitude. I enjoy helping people in any way I can.
                        </p>
                        <p>
                            Since leaving the military, I have missed having a close-knit group of friends and comrades on whom I could always rely. In most of my careers, I have managed to find a new family and a home away from home. It’s not crucial for me to love my work environment or the job itself, as long as my employment offers opportunities for growth and development.
                        </p>
                        <p>
                            I am a simple person, easy to please, and not seeking to be the center of attention. I am dedicated to self-improvement, aiming to be more useful in any situation I find myself in. I am a jack of all trades, continually striving to master them. I have always been a valued team member, a mentor to those junior to me, and a reliable resource for those above me.
                        </p>
                        <p>
                            I believe it is our duty as human beings to learn as much as we can, maintain our health and fitness, and look out for one another. We should lead by example for future generations. I value the importance of a healthy community and humanity above all else.
                        </p>
                    </sub>
                </div>
                <div className="career">
                    <h4>Sonic Drive-In</h4>
                    <sub>
                    <p>My first job was at Sonic Drive-In. I worked there for a month and learned enough to make a blast, a milkshake or an ocean water.
                        This is retained in my muscle memory. I can still make a blast, a milkshake, or an ocean water.
                    </p>
                    <a href="https://www.sonicdrivein.com/">Sonic Drive-In</a>
                    </sub>
                </div>
                <div className="career">
                    <h4>The Queen of Battle ~ United States Army Infantry</h4>
                    <sub>
                    <p>After high school, I joined the United States Army as an Infantryman. Over the course of four years, culminating in an honorable discharge, I gained profound insights about myself and the world. This period taught me to be both an empathetic leader focused on results and an effective team member. I learned the critical importance of each component in a complex system, understanding how a single piece can be pivotal.
                    </p>
                    <p>
                        If given the chance, I would eagerly relive this experience—it was the most rewarding and challenging period of my life. The lessons and hardships I encountered in the military surpass anything else I've faced. I highly recommend military service to anyone seeking self-improvement and a formidable challenge.
                    </p>
                    <p>
                        My military career has directly influenced my current path. From my observations, many technologies relied upon today are either overly complex or not designed with the end-user in mind. I am determined to change this dynamic. I aim to contribute to a world that simplifies daily challenges and enhances life’s meaning. Recognizing that life is fleeting and time is precious, I am driven to help others save time so they can enjoy what brings them joy. I aspire to be a part of the solution, to be involved in shaping a better future, and to make a meaningful impact on improving life for everyone.
                    </p>
                    <ul>
                        <li><a href="https://www.goarmy.com/careers-and-jobs/career-match/ground-forces/firearms-ammunition/11b-infantryman.html">Infantryman & OSUT</a></li>
                        <li><a href="https://www.moore.army.mil/infantry/artb/1-507th/Airborne/ASI.html"> Airborne School</a></li>
                        <li><a href="https://www.moore.army.mil/infantry/artb/Student-Information/">Ranger School</a></li>
                        <li><a href="https://www.goarmy.com/careers-and-jobs/specialty-careers/special-ops/army-rangers.html">Ranger Assessment Selection Program</a></li>
                        <li><a href="https://www.army.mil/82ndAirborne">82nd Airborne Division</a></li>
                        <li><a href="https://www.soc.mil/rangers/1stbn.html">1/75 Ranger Battalion</a></li>
                    </ul>
                    </sub>
                </div>
                <div className="career">
                    <h4>Whiskey Cake - Bartending</h4>
                    <sub>
                    <p>Whiskey Cake provided my first glimpse into the civilian world as an adult following my military service. While it was not my favorite job, it taught me a great deal about the everyday struggles and lifestyles of civilians compared to military personnel. I gained valuable skills in customer service, conflict resolution, and hospitality standards, and I even mastered making a gnarly whiskey sour. One of my biggest challenges was learning patience. In the military, tasks are carried out swiftly and efficiently, and respect is earned through action and work ethic.
                    </p>
                    <p>
                        Transitioning from a sergeant with significant accomplishments to a role where people might criticize or look down on you regardless of your work ethic or character was a profound wake-up call. I came to understand the importance of a fulfilling career, the value of a job where you are respected and appreciated, and the significance of being a valued team member.
                    </p>
                    <p>
                        I would recommend this job to anyone confident in their ability to handle stress, manage conflict, and thrive in a fast-paced environment. The salary and tips can provide a comfortable, even prosperous, lifestyle. However, I personally would prefer spending months in the mountains during winter, hiking up steep inclines with a heavy pack, over picking up someone’s half-eaten food and cleaning up after them. Despite this, I recognize that the role is excellent for personal development.
                    </p>
                    <a href="https://whiskeycake.com/">Whiskey Cake</a>
                    </sub>
                </div>
                <div className="career">
                    <h4>Vivint - Door to Door Sales</h4>
                    <sub>
                    <p>What initially attracted me to Vivint was the competitive pay and the opportunity to travel to new and distant places. However, what kept me at the company for an extended period was the team. It’s rare to find a good leader, but even rarer is a team that is committed to doing what is necessary. Door-to-door sales is one of the most challenging jobs I have ever held, teaching me much about the art of sales, customer service, preparedness, mental agility, and communication. I would recommend this job and lifestyle only to those who possess the resilience to persevere regardless of the obstacles they might face.
                    </p>
                    <p>
                        Transitioning from bartending to working for Vivint provided a refreshing change of pace, and I genuinely enjoyed it. The extensive walking, early mornings, and late nights never deterred me. The greatest challenge I faced was pushing my personal boundaries and investing substantial effort into a career that I wasn't passionate about. This experience made me stronger, more resilient, and incredibly patient. Additionally, it enriched my understanding of marketing strategies, sales techniques, and the critical importance of a quality product.
                    </p>
                    <a href="https://www.vivint.com/">Vivint</a>
                    </sub>
                </div>
            </section>
            <section>
                <header className="section-head" ><h1>Living in the Present...</h1></header>
                <div className="career">
                    <h4>UCF Full Stack Web Developer Bootcamp</h4>
                    <sub>
                    <p>
                        This bootcamp has equipped me with an invaluable and now favorite skill: web development. This field has not only paved the way for financial independence but also granted me the freedom to work from any location. Drawing on the adaptability honed during my military service, I can now complete tasks anywhere. If I find myself feeling restless, I simply hop in my jeep, drive to a scenic spot, and work in tranquility.
                    </p>
                    <p>
                        Understanding software development has fundamentally changed how I view the world. Whenever I interact with technology, I find myself contemplating ways to enhance it. In our constantly evolving world, coding skills provide leverage across any field, application, or resource on which humanity depends.
                    </p>
                    <p>
                        With the world quite literally at my fingertips, it often feels as though most inefficiencies are just a few days' work from perfection. I am incredibly excited about the future and my potential to make a meaningful impact on the world.
                    </p>
                    <a href="https://bootcamp.ce.ucf.edu/coding/">UCF Full Stack Developer Bootcamp</a>
                    </sub>
                </div>
                <div className="career">
                    <h4>HCC and my Associates degree of Science</h4>
                    <sub>
                    <p>
                        As I have often said, and will continue to assert, I LOVE TO LEARN—I just can’t get enough of it. The world once seemed irrefutably complicated to me, so vast and complex that I didn’t know where to begin. However, since becoming an adult, traversing through various careers, and accumulating diverse experiences, nothing has made the world make sense quite like my college education. By integrating new academic insights with my prior knowledge, everything becomes clearer every day.
                    </p>
                    <p>
                        Now, the most perplexing aspect for me is human nature: dynamic, nonsensical, and ever-changing chaos, yet capable of creating remarkable things. My interests have always spanned planes, space—the final frontier, as R2-D2 would say—and I am fascinated by speed, aerodynamics, machinery, technology, and everything derived from the Earth, including human anatomy.
                    </p>
                    <p>
                        I am currently studying Aerospace Engineering, hoping to contribute to research and development in the future. My immediate goal is to apply my newly acquired knowledge to work on my Jeep, creating modifications that will allow its use in almost any terrain. I am passionate about learning, and I am eager to use my education to make the world more efficient, easier to navigate, and more enjoyable to live in.
                    </p>
                    <a href="https://www.hccfl.edu/">HCC</a>
                    </sub>
                </div>
            </section>
        </article>
        </div>
    );
}


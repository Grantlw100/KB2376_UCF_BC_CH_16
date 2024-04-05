import React, {useEffect} from "react";

function AboutMePage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#243547');

        return () => {
          document.documentElement.style.removeProperty('--nav-item-bg-color');
        };
      }, []); 
    return (
        <div>
            <article id="careers">
                <section>
                    <header className="section-head"><h1>In the Beginning...</h1></header>
                    <div className="career">
                        <h4>Sonic Drive-In</h4>
                        <sub>
                        <p>My first job was at Sonic Drive-In. I worked there for a month and learned enough to make a blast, a milkshake or an ocean water.
                            This is retained in my muscle memory. I can still make a blast, a milkshake or an ocean water.</p>
                        <img src="./assets/sonic.jpg" alt="Sonic Drive-In"/>
                        <a href="https://www.sonicdrivein.com/">Sonic Drive-In</a>
                        </sub>
                    </div>
                    <div className="career">
                        <h4>The Queen of Battle ~ United States Army Infantry</h4>
                        <sub>
                        <p>After high school, I joined the United States Army as an Infantryman. I served for 4 years and was honorably discharged. I learned a lot about myself and the world during this time.
                            I learned how to be an empathetic but result driven leader as well as an effective follower. I learned the importance of a single cog in the labyrinth of machines and how one piece
                            can make or break a system. If i could go back and do it all over again, I would. This was the most rewarding and challenging time of my life. Nothing i have done up to this point
                            has been as difficult or as rewarding as my time in the military. I would recommend this to anyone who is looking for a challenge or a way to better themselves. My military carrer 
                            is the reason i am in the current pipeline i am in now. From what i have come to understand, a great deal of the technologies which human beings rely on either made with great complexity
                            or are made without the user in mind. I want to change that. I want to be part of the world that makes life easier for every human being. I want to be part of the world that makes
                            the day to day struggles less difficult while also creating a world where life can be more meaningful. Life is very short. Time is limited. Every second i can help someone save is a second
                            they can spend doing what gives them joy. I want to be part of that. I want to be part of the solution. I want to be part of the future. I want to be part of the world that makes life better.
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
                        <p>Whiskey Cake offered me my first look at the Civillian world as an adult and following the military.
                            While it was not my favorite job, i learned a great deal about the struggles and lifestyles of normal 
                            human beings compared to the lifestyles of military folk. I grew to understand how to properly handle 
                            and deal with customer service, conflit resolution, the standards of hospitality work, and i can make a 
                            gnarly whiskey sour. One of my biggest challenges in this job was learning patience. I was used to a world 
                            where things were done quickly and efficiently and respect from one person to another was merited by action 
                            and work ethic. Coming from the military as a sergeant with many accomplishments under my belt to a position
                            where people openly criticized and looked down on you regardless of your work ethic or your character was one 
                            if not the greatest wake up calls i ever received. I understood the value of working a fulfilling career, the value 
                            of working a job where you are respected and appreciated, and the value of working a job where you are not only an 
                            asset but a valued member of a team. I would recommend this job to anyone who is confident in their ability to 
                            handle stress, conflict, and the ability to work in a fast paced environment. The salary this profession pays will 
                            ensure you are able to live comfortably and the tips will ensure you are able to live well but I would rather spend 
                            months in the mountains in winter walking up big rocks with hundreds of pounds on my back than picking up someones half eaten 
                            food and cleaning up after them. This job is great for personal development though.
                        </p>
                        <img src="./assets/whiskeycake.jpg" alt="Whiskey Cake"/>
                        <a href="https://whiskeycake.com/">Whiskey Cake</a>
                        </sub>
                    </div>
                    <div className="career">
                        <h4>Vivint - Door to Door Sales</h4>
                        <sub>
                        <p>Originally what roped me in to working for the company Vivint was their employee pay opportunities as well
                            as the ability to travel to new and distant places. The reason i continued to work for vivint for as long 
                            as i did was primarily due to our team. A good leader is difficult to come by but even more rare is a team willing 
                            to do what must be done. Door to door sales is probably one of the most difficult jobs i have ever held. I learned a great deal 
                            about the art of sales, customer service, preparedness, mental agility, and communication. I would recommend this job and this 
                            lifestyle only to those who have the intestinal fortitude to accomplish a task regardless of what the world may throw at them.
                            Working door to door and for Vivint was a nice change of pace from bartending and i actually enjoyed it. The miles i put on my feet
                            never bothered me nor did the early mornings and the late nights. The largest chalenge i faced doing this job was overcoming my personal 
                            boundaries and putting a great deal of effort into a career i was not passionate about. I came away from this experience stronger and more resilient as a person
                            and incredibly patient. This career has also helped me understand a great deal on marketing strategies, sales techniques, and most importantly the value of a good product.
                        </p>
                        <img src="./assets/vivint.jpg" alt="Vivint"/>
                        <a href="https://www.vivint.com/">Vivint</a>
                        </sub>
                    </div>
                </section>
                <section>
                    <header className="section-head" ><h1>Living in the Present...</h1></header>
                    <div className="career">
                        <h4>UCF Full Stack Developer Bootcamp</h4>
                        <sub>
                        <p>UCF Full Stack Developer Bootcamp</p>
                        <img src="./assets/ucf.jpg" alt="UCF Full Stack Developer Bootcamp"/>
                        <a href="https://bootcamp.ce.ucf.edu/coding/">UCF Full Stack Developer Bootcamp</a>
                        </sub>
                    </div>
                    <div className="career">
                        <h4>HCC Associates degree of Science</h4>
                        <sub>
                        <p>HCC Associates degree of Science</p>
                        <img src="./assets/hcc.jpg" alt="HCC Associates degree of Science"/>
                        <a href="https://www.hccfl.edu/">HCC</a>
                        </sub>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default AboutMePage;


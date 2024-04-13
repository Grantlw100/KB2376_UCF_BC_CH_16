import React, {useEffect} from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './contact.css';

function ContactPage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#964B00');
        changeBackground('bg-contact');
        return () => {
          document.documentElement.style.removeProperty('--nav-item-bg-color');
          document.body.classList.remove('bg-contact')
        };
      }, []); 
    return (
        <div id='contacts' >
          <section id="contact-me-header">
            You can reach out to me using this resources below. I prefer text messages or phone calls after normal business hours.
          </section>
          <section id="contact-me">
            <header>Contact Me</header>
            <p>Grant Williams</p>
            <p>My Phone Number: (910) 916-4339</p>
            <p>Email: Grant.L.Williams@outlook.com</p>
          </section>
          <section id="contact-me-form" className="hero is-primary">
            <header>Reach out with any comments, critiques, concerns, or inqueries</header>
            <p>Your response is most welcome!</p>
            <form action="mailto:Grant.L.Williams@outlook.com" method="post" encType="text/plain">
                <label htmlFor="body">Body of your Email</label>
                <textarea id="body" placeholder="Your message here :). Attach an email so I can properly respond if you would like!"></textarea>

                <input id='button' type="submit" value="Submit"></input>
            </form>
          </section>
        </div>
    );
}

export default ContactPage;
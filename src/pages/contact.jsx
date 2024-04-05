import React, {useEffect} from 'react';

function ContactPage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#964B00');

        return () => {
          document.documentElement.style.removeProperty('--nav-item-bg-color');
        };
      }, []); 
    return (
        <div>
          <section id="contact-me-form" className="hero is-primary">
            <header><h1>Reach out with any comments, critiques, concerns, or inqueries</h1></header>
            <p>Upon completing and submitting this form an email will be sent to 
              Grant.L.Williams@outlook.com. Use any placeholders in place of the
               first name and last name input elements to remain anonymous. 
              Your response is most welcome!</p>
            <form action="mailto:Grant.L.Williams@outlook.com" method="post" enctype="text/plain">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <label for="body">Body</label>
                <textarea id="body" name="body" placeholder=":) Your message here"></textarea>

                <input type="submit" value="Submit"></input>
            </form>
          </section>
        </div>
    );
}

export default ContactPage;
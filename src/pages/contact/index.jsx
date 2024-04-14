import React, { useState, useEffect } from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './contact.css';
const backendURL = import.meta.env.VITE_BACKEND_ROUTE_CONTACT

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--nav-item-bg-color', '#964B00');
    changeBackground('bg-contact');
    return () => {
      document.documentElement.style.removeProperty('--nav-item-bg-color');
      document.body.classList.remove('bg-contact');
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      subject: event.target.subject.value,
      message: event.target.message.value,
      replyTo: event.target.replyTo.value,
    };

    try {
      const response = await fetch(`${backendURL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        event.target.reset(); // Clear the form after successful submission
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='contacts'>
      <section id="contact-me-header">
        You can reach out to me using the resources below. I prefer text messages or phone calls after normal business hours.
      </section>
      <section id="contact-me">
        <header>Contact Me</header>
        <p>Grant Williams</p>
        <p>My Phone Number: (910) 916-4339</p>
        <p>Email: Grant.L.Williams@outlook.com</p>
      </section>
      <section id="contact-me-form" className="hero is-primary">
        <header>Reach out with any comments, critiques, concerns, or inquiries</header>
        <p>Your response is most welcome!</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subject">Subject</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Subject" 
            required 
          />
          <input
            type="email"
            name="replyTo"
            id="replyTo"
            placeholder="Your email (To send anonomously use anon@anon.com)."
          />
          <textarea
            name="message"
            id="message"
            required
            placeholder="Your message here :)."
          >
          </textarea>
          <button id='button' type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
    </div>
  );
}

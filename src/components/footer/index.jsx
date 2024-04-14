import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './footer.css';

export default function Footer() {
    const [showBoredSub, setShowBoredSub] = useState(false);

    const toggleBoredSub = () => {
        setShowBoredSub(prev => !prev);
    };
    return (
        <div className='footer-gif' >
            <footer className="bored"  >
                <div id="footer-contacts" className={!showBoredSub ? "active" : 'hidden'}>
                    <section>
                        <a href="https://www.linkedin.com/in/grant-williams-smailliw-tnarg/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </section>
                    <section>
                        <a href="https://github.com/Grantlw100" >
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                    <section>
                        <a href="https://www.facebook.com/Gr4ce0fg0d/" >
                            <i className="fab fa-facebook"></i>
                        </a>
                    </section>
                </div>
                <section>
                    <span onClick={toggleBoredSub} style={{ cursor: 'pointer' }}>Bored?</span>
                </section>
                <div id='bored-sub' className={showBoredSub ? "active" : "hidden"}>
                    <section>
                        <header>Play Doom!</header>
                        <a href="https://www.retrogames.cz/play_414-DOS.php">Games</a>
                    </section>
                    <section>
                        <header>Watch old Cartoons!</header>
                        <a href="https://www.supercartoons.net/">Super Cartoons</a>
                    </section>
                    <section>
                        <header>See what some animals are up to!</header>
                        <a href="https://explore.org/livecams">Explore Live Nature Cams</a>
                    </section>
                </div>
            </footer>
        </div>
    );
}

import React, { useEffect } from 'react';
import changeBackground from '../../utils/backgroundHelper';
import './404.css';

function NotFoundPage() {
    useEffect(() => {
        document.documentElement.style.setProperty('--nav-item-bg-color', '#9819dd');
        changeBackground('bg-404');
        return () => {
            document.body.classList.remove('bg-404');
            document.documentElement.style.removeProperty('--nav-item-bg-color');
        };
    }, []);
    return (
        <div id='where' >
            <section id="not-found">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Looks like you may be lost Friend. Do you need help finding home?</p>
            </section>
        </div>
    );
}

export default NotFoundPage;
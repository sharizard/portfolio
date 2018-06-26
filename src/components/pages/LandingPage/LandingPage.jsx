import React from 'react';
import NavBar from '../../../components/Navigation/NavBar';
import { ScrollToPage } from '../../scroll';
import SocialIcons from '../../socialIcons/SocialIcons';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <NavBar />
            <main>
                <div className="intro-wrapper">
                    <img 
                        src="assets/shahariar.k.bhuiyan.png"
                        alt="avatar"
                        className="avatar-img" />
                    <div className="intro-name">Shahariar Kabir Bhuiyan</div>
                    <div className="tagline">
                        Tech Architecture Delivery Senior Analyst
                    </div>
                    <SocialIcons />
                </div>
            </main>
            <ScrollToPage isFinal={false} pageSelector=".about-page" />
        </div>
    )
}

export default LandingPage;
import React, { Component } from 'react';
import { ScrollToPage } from '../../scroll';

class AboutPage extends Component {

    render() {
        const colorPrimary = 'black'; 
        const colorHighlight = 'yellow';
        const bgPrimary = 'grey'; 
        const textPrimary = 'black';
        return (
            <div className="about-page" style={{ backgroundColor: bgPrimary }}>
                <style jsx="true">
                    {`
                    .highlight {
                        background-color: ${colorHighlight};
                    }
                    ::selection {
                        background-color: ${colorHighlight};
                    }
                    `}
                </style>
                <div className="content-grid">
                    <h1 style={{ color: 'colorPrimary' }}>About</h1>
                    <div className="about-wrapper">
                    <div className="about-content" style={{ color: textPrimary }}>
                        <p>
                        I like and hate <span className="highlight">JavaScript</span> and
                        everything web.
                        </p>
                        <p className="text-emoji" style={{ color: colorPrimary }}>
                        \ (•◡•) /
                        </p>
                    </div>
                    </div>
                </div>
                <ScrollToPage isFinal={false} pageSelector=".portfolio-page" />
            </div>
        )
    }
}

export default AboutPage;
import React, { Component } from 'react';
import { ScrollToPage } from '../../scroll';
import PortfolioItem from '../../portfolio/PortfolioItem';

class PortfolioPage extends Component {
    render() {
        return (
            <div className="portfolio-page">
                <div className="content-grid">
                    <h1>Portfolio</h1>
                    <div className="portfolio-wrapper">
                        <PortfolioItem />
                    </div>
                </div>
                <ScrollToPage isFinal={true} pageSelector=".about-page" />
            </div>
        );
    }
}

export default PortfolioPage;
import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

class ScrollToPage extends Component {

  scrollToPage() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const faIcon = this.props.isFinal ? 'fa-chevron-up' : 'fa-chevron-down'; 
    const color = this.props.isRed ? 'white' : 'red';
    return (
      <div className="scroll-to-next" onClick={(e) => this.scrollToPage()}>
        <div className={`arrow bounce ${color}`}>
          <div className="scroll-text">Click Me</div>
          <i className={`fa ${faIcon} fa-2x`} href="#" />
        </div>
      </div>
    );
  }
}

export default ScrollToPage;

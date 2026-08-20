import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>About GossipsNews</h4>
              <p style={{ color: '#ccc', lineHeight: 1.6 }}>
                Your trusted source for breaking news, in-depth analysis, and comprehensive coverage of events shaping our world.
              </p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/business">Business</a></li>
                <li><a href="/technology">Technology</a></li>
                <li><a href="/sports">Sports</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Categories</h4>
              <ul className="footer-links">
                <li><a href="/entertainment">Entertainment</a></li>
                <li><a href="/health">Health</a></li>
                <li><a href="/science">Science</a></li>
                <li><a href="/general">General</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/about">About Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} GossipsNews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

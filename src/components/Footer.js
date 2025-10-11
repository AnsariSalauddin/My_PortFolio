import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>
              Built with <FaHeart className="heart-icon" /> using React.js
            </p>
            <p className="copyright">
              © {currentYear} Salauddin Ansari. All rights reserved.
            </p>
          </div>
          
          <div className="footer-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

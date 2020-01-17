import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-container">
        <li className="footer-container_item">Datenschutzerklärung</li>
        <li className="footer-container_item">Impressum</li>
        <li className="footer-container_item">Nutzungsbedingungen</li>
      </ul>
    </footer>
  );
};

export default Footer;

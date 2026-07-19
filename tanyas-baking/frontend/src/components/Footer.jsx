import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const BOTTOM_BANNER = '/images/FooterBackground.jpg'

function LogoBadgeLarge() {
  return (
    <img 
        src = "/images/TanyaBaking logo.jpg"
        alt = "Bakery logo"
        className="logo-badge" 
      />
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-info">
        <div className="footer-logo">
          <LogoBadgeLarge />
        </div>

        <div className="footer-info-col">
          <h4>Address</h4>
          <p>69, 21st Cross Street, Madambakkam Main Rd, Padmavathy Nagar, Balaji Nagar, Madambakkam, Chennai, TN-600126</p>
        </div>

        <div className="footer-info-col">
          <h4>Email</h4>
          <p><a href="mailto:info@tanyasbaking.com">info@tanyasbaking.com</a></p>
        </div>

        <div className="footer-info-col">
          <h4>Phone number</h4>
          <p><a href="tel:+919677276248">+91 9677276248</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          Tanyasbaking | <a href="#">Copyright@2025</a> | <a href="#">Terms and Conditions</a> | <a href="#">Privacy policy</a>
        </p>
        <div className="footer-social">
  <a
    href="https://www.instagram.com/tanyas_baking"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram className="instagram-icon" />
  </a>

  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF className="facebook-icon" />
  </a>

  <a
    href="https://wa.me/919677276248"
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp className="whatsapp-icon" />
  </a>
</div>
      </div>

      <div className="footer-banner">
        <img src={BOTTOM_BANNER} alt="Baking ingredients flat lay" />
      </div>
    </footer>
  );
}

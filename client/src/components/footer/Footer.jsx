import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <img src={"images/logo.PNG"} alt="Placeholder" />

        <p>
          ElderSerene offers tailored and compassionate solutions for seniors'
          unique needs. From healthcare to companionship and community
          engagement, we redefine elder care with affordability, accessibility,
          and empathy across India.
        </p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li>Virtual Consultations with Doctors</li>
          <li>Nursing Services</li>
          <li>Physiotherapy</li>
          <li>Personal Care</li>
          <li>Emergency Medical Services</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact</h3>
        <ul>
          <li>Email: ESerene@gmail.com</li>
          <li>Phone: +91 6200293018</li>
          <li>Address: Kolkata ,India</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://linkedin.com">LinkedIn</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

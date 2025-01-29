import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './App.css';

// Import the RegistrationPopup component
import RegistrationPopup from './components/RegistrationPopup';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h1>InternCourse</h1>
         
        </div>

        {/* Nav Links */}
       
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link className="nav-link" to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link className="nav-link" to="/internship" onClick={() => setMenuOpen(false)}>Internship</Link>
        
          <Link className="nav-link" to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link className="nav-link" to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
          <Link className="nav-link" to="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
          <Link className="nav-link" to="/certificate-verification" onClick={() => setMenuOpen(false)}>Verification</Link>
          <Link className="nav-link" to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link className="nav-link" to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link className="nav-link" to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link>
          <Link className="nav-link" to="/enroll" onClick={() => setMenuOpen(false)}>Enroll Now</Link>
         

        </div>

        {/* Hamburger Menu */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu} 
          aria-expanded={menuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </nav>

     
      {/* Content Area */}
      <Outlet />
      <div className="contact-actions">
  {/* WhatsApp Icon */}
  <a
    href="https://wa.me/+919304245362"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
  >
    <i className="fab fa-whatsapp"></i> {/* FontAwesome WhatsApp icon */}
  </a>

 
</div>





{/* Footer */}
<footer className="footer">
  <div className="footer-container">
    {/* Footer Left */}
    <div className="footer-left">
      <h2 className="footer-logo">InternCourse</h2>
      <p className="footer-description">
      © 2025 InternCourse. All rights reserved.
      </p>
      <p className="footer-description">
        Empowering professionals with quality online courses. Learn from industry experts, build in-demand skills, and achieve your career goals.
      </p>
    </div>

    {/* Footer Middle */}
    <div className="footer-middle">
      <h4>Quick Links</h4>
      <ul className="footer-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/courses">Our Courses</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/blogs">Blogs</a></li>
        <li><a href="/feedback">Testimonials</a></li>
        <li><a href="/faq">FAQs</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/jobs">Career Opportunities</a></li>
      </ul>
    </div>

    {/* Footer Right */}
    <div className="footer-right">
      <h4>Contact Us</h4>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>+91 93042 45362</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>info@interncourse.online</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Saguna More, Danapur, Patna, Bihar 801503, India</span>
        </div>
      </div>
      <div className="social-links">
        <h5>Follow Us</h5>
        <a href="https://x.com/07InternCourse" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/interncourse/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/interncourse/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/interncourse/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.youtube.com/interncourse" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  </div>

  {/* Footer Extra Links Section */}
  <div className="footer-extra">
    <h4>Resources</h4>
    <ul className="footer-resources">
      <li><a href="/certification">Certification Programs</a></li>
      <li><a href="/webinars">Webinars</a></li>
      <li><a href="/Report">E-Books</a></li>
      <li><a href="/partner">Our Partners</a></li>
      <li><a href="/ReferralProgram">Referral Program</a></li>
    </ul>
  </div>

  {/* Footer Newsletter */}
  <div className="footer-newsletter">
    <h4>Stay Updated</h4>
    
    <form className="newsletter-form">
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </form>
  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <p>Powered by InternCourse | All rights reserved.</p>
    <p>
      Designed by <a href="https://interncourse.online" target="_blank" rel="noopener noreferrer">InternCourse Team</a>
    </p>
  </div>
</footer>




    </div>
  );
}

export default App;

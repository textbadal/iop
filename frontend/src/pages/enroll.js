import React from 'react';
import './Enroll.css';

const Enroll = () => {
  return (
    <div className="enroll-container">
      <div className="enroll-content">
        <h1 className="enroll-title">Join Our Internship Programs</h1>
        <p className="enroll-description">
          Unlock your potential with hands-on experience in industry-relevant skills. Start your journey with us today!
        </p>
        <a 
          href="https://forms.gle/o8QdBoNqJfKvZoaU9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="enroll-button"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default Enroll;

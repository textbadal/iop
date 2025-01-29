import React from 'react';
import './services.css';  // Ensure this is correct

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      
      <div className="services-intro">
        <p className="services-description">
          We offer a range of professional services that help businesses grow and succeed in the digital world. Our team of experts specializes in crafting tailored solutions to meet your unique needs. Explore our offerings below!
        </p>
      </div>

      <div className="services-list">
        {/* Web Development Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-laptop-code"></i> {/* Add a web development icon */}
          </div>
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            We build responsive and dynamic websites using the latest technologies. Whether it's a personal blog or an enterprise solution, we’ve got you covered. We focus on user experience, performance, and scalability to ensure your website performs at its best.
          </p>
          <ul className="service-benefits">
            <li>Responsive Design</li>
            <li>SEO Optimization</li>
            <li>Custom Development</li>
            <li>Security Best Practices</li>
            <li>Performance Optimization</li>
          </ul>
        </div>

        {/* App Development Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-mobile-alt"></i> {/* Add a mobile app development icon */}
          </div>
          <h2 className="service-title">App Development</h2>
          <p className="service-description">
            We create user-friendly and feature-rich mobile applications for both iOS and Android. Our team ensures seamless performance and intuitive design. From native to cross-platform development, we cover all bases to bring your app idea to life.
          </p>
          <ul className="service-benefits">
            <li>Cross-Platform Solutions</li>
            <li>Native & Hybrid Development</li>
            <li>User-Centered Design</li>
            <li>Integration with Third-Party APIs</li>
            <li>App Maintenance & Support</li>
          </ul>
        </div>

        {/* Digital Marketing Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-bullhorn"></i> {/* Add a digital marketing icon */}
          </div>
          <h2 className="service-title">Digital Marketing</h2>
          <p className="service-description">
            Enhance your online presence with our tailored digital marketing strategies. We offer services like SEO, social media marketing, pay-per-click (PPC) campaigns, and content marketing to drive traffic, engagement, and sales for your business.
          </p>
          <ul className="service-benefits">
            <li>Search Engine Optimization (SEO)</li>
            <li>Pay-Per-Click (PPC) Advertising</li>
            <li>Social Media Strategy</li>
            <li>Content Marketing</li>
            <li>Analytics and Reporting</li>
          </ul>
        </div>

        {/* UI/UX Design Service */}
        <div className="service-card">
          <div className="service-icon">
            <i className="fas fa-paint-brush"></i> {/* Add a UI/UX design icon */}
          </div>
          <h2 className="service-title">UI/UX Design</h2>
          <p className="service-description">
            We design user interfaces that are intuitive and aesthetically pleasing. Our UX designs ensure that your website or app is not only visually attractive but also easy to navigate, providing users with an enjoyable experience.
          </p>
          <ul className="service-benefits">
            <li>Wireframing and Prototyping</li>
            <li>Interactive and Engaging Designs</li>
            <li>UX Research and Testing</li>
            <li>Branding and Identity Design</li>
            <li>Mobile and Web Design</li>
          </ul>
        </div>
      </div>





      

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The team at InternCourse was amazing! They took the time to understand our needs and delivered a website that exceeded our expectations."
          </p>
          <span className="testimonial-author">- Priyanshu Gupta, CEO of TheVacay.in</span>
        </div>
        <div className="testimonial-card">
          <p className="testimonial-text">
            "Their mobile app development team is top-notch. Our app is fast, user-friendly, and has made a real impact on our customer engagement."
          </p>
          <span className="testimonial-author">- Sumit Saurav, Marketing Director</span>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-container">
        <h2 className="cta-title">Ready to Start Your Project?</h2>
        <p className="cta-text">
          Contact us today to discuss your next project and how we can help you grow your business with a digital solution.
        </p>
        <button className="cta-button">Get in Touch</button>
      </div>
    </div>
  );
};

export default Services;

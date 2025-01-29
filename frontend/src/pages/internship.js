import React, { useEffect } from 'react';
import './Internship.css';

// Your component code continues...


const Internship = () => {
    const internshipList = [
        {
          title: 'Python Programming',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/lapin.jpg',
          registeredStudents: '4400+',
          projects: 13,
          inCharge: 'William Davis',
        },
        {
          title: 'Cyber Security Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/webin.jpg',
          registeredStudents: '3800+',
          projects: 10,
        },
        {
          title: 'Web Development Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/webint.jpg',
          registeredStudents: '5200+',
          projects: 15,
        },
        {
          title: 'App Development Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/appin.jpg',
          registeredStudents: '4100+',
          projects: 12,
        },
        {
          title: 'Data Science Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/tog.jpg',
          registeredStudents: '4700+',
          projects: 18,
        },
        {
          title: 'Machine Learning Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/machint.jpg',
          registeredStudents: '4500+',
          projects: 16,
        },
        {
          title: 'Artificial Intelligence',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/ai.jpg',
          registeredStudents: '4000+',
          projects: 14,
        },
        {
          title: 'Graphic Design Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/grapin.jpg',
          registeredStudents: '3500+',
          projects: 8,
        },
        {
          title: 'UI/UX Design Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/ui.png',
          registeredStudents: '3700+',
          projects: 9,
        },
        {
          title: 'Digital Marketing Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/digital.WebP',
          registeredStudents: '3900+',
          projects: 11,
        },
        {
          title: 'Blockchain Development',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/blo.jpg',
          registeredStudents: '3000+',
          projects: 7,
        },
        {
          title: 'Cloud Computing Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/clo.jpg',
          registeredStudents: '3400+',
          projects: 10,
        },
        {
          title: 'Big Data Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/bigd.png',
          registeredStudents: '3100+',
          projects: 8,
        },

        {
          title: 'Game Development Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/gam.jpg',
          registeredStudents: '2800+',
          projects: 6,
        },

        {
          title: 'IoT (Internet of Things)',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/iot.jpg',
          registeredStudents: '3200+',
          projects: 10,
        },
        {
          title: 'Robotics Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/rob.jpg',
          registeredStudents: '2500+',
          projects: 5,
        },
        {
          title: 'Full-Stack Development',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/full.png',
          registeredStudents: '4800+',
          projects: 20,
        },
        {
          title: 'DevOps Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/de.png',
          registeredStudents: '3300+',
          projects: 9,
        },
        {
          title: 'Network Engineering',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/net.jpg',
          registeredStudents: '2700+',
          projects: 7,
        },
        {
          title: 'Video Editing Internship',
          courseDuration: '04/06/08/12 weeks',
          image: '/images/vi.png',
          registeredStudents: '2200+',
          projects: 6,
        },
      ];





      const testimonials = [
        {
            name: 'Ananya Sharma',
            feedback:
                'The Web Development internship was an amazing experience! I got hands-on experience and learned a lot about frontend and backend technologies.',
            profilePic: '/images/student1.jpg',
        },
        {
            name: 'Rahul Verma',
            feedback:
                'The Python Programming course exceeded my expectations. The projects were challenging but fun, and the instructor was very supportive.',
            profilePic: '/images/student2.jpg',
        },
        {
            name: 'Sneha Roy',
            feedback:
                'The Cyber Security internship gave me insights into securing networks and ethical hacking. I highly recommend it!',
            profilePic: '/images/student3.jpg',
        },
    ];




    // Sample Certificate Data
    const certificateSamples = [
      {
          title: 'Offer Letter',
          image: '/images/Offer.WebP',
      },
      {
          title: 'Internship Certificate',
          image: '/images/sus.WebP',
      },

  ];


  useEffect(() => {
    // Add click event listener to all faq cards
    document.querySelectorAll('.faq-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('open');
        });
    });

    // Cleanup event listeners on component unmount
    return () => {
        document.querySelectorAll('.faq-card').forEach(card => {
            card.removeEventListener('click', () => {
                card.classList.toggle('open');
            });
        });
    };
}, []);
      
    return (
      <div className="internship-container">
        <h1 className="internship-title">Available Internship Positions</h1>
        <div className="internship-list">
          {internshipList.map((internship, index) => (
            <div key={index} className="internship-card">
              <img
                className="internship-image"
                src={internship.image}
                alt={internship.title}
              />
              <div className="card-content">
                <h2 className="internship-heading">{internship.title}</h2>
                {internship.courseDuration && (
                  <p className="course-duration">
                    <strong>Course Duration:</strong> {internship.courseDuration}
                  </p>
                )}
                <a
                  href="https://forms.gle/o8QdBoNqJfKvZoaU9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="register-btn">Register Now</button>
                </a>
              </div>
              <div className="info-corner">
                <div className="info-item">
                  <strong>{internship.registeredStudents} students </strong>
                </div>
                <div className="info-item">
                  <strong>{internship.projects} projects</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Student Testimonials Section */}
        <div className="testimonials-section">
          <h2 className="testimonial-title">Reviews from students</h2>
         
          <div className="testimonials">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img
                  className="testimonial-image"
                  src={testimonial.profilePic}
                  alt={testimonial.name}
                />
                <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                <h3 className="testimonial-name">- {testimonial.name}</h3>
              </div>
            ))}
          </div>



          
        </div>

        
      {/* Certificate Samples Section */}
      <div className="certificate-section">
                <h2 className="certificate-title">AICTE Approved Certificate</h2>
                <div className="certificate-gallery">
                    {certificateSamples.map((certificate, index) => (
                        <div key={index} className="certificate-card">
                            <img
                                className="certificate-image"
                                src={certificate.image}
                                alt={certificate.title}
                            />
                            <p className="certificate-title">{certificate.title}</p>
                        </div>
                    ))}
                </div>
            </div>



           
<div className="faq-section">
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <div className="faqs">
    <div className="faq-card">
      <h3 className="faq-question">What is the duration of the internships?</h3>
      <p className="faq-answer">Our internships typically last for 4, 6, 8, or 12 weeks, depending on your selected course.</p>
    </div>
    <div className="faq-card">
      <h3 className="faq-question">Do I get a certificate after completing the internship?</h3>
      <p className="faq-answer">Yes, all participants will receive an AICTE-approved certificate upon successful completion of the internship.</p>
    </div>
    <div className="faq-card">
      <h3 className="faq-question">Are the internships online or offline?</h3>
      <p className="faq-answer">All our internships are conducted online, allowing you to learn from the comfort of your home.</p>
    </div>
    <div className="faq-card">
      <h3 className="faq-question">Is there any prior knowledge required?</h3>
      <p className="faq-answer">Basic knowledge in the relevant field is helpful but not mandatory. Our courses cover all necessary concepts.</p>
    </div>
    <div className="faq-card">
      <h3 className="faq-question">How can I register for an internship?</h3>
      <p className="faq-answer">You can register by clicking the "Register Now" button under your desired internship and filling out the form.</p>
    </div>
  </div>
</div>

<section class="training-section">
  <h2 class="training-title">How Will Your Training Work?</h2>
  <p class="training-description">
    Our training program is designed to provide you with a comprehensive learning experience. The process is broken down into simple, easy-to-follow steps:
  </p>
  <div class="training-steps">
    <div class="step">
      <h3 class="step-title">Step 1: Introduction</h3>
      <p class="step-description">Start with a brief introduction to the course content and objectives.</p>
    </div>
    <div class="step">
      <h3 class="step-title">Step 2: Practical Lessons</h3>
      <p class="step-description">Engage in hands-on exercises to reinforce what you've learned.</p>
    </div>
    <div class="step">
      <h3 class="step-title">Step 3: Assessment</h3>
      <p class="step-description">Take assessments to track your progress and mastery of the material.</p>
    </div>
    <div class="step">
      <h3 class="step-title">Step 4: Certification</h3>
      <p class="step-description">Once you complete the training, you’ll receive a certification of completion.</p>
    </div>
  </div>
</section>


<section class="internship-incharge">
  <h2 class="incharge-title">Internship Incharge</h2>
  <div class="incharge-details">
    <h3 class="incharge-name">Kumari Sristi</h3>
    <p class="incharge-designation">Internship Coordinator</p>
    <p class="incharge-description">
      Kumari Sristi is responsible for managing and guiding the internship program. With years of experience in the industry, Sristi ensures that all interns receive proper mentorship and exposure to real-world projects. She works closely with the team to offer a valuable learning experience.
    </p>
  </div>
</section>




        </div>
    );
};







export default Internship;

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Bangalore',
      image: '👨‍💻',
      testimonial: 'The training program was exceptional! I went from having zero coding experience to landing a job as a Full Stack Developer. The placement support was incredible, and they helped me every step of the way.',
      rating: 5,
      package: '₹12 LPA',
      course: 'Full Stack Development'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Data Scientist',
      company: 'DataTech Analytics',
      location: 'Hyderabad',
      image: '👩‍💻',
      testimonial: 'The Data Science course was comprehensive and practical. Real-world projects and industry mentorship made all the difference. I got placed within 2 months of completing the course!',
      rating: 5,
      package: '₹15 LPA',
      course: 'Data Science & AI'
    },
    {
      id: 3,
      name: 'Arun Patel',
      role: 'DevOps Engineer',
      company: 'CloudNine Technologies',
      location: 'Pune',
      image: '👨‍💼',
      testimonial: 'Outstanding training quality and excellent placement support. The hands-on approach and industry connections really helped me secure my dream job in DevOps. Highly recommended!',
      rating: 5,
      package: '₹18 LPA',
      course: 'DevOps & Cloud'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Cybersecurity Analyst',
      company: 'SecureNet Solutions',
      location: 'Chennai',
      image: '👩‍🔬',
      testimonial: 'The cybersecurity program was top-notch. Expert instructors, practical labs, and real-world scenarios prepared me well for the industry. Got multiple job offers!',
      rating: 5,
      package: '₹14 LPA',
      course: 'Cybersecurity'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Frontend Developer',
      company: 'WebTech Innovations',
      location: 'Mumbai',
      image: '👨‍🎨',
      testimonial: 'Great learning experience with modern technologies. The instructors were knowledgeable and supportive. The placement team helped me negotiate a better package too!',
      rating: 5,
      package: '₹10 LPA',
      course: 'Frontend Development'
    },
    {
      id: 6,
      name: 'Deepika Joshi',
      role: 'ML Engineer',
      company: 'AI Innovations Ltd',
      location: 'Delhi',
      image: '👩‍🔬',
      testimonial: 'The AI/ML course exceeded my expectations. Industry-relevant curriculum, expert mentorship, and strong placement support. I am now working on cutting-edge AI projects!',
      rating: 5,
      package: '₹22 LPA',
      course: 'AI/ML Engineering'
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <motion.div 
          ref={ref}
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="testimonials-title">Success Stories</h2>
          <p className="testimonials-subtitle">
            Hear from our successful graduates who transformed their careers with us
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-carousel"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="carousel-slide">
                  <Card className="testimonial-card">
                    <div className="testimonial-content">
                      <div className="testimonial-header">
                        <div className="testimonial-avatar">
                          <span className="avatar-icon">{testimonial.image}</span>
                        </div>
                        <div className="testimonial-info">
                          <h3 className="testimonial-name">{testimonial.name}</h3>
                          <p className="testimonial-role">{testimonial.role}</p>
                          <p className="testimonial-company">{testimonial.company}</p>
                          <p className="testimonial-location">📍 {testimonial.location}</p>
                        </div>
                      </div>
                      
                      <div className="testimonial-rating">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote className="testimonial-text">
                        "{testimonial.testimonial}"
                      </blockquote>
                      
                      <div className="testimonial-footer">
                        <div className="testimonial-details">
                          <span className="testimonial-course">
                            📚 {testimonial.course}
                          </span>
                          <span className="testimonial-package">
                            💰 {testimonial.package}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="carousel-controls">
            <button 
              className="carousel-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button 
              className="carousel-btn next-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Placement Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">₹16L</div>
              <div className="stat-label">Average Package</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">850+</div>
              <div className="stat-label">Success Stories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../common/Card';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndicator, setHoveredIndicator] = useState(null);

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
      <span key={i} style={{
        fontSize: '1.2rem',
        opacity: i < rating ? 1 : 0.3,
        transition: 'opacity 0.2s ease'
      }}>
        ⭐
      </span>
    ));
  };

  // Main section styles
  const testimonialsSectionStyles = {
    background: 'linear-gradient(135deg, #ede9fe 0%, #ffffff 100%)',
    padding: '80px 0',
    position: 'relative',
    overflow: 'hidden'
  };

  // Background patterns
  const backgroundOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 30% 70%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="testimonial-waves" width="40" height="20" patternUnits="userSpaceOnUse"><path d="M0 10 Q10 0 20 10 T40 10" fill="none" stroke="rgba(99,102,241,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23testimonial-waves)"/></svg>')
    `,
    zIndex: 0
  };

  const decorativeCircleStyles = {
    position: 'absolute',
    top: '20%',
    right: '10%',
    width: '150px',
    height: '150px',
    background: 'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(30px)',
    zIndex: 0
  };

  const testimonialsContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const testimonialsHeaderStyles = {
    textAlign: 'center',
    marginBottom: '64px'
  };

  const testimonialsTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1f2937',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const testimonialsSubtitleStyles = {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const testimonialsCarouselStyles = {
    position: 'relative',
    marginBottom: '64px'
  };

  const carouselWrapperStyles = {
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 25px 50px rgba(79, 70, 229, 0.15)'
  };

  const carouselTrackStyles = {
    display: 'flex',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentSlide * 100}%)`
  };

  const carouselSlideStyles = {
    minWidth: '100%',
    padding: '8px'
  };

  const testimonialCardStyles = {
    background: '#ffffff',
    border: 'none',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.06)',
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '16px'
  };

  const testimonialQuoteStyles = {
    position: 'absolute',
    top: '16px',
    right: '24px',
    fontSize: '4rem',
    color: '#ede9fe',
    fontFamily: 'serif',
    lineHeight: 1,
    zIndex: 0
  };

  const testimonialContentStyles = {
    position: 'relative',
    zIndex: 1
  };

  const testimonialHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    textAlign: window.innerWidth <= 768 ? 'center' : 'left'
  };

  const testimonialAvatarStyles = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px rgba(79, 70, 229, 0.25)',
    fontSize: '2.5rem',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
  };

  const testimonialInfoStyles = {
    flex: 1
  };

  const testimonialNameStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '4px'
  };

  const testimonialRoleStyles = {
    fontSize: '1rem',
    color: '#4f46e5',
    fontWeight: '500',
    marginBottom: '4px'
  };

  const testimonialCompanyStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '4px'
  };

  const testimonialLocationStyles = {
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const testimonialRatingStyles = {
    display: 'flex',
    gap: '4px',
    marginBottom: '24px',
    justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  const testimonialTextStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
    lineHeight: '1.8',
    color: '#1f2937',
    fontStyle: 'italic',
    marginBottom: '24px',
    flex: 1,
    borderLeft: '4px solid #4f46e5',
    paddingLeft: '16px',
    marginLeft: 0
  };

  const testimonialFooterStyles = {
    paddingTop: '16px',
    borderTop: '1px solid #e5e7eb'
  };

  const testimonialDetailsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '12px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  const testimonialCourseStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    background: '#f9fafb',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontWeight: '500'
  };

  const testimonialPackageStyles = {
    fontSize: '0.875rem',
    color: '#059669',
    background: '#d1fae5',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #059669',
    fontWeight: '600'
  };

  const carouselControlsStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    display: window.innerWidth <= 768 ? 'none' : 'flex',
    justifyContent: 'space-between',
    padding: '0 16px',
    pointerEvents: 'none'
  };

  const carouselBtnStyles = (direction) => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: '#ffffff',
    border: '2px solid #4f46e5',
    color: '#4f46e5',
    fontSize: '1.5rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 8px 16px rgba(79, 70, 229, 0.25)',
    pointerEvents: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  });

  const carouselIndicatorsStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '24px'
  };

  const indicatorStyles = (index, isActive, isHovered) => ({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: 'none',
    background: isActive ? '#4f46e5' : isHovered ? '#6366f1' : '#d1d5db',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    transform: isActive ? 'scale(1.2)' : isHovered ? 'scale(1.1)' : 'scale(1)'
  });

  const testimonialsStatsStyles = {
    background: '#ffffff',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e5e7eb'
  };

  const statsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? 'repeat(2, 1fr)' 
      : 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: window.innerWidth <= 768 ? '16px' : '24px'
  };

  const statItemStyles = {
    textAlign: 'center',
    padding: window.innerWidth <= 768 ? '12px' : '16px'
  };

  const statNumberStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
    fontWeight: '800',
    color: '#4f46e5',
    display: 'block',
    marginBottom: '8px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  return (
    <section style={testimonialsSectionStyles} id="testimonials">
      <div style={backgroundOverlayStyles} />
      <div style={decorativeCircleStyles} />
      
      <div style={testimonialsContainerStyles}>
        <motion.div 
          ref={ref}
          style={testimonialsHeaderStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 style={testimonialsTitleStyles}>Success Stories</h2>
          <p style={testimonialsSubtitleStyles}>
            Hear from our successful graduates who transformed their careers with us
          </p>
        </motion.div>

        <motion.div 
          style={testimonialsCarouselStyles}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div style={carouselWrapperStyles}>
            <div style={carouselTrackStyles}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} style={carouselSlideStyles}>
                  <Card style={testimonialCardStyles} hover={false}>
                    <div style={testimonialQuoteStyles}>"</div>
                    <div style={testimonialContentStyles}>
                      <div style={testimonialHeaderStyles}>
                        <div style={testimonialAvatarStyles}>
                          <span>{testimonial.image}</span>
                        </div>
                        <div style={testimonialInfoStyles}>
                          <h3 style={testimonialNameStyles}>{testimonial.name}</h3>
                          <p style={testimonialRoleStyles}>{testimonial.role}</p>
                          <p style={testimonialCompanyStyles}>{testimonial.company}</p>
                          <p style={testimonialLocationStyles}>📍 {testimonial.location}</p>
                        </div>
                      </div>
                      
                      <div style={testimonialRatingStyles}>
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <blockquote style={testimonialTextStyles}>
                        "{testimonial.testimonial}"
                      </blockquote>
                      
                      <div style={testimonialFooterStyles}>
                        <div style={testimonialDetailsStyles}>
                          <span style={testimonialCourseStyles}>
                            📚 {testimonial.course}
                          </span>
                          <span style={testimonialPackageStyles}>
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
          
          <div style={carouselControlsStyles}>
            <button 
              style={carouselBtnStyles('prev')}
              onClick={prevSlide}
              onMouseEnter={(e) => {
                e.target.style.background = '#4f46e5';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#4f46e5';
                e.target.style.transform = 'scale(1)';
              }}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button 
              style={carouselBtnStyles('next')}
              onClick={nextSlide}
              onMouseEnter={(e) => {
                e.target.style.background = '#4f46e5';
                e.target.style.color = '#ffffff';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#4f46e5';
                e.target.style.transform = 'scale(1)';
              }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
          
          <div style={carouselIndicatorsStyles}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                style={indicatorStyles(index, index === currentSlide, hoveredIndicator === index)}
                onClick={() => setCurrentSlide(index)}
                onMouseEnter={() => setHoveredIndicator(index)}
                onMouseLeave={() => setHoveredIndicator(null)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          style={testimonialsStatsStyles}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div style={statsGridStyles}>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>98%</div>
              <div style={statLabelStyles}>Placement Success Rate</div>
            </div>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>4.9/5</div>
              <div style={statLabelStyles}>Average Rating</div>
            </div>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>₹16L</div>
              <div style={statLabelStyles}>Average Package</div>
            </div>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>850+</div>
              <div style={statLabelStyles}>Success Stories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
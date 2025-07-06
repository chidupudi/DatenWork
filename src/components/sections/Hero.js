import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation keyframes
  const animationKeyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes glow {
      0%, 100% {
        box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
      }
      50% {
        box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
      }
    }
  `;

  // Main hero section styles
  const heroStyles = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f766e 100%)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  };

  // Background overlay styles
  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.08)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')
    `,
    zIndex: 0
  };

  const darkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 0
  };

  // Container styles
  const heroContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '32px' : '48px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    textAlign: window.innerWidth <= 768 ? 'center' : 'left'
  };

  // Content styles (BRIGHTENED)
  const heroContentStyles = {
    animation: 'fadeInUp 0.8s ease-out',
    order: window.innerWidth <= 768 ? 0 : 0  // Content comes first on mobile
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#ffffff',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', // Brighter gradient
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) brightness(1.2)' // Added brightness
  };

  const heroSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.125rem' : '1.25rem',
    marginBottom: '32px',
    color: '#f1f5f9', // Brighter than #e2e8f0
    lineHeight: '1.6',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
    fontWeight: '400',
    filter: 'brightness(1.1)' // Added brightness
  };

  const heroCtaStyles = {
    display: 'flex',
    gap: '16px',
    marginBottom: '48px',
    flexWrap: 'wrap',
    justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  const heroStatsStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '16px' : '24px'
  };

  const statStyles = {
    textAlign: 'center'
  };

  const statNumberStyles = {
    display: 'block',
    fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
    fontWeight: '800',
    color: '#fde047', // Brighter yellow
    marginBottom: '4px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    filter: 'brightness(1.2)' // Added brightness
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    opacity: '1', // Increased from 0.9
    color: '#f8fafc', // Brighter white
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
  };

  // JOIN FORM STYLES
  const joinFormContainerStyles = {
    position: 'relative',
    height: window.innerWidth <= 768 ? 'auto' : '500px',
    animation: 'fadeInRight 0.8s ease-out 0.2s both',
    order: window.innerWidth <= 768 ? 1 : 0,  // Form comes second on mobile
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const joinFormStyles = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '32px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
    animation: 'glow 3s ease-in-out infinite'
  };

  const formTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#ffffff',
    textAlign: 'center',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const formSubtitleStyles = {
    fontSize: '0.875rem',
    color: '#e2e8f0',
    textAlign: 'center',
    marginBottom: '24px',
    opacity: '0.9'
  };

  const inputStyles = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '14px',
    marginBottom: '16px',
    outline: 'none',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)'
  };

  const selectStyles = {
    ...inputStyles,
    cursor: 'pointer'
  };

  const submitButtonStyles = {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
    marginTop: '8px'
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{animationKeyframes}</style>
      
      <section style={heroStyles} id="home">
        <div style={overlayStyles} />
        <div style={darkOverlayStyles} />
        
        <motion.div 
          style={heroContainerStyles}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div style={heroContentStyles} variants={itemVariants}>
            <motion.h1 
              style={heroTitleStyles}
              variants={itemVariants}
            >
              Empowering Talent, Driving Global Tech Success
            </motion.h1>
            
            <motion.p 
              style={heroSubtitleStyles}
              variants={itemVariants}
            >
              Transform your career with expert training, guaranteed placements, and world-class consultancy
            </motion.p>
            
            <motion.div 
              style={heroCtaStyles}
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="primary" size="large">
                  Explore Training Programs
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="secondary" size="large">
                  Find Your Dream Job
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              style={heroStatsStyles}
              variants={itemVariants}
            >
              <motion.div 
                style={statStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>600+</span>
                <span style={statLabelStyles}>Successful Placements</span>
              </motion.div>
              
              <motion.div 
                style={statStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>6+</span>
                <span style={statLabelStyles}>Years Experience</span>
              </motion.div>
              
              <motion.div 
                style={statStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>50+</span>
                <span style={statLabelStyles}>Placement Companies</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* JOIN FORM SECTION */}
          <motion.div 
            style={joinFormContainerStyles}
            variants={itemVariants}
          >
            <motion.div 
              style={joinFormStyles}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={formTitleStyles}>Join Now</h3>
              <p style={formSubtitleStyles}>Start your tech career journey today</p>
              
              <form onSubmit={handleSubmit}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyles}
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                  required
                />
                
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyles}
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                  required
                />
                
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyles}
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                  required
                />
                
                <motion.select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  style={selectStyles}
                  whileFocus={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
                  required
                >
                  <option value="" style={{color: '#000'}}>Select Course</option>
                  <option value="react" style={{color: '#000'}}>React Development</option>
                  <option value="node" style={{color: '#000'}}>Node.js Backend</option>
                  <option value="fullstack" style={{color: '#000'}}>Full Stack Development</option>
                  <option value="python" style={{color: '#000'}}>Python Programming</option>
                  <option value="data-science" style={{color: '#000'}}>Data Science</option>
                  <option value="mainframe" style={{color: '#000'}}>Mainframe</option>
                </motion.select>
                
                <motion.button
                  type="submit"
                  style={submitButtonStyles}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: '0 6px 20px rgba(99, 102, 241, 0.4)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started Free
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
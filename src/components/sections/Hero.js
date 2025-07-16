import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Button = ({ variant, size, children, ...props }) => {
  const baseStyles = {
    padding: size === 'large' ? '16px 32px' : '12px 24px',
    fontSize: size === 'large' ? '16px' : '14px',
    fontWeight: '600',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 15px rgba(30, 64, 175, 0.3)'
    },
    secondary: {
      background: 'transparent',
      color: '#1e40af',
      border: '2px solid #1e40af'
    }
  };

  return (
    <button 
      style={{...baseStyles, ...variantStyles[variant]}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
        } else {
          e.target.style.background = '#1e40af';
          e.target.style.color = '#ffffff';
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.target.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
        } else {
          e.target.style.background = 'transparent';
          e.target.style.color = '#1e40af';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, phone, course } = formData;
    
    if (!name.trim()) {
      alert('Please enter your full name');
      return false;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    if (!phone.trim()) {
      alert('Please enter your phone number');
      return false;
    }
    
    if (!course) {
      alert('Please select a course');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Add document to Firestore
      const docRef = await addDoc(collection(db, 'hero_form_submissions'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        course: formData.course,
        source: 'hero_section',
        submittedAt: serverTimestamp(),
        status: 'new'
      });

      console.log('Document written with ID: ', docRef.id);
      
      // Success feedback
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: ''
      });

      // Show success message
      alert('🎉 Thank you! Your information has been submitted successfully. Our team will contact you within 24 hours.');

    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitStatus('error');
      alert('❌ Sorry, there was an error submitting your information. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
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

  // Enhanced animation keyframes
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

    @keyframes gentleGlow {
      0%, 100% {
        box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
      }
      50% {
        box-shadow: 0 0 40px rgba(59, 130, 246, 0.25);
      }
    }

    @keyframes shimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.7;
      }
    }
  `;

  // Plain hero section styles
  const heroStyles = {
    background: '#ffffff',
    color: '#1f2937',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  };

  // Container styles
  const heroContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 px',
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '40px' : '60px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    textAlign: window.innerWidth <= 768 ? 'center' : 'left'
  };

  // Enhanced content styles
  const heroContentStyles = {
    animation: 'fadeInUp 0.8s ease-out',
    order: window.innerWidth <= 768 ? 0 : 0
  };

  // Professional title styling
  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
    marginTop: '-10px',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: '12px',
    color: '#1f2937',
    position: 'relative'
  };

  // Clean subtitle styling
  const heroSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.125rem' : '1.3rem',
    marginBottom: '36px',
    color: '#6b7280',
    lineHeight: '1.6',
    fontWeight: '400',
    opacity: '0.95'
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

  // Refined stats styling
  const heroStatsStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '20px' : '32px'
  };

  const statStyles = {
    textAlign: 'center',
    padding: '16px',
    background: '#f9fafb',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    transition: 'all 0.3s ease'
  };

  const statNumberStyles = {
    display: 'block',
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    fontWeight: '700',
    color: '#3b82f6',
    marginBottom: '4px'
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    fontWeight: '500'
  };

  // Professional form container
  const joinFormContainerStyles = {
    position: 'relative',
    height: window.innerWidth <= 768 ? 'auto' : '500px',
    animation: 'fadeInRight 0.8s ease-out 0.2s both',
    order: window.innerWidth <= 768 ? 1 : 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  // Enhanced form styling
  const joinFormStyles = {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '20px',
    padding: '36px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    position: 'relative'
  };

  const formTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1f2937',
    textAlign: 'center'
  };

  const formSubtitleStyles = {
    fontSize: '0.9rem',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '28px',
    opacity: '0.9'
  };

  // Professional input styling
  const inputStyles = {
    width: '100%',
    padding: '14px 18px',
    backgroundColor: '#f9fafb',
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    color: '#1f2937',
    fontSize: '15px',
    marginBottom: '18px',
    outline: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  };

  const selectStyles = {
    ...inputStyles,
    cursor: 'pointer'
  };

  // Professional submit button
  const submitButtonStyles = {
    width: '100%',
    padding: '16px',
    background: isSubmitting 
      ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
      : submitStatus === 'success'
      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      : submitStatus === 'error'
      ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
      : 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: isSubmitting 
      ? 'none'
      : submitStatus === 'success'
      ? '0 4px 15px rgba(16, 185, 129, 0.3)'
      : submitStatus === 'error'
      ? '0 4px 15px rgba(239, 68, 68, 0.3)'
      : '0 4px 15px rgba(30, 64, 175, 0.3)',
    marginTop: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  };

  const getButtonText = () => {
    if (isSubmitting) return '⏳ Submitting...';
    if (submitStatus === 'success') return '✅ Submitted Successfully!';
    if (submitStatus === 'error') return '❌ Try Again';
    return 'Get Started Free';
  };

  return (
    <>
      <style>{animationKeyframes}</style>
      
      <section style={heroStyles} id="home">
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
              Transform your career with expert training, guaranteed placements, and world-class consultancy services
            </motion.p>
            
            <motion.div 
  style={heroCtaStyles}
  variants={itemVariants}
>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button 
      variant="primary" 
      size="large"
      onClick={() => window.location.href = '/programs'}
    >
      Explore Training Programs
    </Button>
  </motion.div>
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Button 
      variant="secondary" 
      size="large"
      onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe2mqWXkm0W43PxgYna5nFPwCOMshtsYhc9NPEBQCocdTiCEQ/viewform?usp=header', '_blank')}
    >
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
                whileHover={{ 
                  scale: 1.05,
                  background: '#f3f4f6'
                }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>600+</span>
                <span style={statLabelStyles}>Successful Placements</span>
              </motion.div>
              
              <motion.div 
                style={statStyles}
                whileHover={{ 
                  scale: 1.05,
                  background: '#f3f4f6'
                }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>6+</span>
                <span style={statLabelStyles}>Years Experience</span>
              </motion.div>
              
              <motion.div 
                style={statStyles}
                whileHover={{ 
                  scale: 1.05,
                  background: '#f3f4f6'
                }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>50+</span>
                <span style={statLabelStyles}>Placement Companies</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Professional Form Section with Firebase */}
          <motion.div 
            style={joinFormContainerStyles}
            variants={itemVariants}
          >
            <motion.div 
              style={joinFormStyles}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={formTitleStyles}>Start Your Journey</h3>
              <p style={formSubtitleStyles}>Join thousands of successful tech professionals</p>
              
              <form onSubmit={handleSubmit}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyles}
                  whileFocus={{ 
                    scale: 1.02, 
                    borderColor: '#3b82f6',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  required
                  disabled={isSubmitting}
                />
                
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyles}
                  whileFocus={{ 
                    scale: 1.02, 
                    borderColor: '#3b82f6',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  required
                  disabled={isSubmitting}
                />
                
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={inputStyles}
                  whileFocus={{ 
                    scale: 1.02, 
                    borderColor: '#3b82f6',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  required
                  disabled={isSubmitting}
                />
                
                <motion.select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  style={selectStyles}
                  whileFocus={{ 
                    scale: 1.02, 
                    borderColor: '#3b82f6',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.backgroundColor = '#f9fafb';
                  }}
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select Course</option>
                  <option value="react">React Development</option>
                  <option value="node">Node.js Backend</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="python">Python Programming</option>
                  <option value="data-science">Data Science</option>
                  <option value="mainframe">Mainframe</option>
                </motion.select>
                
                <motion.button
                  type="submit"
                  style={submitButtonStyles}
                  whileHover={!isSubmitting ? { 
                    scale: 1.02, 
                    boxShadow: '0 8px 25px rgba(30, 64, 175, 0.4)',
                    background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 100%)'
                  } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span style={{ animation: 'pulse 1s infinite' }}>⏳</span>
                  )}
                  {getButtonText()}
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
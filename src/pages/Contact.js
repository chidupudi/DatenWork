import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Card = ({ children, style, className }) => (
  <div className={className} style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', ...style }}>
    {children}
  </div>
);

const Button = ({ variant, size, children, style, ...props }) => {
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
      style={{...baseStyles, ...variantStyles[variant], ...style}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
        } else if (variant === 'secondary') {
          e.target.style.background = '#1e40af';
          e.target.style.color = '#ffffff';
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.target.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
        } else if (variant === 'secondary') {
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: 'training'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    
    if (!name.trim()) {
      alert('Please enter your name');
      return false;
    }
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }
    
    if (!subject.trim()) {
      alert('Please enter a subject');
      return false;
    }
    
    if (!message.trim()) {
      alert('Please enter your message');
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
      const docRef = await addDoc(collection(db, 'contact_form_submissions'), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        interest: formData.interest,
        source: 'contact_page',
        submittedAt: serverTimestamp(),
        status: 'new'
      });

      console.log('Contact form submitted with ID: ', docRef.id);
      
      // Success feedback
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        interest: 'training'
      });

      // Show success message
      alert('🎉 Thank you for your message! We will get back to you within 24 hours.');

    } catch (error) {
      console.error('Error submitting contact form: ', error);
      setSubmitStatus('error');
      alert('❌ Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Location',
      details: ['Manjeera Trinity Corporate', 'Kukatpally Housing Board, Phase 3', 'Hyderabad, Telangana 500072']
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      details: ['+91 9652247047', '+91 8008085560', 'Available 9 AM - 7 PM IST']
    },
    {
      icon: '✉️',
      title: 'Email Addresses',
      details: ['hr@datenwork.in']
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      details: ['Monday - Friday: 9 AM - 7 PM', 'Saturday: 10 AM - 5 PM', 'Sunday: Closed']
    }
  ];

  // Hero section styles with grid background (same as other pages)
  const heroSectionStyles = {
    padding: window.innerWidth <= 768 ? '80px 0 60px' : '120px 0 80px',
    background: '#ffffff',
    color: '#1f2937',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 24px',
    position: 'relative',
    zIndex: 2
  };

  const heroContentStyles = {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
    fontWeight: '700',
    lineHeight: '1.1',
    marginBottom: window.innerWidth <= 768 ? '16px' : '24px',
    color: '#1f2937'
  };

  const heroDescriptionStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.3rem',
    marginBottom: window.innerWidth <= 768 ? '32px' : '48px',
    color: '#6b7280',
    lineHeight: '1.6',
    fontWeight: '400',
    opacity: '0.95'
  };

  // Submit button styles with status states
  const getSubmitButtonStyles = () => ({
    alignSelf: 'flex-start',
    background: isSubmitting 
      ? 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
      : submitStatus === 'success'
      ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
      : submitStatus === 'error'
      ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
      : 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
    boxShadow: isSubmitting 
      ? 'none'
      : submitStatus === 'success'
      ? '0 4px 15px rgba(16, 185, 129, 0.3)'
      : submitStatus === 'error'
      ? '0 4px 15px rgba(239, 68, 68, 0.3)'
      : '0 4px 15px rgba(30, 64, 175, 0.3)',
    cursor: isSubmitting ? 'not-allowed' : 'pointer'
  });

  const getButtonText = () => {
    if (isSubmitting) return '⏳ Sending Message...';
    if (submitStatus === 'success') return '✅ Message Sent!';
    if (submitStatus === 'error') return '❌ Try Again';
    return 'Send Message';
  };

  return (
    <div className="contact-page" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
      <Header />
      
      {/* Hero Section - Updated for plain white background, overlays removed */}
      <section className="contact-hero" style={heroSectionStyles}>
        <div style={containerStyles}>
          <div style={heroContentStyles}>
            <h1 style={heroTitleStyles}>Get In Touch</h1>
            <p style={heroDescriptionStyles}>
              Ready to transform your career? We're here to help you every step of the way. 
              Visit our Hyderabad campus or reach out to us for course information, career guidance, or any questions you might have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Information Section */}
      <section style={{ padding: window.innerWidth <= 768 ? '60px 0' : '80px 0' }}>
        <div style={containerStyles}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth <= 968 ? '1fr' : '1fr 1fr', 
            gap: window.innerWidth <= 768 ? '40px' : '60px', 
            alignItems: 'flex-start' 
          }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ 
                fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem', 
                marginBottom: '30px', 
                color: '#1a202c',
                fontWeight: '600'
              }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
                  gap: '20px' 
                }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
                
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
                  gap: '20px' 
                }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone (+91)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      background: 'white',
                      outline: 'none',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  >
                    <option value="training">Training Programs</option>
                    <option value="placement">Job Placement</option>
                    <option value="consultancy">IT Consultancy</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  style={{
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />

                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  rows="6"
                  style={{
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="large" 
                  style={getSubmitButtonStyles()}
                  disabled={isSubmitting}
                >
                  {getButtonText()}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 style={{ 
                fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem', 
                marginBottom: '30px', 
                color: '#1a202c',
                fontWeight: '600'
              }}>
                Contact Information
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index} 
                    style={{ 
                      padding: window.innerWidth <= 768 ? '20px' : '25px', 
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                      <div style={{ 
                        fontSize: window.innerWidth <= 768 ? '1.8rem' : '2rem', 
                        minWidth: '50px',
                        background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
                        borderRadius: '12px',
                        padding: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ filter: 'grayscale(100%) brightness(0) invert(1)' }}>
                          {info.icon}
                        </span>
                      </div>
                      <div>
                        <h3 style={{ 
                          fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem', 
                          marginBottom: '12px', 
                          color: '#1a202c',
                          fontWeight: '600'
                        }}>
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} style={{ 
                            margin: '4px 0', 
                            color: '#4a5568', 
                            fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
                            lineHeight: '1.5'
                          }}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section style={{
        padding: window.innerWidth <= 768 ? '60px 0' : '80px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
      }}>
        <div style={containerStyles}>
          <div style={{
            textAlign: 'center',
            background: 'white',
            padding: window.innerWidth <= 768 ? '40px 24px' : '60px',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{
              fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.5rem',
              marginBottom: '16px',
              color: '#1a202c',
              fontWeight: '700'
            }}>
              Need Immediate Assistance?
            </h2>
            <p style={{
              fontSize: window.innerWidth <= 768 ? '1rem' : '1.2rem',
              color: '#4a5568',
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px auto',
              lineHeight: '1.6'
            }}>
              Our admissions team is available to answer your questions and help you choose the right program for your career goals.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
              alignItems: 'center'
            }}>
              <Button variant="primary" size="large">
                📞 Call Now: +91 9652247047
              </Button>
              <Button 
                variant="primary" 
                size="large"
                style={{
                  background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                }}
              >
                💬 WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;``
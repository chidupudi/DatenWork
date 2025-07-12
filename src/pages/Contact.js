import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

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
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    }
  };

  return (
    <button 
      style={{...baseStyles, ...variantStyles[variant], ...style}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.target.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      interest: 'training'
    });
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
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  };

  // Grid pattern overlay (exact same as other pages)
  const heroOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.08) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')
    `,
    zIndex: 0
  };

  // Dark overlay for text readability
  const heroDarkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.4)',
    zIndex: 0
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
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
  };

  const heroDescriptionStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.3rem',
    marginBottom: window.innerWidth <= 768 ? '32px' : '48px',
    color: '#e2e8f0',
    lineHeight: '1.6',
    fontWeight: '400',
    opacity: '0.95'
  };

  return (
    <div className="contact-page" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
      <Header />
      
      {/* Hero Section with Grid Background */}
      <section className="contact-hero" style={heroSectionStyles}>
        <div style={heroOverlayStyles} />
        <div style={heroDarkOverlayStyles} />
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
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
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
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
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
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                  />
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    style={{
                      padding: '15px 20px',
                      border: '2px solid #e2e8f0',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      background: 'white',
                      outline: 'none'
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
                  style={{
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
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
                  rows="6"
                  style={{
                    padding: '15px 20px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />

                <Button type="submit" variant="primary" size="large" style={{ alignSelf: 'flex-start' }}>
                  Send Message
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

export default Contact;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedSection, setSelectedSection] = useState('overview');
  const [readingProgress, setReadingProgress] = useState(0);
  const [hoveredTocItem, setHoveredTocItem] = useState(null);

  // Reading progress for the selected section
  useEffect(() => {
    const handleScroll = () => {
      const mainContent = document.querySelector('.main-content-area');
      if (mainContent) {
        const totalHeight = mainContent.scrollHeight - mainContent.clientHeight;
        const progress = totalHeight > 0 ? (mainContent.scrollTop / totalHeight) * 100 : 0;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    const mainContent = document.querySelector('.main-content-area');
    if (mainContent) {
      mainContent.addEventListener('scroll', handleScroll);
      return () => mainContent.removeEventListener('scroll', handleScroll);
    }
  }, [selectedSection]);

  // Handle section selection
  const handleSectionSelect = (sectionId) => {
    setSelectedSection(sectionId);
    setReadingProgress(0);
  };

  // Enhanced Hero section styles
  const heroSectionStyles = {
    padding: window.innerWidth <= 768 ? '100px 0 80px' : '140px 0 100px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    minHeight: window.innerWidth <= 768 ? '50vh' : '60vh',
    display: 'flex',
    alignItems: 'center'
  };

  // Grid pattern overlay
  const heroOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(30, 64, 175, 0.12) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M 15 0 L 0 0 0 15" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')
    `,
    zIndex: 0
  };

  const heroDarkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(15, 23, 42, 0.5)',
    zIndex: 0
  };

  // Floating elements for visual appeal
  const floatingElementStyles = (delay, size) => ({
    position: 'absolute',
    width: size,
    height: size,
    background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(20, 184, 166, 0.1))',
    borderRadius: '50%',
    filter: 'blur(20px)',
    animation: `float ${6 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`
  });

  const containerStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 24px',
    position: 'relative',
    zIndex: 2
  };

  const heroContentStyles = {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(3rem, 6vw, 4.5rem)',
    fontWeight: '800',
    lineHeight: '1.05',
    marginBottom: window.innerWidth <= 768 ? '20px' : '28px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 30%, #e2e8f0 60%, #cbd5e1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    letterSpacing: '-0.02em'
  };

  const heroSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.125rem' : '1.4rem',
    marginBottom: window.innerWidth <= 768 ? '40px' : '56px',
    color: '#e2e8f0',
    lineHeight: '1.6',
    fontWeight: '400',
    opacity: '0.95',
    maxWidth: '700px',
    margin: '0 auto 56px auto'
  };

  // Document metadata styles
  const documentMetaStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: window.innerWidth <= 768 ? '16px' : '32px',
    flexWrap: 'wrap',
    marginTop: '32px'
  };

  const metaItemStyles = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '12px',
    padding: window.innerWidth <= 768 ? '12px 16px' : '16px 24px',
    fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.95rem',
    fontWeight: '500'
  };

  // Main content section styles
  const contentSectionStyles = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)',
    minHeight: '100vh',
    position: 'relative'
  };

  // Desktop layout container
  const desktopLayoutStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    display: window.innerWidth <= 1024 ? 'block' : 'grid',
    gridTemplateColumns: '320px 1fr',
    gap: '40px',
    padding: window.innerWidth <= 768 ? '40px 20px' : '60px 24px',
    alignItems: 'start'
  };

  // Sticky TOC styles
  const tocContainerStyles = {
    position: window.innerWidth <= 1024 ? 'relative' : 'sticky',
    top: window.innerWidth <= 1024 ? 'auto' : '120px',
    height: window.innerWidth <= 1024 ? 'auto' : 'calc(100vh - 160px)',
    overflowY: window.innerWidth <= 1024 ? 'visible' : 'auto',
    background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
    borderRadius: '24px',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 16px rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(226, 232, 240, 0.8)',
    marginBottom: window.innerWidth <= 1024 ? '40px' : '0'
  };

  // Reading progress bar
  const progressBarStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #4f46e5 0%, #14b8a6 100%)',
    borderRadius: '2px',
    transition: 'width 0.3s ease',
    width: `${readingProgress}%`
  };

  const tocHeaderStyles = {
    marginBottom: '24px',
    position: 'relative'
  };

  const tocTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const progressTextStyles = {
    fontSize: '0.85rem',
    color: '#6b7280',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const tocListStyles = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  };

  const tocItemStyles = (isActive, isHovered) => ({
    position: 'relative',
    borderRadius: '12px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    background: isActive 
      ? 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)' 
      : isHovered 
      ? 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
      : 'transparent',
    transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
    boxShadow: isActive ? '0 8px 20px rgba(79, 70, 229, 0.3)' : 'none'
  });

  const tocLinkStyles = (isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    color: isActive ? '#ffffff' : '#4b5563',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: isActive ? '600' : '500',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  });

  const iconContainerStyles = (isActive, color) => ({
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    background: isActive 
      ? 'rgba(255, 255, 255, 0.2)' 
      : `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)`,
    color: isActive ? '#ffffff' : color,
    transition: 'all 0.2s ease'
  });

  // Main content area styles
  const mainContentStyles = {
    background: 'transparent',
    height: window.innerWidth <= 1024 ? 'auto' : 'calc(100vh - 160px)',
    overflowY: window.innerWidth <= 1024 ? 'visible' : 'auto',
    paddingRight: window.innerWidth <= 1024 ? '0' : '16px'
  };

  // Section styles
  const sectionStyles = {
    background: 'linear-gradient(145deg, #ffffff 0%, #fafbfc 100%)',
    borderRadius: '20px',
    padding: window.innerWidth <= 768 ? '32px 24px' : '40px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06), 0 4px 8px rgba(0, 0, 0, 0.04)',
    border: '1px solid rgba(226, 232, 240, 0.6)',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '400px'
  };

  const sectionHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '32px',
    position: 'relative',
    zIndex: 2
  };

  const sectionIconStyles = (color) => ({
    width: window.innerWidth <= 768 ? '48px' : '56px',
    height: window.innerWidth <= 768 ? '48px' : '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '1.8rem',
    background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
    color: '#ffffff',
    boxShadow: `0 8px 20px ${color}40`
  });

  const sectionTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '1.8rem',
    fontWeight: '700',
    color: '#1f2937',
    margin: 0,
    lineHeight: '1.2'
  };

  const sectionContentStyles = {
    position: 'relative',
    zIndex: 2
  };

  const contentTextStyles = {
    color: '#4b5563',
    lineHeight: '1.8',
    fontSize: window.innerWidth <= 768 ? '0.95rem' : '1.05rem',
    marginBottom: '20px',
    fontWeight: '400'
  };

  const subHeadingStyles = {
    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
    fontWeight: '650',
    color: '#1f2937',
    marginTop: '28px',
    marginBottom: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const listStyles = {
    color: '#4b5563',
    lineHeight: '1.7',
    fontSize: window.innerWidth <= 768 ? '0.95rem' : '1.05rem',
    paddingLeft: '0',
    marginBottom: '20px',
    listStyle: 'none'
  };

  const listItemStyles = {
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '8px 0'
  };

  const bulletStyles = {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    marginTop: '8px',
    flexShrink: 0
  };

  // Highlight box styles
  const highlightBoxStyles = (type = 'info') => {
    const styles = {
      info: {
        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
        border: '1px solid #bfdbfe',
        borderLeft: '4px solid #3b82f6',
        color: '#1e40af'
      },
      warning: {
        background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
        border: '1px solid #fcd34d',
        borderLeft: '4px solid #f59e0b',
        color: '#92400e'
      },
      success: {
        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
        border: '1px solid #bbf7d0',
        borderLeft: '4px solid #10b981',
        color: '#065f46'
      }
    };

    return {
      ...styles[type],
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      position: 'relative'
    };
  };

  const highlightTextStyles = {
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
    fontWeight: '500',
    margin: 0,
    lineHeight: '1.6'
  };

  // Floating animation keyframes
  const floatingKeyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      33% { transform: translateY(-20px) rotate(5deg); }
      66% { transform: translateY(-10px) rotate(-3deg); }
    }
  `;

  // Privacy policy data
  const privacyData = [
    {
      id: 'overview',
      icon: '🔐',
      title: 'Privacy Overview & Commitment',
      color: '#4f46e5',
      content: (
        <div>
          <p style={contentTextStyles}>
            At <strong>Datenwork</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This comprehensive Privacy Policy explains how we collect, use, process, and safeguard your data when you interact with our 
            training programs, placement services, and IT consultancy offerings.
          </p>
          
          <h4 style={subHeadingStyles}>
            <span>🛡️</span> Our Privacy Commitment
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We are committed to transparency in how we handle your personal information and will never compromise your privacy
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Your personal data is collected and processed only for legitimate business purposes related to our educational and placement services
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              You have full control over your personal information and can request access, corrections, or deletion at any time
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📝</span> Scope of This Policy
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              This policy applies to all information collected through our website, training platform, mobile applications, and direct interactions
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Covers data collection from students, job seekers, corporate clients, and website visitors
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Includes information gathered during enrollment, training, placement activities, and ongoing support services
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🌟 Our Promise:</strong> We believe privacy is a fundamental right. This policy ensures you understand 
              exactly how your information is handled and empowers you to make informed decisions about your data.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'collection',
      icon: '📊',
      title: 'Information We Collect',
      color: '#14b8a6',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>👤</span> Personal Information
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Identity Information:</strong> Full name, date of birth, gender, profile photograph, and identification documents
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Contact Details:</strong> Email addresses, phone numbers, postal addresses, and emergency contact information
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Educational Background:</strong> Academic qualifications, certifications, transcripts, and professional training history
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Professional Information:</strong> Work experience, skills, career goals, salary expectations, and employment preferences
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>💻</span> Technical Information
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Device Information:</strong> Device type, operating system, browser type, IP address, and unique device identifiers
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Usage Data:</strong> Pages visited, time spent on platform, feature usage, and learning progress metrics
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Performance Data:</strong> Assessment scores, assignment submissions, project completions, and skill evaluations
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🍪</span> Cookies and Tracking Technologies
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Essential Cookies:</strong> Required for platform functionality, user authentication, and security
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Analytics Cookies:</strong> Help us understand user behavior and improve our services
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Preference Cookies:</strong> Remember your settings and personalize your experience
            </li>
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>🔍 Data Minimization:</strong> We only collect information that is necessary for providing our services 
              and achieving legitimate business purposes. You can opt out of non-essential data collection at any time.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'usage',
      icon: '🎯',
      title: 'How We Use Your Information',
      color: '#f59e0b',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>🎓</span> Educational Services
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Delivering comprehensive training programs, tracking learning progress, and providing personalized educational content
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Conducting assessments, evaluating performance, and issuing certificates and credentials
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Providing technical support, answering queries, and offering guidance throughout your learning journey
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Customizing course content based on individual learning patterns and skill levels
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>💼</span> Placement and Career Services
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Matching qualified candidates with suitable job opportunities from our partner companies
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Creating professional profiles and resumes for presentation to potential employers
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Facilitating interview processes and providing ongoing career guidance and support
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Analyzing placement trends and success rates to improve our services
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📈</span> Service Improvement
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Analyzing usage patterns and feedback to enhance platform functionality and user experience
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Conducting research and development to create innovative educational solutions
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Monitoring system performance and ensuring platform security and reliability
            </li>
          </ul>

          <div style={highlightBoxStyles('success')}>
            <p style={highlightTextStyles}>
              <strong>🎯 Purpose Limitation:</strong> We only use your data for the specific purposes outlined above. 
              Any new uses of your information will require your explicit consent.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sharing',
      icon: '🤝',
      title: 'Information Sharing & Disclosure',
      color: '#8b5cf6',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>🏢</span> Placement Partners & Employers
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Professional profiles shared with vetted partner companies exclusively for job placement purposes with your explicit consent
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Information shared is limited to relevant professional qualifications, skills, and contact details necessary for recruitment
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All placement partners bound by confidentiality agreements to protect your personal information
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              You have full control over which employers can access your information and can withdraw consent anytime
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>⚖️</span> Legal Requirements
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Information may be disclosed when required by applicable laws, regulations, or court orders
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Cooperation with law enforcement agencies for legitimate investigations or legal proceedings
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Protection of our rights, property, or safety, and that of our students and employees
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🔧</span> Service Providers
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Technology Partners:</strong> Cloud hosting, software platforms, and technical infrastructure providers
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Payment Processors:</strong> Financial institutions and payment gateways for secure transaction processing
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Communication Services:</strong> Email, SMS, and notification services for program updates and communications
            </li>
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>🚫 No Commercial Sale:</strong> We never sell, rent, or commercially exploit your personal information 
              to third parties for marketing or advertising purposes. Your trust is invaluable to us.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      icon: '🛡️',
      title: 'Data Security & Protection',
      color: '#ef4444',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>🔐</span> Technical Security Measures
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Encryption:</strong> All data transmitted is protected using industry-standard SSL/TLS encryption protocols
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Access Controls:</strong> Multi-factor authentication and role-based access controls for all system users
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Secure Infrastructure:</strong> Data stored on secure, regularly updated servers with 24/7 monitoring
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Regular Backups:</strong> Automated, encrypted backups ensure data recovery and business continuity
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>👥</span> Administrative Security
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Comprehensive employee training on data protection, privacy practices, and security protocols
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Background checks and confidentiality agreements for all staff with access to personal information
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Regular security audits and vulnerability assessments by independent cybersecurity experts
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Incident response procedures for immediate action in case of any security breaches
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📱</span> Your Security Responsibilities
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Keep your login credentials confidential and use strong, unique passwords
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Log out from shared or public devices and never share your account access
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Report any suspicious activities or potential security concerns immediately
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🔍 Continuous Monitoring:</strong> Our security team continuously monitors for threats and updates 
              our protection measures to defend against emerging cybersecurity risks.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cookies',
      icon: '🍪',
      title: 'Cookies & Tracking Technologies',
      color: '#06b6d4',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>⚙️</span> Types of Cookies We Use
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Strictly Necessary Cookies:</strong> Essential for website functionality, user authentication, and security features
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Performance Cookies:</strong> Help us understand how visitors interact with our website to improve user experience
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Functional Cookies:</strong> Remember your preferences and settings for a personalized experience
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Analytics Cookies:</strong> Provide insights into website usage patterns and help optimize our services
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📊</span> Third-Party Analytics
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We use Google Analytics to understand website traffic patterns and user behavior
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Analytics data is anonymized and aggregated to protect individual privacy
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              No personally identifiable information is shared with analytics providers
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🎛️</span> Managing Cookie Preferences
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              You can control cookie settings through your browser preferences and our cookie management tool
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Disabling certain cookies may limit website functionality and personalization features
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Essential cookies cannot be disabled as they are necessary for core website functions
            </li>
          </ul>

          <div style={highlightBoxStyles('success')}>
            <p style={highlightTextStyles}>
              <strong>🎯 Transparency:</strong> We provide clear information about all cookies used and allow you to 
              make informed choices about your privacy preferences.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'rights',
      icon: '⚖️',
      title: 'Your Privacy Rights',
      color: '#84cc16',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>👁️</span> Access and Transparency Rights
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Right to Access:</strong> Request a copy of all personal information we hold about you
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Right to Information:</strong> Understand how your data is collected, used, and shared
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Data Portability:</strong> Receive your data in a structured, machine-readable format
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>✏️</span> Control and Correction Rights
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Right to Update:</strong> Modify your profile information and preferences at any time
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Consent Management:</strong> Withdraw consent for data processing activities where consent is the legal basis
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🗑️</span> Deletion and Restriction Rights
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Right to Erasure:</strong> Request deletion of your personal data under certain circumstances
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Right to Restriction:</strong> Limit how we process your data in specific situations
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Object to Processing:</strong> Opt out of certain types of data processing activities
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📞</span> Exercising Your Rights
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Contact our privacy team at <strong>hr@datenwork.in</strong> to exercise any of your privacy rights
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We will respond to your requests within 30 days and provide clear information about actions taken
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Identity verification may be required to protect against unauthorized access to your information
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🛡️ No Discrimination:</strong> Exercising your privacy rights will not result in discriminatory 
              treatment or impact the quality of our services provided to you.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'retention',
      icon: '📅',
      title: 'Data Retention & Deletion',
      color: '#f97316',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>⏰</span> Retention Periods
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Active Student Data:</strong> Retained throughout your enrollment and training period plus 3 years for support and certification purposes
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Placement Records:</strong> Career and placement information retained for 5 years to track long-term success and provide ongoing support
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Financial Records:</strong> Payment and billing information retained for 7 years as required by accounting and tax regulations
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Marketing Communications:</strong> Contact preferences retained until you unsubscribe or object to further communications
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🗑️</span> Automatic Deletion
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Temporary files and system logs automatically deleted after 90 days unless required for security investigations
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Inactive user accounts with no activity for 2 years may be archived or deleted after appropriate notice
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Backup copies of deleted data are securely overwritten within 30 days of deletion
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>⚖️</span> Legal Retention Requirements
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Some information may be retained longer due to legal, regulatory, or legitimate business requirements
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Data involved in legal proceedings or investigations retained until matters are fully resolved
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We will inform you if your data needs to be retained beyond standard retention periods
            </li>
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>🔄 Regular Review:</strong> We regularly review our data retention practices and securely delete 
              information that is no longer necessary for legitimate business purposes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'minors',
      icon: '👨‍👩‍👧‍👦',
      title: 'Children\'s Privacy Protection',
      color: '#a855f7',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>🛡️</span> Age Restrictions and Protections
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Our services are designed for individuals aged 18 years and older who can legally enter into binding agreements
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We do not knowingly collect personal information from children under 18 without explicit parental consent
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Special verification procedures in place for applicants who appear to be under the age of 18
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>👨‍👩‍👧</span> Parental Consent Process
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              For students aged 16-17, explicit written consent from parents or legal guardians is required before enrollment
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Parents have the right to review, modify, or request deletion of their child's personal information
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Enhanced privacy protections applied to accounts of users under 18, including restricted data sharing
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🚨</span> Discovery of Underage Users
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              If we discover that we have collected information from a child under 18 without proper consent, we will immediately delete such information
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Parents who believe their child has provided information without consent should contact us immediately
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We will cooperate fully with parents to address any concerns about their child's privacy
            </li>
          </ul>

          <div style={highlightBoxStyles('success')}>
            <p style={highlightTextStyles}>
              <strong>👨‍👩‍👧‍👦 Family Safety:</strong> We are committed to creating a safe digital environment and protecting 
              the privacy of young learners through enhanced safeguards and parental controls.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'changes',
      icon: '🔄',
      title: 'Policy Updates & Contact Information',
      color: '#10b981',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>📝</span> Policy Updates and Modifications
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or business operations
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Material changes will be communicated via email, platform notifications, or prominent website notices at least 30 days before implementation
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We encourage you to review this policy regularly to stay informed about how we protect your privacy
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Continued use of our services after policy updates constitutes acceptance of the revised terms
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📞</span> Contact Our Privacy Team
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Email:</strong> hr@datenwork.in (Privacy Officer)
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Phone:</strong> +91 9652247047 | +91 8008085560
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Address:</strong> Datenwork Services Pvt. Ltd., Hyderabad, Telangana, India
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Response Time:</strong> We respond to privacy inquiries within 3-5 business days
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🤝</span> Complaint Resolution
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              If you have concerns about our privacy practices, please contact us first for direct resolution
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We are committed to working with you to address any privacy-related issues promptly and fairly
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              For unresolved concerns, you may contact relevant data protection authorities in your jurisdiction
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🌟 Continuous Improvement:</strong> Your feedback helps us enhance our privacy practices. 
              We welcome your suggestions for improving how we protect and respect your personal information.
            </p>
          </div>
        </div>
      )
    }
  ];

  const quickLinks = [
    { id: 'overview', title: 'Privacy Overview', color: '#4f46e5' },
    { id: 'collection', title: 'Data Collection', color: '#14b8a6' },
    { id: 'usage', title: 'How We Use Data', color: '#f59e0b' },
    { id: 'sharing', title: 'Information Sharing', color: '#8b5cf6' },
    { id: 'security', title: 'Data Security', color: '#ef4444' },
    { id: 'cookies', title: 'Cookies & Tracking', color: '#06b6d4' },
    { id: 'rights', title: 'Your Privacy Rights', color: '#84cc16' },
    { id: 'retention', title: 'Data Retention', color: '#f97316' },
    { id: 'minors', title: 'Children\'s Privacy', color: '#a855f7' },
    { id: 'changes', title: 'Policy Updates', color: '#10b981' }
  ];

  // Get the currently selected section data
  const currentSection = privacyData.find(section => section.id === selectedSection);

  return (
    <>
      <style>{floatingKeyframes}</style>
      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
        <Header />
        
        {/* Enhanced Hero Section */}
        <section style={heroSectionStyles}>
          <div style={heroOverlayStyles} />
          <div style={heroDarkOverlayStyles} />
          
          {/* Floating decorative elements */}
          <div style={{...floatingElementStyles(0, '120px'), top: '10%', left: '5%'}} />
          <div style={{...floatingElementStyles(1, '80px'), top: '60%', right: '8%'}} />
          <div style={{...floatingElementStyles(2, '100px'), bottom: '15%', left: '10%'}} />
          
          <div style={containerStyles}>
            <motion.div 
              style={heroContentStyles}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                style={heroTitleStyles}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Privacy Policy
              </motion.h1>
              
              <motion.p 
                style={heroSubtitleStyles}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Your privacy is our priority. Learn how we collect, use, and protect your personal information 
                with transparency and respect. Navigate through sections to understand our comprehensive privacy practices.
              </motion.p>

              <motion.div 
                style={documentMetaStyles}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div style={metaItemStyles}>
                  <strong>📅 Effective Date:</strong> January 1, 2025
                </div>
                <div style={metaItemStyles}>
                  <strong>🔄 Last Updated:</strong> January 1, 2025
                </div>
                <div style={metaItemStyles}>
                  <strong>📍 Jurisdiction:</strong> India
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section with Desktop Layout */}
        <section style={contentSectionStyles}>
          <div style={desktopLayoutStyles}>
            {/* Sticky Table of Contents - Left Sidebar */}
            <motion.div 
              style={tocContainerStyles}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div style={tocHeaderStyles}>
                <div style={progressBarStyles} />
                <h2 style={tocTitleStyles}>
                  🔐 Privacy Sections
                </h2>
                <div style={progressTextStyles}>
                  <span>📖</span>
                  Reading Progress: {Math.round(readingProgress)}%
                </div>
              </div>

              <ul style={tocListStyles}>
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.id}
                    style={tocItemStyles(
                      selectedSection === link.id, 
                      hoveredTocItem === link.id
                    )}
                    onMouseEnter={() => setHoveredTocItem(link.id)}
                    onMouseLeave={() => setHoveredTocItem(null)}
                    onClick={() => handleSectionSelect(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div style={tocLinkStyles(selectedSection === link.id)}>
                      <div style={iconContainerStyles(selectedSection === link.id, link.color)}>
                        {privacyData.find(t => t.id === link.id)?.icon}
                      </div>
                      <span>{link.title}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Main Content Area - Right Side - Shows Only Selected Section */}
            <motion.div 
              style={mainContentStyles}
              className="main-content-area"
              ref={ref}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {currentSection && (
                  <motion.div
                    key={selectedSection}
                    style={sectionStyles}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div style={sectionHeaderStyles}>
                      <div style={sectionIconStyles(currentSection.color)}>
                        {currentSection.icon}
                      </div>
                      <h3 style={sectionTitleStyles}>{currentSection.title}</h3>
                    </div>
                    
                    <div style={sectionContentStyles}>
                      {currentSection.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
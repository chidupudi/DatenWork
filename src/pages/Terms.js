import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

const TermsAndConditions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Changed to control which section is displayed
  const [selectedSection, setSelectedSection] = useState('general');
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
    setReadingProgress(0); // Reset progress for new section
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

  // Enhanced grid pattern with animated elements
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

  // Main content area styles - Updated for scrollable container
  const mainContentStyles = {
    background: 'transparent',
    height: window.innerWidth <= 1024 ? 'auto' : 'calc(100vh - 160px)',
    overflowY: window.innerWidth <= 1024 ? 'visible' : 'auto',
    paddingRight: window.innerWidth <= 1024 ? '0' : '16px'
  };

  // Enhanced section styles - Updated for single section display
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

  // Enhanced highlight box
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
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;

  // Terms data with enhanced structure
  const termsData = [
    {
      id: 'general',
      icon: '📋',
      title: 'General Terms and Acceptance',
      color: '#4f46e5',
      content: (
        <div>
          <p style={contentTextStyles}>
            Welcome to <strong>Datenwork</strong>! These Terms and Conditions ("Terms") govern your use of our 
            comprehensive training programs, elite placement services, and strategic IT consultancy offerings. 
            By enrolling in our programs or engaging our services, you acknowledge and agree to be legally bound by these Terms.
          </p>
          
          <h4 style={subHeadingStyles}>
            <span>🤝</span> Acceptance of Terms
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              By enrolling in any Datenwork program, you acknowledge that you have carefully read, fully understood, and agree to these comprehensive Terms and Conditions
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              These Terms constitute a legally binding agreement between you (the "Student" or "Client") and Datenwork Services Pvt. Ltd.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We reserve the right to modify, update, or amend these Terms at any time with reasonable prior notice via email or platform notifications
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Continued participation in our programs after changes indicates your acceptance of the modified Terms
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              If you disagree with any modifications, you may discontinue services subject to our cancellation policy
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🏢</span> Company Information
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Company Name:</strong> Datenwork Services Pvt. Ltd.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Registered Office:</strong> Hyderabad, Telangana, India
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Business Registration:</strong> Registered under Indian Companies Act
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Contact Information:</strong> hr@datenwork.in | +91 9652247047
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🔍 Important Notice:</strong> Please read these Terms carefully before enrollment. 
              If you do not agree with any part of these Terms, please do not proceed with enrollment. 
              For clarifications, contact our legal team at hr@datenwork.in.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'training',
      icon: '🎓',
      title: 'Training Program Terms',
      color: '#14b8a6',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>📚</span> Program Structure and Delivery
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Training programs are delivered through a comprehensive blend of live interactive sessions, pre-recorded content libraries, hands-on coding projects, and real-world case studies
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Program duration, schedule, and curriculum are as specified in your enrollment confirmation and program syllabus document
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Attendance Requirement: Minimum 80% attendance in live sessions is mandatory for program completion certification
            </li>
            
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All sessions are conducted in English, with additional language support available upon request
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>👨‍🎓</span> Student Responsibilities and Commitments
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Maintain consistent attendance and demonstrate active, constructive participation in all learning activities
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Complete all assignments, coding projects, and assessments within specified deadlines with original work
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Provide accurate, current, and complete contact information and update any changes promptly
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Use all learning materials, resources, and platform access solely for personal educational purposes
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Maintain professional conduct and respect for instructors, mentors, and fellow students at all times
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🏆</span> Certification Requirements
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Successfully complete all mandatory assignments and capstone projects with minimum 70% overall score
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Pass comprehensive final assessments with minimum 70% score in both theoretical and practical components
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Demonstrate satisfactory progress throughout the entire program duration as evaluated by instructors
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Complete mandatory peer review sessions and collaborative project requirements
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Submit final portfolio showcasing learned skills and completed projects
            </li>
          </ul>

          <div style={highlightBoxStyles('success')}>
            <p style={highlightTextStyles}>
              <strong>📜 Certification Process:</strong> Digital certificates are issued within 7-10 business days 
              after successful program completion.
              
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'placement',
      icon: '💼',
      title: 'Job Placement Services',
      color: '#f59e0b',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>🎯</span> Placement Guarantee Framework
          </h4>
          <p style={contentTextStyles}>
            Our comprehensive placement services are designed to secure employment opportunities in relevant 
            technology roles with our extensive network of 50+ placement companies. While we maintain an industry-leading 
            97% placement success rate, final placement outcomes depend on multiple factors including market conditions, 
            individual performance, skill demonstration, and active participation in our structured placement process.
          </p>

          <h4 style={subHeadingStyles}>
            <span>✅</span> Eligibility Criteria for Placement Services
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Successful completion of the enrolled training program with required certification and minimum 70% overall score
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Demonstrated technical proficiency in learned technologies through project portfolio and assessments
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Active participation in mandatory interview preparation sessions, mock interviews, and skill enhancement workshops
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Flexibility and willingness to consider opportunities across different locations as per job requirements
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Professional attitude and commitment to maintaining Datenwork's reputation with placement companies
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🔄</span> Comprehensive Placement Process
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Profile Development:</strong> Professional resume creation, LinkedIn optimization, and portfolio building
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Interview Training:</strong> Technical interview preparation, HR round coaching, and communication skills enhancement
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Job Matching:</strong> Intelligent matching based on skills, preferences, experience level, and career goals
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Interview Coordination:</strong> Scheduling and facilitating interviews with pre-screened placement companies
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Negotiation Support:</strong> Salary negotiation guidance and offer evaluation assistance
            </li>
            
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>⏱️ Placement Timeline:</strong> Statistical data shows 85% of successful placements occur within 3-6 months 
              of program completion. Extended support available for exceptional cases with management approval.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'payments',
      icon: '💳',
      title: 'Payment Terms and Fee Structure',
      color: '#8b5cf6',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>💰</span> Comprehensive Fee Payment Structure
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All program fees must be paid according to the agreed payment schedule outlined in your enrollment agreement
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Accepted Payment Methods:</strong> Bank transfers, UPI, credit/debit cards.
            </li>
          
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All published fees are inclusive of applicable GST and taxes unless explicitly specified otherwise
            </li>
          </ul>
           

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>💎 Pricing Transparency:</strong> We maintain complete fee transparency with no hidden charges. 
              Any additional optional services will be clearly outlined with separate pricing and explicit consent required.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cancellation',
      icon: '🔄',
      title: 'Cancellation and Refund Policy',
      color: '#ef4444',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>❌</span> Student-Initiated Cancellation Policy
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>0-7 days after enrollment:</strong> Partial refund of 50% of total paid fees
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>After 7 days or program commencement:</strong> No monetary refund available
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📝</span> Refund Processing Procedure
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Written refund request must be submitted via official email (hr@datenwork.in) with enrollment details and reason
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Refund processing timeline is 10-15 business days from approval date
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Refunds are credited exclusively to the original payment method used during enrollment
            </li>
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>🚨 Special Circumstances:</strong> Refund considerations may be made for documented medical emergencies, 
              family crises, or other extraordinary circumstances beyond student control.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'intellectual',
      icon: '📚',
      title: 'Intellectual Property and Content Usage',
      color: '#06b6d4',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>📖</span> Proprietary Course Materials and Content
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All course materials, training videos, documentation, assignments, and digital resources are exclusive intellectual property of Datenwork Services Pvt. Ltd.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Content is licensed to enrolled students solely for personal learning and educational purposes during the ongoing program.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Strictly Prohibited:</strong> Sharing, distributing, selling, or commercializing any course materials in any format.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Screen recording, downloading, or creating derivative works from live sessions or recorded content is not permitted.
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🎨</span> Student Work and Project Ownership
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Students retain full ownership rights to original work, projects, and code created independently during the program.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Datenwork may showcase exceptional student projects for marketing purposes with explicit written permission.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Anonymized project examples may be used for educational purposes in future program iterations.
            </li>
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>⚖️ Copyright Protection Notice:</strong> Unauthorized use, reproduction, or distribution of our proprietary content 
              constitutes intellectual property infringement and may result in immediate program termination and legal action.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      icon: '🔒',
      title: 'Privacy and Data Protection',
      color: '#84cc16',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>📋</span> Information Collection and Processing
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              We collect personal information essential for program delivery, placement services, and educational administration.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Personal Data Includes:</strong> Contact details, educational background, professional experience, career preferences, and learning progress.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Technical usage data collected to enhance learning experience and platform performance optimization.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All data collection complies with applicable Indian data protection laws and international standards.
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🤝</span> Data Sharing and Third-Party Disclosure
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Student information shared with potential employers exclusively with explicit consent for placement purposes.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>No Commercial Sale:</strong> We never sell, rent, or commercially exploit personal information to third parties.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Partner companies receive only relevant professional information necessary for job matching and recruitment.
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🔐 Privacy Commitment:</strong> Your privacy is fundamental to our operations. You can request access to your data, 
              request corrections, or withdraw consent at any time. Contact our privacy team at hr@datenwork.in.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'liability',
      icon: '⚖️',
      title: 'Limitation of Liability',
      color: '#f97316',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>⚠️</span> Service Disclaimer and Limitations
          </h4>
          <p style={contentTextStyles}>
            While Datenwork is committed to providing exceptional training and comprehensive placement assistance, 
            we cannot and do not guarantee specific outcomes including job placement success, salary levels, 
            career advancement, or employment duration. Success depends on numerous factors including market conditions, 
            individual effort, and external circumstances beyond our control.
          </p>

          <h4 style={subHeadingStyles}>
            <span>📚</span> Program Content and Curriculum
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Course content developed based on current industry standards, best practices, and emerging technology trends.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Curriculum regularly updated to reflect technological evolution and market demands.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Datenwork not liable for technology obsolescence or industry changes occurring after program completion.
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>💻</span> Technical Issues and Platform Availability
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Datenwork not responsible for technical issues, hardware failures, or connectivity problems on the student's end.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Internet connectivity, computer specifications, and software compatibility are student's responsibility.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Alternative access methods and technical support provided for platform-related issues during reasonable hours.
            </li>
          </ul>

          <div style={highlightBoxStyles('warning')}>
            <p style={highlightTextStyles}>
              <strong>💰 Maximum Liability Limitation:</strong> In all circumstances, Datenwork's total liability is strictly limited 
              to the actual fees paid for the specific program in question.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conduct',
      icon: '👥',
      title: 'Code of Conduct and Community Guidelines',
      color: '#a855f7',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>🤝</span> Professional Behavior Standards
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Maintain respectful, professional, and constructive communication with instructors, mentors, and fellow students at all times.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Participate actively and constructively in discussions, group activities, and collaborative learning exercises.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Respect diverse backgrounds, opinions, learning styles, and varying technical skill levels within the community.
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>📝</span> Academic Integrity and Honesty
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Submit original work exclusively and provide proper citations for external sources, references, or inspirations.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Collaboration and peer learning encouraged, but plagiarism and academic dishonesty strictly prohibited.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Cheating in assessments, examinations, or practical evaluations may result in immediate program termination.
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🚫</span> Prohibited Activities and Violations
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Harassment and Discrimination:</strong> Any form of harassment, discrimination, or inappropriate behavior.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Content Violations:</strong> Unauthorized sharing, distribution, or commercial use of course materials.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              <strong>Disruptive Behavior:</strong> Actions that interfere with others' learning experience.
            </li>
          </ul>

          <div style={highlightBoxStyles('success')}>
            <p style={highlightTextStyles}>
              <strong>🌟 Community Excellence:</strong> We are committed to fostering a positive, inclusive, 
              collaborative, and highly productive learning environment where all participants can thrive.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'dispute',
      icon: '🤝',
      title: 'Dispute Resolution and Governing Law',
      color: '#10b981',
      content: (
        <div>
          <h4 style={subHeadingStyles}>
            <span>💬</span> Initial Resolution Process
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All disputes, concerns, or complaints should initially be addressed through direct communication with our dedicated support team.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Students encouraged to raise issues promptly to enable timely resolution and prevent escalation.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Support team committed to acknowledging concerns within 3-5 business days.
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>⚖️</span> Mediation and Alternative Dispute Resolution
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Unresolved disputes may be subject to professional mediation.
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Binding arbitration may be required for specific categories of disputes as outlined in enrollment agreements
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Arbitration proceedings conducted in Hyderabad, Telangana, following Indian Arbitration and Conciliation Act procedures
            </li>
          </ul>

          <h4 style={subHeadingStyles}>
            <span>🏛️</span> Governing Law and Jurisdiction
          </h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              These Terms and Conditions governed exclusively by the laws of India and applicable state laws of Telangana
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              All legal disputes subject to the exclusive jurisdiction of competent courts in Hyderabad, Telangana
            </li>
            <li style={listItemStyles}>
              <span style={bulletStyles}></span>
              Consumer protection laws and educational regulations apply where specifically applicable and enforceable
            </li>
          </ul>

          <div style={highlightBoxStyles('info')}>
            <p style={highlightTextStyles}>
              <strong>🤝 Resolution Commitment:</strong> Datenwork is committed to fair, transparent, and timely dispute resolution. 
              Our primary goal is maintaining positive relationships while protecting the legitimate interests of all parties involved.
            </p>
          </div>
        </div>
      )
    }
  ];

  const quickLinks = [
    { id: 'general', title: 'General Terms', color: '#4f46e5' },
    { id: 'training', title: 'Training Programs', color: '#14b8a6' },
    { id: 'placement', title: 'Job Placement', color: '#f59e0b' },
    { id: 'payments', title: 'Payments & Fees', color: '#8b5cf6' },
    { id: 'cancellation', title: 'Cancellation Policy', color: '#ef4444' },
    { id: 'intellectual', title: 'Intellectual Property', color: '#06b6d4' },
    { id: 'privacy', title: 'Privacy & Data', color: '#84cc16' },
    { id: 'liability', title: 'Limitation of Liability', color: '#f97316' },
    { id: 'conduct', title: 'Code of Conduct', color: '#a855f7' },
    { id: 'dispute', title: 'Dispute Resolution', color: '#10b981' }
  ];

  // Get the currently selected section data
  const currentSection = termsData.find(section => section.id === selectedSection);

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
                Terms & Conditions
              </motion.h1>
              
              <motion.p 
                style={heroSubtitleStyles}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Please carefully review these comprehensive terms before enrolling in our training programs 
                or engaging our professional services. Navigate through sections using the menu to explore 
                specific terms relevant to your interests.
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
                  📋 Contents
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
                        {termsData.find(t => t.id === link.id)?.icon}
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

              {/* Enhanced Contact Section - Always visible at bottom */}
              
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TermsAndConditions;
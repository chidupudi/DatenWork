import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

const TermsAndConditions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Hero section styles with grid background (same as other pages)
  const heroSectionStyles = {
    padding: window.innerWidth <= 768 ? '80px 0 60px' : '120px 0 80px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    minHeight: window.innerWidth <= 768 ? '35vh' : '30vh',
    display: 'flex',
    alignItems: 'center'
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

  // Content section styles
  const contentSectionStyles = {
    padding: window.innerWidth <= 768 ? '60px 0' : '80px 0',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
  };

  const contentContainerStyles = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 24px'
  };

  // Table of Contents styles
  const tocStyles = {
    background: 'white',
    borderRadius: '16px',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0',
    marginBottom: window.innerWidth <= 768 ? '40px' : '48px'
  };

  const tocTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.5rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const tocListStyles = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  };

  const tocItemStyles = {
    marginBottom: '8px'
  };

  const tocLinkStyles = {
    color: '#4f46e5',
    textDecoration: 'none',
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '8px',
    display: 'block',
    transition: 'all 0.2s ease'
  };

  // Section styles
  const sectionStyles = {
    background: 'white',
    borderRadius: '16px',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    marginBottom: '24px',
    transition: 'all 0.3s ease'
  };

  const sectionHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: '0'
  };

  const sectionTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.2rem' : '1.4rem',
    fontWeight: '600',
    color: '#1f2937',
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const expandIconStyles = (isExpanded) => ({
    fontSize: '1.2rem',
    color: '#4f46e5',
    transition: 'transform 0.2s ease',
    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'
  });

  const sectionContentStyles = (isExpanded) => ({
    maxHeight: isExpanded ? '2000px' : '0',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    opacity: isExpanded ? 1 : 0,
    marginTop: isExpanded ? '20px' : '0'
  });

  const contentTextStyles = {
    color: '#6b7280',
    lineHeight: '1.7',
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
    marginBottom: '16px'
  };

  const subHeadingStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    marginTop: '20px',
    marginBottom: '12px'
  };

  const listStyles = {
    color: '#6b7280',
    lineHeight: '1.6',
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
    paddingLeft: '20px',
    marginBottom: '16px'
  };

  const listItemStyles = {
    marginBottom: '8px'
  };

  const highlightBoxStyles = {
    background: 'linear-gradient(135deg, #ede9fe 0%, #f3f4f6 100%)',
    border: '1px solid #e5e7eb',
    borderLeft: '4px solid #4f46e5',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px'
  };

  const highlightTextStyles = {
    color: '#1f2937',
    fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.9rem',
    fontWeight: '500',
    margin: 0
  };

  // Contact info styles
  const contactInfoStyles = {
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    color: 'white',
    borderRadius: '16px',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    marginTop: window.innerWidth <= 768 ? '40px' : '48px',
    textAlign: 'center'
  };

  const termsData = [
    {
      id: 'general',
      icon: '📋',
      title: 'General Terms and Acceptance',
      content: (
        <div>
          <p style={contentTextStyles}>
            Welcome to Datenwork! These Terms and Conditions ("Terms") govern your use of our training programs, 
            placement services, and IT consultancy offerings. By enrolling in our programs or using our services, 
            you agree to be bound by these Terms.
          </p>
          
          <h4 style={subHeadingStyles}>Acceptance of Terms</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>By enrolling in any Datenwork program, you acknowledge that you have read, understood, and agree to these Terms</li>
            <li style={listItemStyles}>These Terms constitute a legally binding agreement between you and Datenwork</li>
            <li style={listItemStyles}>We reserve the right to modify these Terms at any time with prior notice</li>
            <li style={listItemStyles}>Continued participation after changes indicates acceptance of modified Terms</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Important:</strong> Please read these Terms carefully before enrolling. 
              If you do not agree with any part of these Terms, please do not enroll in our programs.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'training',
      icon: '🎓',
      title: 'Training Program Terms',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Program Structure and Delivery</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Training programs are delivered through a combination of live online sessions, recorded content, and hands-on projects</li>
            <li style={listItemStyles}>Program duration and schedule are as specified in your enrollment confirmation</li>
            <li style={listItemStyles}>Minimum 80% attendance is required for program completion certification</li>
            <li style={listItemStyles}>Make-up sessions may be provided for missed classes, subject to availability</li>
          </ul>

          <h4 style={subHeadingStyles}>Student Responsibilities</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Maintain regular attendance and active participation in all sessions</li>
            <li style={listItemStyles}>Complete assignments, projects, and assessments within specified deadlines</li>
            <li style={listItemStyles}>Provide accurate and up-to-date contact information</li>
            <li style={listItemStyles}>Use learning materials solely for personal educational purposes</li>
          </ul>

          <h4 style={subHeadingStyles}>Certification Requirements</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Complete all mandatory assignments and projects with passing grades</li>
            <li style={listItemStyles}>Pass final assessments with minimum 70% score</li>
            <li style={listItemStyles}>Maintain satisfactory progress throughout the program duration</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Note:</strong> Certificates are issued only upon successful completion of all program requirements. 
              Digital certificates are provided within 7 business days of program completion.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'placement',
      icon: '💼',
      title: 'Job Placement Services',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Placement Guarantee Terms</h4>
          <p style={contentTextStyles}>
            Our placement services are designed to help you secure employment in relevant technology roles. 
            While we maintain a high success rate, placement depends on various factors including market conditions, 
            your performance, and active participation in the placement process.
          </p>

          <h4 style={subHeadingStyles}>Eligibility Criteria</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Successful completion of the training program with required certification</li>
            <li style={listItemStyles}>Demonstrated proficiency in the learned technologies</li>
            <li style={listItemStyles}>Active participation in interview preparation and mock interviews</li>
            <li style={listItemStyles}>Willingness to relocate as per job requirements (if applicable)</li>
          </ul>

          <h4 style={subHeadingStyles}>Placement Process</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Resume building and optimization assistance</li>
            <li style={listItemStyles}>Technical and HR interview preparation</li>
            <li style={listItemStyles}>Job matching based on skills and preferences</li>
            <li style={listItemStyles}>Interview coordination with partner companies</li>
            <li style={listItemStyles}>Ongoing support during the job search period</li>
          </ul>

          <h4 style={subHeadingStyles}>Student Commitments for Placement</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Attend all placement-related sessions and workshops</li>
            <li style={listItemStyles}>Actively apply to recommended job openings</li>
            <li style={listItemStyles}>Maintain professionalism during interviews and interactions</li>
            <li style={listItemStyles}>Provide timely updates on job search progress</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Placement Timeline:</strong> Our placement support continues for up to 12 months after program completion. 
              Most successful placements occur within 3-6 months of program completion.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'payments',
      icon: '💳',
      title: 'Payment Terms and Fee Structure',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Fee Payment</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Program fees must be paid as per the agreed payment schedule</li>
            <li style={listItemStyles}>We accept payments via bank transfer, credit/debit cards, and approved financing options</li>
            <li style={listItemStyles}>EMI options are available for select programs (subject to approval)</li>
            <li style={listItemStyles}>All fees are inclusive of applicable taxes unless otherwise specified</li>
          </ul>

          <h4 style={subHeadingStyles}>Late Payment Policy</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Late payment fees may apply for payments made after the due date</li>
            <li style={listItemStyles}>Access to live sessions may be suspended for overdue payments</li>
            <li style={listItemStyles}>Full access is restored immediately upon payment clearance</li>
          </ul>

          <h4 style={subHeadingStyles}>What's Included in Program Fees</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Live training sessions with expert instructors</li>
            <li style={listItemStyles}>Access to recorded session library</li>
            <li style={listItemStyles}>Course materials, assignments, and project resources</li>
            <li style={listItemStyles}>Career support and placement assistance</li>
            <li style={listItemStyles}>Program completion certificate</li>
            <li style={listItemStyles}>Alumni network access</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Transparency:</strong> There are no hidden fees. All costs are clearly communicated during enrollment. 
              Any additional optional services will be clearly outlined with separate pricing.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'cancellation',
      icon: '🔄',
      title: 'Cancellation and Refund Policy',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Cancellation by Student</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}><strong>Within 7 days of enrollment:</strong> Full refund (100%) minus processing fees</li>
            <li style={listItemStyles}><strong>8-14 days after enrollment:</strong> 75% refund of paid fees</li>
            <li style={listItemStyles}><strong>15-30 days after enrollment:</strong> 50% refund of paid fees</li>
            <li style={listItemStyles}><strong>After 30 days:</strong> No refund available</li>
          </ul>

          <h4 style={subHeadingStyles}>Refund Process</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Written refund request must be submitted via email</li>
            <li style={listItemStyles}>Refunds are processed within 10-15 business days</li>
            <li style={listItemStyles}>Refunds are credited to the original payment method</li>
            <li style={listItemStyles}>Processing fees and transaction charges are non-refundable</li>
          </ul>

          <h4 style={subHeadingStyles}>Program Postponement</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>One-time program postponement allowed up to 6 months</li>
            <li style={listItemStyles}>Request must be made at least 48 hours before program commencement</li>
            <li style={listItemStyles}>Subject to availability in future batches</li>
          </ul>

          <h4 style={subHeadingStyles}>Cancellation by Datenwork</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>We reserve the right to cancel programs due to insufficient enrollment</li>
            <li style={listItemStyles}>Full refund provided if program is cancelled by us</li>
            <li style={listItemStyles}>Alternative program options may be offered</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Special Circumstances:</strong> Refund considerations may be made for medical emergencies 
              or other extraordinary circumstances, subject to documentation and management approval.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'intellectual',
      icon: '📚',
      title: 'Intellectual Property and Content Usage',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Course Materials and Content</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>All course materials, videos, and resources are proprietary to Datenwork</li>
            <li style={listItemStyles}>Content is provided for personal learning purposes only</li>
            <li style={listItemStyles}>Sharing, distributing, or selling course materials is strictly prohibited</li>
            <li style={listItemStyles}>Screen recording or downloading of sessions is not permitted</li>
          </ul>

          <h4 style={subHeadingStyles}>Student Work and Projects</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>You retain ownership of original work and projects created during the program</li>
            <li style={listItemStyles}>Datenwork may showcase student projects for marketing purposes (with permission)</li>
            <li style={listItemStyles}>We may use anonymized project examples for educational purposes</li>
          </ul>

          <h4 style={subHeadingStyles}>Third-Party Content</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Some course materials may include third-party content used under license</li>
            <li style={listItemStyles}>Students must respect third-party intellectual property rights</li>
            <li style={listItemStyles}>Proper attribution is required when using third-party resources</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Copyright Protection:</strong> Unauthorized use or distribution of our content may result in 
              immediate program termination and legal action. Please respect intellectual property rights.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      icon: '🔒',
      title: 'Privacy and Data Protection',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Information Collection</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>We collect personal information necessary for program delivery and placement services</li>
            <li style={listItemStyles}>Information includes contact details, educational background, and career preferences</li>
            <li style={listItemStyles}>Technical data may be collected to improve learning experience</li>
          </ul>

          <h4 style={subHeadingStyles}>Data Usage</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Personal information is used solely for program administration and placement assistance</li>
            <li style={listItemStyles}>We may contact you regarding program updates, job opportunities, and alumni events</li>
            <li style={listItemStyles}>Anonymous data may be used for program improvement and research</li>
          </ul>

          <h4 style={subHeadingStyles}>Data Sharing</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Your information may be shared with potential employers (with your consent)</li>
            <li style={listItemStyles}>We do not sell personal information to third parties</li>
            <li style={listItemStyles}>Partner companies receive only relevant information for job matching</li>
          </ul>

          <h4 style={subHeadingStyles}>Data Security</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>We implement industry-standard security measures to protect your data</li>
            <li style={listItemStyles}>Access to personal information is restricted to authorized personnel only</li>
            <li style={listItemStyles}>You have the right to request data modification or deletion</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Your Rights:</strong> You can request access to your data, request corrections, 
              or withdraw consent at any time. Please contact our privacy team for data-related requests.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'liability',
      icon: '⚖️',
      title: 'Limitation of Liability',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Service Disclaimer</h4>
          <p style={contentTextStyles}>
            While we strive to provide high-quality training and placement assistance, we cannot guarantee 
            specific outcomes, including job placement, salary levels, or career advancement. Success depends 
            on various factors including market conditions, individual effort, and external circumstances.
          </p>

          <h4 style={subHeadingStyles}>Program Content</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Course content is based on current industry standards and best practices</li>
            <li style={listItemStyles}>Technology trends may change, and we update content accordingly</li>
            <li style={listItemStyles}>We are not liable for technology obsolescence after program completion</li>
          </ul>

          <h4 style={subHeadingStyles}>Technical Issues</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>We are not responsible for technical issues on the student's end</li>
            <li style={listItemStyles}>Internet connectivity issues are the student's responsibility</li>
            <li style={listItemStyles}>Alternative access methods are provided for platform issues</li>
          </ul>

          <h4 style={subHeadingStyles}>Third-Party Services</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>We are not liable for third-party platform or service issues</li>
            <li style={listItemStyles}>Job placement is facilitated but not guaranteed by employer decisions</li>
            <li style={listItemStyles}>External certification exam results are beyond our control</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Maximum Liability:</strong> Our total liability is limited to the fees paid for the specific program. 
              We are not liable for indirect, consequential, or punitive damages.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'conduct',
      icon: '👥',
      title: 'Code of Conduct and Community Guidelines',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Professional Behavior</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Maintain respectful and professional communication with instructors and peers</li>
            <li style={listItemStyles}>Participate constructively in discussions and group activities</li>
            <li style={listItemStyles}>Respect diverse backgrounds, opinions, and learning paces</li>
          </ul>

          <h4 style={subHeadingStyles}>Academic Integrity</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Submit original work and properly cite external sources</li>
            <li style={listItemStyles}>Collaboration is encouraged, but plagiarism is strictly prohibited</li>
            <li style={listItemStyles}>Cheating in assessments may result in program termination</li>
          </ul>

          <h4 style={subHeadingStyles}>Prohibited Activities</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Harassment, discrimination, or inappropriate behavior</li>
            <li style={listItemStyles}>Sharing course materials outside the authorized learning environment</li>
            <li style={listItemStyles}>Disruptive behavior that interferes with others' learning</li>
            <li style={listItemStyles}>Misrepresentation of credentials or achievements</li>
          </ul>

          <h4 style={subHeadingStyles}>Disciplinary Actions</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Violations may result in warnings, suspension, or program termination</li>
            <li style={listItemStyles}>Serious violations may result in immediate termination without refund</li>
            <li style={listItemStyles}>Appeals process is available for disciplinary decisions</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Community Standards:</strong> We are committed to maintaining a positive, inclusive, 
              and productive learning environment for all participants.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'dispute',
      icon: '🤝',
      title: 'Dispute Resolution and Governing Law',
      content: (
        <div>
          <h4 style={subHeadingStyles}>Resolution Process</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>All disputes should first be addressed through direct communication with our support team</li>
            <li style={listItemStyles}>Formal complaints can be escalated to management for review</li>
            <li style={listItemStyles}>We aim to resolve disputes amicably and fairly</li>
          </ul>

          <h4 style={subHeadingStyles}>Mediation and Arbitration</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>Unresolved disputes may be subject to mediation</li>
            <li style={listItemStyles}>Binding arbitration may be required for certain disputes</li>
            <li style={listItemStyles}>Arbitration will be conducted in Hyderabad, Telangana</li>
          </ul>

          <h4 style={subHeadingStyles}>Governing Law</h4>
          <ul style={listStyles}>
            <li style={listItemStyles}>These Terms are governed by the laws of India</li>
            <li style={listItemStyles}>Disputes are subject to the jurisdiction of Hyderabad courts</li>
            <li style={listItemStyles}>Consumer protection laws apply where applicable</li>
          </ul>

          <div style={highlightBoxStyles}>
            <p style={highlightTextStyles}>
              <strong>Commitment to Resolution:</strong> We are committed to fair and transparent dispute resolution. 
              Our goal is to maintain positive relationships while protecting the interests of all parties.
            </p>
          </div>
        </div>
      )
    }
  ];

  const quickLinks = [
    { href: '#general', title: 'General Terms' },
    { href: '#training', title: 'Training Programs' },
    { href: '#placement', title: 'Job Placement' },
    { href: '#payments', title: 'Payments & Fees' },
    { href: '#cancellation', title: 'Cancellation Policy' },
    { href: '#intellectual', title: 'Intellectual Property' },
    { href: '#privacy', title: 'Privacy & Data' },
    { href: '#liability', title: 'Limitation of Liability' },
    { href: '#conduct', title: 'Code of Conduct' },
    { href: '#dispute', title: 'Dispute Resolution' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
      <Header />
      
      {/* Hero Section with Grid Background */}
      <section style={heroSectionStyles}>
        <div style={heroOverlayStyles} />
        <div style={heroDarkOverlayStyles} />
        <div style={containerStyles}>
          <motion.div 
            style={heroContentStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 style={heroTitleStyles}>Terms & Conditions</h1>
            <p style={heroDescriptionStyles}>
              Please read these terms carefully before enrolling in our training programs or using our services. 
              These terms outline your rights and responsibilities as a Datenwork student.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={contentSectionStyles}>
        <div style={contentContainerStyles}>
          {/* Effective Date Notice */}
          <motion.div 
            style={{
              background: 'linear-gradient(135deg, #ede9fe 0%, #f3f4f6 100%)',
              border: '1px solid #e5e7eb',
              borderLeft: '4px solid #4f46e5',
              borderRadius: '12px',
              padding: window.innerWidth <= 768 ? '16px' : '20px',
              marginBottom: window.innerWidth <= 768 ? '32px' : '40px',
              textAlign: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ 
              color: '#1f2937', 
              fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
              fontWeight: '600',
              margin: 0
            }}>
              📅 <strong>Effective Date:</strong> January 1, 2025 | 
              🔄 <strong>Last Updated:</strong> January 1, 2025
            </p>
          </motion.div>

          {/* Table of Contents */}
          <motion.div 
            style={tocStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 style={tocTitleStyles}>
              📋 Table of Contents
            </h2>
            <ul style={tocListStyles}>
              {quickLinks.map((link, index) => (
                <li key={index} style={tocItemStyles}>
                  <a 
                    href={link.href}
                    style={tocLinkStyles}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)';
                      e.target.style.color = '#ffffff';
                      e.target.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#4f46e5';
                      e.target.style.transform = 'translateX(0px)';
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Terms Sections */}
          <motion.div 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {termsData.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                style={sectionStyles}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
                  transform: 'translateY(-2px)'
                }}
              >
                <div 
                  style={sectionHeaderStyles}
                  onClick={() => toggleSection(section.id)}
                >
                  <h3 style={sectionTitleStyles}>
                    <span style={{ fontSize: '1.5rem' }}>{section.icon}</span>
                    {section.title}
                  </h3>
                  <span style={expandIconStyles(expandedSection === section.id)}>
                    ▼
                  </span>
                </div>
                
                <div style={sectionContentStyles(expandedSection === section.id)}>
                  {section.content}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            style={contactInfoStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 style={{ 
              fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.5rem',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#ffffff'
            }}>
              📞 Questions About These Terms?
            </h3>
            <p style={{ 
              marginBottom: '20px',
              fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
              opacity: '0.9'
            }}>
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
              gap: '16px',
              fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.9rem'
            }}>
              <div>
                <strong>📧 Email:</strong><br />
                hr@datenwork.in
              </div>
              <div>
                <strong>📱 Phone:</strong><br />
                +91 9652247047
              </div>
              <div>
                <strong>📍 Address:</strong><br />
                Hyderabad, Telangana, India
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
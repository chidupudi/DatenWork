import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';


const Card = ({ children, style, className, hover = true }) => (
  <div className={className} style={style}>
    {children}
  </div>
);

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
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      backdropFilter: 'blur(10px)'
    },
    outline: {
      background: 'transparent',
      color: '#4f46e5',
      border: '2px solid #4f46e5'
    }
  };

  return (
    <button 
      style={{...baseStyles, ...variantStyles[variant]}}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 8px 25px rgba(30, 64, 175, 0.4)';
        } else if (variant === 'outline') {
          e.target.style.background = '#4f46e5';
          e.target.style.color = '#ffffff';
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)';
        if (variant === 'primary') {
          e.target.style.boxShadow = '0 4px 15px rgba(30, 64, 175, 0.3)';
        } else if (variant === 'outline') {
          e.target.style.background = 'transparent';
          e.target.style.color = '#4f46e5';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredCulture, setHoveredCulture] = useState(null);

  // Enhanced story sections
  const storyHighlights = [
    {
      icon: '🎯',
      title: 'Our Mission',
      description: 'To democratize access to high-quality technology education and create a bridge between talented individuals and leading tech companies.',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: '🔮',
      title: 'Our Vision',
      description: 'To become the global leader in technology talent development, fostering innovation through strategic partnerships.',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: '💡',
      title: 'Our Approach',
      description: 'Combining theoretical knowledge with practical application, ensuring graduates are industry-ready professionals.',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  // Updated values with modern tech focus
  const values = [
    {
      title: 'Innovation Excellence',
      description: 'We stay ahead of technology trends, continuously updating our curriculum with cutting-edge technologies like AI/ML, Cloud Computing, and DevOps.',
      icon: '⚡',
      color: '#4f46e5'
    },
    {
      title: 'Industry Partnership',
      description: 'Strong collaborations with 50+ tech companies including startups, MNCs, and product companies ensure our training meets real market demands.',
      icon: '🤝',
      color: '#14b8a6'
    },
    {
      title: 'Practical Learning',
      description: 'Hands-on projects, live coding sessions, and real-world case studies form the core of our teaching methodology.',
      icon: '💻',
      color: '#f59e0b'
    },
    {
      title: 'Career Success',
      description: 'Our success is measured by your career growth. We provide lifetime support for alumni career advancement.',
      icon: '🚀',
      color: '#ec4899'
    }
  ];

  // Why Choose Us features
  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: '97% placement success rate with 600+ alumni in top tech companies',
      stats: '6+ Years Experience'
    },
    {
      icon: '🎓',
      title: 'Expert Faculty',
      description: 'Learn from industry professionals with years of real-world experience',
      stats: '37+ Expert Trainers'
    },
    {
      icon: '💼',
      title: 'Guaranteed Placements',
      description: 'Job guarantee with dedicated career support and interview preparation',
      stats: '30+ Hiring Partners'
    },
    {
      icon: '🔄',
      title: 'Continuous Learning',
      description: 'Access to updated content and alumni network support',
      stats: 'Lifetime Support'
    }
  ];

  // Culture points updated for modern tech industry
  const culturePoints = [
    {
      icon: '🎯',
      title: 'Student-Centric Learning',
      description: 'Personalized learning paths with AI-driven assessments and adaptive curriculum based on individual progress.'
    },
    {
      icon: '🌟',
      title: 'Industry-Grade Projects',
      description: 'Work on real client projects, open-source contributions, and build portfolio-worthy applications.'
    },
    {
      icon: '🤝',
      title: 'Mentorship Network',
      description: 'Connect with industry experts, startup founders, and senior engineers from Top-Tier companies.'
    },
    {
      icon: '🔄',
      title: 'Continuous Upskilling',
      description: 'Regular tech talks, hackathons, and access to latest tools and technologies throughout your career.'
    },
    {
      icon: '🌍',
      title: 'Global Opportunities',
      description: 'Placement assistance for international opportunities and remote work with global companies.'
    },
    {
      icon: '💡',
      title: 'Innovation Labs',
      description: 'Access to cutting-edge labs with latest hardware, cloud credits, and collaboration spaces.'
    }
  ];

  // Enhanced achievements data
  const achievements = [
    {
      number: '600+',
      label: 'Successful Placements',
      description: 'Alumni working in top companies worldwide',
      icon: '👥'
    },
    {
      number: '250+',
      label: 'Industry Partners',
      description: 'Including FAANG, unicorns, and emerging startups',
      icon: '🏢'
    },
    {
      number: '97%',
      label: 'Placement Success Rate',
      description: 'Within 6 months of course completion',
      icon: '📈'
    },
    {
      number: '₹8.5 LPA',
      label: 'Average Package',
      description: 'Highest recorded: ₹24 LPA',
      icon: '💰'
    }
  ];

  // Container animations
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

  // Hero section styles with grid background (same as other pages)
  const aboutHeroStyles = {
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
    maxWidth: '900px',
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

  // Section styles
  const sectionStyles = {
    padding: window.innerWidth <= 768 ? '60px 0' : '80px 0',
    position: 'relative'
  };

  const sectionWithBgStyles = {
    ...sectionStyles,
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
  };

  // Story section styles
  const storyGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '24px' : '32px',
    marginBottom: '60px'
  };

  const storyCardStyles = {
    background: 'white',
    padding: window.innerWidth <= 768 ? '32px 24px' : '40px',
    borderRadius: '20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    height: '100%'
  };

  const storyIconContainerStyles = (gradient) => ({
    width: window.innerWidth <= 768 ? '60px' : '80px',
    height: window.innerWidth <= 768 ? '60px' : '80px',
    background: gradient,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
  });

  const storyTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.25rem' : '1.5rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '16px'
  };

  const storyDescStyles = {
    color: '#4a5568',
    lineHeight: '1.7',
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem'
  };

  // Values section styles
  const valuesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(4, 1fr)',
    gap: window.innerWidth <= 768 ? '20px' : '24px'
  };

  const valueCardStyles = (isHovered, color) => ({
    textAlign: 'center',
    padding: window.innerWidth <= 768 ? '24px 20px' : '32px 24px',
    background: isHovered ? `linear-gradient(135deg, ${color}15 0%, ${color}08 100%)` : 'white',
    borderRadius: '20px',
    boxShadow: isHovered 
      ? `0 15px 35px ${color}25` 
      : '0 8px 25px rgba(0, 0, 0, 0.08)',
    border: isHovered ? `2px solid ${color}` : '2px solid #e2e8f0',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    cursor: 'pointer',
    height: '100%'
  });

  const valueIconStyles = (color) => ({
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
    marginBottom: '20px',
    display: 'block',
    color: color
  });

  const valueTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
    marginBottom: '12px',
    color: '#1a202c',
    fontWeight: '600'
  };

  const valueDescriptionStyles = {
    color: '#4a5568',
    lineHeight: '1.6',
    fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.95rem'
  };

  // Why Choose Us styles
  const whyChooseGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(2, 1fr)',
    gap: window.innerWidth <= 768 ? '20px' : '32px'
  };

  const whyChooseCardStyles = {
    background: 'white',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    borderRadius: '16px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
  };

  const whyChooseIconStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    borderRadius: '12px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: window.innerWidth <= 768 ? '50px' : '60px',
    height: window.innerWidth <= 768 ? '50px' : '60px'
  };

  // Culture section styles
  const cultureGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '20px' : '24px'
  };

  const cultureItemStyles = (isHovered) => ({
    background: 'white',
    padding: window.innerWidth <= 768 ? '24px' : '32px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: isHovered 
      ? '0 12px 25px rgba(0, 0, 0, 0.1)' 
      : '0 4px 15px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    cursor: 'pointer'
  });

  const cultureIconStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
    marginBottom: '20px',
    display: 'block'
  };

  const cultureItemTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '12px'
  };

  const cultureItemDescStyles = {
    color: '#4a5568',
    lineHeight: '1.6',
    fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.95rem'
  };

  // Achievements section styles
  const achievementsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? 'repeat(2, 1fr)' 
      : 'repeat(4, 1fr)',
    gap: window.innerWidth <= 768 ? '20px' : '32px',
    padding: window.innerWidth <= 768 ? '32px 20px' : '48px 32px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)',
    borderRadius: '20px',
    border: '1px solid #e9ecef'
  };

  const achievementItemStyles = {
    textAlign: 'center'
  };

  const achievementIconStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '12px',
    display: 'block'
  };

  const achievementNumberStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    fontWeight: '800',
    marginBottom: '8px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const achievementLabelStyles = {
    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
    color: '#1a202c',
    fontWeight: '600',
    marginBottom: '4px'
  };

  const achievementDescStyles = {
    fontSize: window.innerWidth <= 768 ? '0.75rem' : '0.875rem',
    color: '#6b7280'
  };

  // Header styles
  const sectionHeaderStyles = {
    textAlign: 'center',
    marginBottom: window.innerWidth <= 768 ? '40px' : '60px'
  };

  const sectionTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.75rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const sectionSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem',
    color: '#4a5568',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)' }}>
      <Header />
      
      {/* Hero Section with Grid Background */}
      <section style={aboutHeroStyles}>
        <div style={heroOverlayStyles} />
        <div style={heroDarkOverlayStyles} />
        <div style={containerStyles}>
          <motion.div 
            style={heroContentStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 style={heroTitleStyles}>Transforming Careers Through Technology Excellence</h1>
            <p style={heroDescriptionStyles}>
              We are one of the India's leading technology training and placement company, dedicated to bridging the gap between talent and opportunity. 
              With over 6 years of experience and 600+ successful placements, we've revolutionized tech education with industry-aligned curriculum and guaranteed career outcomes.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="secondary" size="large">
                Start Your Journey
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Highlights Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <motion.div 
            ref={ref}
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 style={sectionTitleStyles}>Our Foundation</h2>
            <p style={sectionSubtitleStyles}>
              Built on strong principles and driven by innovation, we create pathways to success in the ever-evolving tech landscape
            </p>
          </motion.div>
          
          <motion.div 
            style={storyGridStyles}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {storyHighlights.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card style={storyCardStyles} hover={false}>
                  <div style={storyIconContainerStyles(item.gradient)}>
                    <span style={{ color: 'white' }}>{item.icon}</span>
                  </div>
                  <h3 style={storyTitleStyles}>{item.title}</h3>
                  <p style={storyDescStyles}>{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Innovation Showcase Section */}
      <section style={sectionWithBgStyles}>
        <div style={containerStyles}>
          <motion.div 
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyles}>Innovation in Action</h2>
            <p style={sectionSubtitleStyles}>
              Pushing boundaries in technology education through cutting-edge initiatives and real-world impact
            </p>
          </motion.div>
          
          {/* Innovation Labs */}
          <motion.div 
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
              gap: window.innerWidth <= 768 ? '24px' : '32px',
              marginBottom: '60px'
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'AI-Powered Learning Paths',
                description: 'Our proprietary AI system analyzes learning patterns to create personalized curricula that adapt in real-time to student progress.',
                icon: '🤖',
                gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                metrics: ['85% faster learning', '40% better retention', '95% satisfaction']
              },
              {
                title: 'Industry-Live Projects',
                description: 'Students work on actual client projects from day one, solving real business challenges while learning.',
                icon: '🚀',
                gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                metrics: ['200+ live projects', '50+ industry partners', '100% practical exposure']
              }
            ].map((lab, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: window.innerWidth <= 768 ? '32px 24px' : '40px',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-50%',
                  width: '200px',
                  height: '200px',
                  background: lab.gradient,
                  borderRadius: '50%',
                  opacity: 0.1,
                  filter: 'blur(40px)'
                }} />
                
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px',
                    display: 'inline-block',
                    padding: '12px',
                    background: lab.gradient,
                    borderRadius: '16px'
                  }}>
                    <span style={{ color: 'white' }}>{lab.icon}</span>
                  </div>
                  
                  <h3 style={{
                    fontSize: window.innerWidth <= 768 ? '1.3rem' : '1.5rem',
                    fontWeight: '600',
                    color: '#1a202c',
                    marginBottom: '16px'
                  }}>
                    {lab.title}
                  </h3>
                  
                  <p style={{
                    color: '#4a5568',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                    fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem'
                  }}>
                    {lab.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    {lab.metrics.map((metric, i) => (
                      <span key={i} style={{
                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                        color: '#0369a1',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        border: '1px solid #bae6fd'
                      }}>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Trends Radar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              borderRadius: '24px',
              padding: window.innerWidth <= 768 ? '32px 24px' : '48px',
              color: 'white',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="tech-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23tech-grid)"/></svg>')`,
              opacity: 0.3
            }} />
            
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
              <h3 style={{
                fontSize: window.innerWidth <= 768 ? '1.5rem' : '2rem',
                fontWeight: '700',
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Future Skills Radar
              </h3>
              
              <p style={{
                fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem',
                marginBottom: '32px',
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '600px',
                margin: '0 auto 32px auto'
              }}>
                We're already preparing students for technologies that haven't hit mainstream yet
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth <= 768 
                  ? 'repeat(2, 1fr)' 
                  : 'repeat(4, 1fr)',
                gap: window.innerWidth <= 768 ? '16px' : '24px'
              }}>
                {[
                  { tech: 'Quantum Computing', trend: 'Emerging', icon: '⚛️' },
                  { tech: 'Edge AI', trend: 'Growing', icon: '🧠' },
                  { tech: 'Web3 & DeFi', trend: 'Expanding', icon: '🔗' },
                  { tech: 'AR/VR Dev', trend: 'Mainstream', icon: '🥽' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      padding: window.innerWidth <= 768 ? '16px' : '20px',
                      textAlign: 'center',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{item.icon}</div>
                    <div style={{ 
                      fontWeight: '600', 
                      marginBottom: '4px',
                      fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem'
                    }}>
                      {item.tech}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: 'rgba(255,255,255,0.7)' 
                    }}>
                      {item.trend}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Digital Impact Ecosystem - Enhanced */}
      <section style={sectionWithBgStyles}>
        <div style={containerStyles}>
          <motion.div 
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyles}>Our Digital Ecosystem</h2>
            <p style={sectionSubtitleStyles}>
              Beyond training - we're building a comprehensive ecosystem for tech talent development
            </p>
          </motion.div>
          
          {/* Ecosystem Visualization - Enhanced */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '32px',
            padding: window.innerWidth <= 768 ? '40px 24px' : '60px 48px',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            {/* Enhanced Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `
                radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.05) 0%, transparent 50%),
                url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="ecosystem-dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(79,70,229,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23ecosystem-dots)"/></svg>')
              `,
              zIndex: 1
            }} />

            {/* Central Hub - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: window.innerWidth <= 768 ? '100px' : '140px',
                height: window.innerWidth <= 768 ? '100px' : '140px',
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #14b8a6 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
                fontWeight: '700',
                boxShadow: '0 20px 40px rgba(79, 70, 229, 0.4)',
                zIndex: 20,
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '4px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              🎯
            </motion.div>

            {/* Connection Lines - Enhanced */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              zIndex: 2
            }}>
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: window.innerWidth <= 768 ? '120px' : '180px',
                    height: '2px',
                    background: `linear-gradient(90deg, rgba(79, 70, 229, 0.3) 0%, rgba(79, 70, 229, 0.8) 50%, rgba(79, 70, 229, 0.3) 100%)`,
                    transformOrigin: 'left center',
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                    borderRadius: '2px'
                  }}
                />
              ))}
            </div>

            {/* Ecosystem Components - Enhanced */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
              gap: window.innerWidth <= 768 ? '24px' : '40px',
              marginTop: window.innerWidth <= 768 ? '80px' : '120px',
              position: 'relative',
              zIndex: 10
            }}>
              {[
                { 
                  title: 'Smart Learning Platform', 
                  icon: '🤖', 
                  desc: 'AI-powered adaptive learning',
                  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  features: ['Personalized paths', 'Real-time feedback', 'Progress tracking']
                },
                { 
                  title: 'Industry Connect Hub', 
                  icon: '🌐', 
                  desc: 'Direct company partnerships',
                  gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  features: ['Live projects', 'Industry mentors', 'Job pipeline']
                },
                { 
                  title: 'Career Growth Engine', 
                  icon: '🚀', 
                  desc: 'Continuous skill development',
                  gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  features: ['Skill assessment', 'Career roadmaps', 'Goal tracking']
                },
                { 
                  title: 'Innovation Labs', 
                  icon: '⚗️', 
                  desc: 'Research & development',
                  gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                  features: ['Latest tech', 'R&D projects', 'Innovation space']
                },
                { 
                  title: 'Alumni Network', 
                  icon: '👥', 
                  desc: 'Lifetime community support',
                  gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  features: ['Peer network', 'Knowledge sharing', 'Career support']
                },
                { 
                  title: 'Global Opportunities', 
                  icon: '🌍', 
                  desc: 'International placements',
                  gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                  features: ['Global jobs', 'Remote work', 'International exposure']
                }
              ].map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: window.innerWidth <= 768 ? '24px' : '32px',
                    textAlign: 'center',
                    border: '1px solid #f1f5f9',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  {/* Enhanced Background Effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-50%',
                    width: '150px',
                    height: '150px',
                    background: component.gradient,
                    borderRadius: '50%',
                    opacity: 0.1,
                    filter: 'blur(40px)',
                    zIndex: 1
                  }} />

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 5 }}>
                    {/* Enhanced Icon */}
                    <div style={{
                      width: window.innerWidth <= 768 ? '60px' : '80px',
                      height: window.innerWidth <= 768 ? '60px' : '80px',
                      background: component.gradient,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                      fontSize: window.innerWidth <= 768 ? '1.8rem' : '2.5rem',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                      transform: 'rotate(-5deg)',
                      transition: 'all 0.3s ease'
                    }}>
                      <span style={{ 
                        color: 'white',
                        transform: 'rotate(5deg)'
                      }}>
                        {component.icon}
                      </span>
                    </div>

                    <h4 style={{
                      fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      marginBottom: '12px',
                      background: component.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      {component.title}
                    </h4>

                    <p style={{
                      fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.95rem',
                      color: '#64748b',
                      lineHeight: '1.5',
                      marginBottom: '16px',
                      fontWeight: '500'
                    }}>
                      {component.desc}
                    </p>

                    {/* Feature Tags */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      justifyContent: 'center'
                    }}>
                      {component.features.map((feature, i) => (
                        <span key={i} style={{
                          background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                          color: '#475569',
                          padding: '4px 8px',
                          borderRadius: '8px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          border: '1px solid #cbd5e1'
                        }}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  y: [0, -20, 0],
                  x: [0, 10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
                  borderRadius: '50%',
                  top: `${20 + index * 10}%`,
                  left: `${15 + index * 12}%`,
                  zIndex: 3
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <motion.div 
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyles}>Our Core Values</h2>
            <p style={sectionSubtitleStyles}>
              The principles that guide our approach to technology education and career development
            </p>
          </motion.div>
          
          <motion.div 
            style={valuesGridStyles}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <Card 
                  style={valueCardStyles(hoveredValue === index, value.color)}
                  hover={false}
                >
                  <div style={valueIconStyles(value.color)}>{value.icon}</div>
                  <h3 style={valueTitleStyles}>{value.title}</h3>
                  <p style={valueDescriptionStyles}>{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={sectionWithBgStyles}>
        <div style={containerStyles}>
          <motion.div 
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyles}>Why Choose Datenwork?</h2>
            <p style={sectionSubtitleStyles}>
              Discover what makes us the preferred choice for technology training and career transformation
            </p>
          </motion.div>
          
          <motion.div 
            style={whyChooseGridStyles}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div style={whyChooseCardStyles}>
                  <div style={whyChooseIconStyles}>
                    <span style={{ color: 'white' }}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.25rem', 
                      fontWeight: '600', 
                      color: '#1a202c', 
                      marginBottom: '8px' 
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      color: '#4a5568', 
                      lineHeight: '1.6', 
                      marginBottom: '8px',
                      fontSize: window.innerWidth <= 768 ? '0.85rem' : '0.95rem'
                    }}>
                      {item.description}
                    </p>
                    <div style={{ 
                      background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontWeight: '600',
                      fontSize: '0.875rem'
                    }}>
                      {item.stats}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <motion.div 
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyles}>Our Learning Culture</h2>
            <p style={sectionSubtitleStyles}>
              Creating an environment that fosters innovation, collaboration, and continuous growth
            </p>
          </motion.div>
          
          <motion.div 
            style={cultureGridStyles}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {culturePoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCulture(index)}
                onMouseLeave={() => setHoveredCulture(null)}
              >
                <div style={cultureItemStyles(hoveredCulture === index)}>
                  <div style={cultureIconStyles}>{point.icon}</div>
                  <h4 style={cultureItemTitleStyles}>{point.title}</h4>
                  <p style={cultureItemDescStyles}>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={sectionWithBgStyles}>
        <div style={containerStyles}>
          <motion.div 
            style={sectionHeaderStyles}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 style={sectionTitleStyles}>Our Impact</h2>
            <p style={sectionSubtitleStyles}>
              Measurable results that reflect our commitment to excellence and student success
            </p>
          </motion.div>
          
          <motion.div 
            style={achievementsGridStyles}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                style={achievementItemStyles}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div style={achievementIconStyles}>{achievement.icon}</div>
                <div style={achievementNumberStyles}>{achievement.number}</div>
                <div style={achievementLabelStyles}>{achievement.label}</div>
                <div style={achievementDescStyles}>{achievement.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
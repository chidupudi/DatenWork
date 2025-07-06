import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredCulture, setHoveredCulture] = useState(null);
  const [hoveredSpecialization, setHoveredSpecialization] = useState(null);

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
      description: 'Strong collaborations with 250+ tech companies including startups, MNCs, and product companies ensure our training meets real market demands.',
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

  // Technology specializations (inspired by top tech training institutes in India)
  const specializations = [
    {
      category: 'Full Stack Development',
      icon: '🌐',
      technologies: ['React.js', 'Node.js', 'Python Django', 'MEAN/MERN Stack', 'Next.js', 'TypeScript'],
      placements: '95% placement rate',
      avgPackage: '₹8-15 LPA'
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      placements: '92% placement rate',
      avgPackage: '₹12-20 LPA'
    },
    {
      category: 'Data Science & AI',
      icon: '🤖',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Power BI'],
      placements: '88% placement rate',
      avgPackage: '₹10-18 LPA'
    },
    {
      category: 'Cybersecurity',
      icon: '🛡️',
      technologies: ['Ethical Hacking', 'Network Security', 'CISSP', 'CEH', 'Penetration Testing', 'SOC'],
      placements: '90% placement rate',
      avgPackage: '₹9-16 LPA'
    },
    {
      category: 'Mobile Development',
      icon: '📱',
      technologies: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Xamarin', 'PWA'],
      placements: '85% placement rate',
      avgPackage: '₹7-14 LPA'
    },
    {
      category: 'Blockchain & Web3',
      icon: '🔗',
      technologies: ['Solidity', 'Ethereum', 'Smart Contracts', 'DeFi', 'NFT Development', 'Web3.js'],
      placements: '87% placement rate',
      avgPackage: '₹15-25 LPA'
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
      description: 'Connect with industry experts, startup founders, and senior engineers from FAANG companies.'
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
      description: 'Alumni working in top companies worldwide'
    },
    {
      number: '50+',
      label: 'Industry Placements',
      description: 'Including FAANG, unicorns, and emerging startups'
    },
    {
      number: '97%',
      label: 'Placement Success Rate',
      description: 'Within 6 months of course completion'
    },
    {
      number: '₹16 LPA',
      label: 'Average Package',
      description: 'Highest recorded: ₹45 LPA'
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

  // Page wrapper styles (similar to home page)
  const aboutPageStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)',
    position: 'relative',
    overflow: 'hidden'
  };

  // Global background overlay (from home page)
  const globalBackgroundOverlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 60%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="about-pattern" width="30" height="26" patternUnits="userSpaceOnUse"><polygon points="15,2 28,24 2,24" fill="none" stroke="rgba(99,102,241,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23about-pattern)"/></svg>')
    `
  };

  // Floating orbs (from home page)
  const floatingOrb1Styles = {
    position: 'fixed',
    top: '10%',
    right: '15%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: 'floatOrb1 20s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 0
  };

  const floatingOrb2Styles = {
    position: 'fixed',
    bottom: '20%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(20, 184, 166, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'floatOrb2 25s ease-in-out infinite',
    pointerEvents: 'none',
    zIndex: 0
  };

  // Animation keyframes
  const animationStyles = `
    @keyframes floatOrb1 {
      0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.8;
      }
      25% { 
        transform: translate(-50px, 30px) scale(1.1);
        opacity: 0.6;
      }
      50% { 
        transform: translate(30px, -20px) scale(0.9);
        opacity: 0.8;
      }
      75% { 
        transform: translate(-20px, -40px) scale(1.05);
        opacity: 0.7;
      }
    }

    @keyframes floatOrb2 {
      0%, 100% { 
        transform: translate(0, 0) scale(1);
        opacity: 0.7;
      }
      33% { 
        transform: translate(40px, -30px) scale(1.15);
        opacity: 0.5;
      }
      66% { 
        transform: translate(-30px, 40px) scale(0.95);
        opacity: 0.7;
      }
    }
  `;

  // Hero section styles (modernized)
  const aboutHeroStyles = {
    padding: '120px 0 80px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f766e 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };

  const heroOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')
    `,
    zIndex: 0
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px',
    position: 'relative',
    zIndex: 1
  };

  const heroContentStyles = {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
    marginBottom: '24px',
    color: 'white',
    fontWeight: '700',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Poppins', sans-serif",
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const heroDescriptionStyles = {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.9)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '40px'
  };

  // Main content wrapper
  const mainContentStyles = {
    flex: 1,
    width: '100%',
    position: 'relative',
    zIndex: 1
  };

  // Section styles
  const sectionStyles = {
    padding: '80px 0',
    position: 'relative',
    zIndex: 1
  };

  const sectionWithBgStyles = {
    ...sectionStyles,
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
  };

  // Story section styles
  const storyGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
    gap: '40px',
    marginBottom: '60px'
  };

  const storyCardStyles = {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
    border: '1px solid #e2e8f0',
    height: '100%'
  };

  const storyIconContainerStyles = (gradient) => ({
    width: '80px',
    height: '80px',
    background: gradient,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    fontSize: '2rem',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
  });

  const storyTitleStyles = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '16px'
  };

  const storyDescStyles = {
    color: '#4a5568',
    lineHeight: '1.7'
  };

  // Values section styles
  const valuesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(4, 1fr)',
    gap: '30px'
  };

  const valueCardStyles = (isHovered, color) => ({
    textAlign: 'center',
    padding: '40px 30px',
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
    fontSize: '3rem',
    marginBottom: '24px',
    display: 'block',
    color: color
  });

  const valueTitleStyles = {
    fontSize: '1.3rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600'
  };

  const valueDescriptionStyles = {
    color: '#4a5568',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  };

  // Specializations section styles
  const specializationsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: '30px'
  };

  const specializationCardStyles = (isHovered) => ({
    background: 'white',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: isHovered 
      ? '0 15px 30px rgba(0, 0, 0, 0.12)' 
      : '0 8px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  });

  const specializationHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '20px'
  };

  const specializationIconStyles = {
    fontSize: '2.5rem',
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    borderRadius: '12px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    height: '60px'
  };

  const specializationTitleStyles = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1a202c',
    margin: 0
  };

  const techTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '20px',
    flex: 1
  };

  const techTagStyles = {
    background: '#f3f4f6',
    color: '#4b5563',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.75rem',
    fontWeight: '500',
    border: '1px solid #e5e7eb'
  };

  const specializationStatsStyles = {
    marginTop: 'auto'
  };

  const statRowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '0.875rem'
  };

  const statLabelStyles = {
    color: '#6b7280',
    fontWeight: '500'
  };

  const statValueStyles = {
    color: '#059669',
    fontWeight: '600'
  };

  // Culture section styles
  const cultureGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: '30px'
  };

  const cultureItemStyles = (isHovered) => ({
    background: 'white',
    padding: '30px',
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
    fontSize: '3rem',
    marginBottom: '20px',
    display: 'block'
  };

  const cultureItemTitleStyles = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '12px'
  };

  const cultureItemDescStyles = {
    color: '#4a5568',
    lineHeight: '1.6',
    fontSize: '0.95rem'
  };

  // Achievements section styles
  const achievementsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? 'repeat(2, 1fr)' 
      : 'repeat(4, 1fr)',
    gap: '30px',
    padding: '60px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)',
    borderRadius: '20px',
    border: '1px solid #e9ecef'
  };

  const achievementItemStyles = {
    textAlign: 'center'
  };

  const achievementNumberStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3rem',
    fontWeight: '800',
    marginBottom: '8px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const achievementLabelStyles = {
    fontSize: '1rem',
    color: '#1a202c',
    fontWeight: '600',
    marginBottom: '4px'
  };

  const achievementDescStyles = {
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  // Header styles
  const sectionHeaderStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const sectionTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const sectionSubtitleStyles = {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  // CTA section styles
  const ctaSectionStyles = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
  };

  const ctaOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M 0 7 L 3 7 L 3 5 L 12 5 L 12 10 L 15 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')`,
    opacity: 0.3,
    zIndex: 0
  };

  const ctaContentStyles = {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1
  };

  const ctaTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2rem' : '2.5rem',
    marginBottom: '24px',
    color: 'white',
    fontWeight: '700',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Poppins', sans-serif"
  };

  const ctaTextStyles = {
    fontSize: '1.2rem',
    marginBottom: '40px',
    color: 'rgba(255,255,255,0.9)',
    maxWidth: '600px',
    margin: '0 auto 40px',
    lineHeight: '1.6'
  };

  const ctaActionsStyles = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  return (
    <>
      {/* Inject animation keyframes */}
      <style>{animationStyles}</style>
      
      <div style={aboutPageStyles}>
        {/* Global background elements */}
        <div style={globalBackgroundOverlay} />
        <div style={floatingOrb1Styles} />
        <div style={floatingOrb2Styles} />
        
        <Header />
        
        <main style={mainContentStyles}>
          {/* Hero Section */}
          <section style={aboutHeroStyles}>
            <div style={heroOverlayStyles} />
            <div style={containerStyles}>
              <motion.div 
                style={heroContentStyles}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 style={heroTitleStyles}>Transforming Careers Through Technology Excellence</h1>
                <p style={heroDescriptionStyles}>
                  We are India's leading technology training and placement company, dedicated to bridging the gap between talent and opportunity. 
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

          {/* Values Section */}
          <section style={sectionWithBgStyles}>
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

          {/* Technology Specializations Section */}
          <section style={sectionStyles}>
            <div style={containerStyles}>
              <motion.div 
                style={sectionHeaderStyles}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 style={sectionTitleStyles}>Technology Specializations</h2>
                <p style={sectionSubtitleStyles}>
                  Comprehensive training programs aligned with industry demands and future technology trends
                </p>
              </motion.div>
              
              <motion.div 
                style={specializationsGridStyles}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {specializations.map((spec, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredSpecialization(index)}
                    onMouseLeave={() => setHoveredSpecialization(null)}
                  >
                    <Card 
                      style={specializationCardStyles(hoveredSpecialization === index)}
                      hover={false}
                    >
                      <div style={specializationHeaderStyles}>
                        <div style={specializationIconStyles}>
                          <span style={{ color: 'white' }}>{spec.icon}</span>
                        </div>
                        <h3 style={specializationTitleStyles}>{spec.category}</h3>
                      </div>
                      
                      <div style={techTagsStyles}>
                        {spec.technologies.map((tech, i) => (
                          <span key={i} style={techTagStyles}>{tech}</span>
                        ))}
                      </div>
                      
                      <div style={specializationStatsStyles}>
                        <div style={statRowStyles}>
                          <span style={statLabelStyles}>Placement Rate:</span>
                          <span style={statValueStyles}>{spec.placements}</span>
                        </div>
                        <div style={statRowStyles}>
                          <span style={statLabelStyles}>Avg Package:</span>
                          <span style={statValueStyles}>{spec.avgPackage}</span>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Culture Section */}
          <section style={sectionWithBgStyles}>
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
          <section style={sectionStyles}>
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
                  >
                    <div style={achievementNumberStyles}>{achievement.number}</div>
                    <div style={achievementLabelStyles}>{achievement.label}</div>
                    <div style={achievementDescStyles}>{achievement.description}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section style={ctaSectionStyles}>
            <div style={ctaOverlayStyles} />
            <div style={containerStyles}>
              <motion.div 
                style={ctaContentStyles}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 style={ctaTitleStyles}>Ready to Transform Your Career?</h2>
                <p style={ctaTextStyles}>
                  Join thousands of successful professionals who transformed their careers with Datenwork. 
                  Start your journey towards a rewarding tech career today.
                </p>
                <div style={ctaActionsStyles}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="secondary" size="large">
                      Explore Courses
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="large" 
                      style={{ borderColor: 'white', color: 'white' }}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
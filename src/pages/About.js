import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const About = () => {
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  // Enhanced team data with 6 members
  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      experience: '15+ years in tech recruitment and education',
      specialties: ['Leadership', 'Strategy', 'Business Development', 'EdTech Innovation']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: '👨‍💻',
      experience: '12+ years in software engineering and architecture',
      specialties: ['Full Stack Development', 'Cloud Architecture', 'DevOps', 'AI/ML']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Head of Training',
      image: '👩‍🏫',
      experience: '10+ years in education and curriculum development',
      specialties: ['Curriculum Design', 'Learning Analytics', 'Mentorship', 'Pedagogy']
    },
    {
      id: 4,
      name: 'David Kumar',
      role: 'Head of Placements',
      image: '👨‍💼',
      experience: '8+ years in corporate recruitment and HR',
      specialties: ['Talent Acquisition', 'Corporate Relations', 'Career Counseling', 'Industry Partnerships']
    },
    {
      id: 5,
      name: 'Priya Sharma',
      role: 'Director of Operations',
      image: '👩‍💻',
      experience: '9+ years in operations and project management',
      specialties: ['Operations Excellence', 'Quality Assurance', 'Process Optimization', 'Team Management']
    },
    {
      id: 6,
      name: 'Alex Thompson',
      role: 'Head of Technology',
      image: '👨‍🔬',
      experience: '11+ years in product development and innovation',
      specialties: ['Product Strategy', 'Technical Innovation', 'Platform Development', 'User Experience']
    }
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from training programs to placement services.',
      icon: '⭐'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate our methods to stay ahead of industry trends and technologies.',
      icon: '💡'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our interactions.',
      icon: '🤝'
    },
    {
      title: 'Growth',
      description: 'We are committed to the continuous growth and development of our students and partners.',
      icon: '📈'
    }
  ];

  // New data arrays
  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Started with a vision to bridge the gap between tech education and industry needs.',
      stats: ['10 Students', '1 Course', '2 Founders']
    },
    {
      year: '2020',
      title: 'First 100 Placements',
      description: 'Achieved our first major milestone with 100% placement rate in top companies.',
      stats: ['100 Placements', '95% Success Rate', '5 Courses']
    },
    {
      year: '2021',
      title: 'Corporate Partnerships',
      description: 'Established partnerships with 50+ leading tech companies for direct placements.',
      stats: ['50+ Partners', '500 Students', '15 Courses']
    },
    {
      year: '2022',
      title: 'National Expansion',
      description: 'Expanded operations to multiple cities with remote learning capabilities.',
      stats: ['5 Cities', '1000+ Alumni', '25 Courses']
    },
    {
      year: '2023',
      title: 'Industry Recognition',
      description: 'Received "Best Tech Training Institute" award and achieved unicorn valuation.',
      stats: ['10 Awards', '2500+ Graduates', 'Unicorn Status']
    },
    {
      year: '2024',
      title: 'Global Reach',
      description: 'Launched international programs and AI-powered learning platform.',
      stats: ['Global Presence', '5000+ Students', 'AI Platform']
    }
  ];

  const culturePoints = [
    {
      icon: '🎯',
      title: 'Student-Centric Approach',
      description: 'Every decision we make prioritizes student success and career advancement.'
    },
    {
      icon: '🤝',
      title: 'Industry Collaboration',
      description: 'Close partnerships with tech companies ensure our curriculum stays relevant.'
    },
    {
      icon: '💡',
      title: 'Innovation in Learning',
      description: 'We continuously evolve our teaching methods using latest educational technology.'
    },
    {
      icon: '🌟',
      title: 'Excellence Standards',
      description: 'We maintain the highest quality standards in instruction and placement services.'
    },
    {
      icon: '🔄',
      title: 'Continuous Improvement',
      description: 'Regular feedback loops help us enhance our programs and services constantly.'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Our training prepares students for both local and international opportunities.'
    }
  ];

  const awards = [
    {
      icon: '🏆',
      title: 'Best Tech Training Institute 2023',
      year: '2023',
      description: 'Recognized for outstanding contribution to tech education and placement services.'
    },
    {
      icon: '🥇',
      title: 'Excellence in Placement Services',
      year: '2023',
      description: 'Awarded for achieving highest placement rates in the industry.'
    },
    {
      icon: '⭐',
      title: 'Student Choice Award',
      year: '2022',
      description: 'Voted as the preferred training institute by students and alumni.'
    },
    {
      icon: '🎖️',
      title: 'Innovation in Education',
      year: '2022',
      description: 'Recognized for innovative teaching methodologies and curriculum design.'
    }
  ];

  const enhancedStoryText = [
    "Founded in 2019, Datenwork emerged from a simple yet powerful vision: to democratize access to high-quality tech education and career opportunities. Our founders, having experienced the challenges of breaking into the tech industry firsthand, were determined to create a platform that would make this journey smoother for others.",
    
    "Starting with just 10 students in our first cohort, we've grown to become one of the most trusted names in tech training and placement. Our success is measured not just in numbers, but in the success stories of our graduates who are now thriving in their dream careers at companies like Google, Amazon, Microsoft, and countless innovative startups.",
    
    "What sets us apart is our holistic approach to career transformation. We don't just teach technical skills - we mentor, guide, and support our students through every step of their journey. From the initial assessment to final placement, our dedicated team ensures that each student receives personalized attention and industry-relevant training.",
    
    "Our methodology combines theoretical knowledge with practical application, ensuring that our graduates are not just job-ready, but industry-leading professionals. We continuously update our curriculum based on industry trends and feedback from our corporate partners, maintaining our position at the forefront of tech education.",
    
    "Today, with over 5,000 successful placements, partnerships with 250+ companies, and a 97% placement rate, we continue to expand our impact. Our commitment to excellence has earned us numerous industry awards and recognition, but our greatest achievement remains the success of our students and the transformation of their careers."
  ];

  // Page wrapper styles
  const aboutPageStyles = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#ffffff'
  };

  // Hero section styles
  const aboutHeroStyles = {
    padding: '120px 0 80px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    position: 'relative',
    overflow: 'hidden'
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
    maxWidth: '800px',
    margin: '0 auto'
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
    marginBottom: '24px',
    color: 'white',
    fontWeight: '700',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Poppins', sans-serif"
  };

  const heroDescriptionStyles = {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    color: 'rgba(255,255,255,0.9)',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  };

  // Story section styles
  const storySectionStyles = {
    padding: '80px 0',
    background: '#ffffff'
  };

  const storyGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px',
    alignItems: 'center'
  };

  const storyContentStyles = {
    order: window.innerWidth <= 768 ? 1 : 0
  };

  const storyTitleStyles = {
    fontSize: '2.5rem',
    marginBottom: '24px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const storyTextStyles = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    color: '#4a5568'
  };

  const storyVisualStyles = {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    height: '400px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '4rem',
    order: window.innerWidth <= 768 ? 0 : 1
  };

  // Mission & Vision Section Styles
  const missionVisionSectionStyles = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)'
  };

  const missionVisionGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
    gap: '40px'
  };

  const missionCardStyles = {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease'
  };

  const visionCardStyles = {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease'
  };

  const missionIconStyles = {
    fontSize: '4rem',
    marginBottom: '24px',
    display: 'block'
  };

  const visionIconStyles = {
    fontSize: '4rem',
    marginBottom: '24px',
    display: 'block'
  };

  const missionTitleStyles = {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '20px'
  };

  const visionTitleStyles = {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '20px'
  };

  const missionTextStyles = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#4a5568'
  };

  const visionTextStyles = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#4a5568'
  };

  // Milestones Section Styles
  const milestonesSectionStyles = {
    padding: '80px 0',
    background: '#ffffff'
  };

  const milestonesHeaderStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const milestonesTitleStyles = {
    fontSize: '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const milestonesSubtitleStyles = {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const milestonesTimelineStyles = {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative'
  };

  const milestoneItemStyles = {
    display: 'flex',
    marginBottom: '40px',
    alignItems: 'flex-start',
    gap: '30px',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row'
  };

  const milestoneYearStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '1.1rem',
    minWidth: '100px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
  };

  const milestoneContentStyles = {
    flex: 1,
    background: '#f9fafb',
    padding: '24px',
    borderRadius: '12px',
    border: '1px solid #e2e8f0'
  };

  const milestoneEventTitleStyles = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '8px'
  };

  const milestoneEventDescStyles = {
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '16px'
  };

  const milestoneStatsStyles = {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  };

  const milestoneStatStyles = {
    background: '#667eea',
    color: 'white',
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  // Values section styles
  const valuesSectionStyles = {
    padding: '80px 0',
    background: '#f7fafc'
  };

  const valuesHeaderStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const valuesTitleStyles = {
    fontSize: '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const valuesSubtitleStyles = {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const valuesGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px'
  };

  const valueCardStyles = (isHovered) => ({
    textAlign: 'center',
    padding: '40px 20px',
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: isHovered 
      ? '0 8px 25px rgba(0, 0, 0, 0.15)' 
      : '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
    cursor: 'pointer'
  });

  const valueIconStyles = {
    fontSize: '3rem',
    marginBottom: '20px',
    display: 'block'
  };

  const valueTitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600'
  };

  const valueDescriptionStyles = {
    color: '#4a5568',
    lineHeight: '1.6'
  };

  // Team section styles
  const teamSectionStyles = {
    padding: '80px 0',
    background: '#ffffff'
  };

  const teamHeaderStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const teamTitleStyles = {
    fontSize: '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const teamSubtitleStyles = {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const teamGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const teamCardStyles = (isHovered) => ({
    textAlign: 'center',
    padding: '40px 30px',
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: isHovered 
      ? '0 8px 25px rgba(0, 0, 0, 0.15)' 
      : '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
    cursor: 'pointer'
  });

  const teamImageStyles = {
    fontSize: '4rem',
    marginBottom: '20px',
    display: 'block'
  };

  const teamNameStyles = {
    fontSize: '1.5rem',
    marginBottom: '8px',
    color: '#1a202c',
    fontWeight: '600'
  };

  const teamRoleStyles = {
    fontSize: '1.1rem',
    marginBottom: '16px',
    color: '#667eea',
    fontWeight: '600'
  };

  const teamExperienceStyles = {
    marginBottom: '20px',
    color: '#4a5568'
  };

  const specialtiesStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center'
  };

  const specialtyTagStyles = {
    background: '#e6fffa',
    color: '#00b5a5',
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500'
  };

  // Culture Section Styles
  const cultureSectionStyles = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
  };

  const cultureHeaderStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const cultureTitleStyles = {
    fontSize: '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const cultureSubtitleStyles = {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const cultureGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : window.innerWidth <= 1024 
      ? 'repeat(2, 1fr)' 
      : 'repeat(3, 1fr)',
    gap: '30px'
  };

  const cultureItemStyles = {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease'
  };

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
    lineHeight: '1.6'
  };

  // Recognition Section Styles
  const recognitionSectionStyles = {
    padding: '80px 0',
    background: '#ffffff'
  };

  const recognitionHeaderStyles = {
    textAlign: 'center',
    marginBottom: '60px'
  };

  const recognitionTitleStyles = {
    fontSize: '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const recognitionSubtitleStyles = {
    fontSize: '1.1rem',
    color: '#4a5568',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const awardsGridStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 
      ? '1fr' 
      : 'repeat(2, 1fr)',
    gap: '30px',
    maxWidth: '800px',
    margin: '0 auto'
  };

  const awardCardStyles = {
    background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
    padding: '30px',
    borderRadius: '16px',
    textAlign: 'center',
    border: '1px solid #fdba74',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(245, 158, 11, 0.2)'
  };

  const awardIconStyles = {
    fontSize: '3rem',
    marginBottom: '16px',
    display: 'block'
  };

  const awardTitleStyles = {
    fontSize: '1.2rem',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '8px'
  };

  const awardYearStyles = {
    fontSize: '1rem',
    color: '#f59e0b',
    fontWeight: '600',
    marginBottom: '12px'
  };

  const awardDescStyles = {
    fontSize: '0.95rem',
    color: '#4a5568',
    lineHeight: '1.6'
  };

  // CTA section styles
  const ctaSectionStyles = {
    padding: '80px 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
    fontSize: '2.5rem',
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
    <div style={aboutPageStyles}>
      <Header />
      
      {/* Hero Section */}
      <section style={aboutHeroStyles}>
        <div style={heroOverlayStyles} />
        <div style={containerStyles}>
          <div style={heroContentStyles}>
            <h1 style={heroTitleStyles}>About Datenwork</h1>
            <p style={heroDescriptionStyles}>
              We are a leading technology training and placement company dedicated to bridging the gap between talent and opportunity. 
              With over 5 years of experience, we've successfully placed 500+ professionals in top tech companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section style={storySectionStyles}>
        <div style={containerStyles}>
          <div style={storyGridStyles}>
            <div style={storyContentStyles}>
              <h2 style={storyTitleStyles}>Our Story</h2>
              {enhancedStoryText.map((paragraph, index) => (
                <p key={index} style={storyTextStyles}>
                  {paragraph}
                </p>
              ))}
              <Button variant="primary">Learn More About Our Journey</Button>
            </div>
            <div style={storyVisualStyles}>
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={missionVisionSectionStyles}>
        <div style={containerStyles}>
          <div style={missionVisionGridStyles}>
            <div style={missionCardStyles}>
              <div style={missionIconStyles}>🎯</div>
              <h3 style={missionTitleStyles}>Our Mission</h3>
              <p style={missionTextStyles}>
                To democratize access to high-quality technology education and create a bridge between 
                talented individuals and leading tech companies. We believe that everyone deserves the 
                opportunity to build a successful career in technology, regardless of their background 
                or starting point.
              </p>
            </div>
            <div style={visionCardStyles}>
              <div style={visionIconStyles}>🔮</div>
              <h3 style={visionTitleStyles}>Our Vision</h3>
              <p style={visionTextStyles}>
                To become the global leader in technology talent development, fostering a world where 
                skilled professionals drive innovation and businesses thrive through strategic technology 
                partnerships. We envision a future where the gap between education and industry is 
                completely eliminated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section style={milestonesSectionStyles}>
        <div style={containerStyles}>
          <div style={milestonesHeaderStyles}>
            <h2 style={milestonesTitleStyles}>Our Journey & Milestones</h2>
            <p style={milestonesSubtitleStyles}>
              Key achievements that mark our growth and impact in the tech education industry
            </p>
          </div>
          <div style={milestonesTimelineStyles}>
            {milestones.map((milestone, index) => (
              <div key={index} style={milestoneItemStyles}>
                <div style={milestoneYearStyles}>{milestone.year}</div>
                <div style={milestoneContentStyles}>
                  <h4 style={milestoneEventTitleStyles}>{milestone.title}</h4>
                  <p style={milestoneEventDescStyles}>{milestone.description}</p>
                  <div style={milestoneStatsStyles}>
                    {milestone.stats?.map((stat, idx) => (
                      <span key={idx} style={milestoneStatStyles}>{stat}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={valuesSectionStyles}>
        <div style={containerStyles}>
          <div style={valuesHeaderStyles}>
            <h2 style={valuesTitleStyles}>Our Values</h2>
            <p style={valuesSubtitleStyles}>
              Our core values guide every decision we make and every relationship we build
            </p>
          </div>
          <div style={valuesGridStyles}>
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                style={valueCardStyles(hoveredValue === index)}
                hover={false}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div style={valueIconStyles}>{value.icon}</div>
                <h3 style={valueTitleStyles}>{value.title}</h3>
                <p style={valueDescriptionStyles}>{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section style={teamSectionStyles}>
        <div style={containerStyles}>
          <div style={teamHeaderStyles}>
            <h2 style={teamTitleStyles}>Meet Our Leadership Team</h2>
            <p style={teamSubtitleStyles}>
              Experienced professionals driving innovation and excellence in tech education
            </p>
          </div>
          <div style={teamGridStyles}>
            {team.map((member, index) => (
              <Card 
                key={member.id} 
                style={teamCardStyles(hoveredTeamMember === member.id)}
                hover={false}
                onMouseEnter={() => setHoveredTeamMember(member.id)}
                onMouseLeave={() => setHoveredTeamMember(null)}
              >
                <div style={teamImageStyles}>{member.image}</div>
                <h3 style={teamNameStyles}>{member.name}</h3>
                <p style={teamRoleStyles}>{member.role}</p>
                <p style={teamExperienceStyles}>{member.experience}</p>
                <div style={specialtiesStyles}>
                  {member.specialties.map((specialty, i) => (
                    <span key={i} style={specialtyTagStyles}>{specialty}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section style={cultureSectionStyles}>
        <div style={containerStyles}>
          <div style={cultureHeaderStyles}>
            <h2 style={cultureTitleStyles}>Our Culture & Approach</h2>
            <p style={cultureSubtitleStyles}>
              The principles and practices that drive our success and student satisfaction
            </p>
          </div>
          <div style={cultureGridStyles}>
            {culturePoints.map((point, index) => (
              <div key={index} style={cultureItemStyles}>
                <div style={cultureIconStyles}>{point.icon}</div>
                <h4 style={cultureItemTitleStyles}>{point.title}</h4>
                <p style={cultureItemDescStyles}>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section style={recognitionSectionStyles}>
        <div style={containerStyles}>
          <div style={recognitionHeaderStyles}>
            <h2 style={recognitionTitleStyles}>Awards & Recognition</h2>
            <p style={recognitionSubtitleStyles}>
              Industry recognition for our commitment to excellence in tech education
            </p>
          </div>
          <div style={awardsGridStyles}>
            {awards.map((award, index) => (
              <div key={index} style={awardCardStyles}>
                <div style={awardIconStyles}>{award.icon}</div>
                <h4 style={awardTitleStyles}>{award.title}</h4>
                <p style={awardYearStyles}>{award.year}</p>
                <p style={awardDescStyles}>{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyles}>
        <div style={ctaOverlayStyles} />
        <div style={containerStyles}>
          <div style={ctaContentStyles}>
            <h2 style={ctaTitleStyles}>Ready to Start Your Journey?</h2>
            <p style={ctaTextStyles}>
              Join thousands of successful professionals who transformed their careers with Datenwork
            </p>
            <div style={ctaActionsStyles}>
              <Button variant="secondary" size="large">Browse Courses</Button>
              <Button 
                variant="outline" 
                size="large" 
                style={{ borderColor: 'white', color: 'white' }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
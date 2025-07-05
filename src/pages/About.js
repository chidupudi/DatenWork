import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const About = () => {
  const [hoveredTeamMember, setHoveredTeamMember] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const team = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: '👩‍💼',
      experience: '15+ years in tech recruitment',
      specialties: ['Leadership', 'Strategy', 'Business Development']
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      image: '👨‍💻',
      experience: '12+ years in software engineering',
      specialties: ['Full Stack Development', 'Cloud Architecture', 'DevOps']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Head of Training',
      image: '👩‍🏫',
      experience: '10+ years in education & training',
      specialties: ['Curriculum Design', 'Learning Analytics', 'Mentorship']
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
      : 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '40px'
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

      {/* Story Section */}
      <section style={storySectionStyles}>
        <div style={containerStyles}>
          <div style={storyGridStyles}>
            <div style={storyContentStyles}>
              <h2 style={storyTitleStyles}>Our Story</h2>
              <p style={storyTextStyles}>
                Founded in 2019, Datenwork emerged from a simple yet powerful vision: to democratize access to high-quality 
                tech education and career opportunities. Our founders, having experienced the challenges of breaking into 
                the tech industry firsthand, were determined to create a platform that would make this journey smoother 
                for others.
              </p>
              <p style={storyTextStyles}>
                Starting with just 10 students in our first cohort, we've grown to become one of the most trusted names 
                in tech training and placement. Our success is measured not just in numbers, but in the success stories 
                of our graduates who are now thriving in their dream careers.
              </p>
              <Button variant="primary">Learn More About Our Journey</Button>
            </div>
            <div style={storyVisualStyles}>
              🚀
            </div>
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

      {/* Team Section */}
      
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
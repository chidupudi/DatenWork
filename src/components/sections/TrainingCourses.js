import React, { useState } from 'react';

const TrainingCourses = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Full Stack Development',
      description: 'Master React, Node.js, and modern web technologies with hands-on projects.',
      duration: '6 months',
      level: 'Beginner to Advanced',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: '💻',
      price: '₹49,999',
      originalPrice: '₹69,999',
      label: 'Best Seller'
    },
    {
      id: 2,
      title: 'Data Science & AI',
      description: 'Learn Python, machine learning, and AI with real-world applications.',
      duration: '8 months',
      level: 'Intermediate',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
      icon: '🤖',
      price: '₹59,999',
      originalPrice: '₹79,999',
      label: 'Hot Pick'
    },
    {
      id: 3,
      title: 'DevOps & Cloud',
      description: 'Master AWS, Docker, Kubernetes, and CI/CD pipelines.',
      duration: '4 months',
      level: 'Intermediate',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      icon: '☁️',
      price: '₹39,999',
      originalPrice: '₹54,999',
      label: ''
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Comprehensive security training covering ethical hacking and defense.',
      duration: '5 months',
      level: 'Beginner to Advanced',
      technologies: ['Penetration Testing', 'Network Security', 'CISSP', 'CEH'],
      icon: '🔒',
      price: '₹44,999',
      originalPrice: '₹64,999',
      label: ''
    },
    {
      id: 5,
      title: 'Mainframe Technologies',
      description: 'Learn COBOL, JCL, DB2, and mainframe operations for enterprise systems.',
      duration: '5 months',
      level: 'Beginner to Advanced',
      technologies: ['COBOL', 'JCL', 'DB2', 'CICS'],
      icon: '🖥️',
      price: '₹54,999',
      originalPrice: '₹74,999',
      label: 'Enterprise'
    },
    {
      id: 6,
      title: 'UI/UX Design',
      description: 'Master user interface and experience design with Figma and Adobe XD.',
      duration: '3 months',
      level: 'Beginner',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      icon: '🎨',
      price: '₹29,999',
      originalPrice: '₹39,999',
      label: ''
    },
    {
      id: 7,
      title: 'Mobile App Development',
      description: 'Build cross-platform mobile apps using Flutter and React Native.',
      duration: '4 months',
      level: 'Intermediate',
      technologies: ['Flutter', 'React Native', 'Dart', 'JavaScript'],
      icon: '📱',
      price: '₹42,999',
      originalPrice: '₹59,999',
      label: 'Popular'
    },
    {
      id: 8,
      title: 'Digital Marketing',
      description: 'Complete digital marketing course covering SEO, SEM, and social media.',
      duration: '3 months',
      level: 'Beginner',
      technologies: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics'],
      icon: '📈',
      price: '₹24,999',
      originalPrice: '₹34,999',
      label: ''
    },
    {
      id: 9,
      title: 'Blockchain Development',
      description: 'Learn blockchain technology, smart contracts, and DeFi applications.',
      duration: '6 months',
      level: 'Advanced',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'Truffle'],
      icon: '⛓️',
      price: '₹69,999',
      originalPrice: '₹89,999',
      label: 'New'
    }
  ];

  const trainingSectionStyles = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '100px 0',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '100vh'
  };

  const backgroundPatternStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="hexagon" width="25" height="22" patternUnits="userSpaceOnUse"><polygon points="12.5,2 22,8 22,16 12.5,22 3,16 3,8" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23hexagon)"/></svg>')
    `,
    zIndex: 0
  };

  const floatingElementStyles = {
    position: 'absolute',
    top: '15%',
    right: '10%',
    width: '150px',
    height: '150px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
    borderRadius: '50%',
    filter: 'blur(30px)',
    animation: 'float 6s ease-in-out infinite',
    zIndex: 0
  };

  const floatingElement2Styles = {
    position: 'absolute',
    bottom: '20%',
    left: '5%',
    width: '100px',
    height: '100px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)',
    borderRadius: '50%',
    filter: 'blur(25px)',
    animation: 'float 8s ease-in-out infinite reverse',
    zIndex: 0
  };

  const containerStyles = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 1
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '80px',
    color: 'white'
  };

  const titleStyles = {
    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '700',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
    letterSpacing: '-0.02em'
  };

  const subtitleStyles = {
    fontSize: '1.3rem',
    color: 'rgba(255,255,255,0.9)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
    fontWeight: '400'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '30px',
    '@media (max-width: 1200px)': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
    },
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '20px'
    }
  };

  const cardStyles = (isHovered) => ({
    background: 'rgba(255,255,255,0.95)',
    borderRadius: '24px',
    boxShadow: isHovered
      ? '0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)'
      : '0 15px 35px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.05)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)'
  });

  const labelStyles = (label) => ({
    display: label ? 'inline-block' : 'none',
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 
      label === 'Best Seller' ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)' :
      label === 'Hot Pick' ? 'linear-gradient(135deg, #667eea, #764ba2)' :
      label === 'Enterprise' ? 'linear-gradient(135deg, #0984e3, #6c5ce7)' :
      label === 'Popular' ? 'linear-gradient(135deg, #fd79a8, #e84393)' :
      label === 'New' ? 'linear-gradient(135deg, #00b894, #00a085)' :
      'linear-gradient(135deg, #636e72, #2d3436)',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '6px 12px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 2,
    letterSpacing: '0.5px',
    textTransform: 'uppercase'
  });

  const gradientBarStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '24px 24px 0 0'
  };

  const cardContentStyles = {
    padding: '30px',
    textAlign: 'center'
  };

  const iconStyles = (isHovered) => ({
    fontSize: '3.5rem',
    marginBottom: '20px',
    display: 'block',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
    transform: isHovered ? 'scale(1.15) rotate(8deg)' : 'scale(1) rotate(0deg)',
    transition: 'all 0.3s ease'
  });

  const courseTitleStyles = {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#2d3436',
    marginBottom: '12px',
    lineHeight: '1.3'
  };

  const descriptionStyles = {
    fontSize: '0.95rem',
    color: '#636e72',
    lineHeight: '1.6',
    marginBottom: '20px'
  };

  const priceContainerStyles = {
    marginBottom: '25px'
  };

  const priceStyles = {
    fontSize: '1.8rem',
    fontWeight: '800',
    color: '#667eea',
    marginBottom: '5px'
  };

  const originalPriceStyles = {
    fontSize: '1rem',
    color: '#b2bec3',
    textDecoration: 'line-through',
    fontWeight: '500'
  };

  const detailsContainerStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px',
    marginBottom: '25px',
    textAlign: 'left'
  };

  const detailItemStyles = {
    fontSize: '0.85rem',
    color: '#636e72'
  };

  const detailLabelStyles = {
    color: '#2d3436',
    fontWeight: '600',
    display: 'block',
    marginBottom: '4px'
  };

  const techSectionStyles = {
    marginBottom: '30px',
    textAlign: 'left'
  };

  const techLabelStyles = {
    fontSize: '0.9rem',
    color: '#2d3436',
    fontWeight: '600',
    marginBottom: '12px',
    display: 'block'
  };

  const techTagsStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center'
  };

  const techTagStyles = (isHovered) => ({
    background: isHovered ? 'linear-gradient(135deg, #667eea, #764ba2)' : '#f8f9fa',
    color: isHovered ? 'white' : '#667eea',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '0.75rem',
    fontWeight: '600',
    border: isHovered ? 'none' : '1px solid #e9ecef',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)'
  });

  const buttonContainerStyles = {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center'
  };

  const buttonStyles = (variant) => ({
    padding: '12px 24px',
    borderRadius: '12px',
    fontSize: '0.9rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    background: variant === 'primary' 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      : 'transparent',
    color: variant === 'primary' ? 'white' : '#667eea',
    border: variant === 'primary' ? 'none' : '2px solid #667eea',
    boxShadow: variant === 'primary' ? '0 4px 12px rgba(102,126,234,0.4)' : 'none'
  });

  const keyframes = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <section style={trainingSectionStyles}>
        <div style={backgroundPatternStyles} />
        <div style={floatingElementStyles} />
        <div style={floatingElement2Styles} />
        
        <div style={containerStyles}>
          <div style={headerStyles}>
            <h2 style={titleStyles}>
              Premium Training Programs
            </h2>
            <p style={subtitleStyles}>
              Transform your career with industry-leading courses designed for Indian professionals
            </p>
          </div>

          <div style={gridStyles}>
            {courses.map((course) => (
              <div
                key={course.id}
                style={cardStyles(hoveredCourse === course.id)}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
              >
                <div style={gradientBarStyles} />
                <span style={labelStyles(course.label)}>{course.label}</span>
                
                <div style={cardContentStyles}>
                  <span style={iconStyles(hoveredCourse === course.id)}>
                    {course.icon}
                  </span>
                  
                  <h3 style={courseTitleStyles}>{course.title}</h3>
                  <p style={descriptionStyles}>{course.description}</p>
                  
                  <div style={priceContainerStyles}>
                    <div style={priceStyles}>{course.price}</div>
                    <div style={originalPriceStyles}>{course.originalPrice}</div>
                  </div>
                  
                  <div style={detailsContainerStyles}>
                    <div style={detailItemStyles}>
                      <span style={detailLabelStyles}>Duration</span>
                      {course.duration}
                    </div>
                    <div style={detailItemStyles}>
                      <span style={detailLabelStyles}>Level</span>
                      {course.level}
                    </div>
                  </div>
                  
                  <div style={techSectionStyles}>
                    <span style={techLabelStyles}>Key Technologies</span>
                    <div style={techTagsStyles}>
                      {course.technologies.map((tech, index) => (
                        <span
                          key={index}
                          style={techTagStyles(hoveredTech === `${course.id}-${index}`)}
                          onMouseEnter={() => setHoveredTech(`${course.id}-${index}`)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div style={buttonContainerStyles}>
                    <button style={buttonStyles('primary')}>
                      Enroll Now
                    </button>
                    <button style={buttonStyles('outline')}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrainingCourses;
import React, { useState } from 'react';

const Header = () => (
  <header style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: '16px 0',
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#667eea' }}>
        Datenwork
      </div>
      <nav style={{ display: 'flex', gap: '32px' }}>
        <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Home</a>
        <a href="#" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '500' }}>About</a>
        <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Courses</a>
        <a href="#" style={{ color: '#4a5568', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer style={{
    background: '#1a202c',
    color: 'white',
    padding: '40px 0',
    textAlign: 'center'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px'
    }}>
      <p>&copy; 2024 Datenwork. All rights reserved.</p>
    </div>
  </footer>
);

const Button = ({ children, variant = 'primary', size = 'medium', style = {}, ...props }) => {
  const baseStyles = {
    padding: size === 'large' ? '16px 32px' : '12px 24px',
    borderRadius: '8px',
    border: 'none',
    fontSize: size === 'large' ? '1.1rem' : '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center'
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
    },
    secondary: {
      background: 'white',
      color: '#667eea',
      border: '2px solid #667eea'
    },
    outline: {
      background: 'transparent',
      border: '2px solid currentColor'
    }
  };

  return (
    <button 
      style={{
        ...baseStyles,
        ...variants[variant],
        ...style
      }}
      {...props}
    >
      {children}
    </button>
  );
};

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null);
  const [hoveredCulture, setHoveredCulture] = useState(null);

  const values = [
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from training programs to placement services.',
      icon: '⭐',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Innovation',
      description: 'We continuously innovate our methods to stay ahead of industry trends and technologies.',
      icon: '💡',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our interactions.',
      icon: '🤝',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Growth',
      description: 'We are committed to the continuous growth and development of our students and partners.',
      icon: '📈',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
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

  const stats = [
    { number: '5000+', label: 'Students Trained', icon: '👥' },
    { number: '97%', label: 'Placement Rate', icon: '📊' },
    { number: '250+', label: 'Partner Companies', icon: '🤝' },
    { number: '5+', label: 'Years Experience', icon: '⏰' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#ffffff',
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        padding: '140px 0 100px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
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
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '24px',
              color: 'white',
              fontWeight: '700',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              lineHeight: '1.2'
            }}>
              Transforming Careers Through
              <span style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}> Technology Education</span>
            </h1>
            <p style={{
              fontSize: '1.3rem',
              lineHeight: '1.8',
              color: 'rgba(255,255,255,0.9)',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              marginBottom: '40px'
            }}>
              We bridge the gap between talent and opportunity, empowering individuals with cutting-edge skills 
              and connecting them with leading technology companies worldwide.
            </p>
            
            {/* Stats Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '30px',
              marginTop: '60px'
            }}>
              {stats.map((stat, index) => (
                <div key={index} style={{
                  textAlign: 'center',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{stat.icon}</div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#FFD700',
                    marginBottom: '4px'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.9)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{
        padding: '100px 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.8rem',
                marginBottom: '32px',
                color: '#1a202c',
                fontWeight: '700',
                lineHeight: '1.2'
              }}>
                Our Story of <span style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Innovation</span>
              </h2>
              
              <div style={{
                fontSize: '1.2rem',
                lineHeight: '1.8',
                color: '#4a5568',
                marginBottom: '24px'
              }}>
                Datenwork emerged from a simple yet powerful vision: to democratize access to high-quality tech education and career opportunities. Our founders, having experienced the challenges of breaking into the tech industry firsthand, were determined to create a platform that would make this journey smoother for others.
              </div>
              
              <div style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#718096',
                marginBottom: '32px'
              }}>
                What sets us apart is our holistic approach to career transformation. We don't just teach technical skills - we mentor, guide, and support our students through every step of their journey. From initial assessment to final placement, our dedicated team ensures personalized attention and industry-relevant training.
              </div>
              
              <Button variant="primary" size="large">
                Discover Our Impact
              </Button>
            </div>
            
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              height: '500px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="tech" width="25" height="25" patternUnits="userSpaceOnUse"><circle cx="12.5" cy="12.5" r="2" fill="rgba(255,255,255,0.1)"/><rect x="10" y="10" width="5" height="5" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23tech)"/></svg>')`,
                opacity: 0.3
              }} />
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              color: '#1a202c',
              fontWeight: '700'
            }}>
              Our Mission & Vision
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Driving the future of technology education with purpose and clarity
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            <div style={{
              background: '#ffffff',
              padding: '50px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                opacity: 0.1
              }} />
              <div style={{
                fontSize: '4rem',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🎯</div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '20px'
              }}>Our Mission</h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4a5568'
              }}>
                To democratize access to high-quality technology education and create a bridge between 
                talented individuals and leading tech companies. We believe everyone deserves the 
                opportunity to build a successful career in technology.
              </p>
            </div>
            
            <div style={{
              background: '#ffffff',
              padding: '50px',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              textAlign: 'center',
              border: '1px solid #e2e8f0',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                left: '-50px',
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '50%',
                opacity: 0.1
              }} />
              <div style={{
                fontSize: '4rem',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>🔮</div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '20px'
              }}>Our Vision</h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#4a5568'
              }}>
                To become the global leader in technology talent development, fostering a world where 
                skilled professionals drive innovation and businesses thrive through strategic technology 
                partnerships that eliminate education-industry gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '100px 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              color: '#1a202c',
              fontWeight: '700'
            }}>
              Our Core Values
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              The fundamental principles that guide every decision and relationship we build
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 
              ? '1fr' 
              : 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {values.map((value, index) => (
              <div 
                key={value.title}
                style={{
                  textAlign: 'center',
                  padding: '40px 30px',
                  background: '#ffffff',
                  borderRadius: '20px',
                  boxShadow: hoveredValue === index 
                    ? '0 15px 35px rgba(0, 0, 0, 0.15)' 
                    : '0 8px 25px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.4s ease',
                  transform: hoveredValue === index ? 'translateY(-10px)' : 'translateY(0)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: value.gradient,
                  transform: hoveredValue === index ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.4s ease'
                }} />
                
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '20px',
                  background: value.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '16px',
                  color: '#1a202c',
                  fontWeight: '700'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}>
            <h2 style={{
              fontSize: '2.8rem',
              marginBottom: '20px',
              color: '#1a202c',
              fontWeight: '700'
            }}>
              Our Culture & Approach
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              The principles and practices that drive our success and student satisfaction
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth <= 768 
              ? '1fr' 
              : window.innerWidth <= 1024 
              ? 'repeat(2, 1fr)' 
              : 'repeat(3, 1fr)',
            gap: '30px'
          }}>
            {culturePoints.map((point, index) => (
              <div 
                key={index}
                style={{
                  background: '#ffffff',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  textAlign: 'center',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  transform: hoveredCulture === index ? 'translateY(-5px)' : 'translateY(0)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredCulture(index)}
                onMouseLeave={() => setHoveredCulture(null)}
              >
                <div style={{
                  fontSize: '3.5rem',
                  marginBottom: '20px',
                  filter: hoveredCulture === index ? 'brightness(1.2)' : 'brightness(1)',
                  transition: 'filter 0.3s ease'
                }}>
                  {point.icon}
                </div>
                <h4 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#1a202c',
                  marginBottom: '16px'
                }}>
                  {point.title}
                </h4>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.7',
                  fontSize: '1rem'
                }}>
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M 0 7 L 3 7 L 3 5 L 12 5 L 12 10 L 15 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')`,
          opacity: 0.3,
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '24px',
            color: 'white',
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
          }}>
            Ready to Transform Your Career?
          </h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            Join thousands of successful professionals who transformed their careers with Datenwork. 
            Your journey to a rewarding tech career starts here.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
            alignItems: 'center'
          }}>
            <Button 
              variant="secondary" 
              size="large"
              style={{
                background: 'white',
                color: '#667eea',
                border: 'none',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)'
              }}
            >
              Browse Our Courses
            </Button>
            <Button 
              variant="outline" 
              size="large" 
              style={{ 
                borderColor: 'white', 
                color: 'white',
                borderWidth: '2px'
              }}
            >
              Schedule a Consultation
            </Button>
          </div>
          
          <div style={{
            marginTop: '60px',
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.8)'
          }}>
            🎓 Start your transformation today • 🚀 Fast-track your career • 💼 Land your dream job
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
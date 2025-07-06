import React, { useState, useEffect } from 'react';
import { ChevronRight, Target, Eye, Star, Users, TrendingUp, Award, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll handler for parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024;

  const values = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in training delivery, curriculum design, and placement services.',
      icon: Star,
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)'
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies and methodologies to stay ahead of industry trends.',
      icon: Zap,
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
    },
    {
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical practices in all our operations.',
      icon: Shield,
      gradient: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)'
    },
    {
      title: 'Growth',
      description: 'We foster continuous learning and development for our students, partners, and team members.',
      icon: TrendingUp,
      gradient: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)'
    }
  ];

  const culturePoints = [
    {
      icon: Target,
      title: 'Student-Centric Excellence',
      description: 'Every strategy and decision prioritizes student success and long-term career advancement.',
      stats: '97% Success Rate'
    },
    {
      icon: Users,
      title: 'Industry Partnership',
      description: 'Strategic collaborations with leading tech companies ensure curriculum relevance and job readiness.',
      stats: '250+ Partners'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International best practices and certifications prepare students for worldwide opportunities.',
      stats: 'ISO Certified'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: 'Consistent track record of delivering exceptional results and industry recognition.',
      stats: '5000+ Graduates'
    }
  ];

  const storyHighlights = [
    { label: 'Students Placed', value: '5,000+', suffix: 'across 50+ countries' },
    { label: 'Corporate Partners', value: '250+', suffix: 'leading tech companies' },
    { label: 'Success Rate', value: '97%', suffix: 'placement guarantee' },
    { label: 'Course Completion', value: '94%', suffix: 'student satisfaction' }
  ];

  const AnimatedSection = ({ children, id, delay = 0, style = {} }) => (
    <div
      id={id}
      data-animate
      style={{
        transform: isVisible[id] ? 'translateY(0)' : 'translateY(32px)',
        opacity: isVisible[id] ? 1 : 0,
        transition: 'all 1000ms ease-out',
        transitionDelay: `${delay}ms`,
        ...style
      }}
    >
      {children}
    </div>
  );

  // Keyframe animations
  const fadeInKeyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
      <style>{fadeInKeyframes}</style>
      
      {/* Hero Section with Parallax */}
      <section style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background with parallax */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #312e81 100%)',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
        
        {/* Animated background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            transform: 'rotate(12deg) scale(1.5)',
            animation: 'pulse 4s ease-in-out infinite'
          }} />
        </div>

        {/* Floating elements */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '16px',
                height: '16px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animation: `bounce ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          padding: '0 24px',
          maxWidth: '896px'
        }}>
          <div style={{
            animation: 'fadeIn 1s ease-out'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '8px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '25px',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              marginBottom: '24px'
            }}>
              <span style={{ fontSize: '14px', fontWeight: '500' }}>
                Leading Technology Training & Placement
              </span>
            </div>
            
            <h1 style={{
              fontSize: isMobile ? '48px' : '80px',
              fontWeight: '700',
              lineHeight: '1.1',
              marginBottom: '24px'
            }}>
              Transforming
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Tech Careers
              </span>
            </h1>
            
            <p style={{
              fontSize: isMobile ? '18px' : '24px',
              color: '#bfdbfe',
              maxWidth: '768px',
              margin: '0 auto',
              lineHeight: '1.6',
              marginBottom: '32px'
            }}>
              We bridge the gap between ambition and achievement, connecting talented individuals 
              with leading technology companies worldwide.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <button style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
                borderRadius: '25px',
                fontWeight: '600',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                transition: 'all 300ms ease',
                transform: 'scale(1)',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
              }}>
                Start Your Journey
                <ChevronRight size={20} />
              </button>
              
              <button style={{
                padding: '16px 32px',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '25px',
                fontWeight: '600',
                color: 'white',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(8px)',
                cursor: 'pointer',
                transition: 'all 300ms ease',
                fontSize: '16px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}>
                Our Programs
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s ease-in-out infinite'
        }}>
          <div style={{
            width: '24px',
            height: '40px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '4px',
              height: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '2px',
              marginTop: '8px',
              animation: 'pulse 2s ease-in-out infinite'
            }} />
          </div>
        </div>
      </section>

      {/* Story Section with Stats */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
            gap: '64px',
            alignItems: 'center'
          }}>
            <AnimatedSection id="story-content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  backgroundColor: '#dbeafe',
                  color: '#2563eb',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: '500',
                  width: 'fit-content'
                }}>
                  Our Story
                </div>
                
                <h2 style={{
                  fontSize: isMobile ? '32px' : '48px',
                  fontWeight: '700',
                  color: '#111827',
                  lineHeight: '1.1',
                  marginBottom: '24px'
                }}>
                  Pioneering the Future of 
                  <span style={{ color: '#2563eb' }}> Tech Education</span>
                </h2>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  color: '#6b7280',
                  fontSize: '18px',
                  lineHeight: '1.7'
                }}>
                  <p>
                    Founded with a vision to democratize access to high-quality technology education, 
                    we've evolved from a small startup to a global leader in tech talent development.
                  </p>
                  <p>
                    Our innovative approach combines industry-aligned curriculum, hands-on training, 
                    and personalized career support to ensure our graduates don't just find jobs—they 
                    build successful, fulfilling careers.
                  </p>
                  <p>
                    Today, we're proud to be the trusted partner for both aspiring professionals 
                    seeking career transformation and leading companies building world-class teams.
                  </p>
                </div>

                <button style={{
                  padding: '12px 24px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  borderRadius: '8px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)',
                  fontSize: '16px',
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#1d4ed8';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#2563eb';
                  e.target.style.transform = 'scale(1)';
                }}>
                  Discover Our Impact
                  <ChevronRight size={16} />
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection id="story-stats" delay={200}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px'
              }}>
                {storyHighlights.map((stat, index) => (
                  <div 
                    key={stat.label}
                    style={{
                      padding: '24px',
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #e5e7eb',
                      transition: 'all 300ms ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-8px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    }}
                  >
                    <div style={{
                      fontSize: '24px',
                      fontWeight: '700',
                      color: '#111827',
                      marginBottom: '8px'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#374151',
                      marginBottom: '4px'
                    }}>
                      {stat.label}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      {stat.suffix}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <AnimatedSection id="mission-vision">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '24px'
              }}>
                Mission & Vision
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#6b7280',
                maxWidth: '768px',
                margin: '0 auto'
              }}>
                Driving the future of technology education through innovation and excellence
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
              gap: '48px'
            }}>
              <div style={{
                position: 'relative',
                padding: '32px',
                background: 'linear-gradient(135deg, #eff6ff 0%, #e0f2fe 100%)',
                borderRadius: '24px',
                border: '1px solid #bfdbfe',
                transition: 'all 500ms ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 300ms ease'
                }}>
                  <Target size={24} color="white" />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '16px'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  color: '#374151',
                  lineHeight: '1.7',
                  fontSize: '18px'
                }}>
                  To democratize access to world-class technology education and create seamless pathways 
                  between talented individuals and leading tech companies. We believe that everyone deserves 
                  the opportunity to build a successful career in technology, regardless of their background.
                </p>
              </div>

              <div style={{
                position: 'relative',
                padding: '32px',
                background: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
                borderRadius: '24px',
                border: '1px solid #d8b4fe',
                transition: 'all 500ms ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = 'none';
              }}>
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 300ms ease'
                }}>
                  <Eye size={24} color="white" />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#111827',
                  marginBottom: '16px'
                }}>
                  Our Vision
                </h3>
                <p style={{
                  color: '#374151',
                  lineHeight: '1.7',
                  fontSize: '18px'
                }}>
                  To become the global standard for technology talent development, fostering a world where 
                  skilled professionals drive innovation and businesses thrive through strategic technology 
                  partnerships and continuous learning ecosystems.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <AnimatedSection id="values">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '24px'
              }}>
                Our Core Values
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#6b7280',
                maxWidth: '768px',
                margin: '0 auto'
              }}>
                The principles that guide our decisions and shape our relationships
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: '32px'
            }}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <AnimatedSection 
                    key={value.title}
                    id={`value-${index}`}
                    delay={index * 100}
                  >
                    <div style={{
                      position: 'relative',
                      padding: '24px',
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #e5e7eb',
                      transition: 'all 500ms ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-8px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: value.gradient,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '24px',
                        transition: 'transform 300ms ease'
                      }}>
                        <Icon size={24} color="white" />
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#111827',
                        marginBottom: '12px'
                      }}>
                        {value.title}
                      </h3>
                      <p style={{
                        color: '#6b7280',
                        lineHeight: '1.6'
                      }}>
                        {value.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture & Approach */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <AnimatedSection id="culture">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
              <h2 style={{
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '700',
                color: '#111827',
                marginBottom: '24px'
              }}>
                Our Approach
              </h2>
              <p style={{
                fontSize: '20px',
                color: '#6b7280',
                maxWidth: '768px',
                margin: '0 auto'
              }}>
                Strategic methodologies that drive exceptional outcomes
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
              gap: '32px'
            }}>
              {culturePoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <AnimatedSection 
                    key={point.title}
                    id={`culture-${index}`}
                    delay={index * 150}
                  >
                    <div style={{
                      padding: '32px',
                      background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)',
                      borderRadius: '24px',
                      border: '1px solid #e5e7eb',
                      transition: 'all 500ms ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-4px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: '24px'
                      }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 300ms ease'
                        }}>
                          <Icon size={28} color="white" />
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            color: '#2563eb'
                          }}>
                            {point.stats}
                          </div>
                        </div>
                      </div>
                      <h3 style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#111827',
                        marginBottom: '12px'
                      }}>
                        {point.title}
                      </h3>
                      <p style={{
                        color: '#6b7280',
                        lineHeight: '1.6'
                      }}>
                        {point.description}
                      </p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        position: 'relative',
        padding: '80px 0',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #1e3a8a 0%, #7c3aed 50%, #312e81 100%)'
        }} />
        
        {/* Animated background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            transform: 'skewY(-12deg) scale(1.5)',
            animation: 'pulse 6s ease-in-out infinite'
          }} />
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '896px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 24px'
        }}>
          <AnimatedSection id="cta">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h2 style={{
                fontSize: isMobile ? '32px' : '64px',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.1'
              }}>
                Ready to Transform
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Your Career?
                </span>
              </h2>
              
              <p style={{
                fontSize: '20px',
                color: '#bfdbfe',
                maxWidth: '512px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Join thousands of professionals who've accelerated their careers with our 
                industry-leading training and placement programs.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: '16px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <button style={{
                  padding: '16px 32px',
                  backgroundColor: '#ffffff',
                  color: '#1e3a8a',
                  borderRadius: '25px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                  transition: 'all 300ms ease',
                  fontSize: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}>
                  Explore Programs
                  <ChevronRight size={20} />
                </button>
                
                <button style={{
                  padding: '16px 32px',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  borderRadius: '25px',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                  backdropFilter: 'blur(8px)',
                  cursor: 'pointer',
                  transition: 'all 300ms ease',
                  fontSize: '16px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'all', name: 'All Courses', count: 12 },
    { id: 'frontend', name: 'Frontend', count: 4 },
    { id: 'backend', name: 'Backend', count: 3 },
    { id: 'fullstack', name: 'Full Stack', count: 2 },
    { id: 'data', name: 'Data Science', count: 2 },
    { id: 'mobile', name: 'Mobile', count: 1 }
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development Bootcamp',
      category: 'fullstack',
      duration: '16 weeks',
      level: 'Beginner to Advanced',
      price: '₹2,49,000',
      originalPrice: '₹4,15,000',
      rating: 4.9,
      students: 1250,
      description: 'Master modern web development with React, Node.js, and MongoDB. Build real-world projects and get job-ready.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
      features: ['1-on-1 Mentorship', 'Job Placement', 'Personal Mentor', 'Lifetime Access'],
      instructor: 'Sarah Johnson',
      nextStart: 'March 15, 2024',
      badge: 'Most Popular'
    },
    {
      id: 2,
      title: 'React.js Mastery Course',
      category: 'frontend',
      duration: '10 weeks',
      level: 'Intermediate',
      price: '₹1,58,000',
      originalPrice: '₹2,41,000',
      rating: 4.8,
      students: 890,
      description: 'Deep dive into React.js ecosystem including hooks, context, Redux, and testing. Build production-ready applications.',
      technologies: ['React', 'Redux', 'TypeScript', 'Jest', 'React Router', 'Styled Components'],
      features: ['1-on-1 Sessions', 'Personal Mentor', 'Performance', 'Live Projects'],
      instructor: 'Michael Chen',
      nextStart: 'March 22, 2024'
    },
    {
      id: 3,
      title: 'Node.js Backend Development',
      category: 'backend',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '₹1,83,000',
      originalPrice: '₹2,66,000',
      rating: 4.7,
      students: 654,
      description: 'Build scalable backend applications with Node.js, Express, and databases. Learn API development and deployment.',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
      features: ['API Design', 'Database Design', 'Security', 'Deployment'],
      instructor: 'David Park',
      nextStart: 'March 29, 2024'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      category: 'data',
      duration: '14 weeks',
      level: 'Beginner to Advanced',
      price: '₹2,25,000',
      originalPrice: '₹3,24,000',
      rating: 4.9,
      students: 543,
      description: 'Master data science fundamentals, machine learning, and data visualization with Python and popular libraries.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Matplotlib'],
      features: ['Real Datasets', 'ML Projects', 'Data Visualization', 'Career Support'],
      instructor: 'Dr. Emily Rodriguez',
      nextStart: 'April 5, 2024',
      badge: 'High Demand'
    },
    {
      id: 5,
      title: 'Modern JavaScript Fundamentals',
      category: 'frontend',
      duration: '8 weeks',
      level: 'Beginner',
      price: '₹1,08,000',
      originalPrice: '₹1,58,000',
      rating: 4.6,
      students: 1120,
      description: 'Learn JavaScript from basics to advanced concepts including ES6+, async programming, and DOM manipulation.',
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Fetch API', 'Async/Await', 'Modules'],
      features: ['Interactive Coding', 'Projects', 'Code Review', 'Community'],
      instructor: 'Alex Thompson',
      nextStart: 'March 18, 2024'
    },
    {
      id: 6,
      title: 'React Native Mobile Development',
      category: 'mobile',
      duration: '12 weeks',
      level: 'Intermediate',
      price: '₹2,00,000',
      originalPrice: '₹2,83,000',
      rating: 4.8,
      students: 432,
      description: 'Build cross-platform mobile apps with React Native. Learn navigation, state management, and app deployment.',
      technologies: ['React Native', 'Expo', 'Redux', 'Navigation', 'Firebase', 'App Store'],
      features: ['Cross Platform', 'Native Features', 'App Store Deploy', 'Portfolio Apps'],
      instructor: 'Lisa Wang',
      nextStart: 'April 12, 2024'
    }
  ];

  const industryStats = [
    { number: '4.2M', label: 'Tech Jobs Available', icon: '💼' },
    { number: '67%', label: 'Skill Gap in Market', icon: '📊' },
    { number: '₹12.5L', label: 'Average Salary', icon: '💰' },
    { number: '92%', label: 'Placement Rate', icon: '🎯' }
  ];

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  const gradients = {
    frontend: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    backend: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    fullstack: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    data: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    mobile: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    default: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      <Header />
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '150px',
          height: '150px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '50%',
          animation: 'float 4s ease-in-out infinite reverse'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '12px 24px',
            borderRadius: '25px',
            display: 'inline-block',
            marginBottom: '30px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <span style={{ color: 'white', fontWeight: '600', fontSize: '14px' }}>🚀 Join 50,000+ Successful Graduates</span>
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            color: 'white',
            marginBottom: '24px',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>
            Bridge the Skill Gap.<br />
            <span style={{ background: 'linear-gradient(45deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Shape Your Future.
            </span>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255,255,255,0.9)',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            India needs <strong>4.2 million</strong> skilled tech professionals by 2025. 
            With a <strong>67% skill gap</strong> in the market, now is the perfect time to upskill and grab high-paying opportunities.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '50px' }}>
            <button style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#1a202c',
              padding: '16px 32px',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(255,215,0,0.3)',
              transition: 'all 0.3s ease',
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              Start Your Journey Today →
            </button>
            
            <button style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              padding: '16px 32px',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}>
              📞 Talk to Expert
            </button>
          </div>
        </div>
        
        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}
        </style>
      </section>

      {/* Industry Stats Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#1a202c',
            fontWeight: '700'
          }}>
            The Tech Industry Reality
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#4a5568',
            maxWidth: '800px',
            margin: '0 auto 50px',
            lineHeight: '1.6'
          }}>
            India's digital transformation is creating unprecedented opportunities. 
            Don't let the skill gap hold you back from your dream career.
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            {industryStats.map((stat, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '40px 30px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                transform: statsVisible ? 'translateY(0)' : 'translateY(30px)',
                opacity: statsVisible ? 1 : 0,
                transitionDelay: `${index * 0.1}s`,
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{stat.icon}</div>
                <div style={{
                  fontSize: '2.8rem',
                  fontWeight: '700',
                  color: '#667eea',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  color: '#4a5568',
                  fontWeight: '500'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#1a202c',
              fontWeight: '700'
            }}>
              Choose Your Path to Success
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Industry-aligned courses designed by experts from top tech companies
            </p>
          </div>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            marginBottom: '50px'
          }}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '14px 28px',
                  borderRadius: '30px',
                  background: activeCategory === category.id 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                    : 'white',
                  color: activeCategory === category.id ? 'white' : '#4a5568',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === category.id 
                    ? '0 8px 25px rgba(102, 126, 234, 0.3)' 
                    : '0 4px 15px rgba(0,0,0,0.1)',
                  transform: 'scale(1)',
                  border: activeCategory === category.id ? 'none' : '2px solid #e2e8f0'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                  }
                }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Courses Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {filteredCourses.map(course => (
              <div
                key={course.id}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: hoveredCard === course.id 
                    ? '0 20px 40px rgba(0,0,0,0.15)' 
                    : '0 10px 30px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  transition: 'all 0.4s ease',
                  transform: hoveredCard === course.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                  position: 'relative'
                }}
                onMouseEnter={() => setHoveredCard(course.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Course Badge */}
                {course.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    color: '#1a202c',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    zIndex: 3,
                    boxShadow: '0 4px 15px rgba(255,215,0,0.3)'
                  }}>
                    {course.badge}
                  </div>
                )}

                {/* Course Header */}
                <div style={{
                  background: gradients[course.category] || gradients.default,
                  padding: '30px 25px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '10px',
                    fontWeight: '500'
                  }}>
                    {course.level}
                  </div>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: 'white',
                    margin: 0,
                    fontWeight: '700',
                    lineHeight: '1.3'
                  }}>
                    {course.title}
                  </h3>
                </div>

                {/* Course Body */}
                <div style={{ padding: '25px' }}>
                  {/* Price */}
                  <div style={{ marginBottom: '20px' }}>
                    <span style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: '#1a202c'
                    }}>
                      {course.price}
                    </span>
                    <span style={{
                      fontSize: '1.1rem',
                      color: '#a0aec0',
                      textDecoration: 'line-through',
                      marginLeft: '12px'
                    }}>
                      {course.originalPrice}
                    </span>
                    <span style={{
                      background: '#d4f4dd',
                      color: '#047857',
                      padding: '4px 8px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      marginLeft: '10px'
                    }}>
                      40% OFF
                    </span>
                  </div>

                  {/* Course Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '15px',
                    marginBottom: '20px',
                    fontSize: '0.9rem',
                    color: '#4a5568'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>⏱️</div>
                      <div style={{ fontWeight: '600' }}>{course.duration}</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>⭐</div>
                      <div style={{ fontWeight: '600' }}>{course.rating} ({course.students})</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.2rem', marginBottom: '4px' }}>👨‍🏫</div>
                      <div style={{ fontWeight: '600', fontSize: '0.8rem' }}>{course.instructor}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: '#4a5568',
                    marginBottom: '20px',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}>
                    {course.description}
                  </p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '20px'
                  }}>
                    {course.technologies.map(tech => (
                      <span key={tech} style={{
                        background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                        color: '#475569',
                        padding: '6px 12px',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div style={{ marginBottom: '20px' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      marginBottom: '12px',
                      color: '#1a202c',
                      fontWeight: '600'
                    }}>
                      What You'll Get:
                    </h4>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '8px'
                    }}>
                      {course.features.map(feature => (
                        <div key={feature} style={{
                          color: '#059669',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}>
                          <span style={{ color: '#10b981' }}>✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Batch */}
                  <div style={{
                    marginBottom: '25px',
                    padding: '15px',
                    background: 'linear-gradient(135deg, #fef3f2 0%, #fee2e2 100%)',
                    borderRadius: '12px',
                    border: '1px solid rgba(239, 68, 68, 0.1)'
                  }}>
                    <div style={{
                      fontSize: '0.9rem',
                      color: '#dc2626',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>🔥</span>
                      Next Batch Starts: {course.nextStart}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{
                      flex: 1,
                      padding: '14px 20px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)'
                    }}>
                      Enroll Now
                    </button>
                    <button style={{
                      padding: '14px 20px',
                      background: 'white',
                      color: '#667eea',
                      border: '2px solid #667eea',
                      borderRadius: '12px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}>
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section style={{
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Success Stories That Inspire
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '50px',
            maxWidth: '600px',
            margin: '0 auto 50px'
          }}>
            Join thousands who transformed their careers with our proven programs
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                name: 'Priya Sharma',
                role: 'Frontend Developer at Google',
                salary: '₹28 LPA',
                course: 'Full Stack Bootcamp',
                image: '👩‍💻'
              },
              {
                name: 'Rahul Kumar',
                role: 'Data Scientist at Microsoft',
                salary: '₹32 LPA',
                course: 'Data Science Program',
                image: '👨‍💻'
              },
              {
                name: 'Anita Patel',
                role: 'Backend Engineer at Amazon',
                salary: '₹25 LPA',
                course: 'Backend Development',
                image: '👩‍💼'
              }
            ].map((story, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '30px',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{story.image}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', fontWeight: '600' }}>{story.name}</h3>
                <p style={{ color: '#FFD700', fontSize: '1.1rem', marginBottom: '8px', fontWeight: '600' }}>{story.role}</p>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '12px' }}>Salary: {story.salary}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Completed: {story.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 20px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              color: '#1a202c',
              fontWeight: '700'
            }}>
              Why 50,000+ Students Choose Us
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#4a5568',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Industry-leading programs designed for guaranteed career transformation
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: '🎯',
                title: 'Industry-Relevant Curriculum',
                description: 'Courses designed with input from FAANG companies and industry leaders. Stay ahead with cutting-edge technologies.'
              },
              {
                icon: '👥',
                title: 'Expert Mentorship',
                description: 'Learn from industry veterans currently working at top tech companies. Get personalized guidance throughout your journey.'
              },
              {
                icon: '💼',
                title: '100% Job Guarantee',
                description: 'We guarantee job placement within 6 months of course completion or get your money back. Average salary: ₹12.5 LPA.'
              },
              {
                icon: '🚀',
                title: 'Real-World Projects',
                description: 'Build 5+ industry-grade projects for your portfolio. Work on live projects with real clients and companies.'
              },
              {
                icon: '🤝',
                title: 'Lifetime Support',
                description: 'Join our exclusive alumni network of 50,000+ professionals. Get lifetime access to job opportunities and career support.'
              },
              {
                icon: '⚡',
                title: 'Fast-Track Learning',
                description: 'Our accelerated learning methodology helps you master skills 3x faster with hands-on practice and personalized feedback.'
              }
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'white',
                padding: '30px',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '15px',
                  color: '#1a202c',
                  fontWeight: '600'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: '#4a5568',
                  lineHeight: '1.6',
                  fontSize: '1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Don't Let the Skill Gap Hold You Back
          </h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.6'
          }}>
            Join the next batch and transform your career in just 16 weeks. 
            Limited seats available - secure your spot today!
          </p>
          
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '30px',
            borderRadius: '20px',
            marginBottom: '40px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>⏰</div>
            <div style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>Early Bird Offer Ends Soon!</div>
            <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>Save ₹50,000 on all courses. Only 72 hours left!</div>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#1a202c',
              padding: '18px 40px',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(255,215,0,0.4)',
              transition: 'all 0.3s ease'
            }}>
              🚀 Enroll Now & Save ₹50,000
            </button>
            
            <button style={{
              background: 'rgba(255,255,255,0.15)',
              color: 'white',
              padding: '18px 40px',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
              fontSize: '1.2rem',
              fontWeight: '600',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease'
            }}>
              📅 Book Free Counseling
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CoursesPage;
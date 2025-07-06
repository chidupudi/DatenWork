import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('all');

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
      nextStart: 'March 15, 2024'
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
      nextStart: 'April 5, 2024'
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


  // --- Styles ---
  const coursesGridStyles = {
    display: 'grid',
    gridTemplateColumns:
      window.innerWidth <= 768
        ? '1fr'
        : window.innerWidth <= 1024
        ? 'repeat(2, 1fr)'
        : 'repeat(3, 1fr)',
    gap: '24px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const courseCardStyles = (isHovered) => ({
    background: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: isHovered
      ? '0 15px 30px rgba(0, 0, 0, 0.12)'
      : '0 8px 20px rgba(0, 0, 0, 0.06)',
    border: '1px solid rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
    height: '650px',
    display: 'flex',
    flexDirection: 'column'
  });

  const courseHeaderStyles = (gradient) => ({
    background: gradient,
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '140px'
  });

  const courseBodyStyles = {
    padding: '20px',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const courseLevelStyles = {
    fontSize: '0.875rem',
    color: '#6b7280',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  const technologiesStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    marginBottom: '16px',
    minHeight: '60px'
  };

  const priceContainerStyles = {
    marginBottom: '12px'
  };

  const courseStatsStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const courseButtonStyles = {
    width: '100%',
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
  };

  // Responsive CSS for grid
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `\n  @media (max-width: 1024px) {\n    .courses-grid {\n      grid-template-columns: repeat(2, 1fr);\n      gap: 20px;\n    }\n  }\n  @media (max-width: 768px) {\n    .courses-grid {\n      grid-template-columns: 1fr;\n      gap: 16px;\n    }\n    .course-card {\n      height: auto !important;\n      min-height: 420px;\n    }\n  }\n`;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="courses-page">
      <Header />
      
      <section className="courses-hero" style={{ padding: '120px 0 80px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'white' }}>Professional Training Courses</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
              Master in-demand skills with our comprehensive, industry-aligned courses designed by experts. 
              Get hands-on experience and guaranteed job placement support.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ marginBottom: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  style={{
                    padding: '12px 24px',
                    border: activeCategory === category.id ? '2px solid #4facfe' : '2px solid #e2e8f0',
                    borderRadius: '25px',
                    background: activeCategory === category.id ? '#4facfe' : 'white',
                    color: activeCategory === category.id ? 'white' : '#4a5568',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          <div className="courses-grid" style={coursesGridStyles}>
            {filteredCourses.map(course => {
              // Pick a gradient for the header based on category
              const gradients = {
                frontend: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                backend: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                fullstack: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                data: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
                mobile: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                default: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
              };
              const gradient = gradients[course.category] || gradients.default;
              return (
                <div
                  key={course.id}
                  className="course-card"
                  style={courseCardStyles(false)}
                >
                  <div style={courseHeaderStyles(gradient)}>
                    <div style={courseLevelStyles}>{course.level}</div>
                    <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: 0 }}>{course.title}</h3>
                  </div>
                  <div style={courseBodyStyles}>
                    <div>
                      <div style={priceContainerStyles}>
                        <span style={{ fontSize: '1.2rem', fontWeight: '700', color: '#1a202c' }}>{course.price}</span>
                        <span style={{ fontSize: '1rem', color: '#a0aec0', textDecoration: 'line-through', marginLeft: '10px' }}>{course.originalPrice}</span>
                      </div>
                      <div style={courseStatsStyles}>
                        <span>⏱️ {course.duration}</span>
                        <span>⭐ {course.rating} ({course.students})</span>
                        <span>👨‍🏫 {course.instructor}</span>
                      </div>
                      <p style={{ color: '#4a5568', marginBottom: '12px', fontSize: '0.98rem', lineHeight: '1.5' }}>{course.description}</p>
                      <div style={technologiesStyles}>
                        {course.technologies.map(tech => (
                          <span key={tech} style={{ background: '#f0f4f8', color: '#4a5568', padding: '4px 12px', borderRadius: '15px', fontSize: '0.85rem', fontWeight: '500' }}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div style={{ marginBottom: '12px' }}>
                        <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#1a202c', fontWeight: '600' }}>Course Features:</h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                          {course.features.map(feature => (
                            <span key={feature} style={{ background: '#fff5f5', color: '#e53e3e', padding: '4px 12px', borderRadius: '15px', fontSize: '0.85rem', fontWeight: '500' }}>✓ {feature}</span>
                          ))}
                        </div>
                      </div>
                      <div style={{ marginBottom: '12px', padding: '10px', background: '#f7fafc', borderRadius: '10px', fontSize: '0.9rem', color: '#4a5568' }}>
                        <strong>Next Batch Starts:</strong> {course.nextStart}
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button style={courseButtonStyles}>Enroll Now</button>
                        <button style={{ ...courseButtonStyles, background: 'white', color: '#4f46e5', border: '1px solid #4f46e5', boxShadow: 'none' }}>View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f7fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: '#1a202c' }}>Why Choose Our Courses?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginTop: '50px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🎯</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1a202c' }}>Industry-Relevant</h3>
                <p style={{ color: '#4a5568' }}>Curriculum designed with input from top tech companies and industry experts</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👥</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1a202c' }}>Expert Mentorship</h3>
                <p style={{ color: '#4a5568' }}>Learn from experienced professionals currently working in leading tech companies</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1a202c' }}>Job Guarantee</h3>
                <p style={{ color: '#4a5568' }}>Get placed in top companies with our 100% job placement guarantee</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1a202c' }}>Real Projects</h3>
                <p style={{ color: '#4a5568' }}>Build portfolio-worthy projects that showcase your skills to employers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
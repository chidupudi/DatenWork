import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('training');
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);

  // Animation keyframes
  const animationKeyframes = `
    @keyframes particleFloat {
      0% { transform: translateY(0); }
      100% { transform: translateY(-100px); }
    }

    @keyframes waveFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    @keyframes heroFadeIn {
      0% { opacity: 0; transform: translateY(50px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes badgePulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes serviceSlideIn {
      0% { opacity: 0; transform: translateY(30px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes iconFloat {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
    }

    @keyframes progressBar {
      0% { transform: scaleX(0); }
      100% { transform: scaleX(1); }
    }

    @keyframes gradientSlide {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes pulseStep {
      0%, 100% { transform: scale(1); box-shadow: 0 8px 25px rgba(79, 70, 229, 0.4); }
      50% { transform: scale(1.1); box-shadow: 0 12px 35px rgba(79, 70, 229, 0.6); }
    }
  `;

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

  const cardVariants = {
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

  // Services data
  const servicesData = {
    training: {
      title: 'Training Programs',
      subtitle: 'Comprehensive technology education with hands-on experience',
      icon: '🎓',
      programs: [
        {
          id: 1,
          title: 'Full Stack Development Mastery',
          description: 'Complete web development bootcamp covering modern frameworks and technologies.',
          duration: '16 weeks',
          level: 'Beginner to Advanced',
          price: '₹2,49,000',
          originalPrice: '₹4,15,000',
          technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
          features: ['Live Projects', 'Industry Mentorship', 'Job Guarantee', 'Lifetime Access']
        },
        {
          id: 2,
          title: 'Data Science & AI Specialization',
          description: 'Master machine learning, AI, and data analytics with real-world applications.',
          duration: '20 weeks',
          level: 'Intermediate',
          price: '₹2,99,000',
          originalPrice: '₹4,99,000',
          technologies: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn'],
          features: ['Real Datasets', 'ML Projects', 'Research Papers', 'Industry Projects']
        },
        {
          id: 3,
          title: 'Cloud DevOps Engineering',
          description: 'Comprehensive DevOps training with cloud platforms and automation tools.',
          duration: '12 weeks',
          level: 'Intermediate to Advanced',
          price: '₹2,25,000',
          originalPrice: '₹3,75,000',
          technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
          features: ['Cloud Certification', 'Hands-on Labs', 'Production Deployment', 'DevOps Tools']
        }
      ]
    },
    placement: {
      title: 'Placement Services',
      subtitle: 'End-to-end job placement support with guaranteed results',
      icon: '💼',
      services: [
        {
          id: 1,
          title: 'Resume & Portfolio Building',
          description: 'Professional resume creation and portfolio development that gets you noticed.',
          features: ['ATS-optimized resumes', 'GitHub portfolio setup', 'LinkedIn optimization', 'Personal branding']
        },
        {
          id: 2,
          title: 'Interview Preparation',
          description: 'Comprehensive interview coaching with mock sessions and real-time feedback.',
          features: ['Technical interviews', 'System design prep', 'Behavioral coaching', 'Salary negotiation']
        },
        {
          id: 3,
          title: 'Job Matching & Applications',
          description: 'AI-powered job matching and direct applications to partner companies.',
          features: ['Smart job matching', 'Direct referrals', 'Application tracking', 'Follow-up support']
        }
      ],
      companies: ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple', 'Uber', 'Airbnb'],
      stats: [
        { number: '850+', label: 'Successful Placements' },
        { number: '95%', label: 'Placement Rate' },
        { number: '₹18L', label: 'Average Package' },
        { number: '120+', label: 'Partner Companies' }
      ]
    },
    consultancy: {
      title: 'IT Consultancy',
      subtitle: 'Strategic technology consulting for digital transformation',
      icon: '🚀',
      solutions: [
        {
          id: 1,
          title: 'Digital Transformation Strategy',
          description: 'End-to-end digital transformation roadmap for modern businesses.',
          timeline: '3-6 months',
          technologies: ['Cloud Migration', 'Process Automation', 'Data Analytics', 'AI Implementation']
        },
        {
          id: 2,
          title: 'Custom Software Development',
          description: 'Bespoke software solutions tailored to your business requirements.',
          timeline: '2-8 months',
          technologies: ['Web Applications', 'Mobile Apps', 'API Development', 'Database Design']
        },
        {
          id: 3,
          title: 'Cloud Infrastructure & DevOps',
          description: 'Scalable cloud infrastructure setup with automated deployment pipelines.',
          timeline: '1-4 months',
          technologies: ['AWS/Azure/GCP', 'Docker/Kubernetes', 'CI/CD Pipelines', 'Monitoring']
        }
      ]
    }
  };

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Senior Developer at Google',
      image: '👨‍💻',
      text: 'The training program completely transformed my career. From zero coding knowledge to landing a job at Google!',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Data Scientist at Microsoft',
      image: '👩‍💻',
      text: 'Exceptional mentorship and real-world projects. The placement support was outstanding.',
      rating: 5
    },
    {
      id: 3,
      name: 'Arun Patel',
      role: 'DevOps Engineer at Amazon',
      image: '👨‍💼',
      text: 'Best investment I ever made. The consultancy team also helped our startup scale efficiently.',
      rating: 5
    }
  ];

  // Main page styles
  const servicesPageStyles = {
    background: '#ffffff',
    overflow: 'hidden'
  };

  // Hero section styles
  const heroStyles = {
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    overflow: 'hidden'
  };

  const heroBackgroundStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1
  };

  const heroParticlesStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `
      radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.2), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.3), transparent),
      radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.2), transparent),
      radial-gradient(2px 2px at 160px 30px, rgba(255,255,255,0.3), transparent)
    `,
    backgroundRepeat: 'repeat',
    backgroundSize: '200px 100px',
    animation: 'particleFloat 20s linear infinite'
  };

  const heroWavesStyles = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '200px',
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23ffffff'/%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23ffffff'/%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23ffffff'/%3E%3C/svg%3E") no-repeat center bottom`,
    backgroundSize: 'cover',
    animation: 'waveFloat 6s ease-in-out infinite'
  };

  const heroContentStyles = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    color: 'white',
    maxWidth: '900px',
    padding: '0 2rem',
    animation: 'heroFadeIn 1s ease-out'
  };

  const heroBadgeStyles = {
    display: 'inline-block',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '50px',
    padding: '0.8rem 2rem',
    marginBottom: '2rem',
    fontSize: '1rem',
    fontWeight: '600',
    animation: 'badgePulse 2s ease-in-out infinite'
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.8rem' : '4.5rem',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '2rem',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Poppins', sans-serif"
  };

  const gradientTextStyles = {
    background: 'linear-gradient(45deg, #fbbf24, #f59e0b, #d97706)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'gradientShift 3s ease-in-out infinite'
  };

  const heroSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.4rem',
    lineHeight: '1.6',
    opacity: '0.9',
    marginBottom: '3rem',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const heroCtaStyles = {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    marginBottom: '4rem',
    flexWrap: 'wrap',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  const heroStatsStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '2rem' : '3rem',
    maxWidth: '600px',
    margin: '0 auto'
  };

  const statItemStyles = {
    textAlign: 'center'
  };

  const statNumberStyles = {
    display: 'block',
    fontSize: '3rem',
    fontWeight: '800',
    color: '#fbbf24',
    marginBottom: '0.5rem',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const statLabelStyles = {
    fontSize: '1rem',
    opacity: '0.8',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  // Navigation tabs styles
  const servicesNavStyles = {
    background: 'white',
    padding: '2rem 0',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'sticky',
    top: '80px',
    zIndex: 100
  };

  const navTabsStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    flexWrap: 'wrap'
  };

  const navTabStyles = (tabId) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    border: '2px solid transparent',
    borderRadius: '20px',
    background: activeTab === tabId ? 'linear-gradient(135deg, #4f46e5, #6366f1)' : '#f8fafc',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    color: activeTab === tabId ? 'white' : '#1f2937',
    transform: activeTab === tabId ? 'translateY(-5px)' : 'translateY(0)',
    boxShadow: activeTab === tabId ? '0 15px 35px rgba(79, 70, 229, 0.4)' : 'none'
  });

  const tabIconStyles = {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    width: '2.5rem',
    height: '2.5rem',
    background: activeTab === 'training' ? '#4f46e5' : '#6b7280',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  const tabTitleStyles = {
    fontSize: '1.1rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  };

  // Content section styles
  const servicesContentStyles = {
    padding: '5rem 0',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 16px' : '0 24px'
  };

  const serviceSectionStyles = {
    display: activeTab === 'training' ? 'block' : 'none',
    animation: 'serviceSlideIn 0.6s ease-out'
  };

  const serviceHeaderStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '2fr 1fr',
    gap: '4rem',
    marginBottom: '4rem',
    alignItems: 'center'
  };

  const serviceIntroStyles = {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    textAlign: window.innerWidth <= 768 ? 'center' : 'left'
  };

  const serviceIconLargeStyles = {
    fontSize: '5rem',
    background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
    borderRadius: '25px',
    padding: '1.5rem',
    boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)',
    animation: 'iconFloat 3s ease-in-out infinite'
  };

  const serviceTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.2rem' : '3rem',
    fontWeight: '800',
    color: '#1a202c',
    marginBottom: '1rem',
    lineHeight: '1.2',
    fontFamily: "'Poppins', sans-serif"
  };

  const serviceSubtitleStyles = {
    fontSize: '1.3rem',
    color: '#4a5568',
    lineHeight: '1.6'
  };

  const serviceStatsStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem'
  };

  const statCardStyles = {
    background: 'white',
    padding: '2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e2e8f0',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  };

  const statCardBeforeStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #4f46e5, #06b6d4, #10b981)',
    animation: 'progressBar 3s ease-in-out infinite'
  };

  const renderCurrentService = () => {
    const service = servicesData[activeTab];
    
    return (
      <div style={serviceSectionStyles}>
        <div style={serviceHeaderStyles}>
          <div style={serviceIntroStyles}>
            <div style={serviceIconLargeStyles}>
              {service.icon}
            </div>
            <div>
              <h1 style={serviceTitleStyles}>{service.title}</h1>
              <p style={serviceSubtitleStyles}>{service.subtitle}</p>
            </div>
          </div>
          
          <div style={serviceStatsStyles}>
            <div style={statCardStyles}>
              <div style={statCardBeforeStyles} />
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#4f46e5', marginBottom: '0.5rem' }}>
                500+
              </div>
              <div style={{ fontSize: '1rem', color: '#4a5568', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Success Stories
              </div>
            </div>
          </div>
        </div>

        {/* Render specific content based on active tab */}
        {activeTab === 'training' && renderTrainingPrograms()}
        {activeTab === 'placement' && renderPlacementServices()}
        {activeTab === 'consultancy' && renderConsultancySolutions()}
      </div>
    );
  };

  const renderTrainingPrograms = () => {
    const programs = servicesData.training.programs;
    
    const programsGridStyles = {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    };

    const programCardStyles = (isHovered) => ({
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      border: '2px solid transparent',
      transform: isHovered ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: isHovered 
        ? '0 25px 50px rgba(79, 70, 229, 0.25)' 
        : '0 10px 30px rgba(0, 0, 0, 0.1)'
    });

    const programHeaderStyles = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1.5rem',
      padding: '2rem 2rem 0'
    };

    const programPriceStyles = {
      fontSize: '2rem',
      fontWeight: '800',
      color: '#4f46e5',
      textShadow: '0 2px 4px rgba(79, 70, 229, 0.2)'
    };

    const programContentStyles = {
      padding: '0 2rem 2rem'
    };

    return (
      <div>
        <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a202c', marginBottom: '2rem', textAlign: 'center' }}>
          Training Programs
        </h3>
        <div style={programsGridStyles}>
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredService(program.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Card style={programCardStyles(hoveredService === program.id)} hover={false}>
                <div style={programHeaderStyles}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1a202c', lineHeight: '1.3' }}>
                      {program.title}
                    </h4>
                  </div>
                  <div style={programPriceStyles}>{program.price}</div>
                </div>
                
                <div style={programContentStyles}>
                  <p style={{ marginBottom: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                    {program.description}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.9rem', color: '#4a5568' }}>
                      <strong style={{ color: '#1a202c' }}>Duration:</strong> {program.duration}
                    </span>
                    <span style={{ fontSize: '0.9rem', color: '#4a5568' }}>
                      <strong style={{ color: '#1a202c' }}>Level:</strong> {program.level}
                    </span>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {program.technologies.map(tech => (
                        <span key={tech} style={{
                          background: 'linear-gradient(135deg, #e0e7ff, #c7d2fe)',
                          color: '#4f46e5',
                          padding: '0.4rem 1rem',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          border: '1px solid #c7d2fe'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="primary" style={{ width: '100%' }}>
                    Enroll Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderPlacementServices = () => (
    <div>
      <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a202c', marginBottom: '2rem', textAlign: 'center' }}>
        Placement Services
      </h3>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#4a5568', marginBottom: '3rem' }}>
        End-to-end job placement support with guaranteed results
      </p>
    </div>
  );

  const renderConsultancySolutions = () => (
    <div>
      <h3 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#1a202c', marginBottom: '2rem', textAlign: 'center' }}>
        IT Consultancy Solutions
      </h3>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#4a5568', marginBottom: '3rem' }}>
        Strategic technology consulting for digital transformation
      </p>
    </div>
  );

  // Testimonials section
  const renderTestimonials = () => {
    const testimonialsGridStyles = {
      display: 'grid',
      gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem'
    };

    const testimonialCardStyles = (isHovered) => ({
      background: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      borderRadius: '25px',
      padding: '0',
      overflow: 'hidden',
      transition: 'all 0.4s ease',
      border: '2px solid transparent',
      transform: isHovered ? 'translateY(-10px) rotate(2deg)' : 'translateY(0) rotate(0deg)',
      boxShadow: isHovered 
        ? '0 25px 50px rgba(79, 70, 229, 0.2)' 
        : '0 10px 30px rgba(0, 0, 0, 0.1)'
    });

    return (
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={containerStyles}>
          <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#1a202c', textAlign: 'center', marginBottom: '3rem' }}>
            What Our Students Say
          </h2>
          <div style={testimonialsGridStyles}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                <Card style={testimonialCardStyles(hoveredTestimonial === testimonial.id)} hover={false}>
                  <div style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      background: '#4f46e5',
                      color: 'white',
                      borderRadius: '50%',
                      minWidth: '60px',
                      height: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(79, 70, 229, 0.25)',
                      letterSpacing: '0.05em'
                    }}>
                      {testimonial.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontStyle: 'italic',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: '#4a5568',
                        marginBottom: '1rem'
                      }}>
                        "{testimonial.text}"
                      </p>
                      <div>
                        <div style={{
                          fontSize: '1.2rem',
                          fontWeight: '700',
                          color: '#1a202c',
                          marginBottom: '0.25rem'
                        }}>
                          {testimonial.name}
                        </div>
                        <div style={{
                          color: '#4f46e5',
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}>
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // CTA Section
  const renderCTA = () => {
    const ctaSectionStyles = {
      padding: '5rem 0',
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    };

    const ctaBackgroundStyles = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    const ctaParticlesStyles = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage: `
        radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,0.2), transparent),
        radial-gradient(1px 1px at 75px 75px, rgba(255,255,255,0.1), transparent),
        radial-gradient(1px 1px at 125px 25px, rgba(255,255,255,0.2), transparent)
      `,
      backgroundSize: '150px 150px',
      animation: 'particleFloat 25s linear infinite'
    };

    const ctaContentStyles = {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      maxWidth: '700px',
      margin: '0 auto'
    };

    const ctaTitleStyles = {
      fontSize: window.innerWidth <= 768 ? '2.5rem' : '3.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #ffffff, #fbbf24)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      fontFamily: "'Poppins', sans-serif"
    };

    const ctaTextStyles = {
      fontSize: '1.3rem',
      opacity: '0.9',
      marginBottom: '3rem',
      lineHeight: '1.6'
    };

    const ctaButtonsStyles = {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
      alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
    };

    return (
      <section style={ctaSectionStyles}>
        <div style={ctaBackgroundStyles}>
          <div style={ctaParticlesStyles} />
        </div>
        <div style={containerStyles}>
          <div style={ctaContentStyles}>
            <h2 style={ctaTitleStyles}>Ready to Transform Your Career?</h2>
            <p style={ctaTextStyles}>
              Join thousands of professionals who have accelerated their careers with our comprehensive programs.
            </p>
            <div style={ctaButtonsStyles}>
              <Button variant="primary" size="large">
                Get Started Today
              </Button>
              <Button variant="secondary" size="large">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{animationKeyframes}</style>
      
      <div style={servicesPageStyles}>
        <Header />
        
        {/* Hero Section */}
        <section style={heroStyles}>
          <div style={heroBackgroundStyles}>
            <div style={heroParticlesStyles} />
            <div style={heroWavesStyles} />
          </div>
          
          <div style={heroContentStyles}>
            <div style={heroBadgeStyles}>
              🚀 Professional Services & Solutions
            </div>
            
            <h1 style={heroTitleStyles}>
              Accelerate Your <span style={gradientTextStyles}>Tech Career</span>
            </h1>
            
            <p style={heroSubtitleStyles}>
              Comprehensive training, guaranteed placements, and strategic consultancy services 
              designed to propel your success in the technology industry.
            </p>
            
            <div style={heroCtaStyles}>
              <Button variant="primary" size="large">
                Explore Programs
              </Button>
              <Button variant="secondary" size="large">
                Book Consultation
              </Button>
            </div>
            
            <div style={heroStatsStyles}>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>500+</span>
                <span style={statLabelStyles}>Successful Placements</span>
              </div>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>95%</span>
                <span style={statLabelStyles}>Success Rate</span>
              </div>
              <div style={statItemStyles}>
                <span style={statNumberStyles}>₹18L</span>
                <span style={statLabelStyles}>Average Package</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section style={servicesNavStyles}>
          <div style={containerStyles}>
            <div style={navTabsStyles}>
              {[
                { id: 'training', label: 'Training Programs', icon: 'TR' },
                { id: 'placement', label: 'Placement Services', icon: 'PL' },
                { id: 'consultancy', label: 'IT Consultancy', icon: 'IT' }
              ].map(tab => (
                <div
                  key={tab.id}
                  style={navTabStyles(tab.id)}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <div style={tabIconStyles}>{tab.icon}</div>
                  <div style={tabTitleStyles}>{tab.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Content */}
        <section style={servicesContentStyles}>
          <div style={containerStyles}>
            {renderCurrentService()}
          </div>
        </section>

        {/* Testimonials */}
        <motion.div ref={ref}>
          {renderTestimonials()}
        </motion.div>

        {/* CTA Section */}
        {renderCTA()}

        <Footer />
      </div>
    </>
  );
};

export default Services;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'training',
      title: 'Professional Training Programs',
      subtitle: 'Master cutting-edge technologies with industry experts',
      icon: 'training',
      color: 'primary',
      features: [
        '1-on-1 Personal Mentorship Sessions',
        'Dedicated Industry Expert Guidance',
        'Industry-Aligned Curriculum',
        'Real Project Experience with Mentor',
        'Weekly 1-on-1 Progress Reviews',
        'Personalized Learning Path'
      ],
      stats: [
        { number: '2000+', label: 'Students Trained' },
        { number: '95%', label: 'Completion Rate' },
        { number: '50+', label: 'Course Modules' }
      ],
      programs: [
        {
          name: 'Full-Stack Web Development',
          duration: '16 weeks',
          level: 'Beginner to Advanced',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
          price: '₹2,49,000'
        },
        {
          name: 'Data Science & AI',
          duration: '14 weeks',
          level: 'Intermediate',
          technologies: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'],
          price: '₹2,75,000'
        },
        {
          name: 'Mobile App Development',
          duration: '12 weeks',
          level: 'Intermediate',
          technologies: ['React Native', 'Flutter', 'Firebase'],
          price: '₹2,15,000'
        }
      ]
    },
    {
      id: 'placement',
      title: 'Guaranteed Job Placements',
      subtitle: 'Your dream job is just one step away',
      icon: 'placement',
      color: 'secondary',
      features: [
        '100% Placement Guarantee',
        'Personal Career Mentor Assignment',
        '1-on-1 Resume & Portfolio Review',
        'Mock Interview Sessions with Mentor',
        'Salary Negotiation Coaching',
        'Lifetime Career Guidance'
      ],
      stats: [
        { number: '500+', label: 'Successful Placements' },
        { number: '₹8.5L+', label: 'Average Package' },
        { number: '200+', label: 'Partner Companies' }
      ],
      companies: [
        { name: 'Google', logo: 'G' },
        { name: 'Microsoft', logo: 'M' },
        { name: 'Amazon', logo: 'A' },
        { name: 'Meta', logo: 'M' },
        { name: 'Apple', logo: 'A' },
        { name: 'Netflix', logo: 'N' }
      ],
      process: [
        { step: 1, title: 'Skill Assessment', description: 'Evaluate your current skills and identify growth areas' },
        { step: 2, title: 'Profile Enhancement', description: 'Build an impressive resume and portfolio' },
        { step: 3, title: 'Job Matching', description: 'Connect with relevant opportunities' },
        { step: 4, title: 'Interview Prep', description: 'Comprehensive interview preparation and practice' },
        { step: 5, title: 'Placement', description: 'Land your dream job with our support' }
      ]
    },
    {
      id: 'consultancy',
      title: 'IT Consultancy Services',
      subtitle: 'Full-time dedicated team for your business growth',
      icon: 'consulting',
      color: 'accent',
      features: [
        'Dedicated Full-time Development Teams',
        'Personal Project Manager Assignment',
        'Weekly 1-on-1 Progress Meetings',
        'Custom Enterprise Solutions',
        'Direct Communication with Team Lead',
        '24/7 Priority Support Channel'
      ],
      stats: [
        { number: '50+', label: 'Enterprise Clients' },
        { number: '200+', label: 'Projects Delivered' },
        { number: '99.9%', label: 'Uptime SLA' }
      ],
      solutions: [
        {
          title: 'Enterprise Software Development',
          description: 'Custom enterprise solutions built with modern technologies',
          technologies: ['React', 'Node.js', 'AWS', 'Docker'],
          timeline: '3-6 months'
        },
        {
          title: 'Cloud Migration & DevOps',
          description: 'Seamless migration to cloud with robust DevOps practices',
          technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
          timeline: '2-4 months'
        },
        {
          title: 'Data Analytics Platform',
          description: 'AI-powered analytics and business intelligence solutions',
          technologies: ['Python', 'TensorFlow', 'PowerBI', 'Snowflake'],
          timeline: '4-8 months'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      image: 'SC',
      text: 'Datenwork transformed my career. Their training program was comprehensive and the placement support was exceptional.',
      service: 'training'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Data Scientist at Netflix',
      image: 'MR',
      text: 'From zero coding experience to landing my dream job in 6 months. The mentorship was invaluable.',
      service: 'placement'
    },
    {
      name: 'Emily Johnson',
      role: 'CTO at TechStart',
      image: 'EJ',
      text: 'Their consultancy team helped us scale from startup to enterprise. Exceptional technical expertise.',
      service: 'consultancy'
    }
  ];

  return (
    <div className="services-page">
      <Header />
      
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-waves"></div>
        </div>
        <div className="services-hero-content">
          <div className="hero-badge">
            <span>Premium Services</span>
          </div>
          <h1 className="hero-title">
            Transforming Careers & 
            <span className="gradient-text"> Businesses</span>
          </h1>
          <p className="hero-subtitle">
            Experience personalized 1-on-1 mentorship that transforms careers and businesses. 
            From dedicated training sessions to guaranteed placements with personal guidance.
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="large">Explore Our Services</Button>
            <Button variant="outline" size="large">Schedule Consultation</Button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2500+</span>
              <span className="stat-label">Success Stories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="services-nav">
        <div className="container">
          <div className="nav-tabs">
            {services.map((service, index) => (
              <button
                key={service.id}
                className={`nav-tab ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <span className="tab-icon">{service.icon.charAt(0).toUpperCase()}</span>
                <span className="tab-title">{service.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Content */}
      <section className="services-content">
        <div className="container">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-section ${activeService === index ? 'active' : ''}`}
              id={service.id}
            >
              <div className="service-header">
                <div className="service-intro">
                  <div className="service-icon-large">
                    {service.icon.charAt(0).toUpperCase()}
                  </div>
                  <div className="service-text">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>
                </div>
                <div className="service-stats">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-features">
                <h3>What We Offer</h3>
                <div className="features-grid">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-card">
                      <div className="feature-icon">✓</div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Specific Content */}
              {service.id === 'training' && (
                <div className="training-programs">
                  <h3>Featured Programs</h3>
                  <div className="programs-grid">
                    {service.programs.map((program, idx) => (
                      <Card key={idx} className="program-card">
                        <div className="program-header">
                          <h4>{program.name}</h4>
                          <div className="program-price">{program.price}</div>
                        </div>
                        <div className="program-details">
                          <div className="program-meta">
                            <span>⏱️ {program.duration}</span>
                            <span>📊 {program.level}</span>
                          </div>
                          <div className="program-technologies">
                            {program.technologies.map((tech, techIdx) => (
                              <span key={techIdx} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                        <Button variant="primary" className="program-btn">
                          Learn More
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {service.id === 'placement' && (
                <>
                  <div className="placement-companies">
                    <h3>Our Partner Companies</h3>
                    <div className="companies-grid">
                      {service.companies.map((company, idx) => (
                        <div key={idx} className="company-card">
                          <div className="company-logo">{company.logo}</div>
                          <span className="company-name">{company.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="placement-process">
                    <h3>Our Placement Process</h3>
                    <div className="process-timeline">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="process-step">
                          <div className="step-number">{step.step}</div>
                          <div className="step-content">
                            <h4>{step.title}</h4>
                            <p>{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {service.id === 'consultancy' && (
                <div className="consultancy-solutions">
                  <h3>Enterprise Solutions</h3>
                  <div className="solutions-grid">
                    {service.solutions.map((solution, idx) => (
                      <Card key={idx} className="solution-card">
                        <h4>{solution.title}</h4>
                        <p>{solution.description}</p>
                        <div className="solution-meta">
                          <div className="solution-technologies">
                            {solution.technologies.map((tech, techIdx) => (
                              <span key={techIdx} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                          <div className="solution-timeline">
                            ⏱️ {solution.timeline}
                          </div>
                        </div>
                        <Button variant="outline" className="solution-btn">
                          Discuss Project
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="services-testimonials">
        <div className="container">
          <h2>Success Stories</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="testimonial-card">
                <div className="testimonial-content">
                  <div className="testimonial-image">{testimonial.image}</div>
                  <div className="testimonial-text">
                    <p>"{testimonial.text}"</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="cta-background">
          <div className="cta-particles"></div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Future?</h2>
            <p>Join thousands who have already transformed their careers and businesses with us</p>
            <div className="cta-buttons">
              <Link to="/contact">
                <Button variant="secondary" size="large">Get Started Today</Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="large">Explore Programs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
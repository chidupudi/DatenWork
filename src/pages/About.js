import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const About = () => {
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

  return (
    <div className="about-page">
      <Header />
      
      <section className="about-hero" style={{ padding: '120px 0 80px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'white' }}>About Datenwork</h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}>
              We are a leading technology training and placement company dedicated to bridging the gap between talent and opportunity. 
              With over 5 years of experience, we've successfully placed 500+ professionals in top tech companies worldwide.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: '#1a202c' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#4a5568' }}>
                Founded in 2019, Datenwork emerged from a simple yet powerful vision: to democratize access to high-quality 
                tech education and career opportunities. Our founders, having experienced the challenges of breaking into 
                the tech industry firsthand, were determined to create a platform that would make this journey smoother 
                for others.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: '#4a5568' }}>
                Starting with just 10 students in our first cohort, we've grown to become one of the most trusted names 
                in tech training and placement. Our success is measured not just in numbers, but in the success stories 
                of our graduates who are now thriving in their dream careers.
              </p>
              <Button variant="primary">Learn More About Our Journey</Button>
            </div>
            <div style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', height: '400px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
              🚀
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#f7fafc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a202c' }}>Our Values</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
              Our core values guide every decision we make and every relationship we build
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {values.map(value => (
              <Card key={value.title} style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#1a202c' }}>{value.title}</h3>
                <p style={{ color: '#4a5568', lineHeight: '1.6' }}>{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#1a202c' }}>Meet Our Team</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', maxWidth: '600px', margin: '0 auto' }}>
              Our experienced team of industry experts is dedicated to your success
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {team.map(member => (
              <Card key={member.id} style={{ textAlign: 'center', padding: '40px 30px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>{member.image}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#1a202c' }}>{member.name}</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#667eea', fontWeight: '600' }}>{member.role}</p>
                <p style={{ marginBottom: '20px', color: '#4a5568' }}>{member.experience}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                  {member.specialties.map(specialty => (
                    <span key={specialty} style={{ 
                      background: '#e6fffa', 
                      color: '#00b5a5', 
                      padding: '4px 12px', 
                      borderRadius: '20px', 
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {specialty}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white' }}>Ready to Start Your Journey?</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 40px' }}>
              Join thousands of successful professionals who transformed their careers with Datenwork
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="secondary" size="large">Browse Courses</Button>
              <Button variant="outline" size="large" style={{ borderColor: 'white', color: 'white' }}>Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
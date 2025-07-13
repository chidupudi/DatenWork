import React from 'react';
import { motion } from 'framer-motion';

const TransformationStories = () => {
  // Styles needed for this component
  const sectionStyles = {
    padding: window.innerWidth <= 768 ? '60px 0' : '80px 0',
    position: 'relative',
    background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: window.innerWidth <= 768 ? '0 20px' : '0 24px',
    position: 'relative',
    zIndex: 2
  };

  const sectionHeaderStyles = {
    textAlign: 'center',
    marginBottom: window.innerWidth <= 768 ? '40px' : '60px'
  };

  const sectionTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.75rem' : '2.5rem',
    marginBottom: '16px',
    color: '#1a202c',
    fontWeight: '600',
    fontFamily: "'Poppins', sans-serif"
  };

  const sectionSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1rem' : '1.1rem',
    color: '#4a5568',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  };
  
  // Data for the stories
  const stories = [
    {
      before: { role: 'Manual Tester', salary: '₹6.5 LPA', skills: 'Basic Testing' },
      after: { role: 'Full Stack Developer', salary: '₹12 LPA', skills: 'React, Node.js, AWS' },
      duration: '6 months',
      highlight: 'Career Switch',
      color: '#4f46e5',
      bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      before: { role: 'Support Engineer', salary: '₹4 LPA', skills: 'Technical Support' },
      after: { role: 'DevOps Engineer', salary: '₹13 LPA', skills: 'Kubernetes, Docker, CI/CD' },
      duration: '4 months',
      highlight: 'Skill Upgrade',
      color: '#14b8a6',
      bgGradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'
    },
    {
      before: { role: 'Fresher Graduate', salary: '₹0', skills: 'Academic Knowledge' },
      after: { role: 'Data Scientist', salary: '₹15 LPA', skills: 'Python, ML, Analytics' },
      duration: '6 months',
      highlight: 'Fresh Start',
      color: '#f59e0b',
      bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    }
  ];

  return (
    <section style={sectionStyles}>
      <div style={containerStyles}>
        <motion.div 
          style={sectionHeaderStyles}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 style={sectionTitleStyles}>Transformation Stories</h2>
          <p style={sectionSubtitleStyles}>
            Real people, real transformations - see how we've changed lives and careers
          </p>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
          gap: window.innerWidth <= 768 ? '24px' : '32px'
        }}>
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: window.innerWidth <= 768 ? '28px' : '36px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Enhanced Background Pattern */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-30%',
                width: '200px',
                height: '200px',
                background: story.bgGradient,
                borderRadius: '50%',
                opacity: 0.08,
                filter: 'blur(60px)',
                zIndex: 1
              }} />

              {/* Highlight Badge - Enhanced */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: story.bgGradient,
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: `0 8px 20px ${story.color}40`,
                zIndex: 10
              }}>
                {story.highlight}
              </div>

              {/* Content Container */}
              <div style={{ position: 'relative', zIndex: 5 }}>
                {/* Before State - Enhanced */}
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                  borderRadius: '16px',
                  padding: '20px',
                  marginBottom: '24px',
                  position: 'relative',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    fontWeight: '700',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#ef4444',
                      borderRadius: '50%'
                    }} />
                    Before Transformation
                  </div>
                  <div style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '700', 
                    color: '#1e293b', 
                    marginBottom: '6px' 
                  }}>
                    {story.before.role}
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: '#dc2626', 
                    fontWeight: '600', 
                    marginBottom: '12px' 
                  }}>
                    {story.before.salary}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: '#64748b',
                    fontStyle: 'italic'
                  }}>
                    Skills: {story.before.skills}
                  </div>
                </div>

                {/* Transformation Arrow - Enhanced */}
                <div style={{
                  textAlign: 'center',
                  marginBottom: '24px',
                  position: 'relative'
                }}>
                  <div style={{
                    background: story.bgGradient,
                    color: 'white',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    boxShadow: `0 8px 20px ${story.color}30`,
                    transform: 'rotate(90deg)',
                    transition: 'all 0.3s ease'
                  }}>
                    →
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: story.color,
                    fontWeight: '700',
                    marginTop: '12px',
                    background: `${story.color}15`,
                    padding: '4px 12px',
                    borderRadius: '12px',
                    display: 'inline-block',
                    border: `1px solid ${story.color}30`
                  }}>
                    {story.duration}
                  </div>
                </div>

                {/* After State - Enhanced */}
                <div style={{
                  background: `linear-gradient(135deg, ${story.color}08 0%, ${story.color}04 100%)`,
                  borderRadius: '16px',
                  padding: '20px',
                  border: `2px solid ${story.color}20`,
                  position: 'relative'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: story.color,
                    fontWeight: '700',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      background: '#10b981',
                      borderRadius: '50%'
                    }} />
                    After Transformation
                  </div>
                  <div style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: '700', 
                    color: '#1e293b', 
                    marginBottom: '6px' 
                  }}>
                    {story.after.role}
                  </div>
                  <div style={{ 
                    fontSize: '1rem', 
                    color: '#059669', 
                    fontWeight: '700', 
                    marginBottom: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>💰</span>
                    {story.after.salary}
                  </div>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: '#475569',
                    fontWeight: '500'
                  }}>
                    Skills: {story.after.skills}
                  </div>

                  {/* Success Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: '#10b981',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    fontWeight: '600'
                  }}>
                    ✓ Success
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationStories;
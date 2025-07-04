import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
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

  const itemVariants = {
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

  return (
    <section className="hero" id="home" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f766e 100%)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      zIndex: 1
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.3)',
        zIndex: 0
      }} />
      
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
          width: '100%'
        }}
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '24px',
              color: '#ffffff',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
            }}
          >
            Empowering Talent, Driving Global Tech Success
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
            style={{
              fontSize: '1.25rem',
              marginBottom: '32px',
              color: '#e2e8f0',
              lineHeight: '1.6',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)'
            }}
          >
            Transform your career with expert training, guaranteed placements, and world-class consultancy
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '16px',
              marginBottom: '48px',
              flexWrap: 'wrap'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="large">
                Explore Training Programs
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" size="large">
                Find Your Dream Job
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            variants={itemVariants}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }}
          >
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <span className="stat-number" style={{
                display: 'block',
                fontSize: '3rem',
                fontWeight: '800',
                color: '#fbbf24',
                marginBottom: '4px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>500+</span>
              <span className="stat-label" style={{
                fontSize: '0.875rem',
                opacity: '0.9',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>Successful Placements</span>
            </motion.div>
            
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <span className="stat-number" style={{
                display: 'block',
                fontSize: '3rem',
                fontWeight: '800',
                color: '#fbbf24',
                marginBottom: '4px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>5+</span>
              <span className="stat-label" style={{
                fontSize: '0.875rem',
                opacity: '0.9',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>Years Experience</span>
            </motion.div>
            
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <span className="stat-number" style={{
                display: 'block',
                fontSize: '3rem',
                fontWeight: '800',
                color: '#fbbf24',
                marginBottom: '4px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
              }}>50+</span>
              <span className="stat-label" style={{
                fontSize: '0.875rem',
                opacity: '0.9',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>Partner Companies</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          variants={itemVariants}
          style={{
            position: 'relative',
            height: '500px'
          }}
        >
          <div className="hero-image-placeholder" style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <motion.div 
              className="geometric-shape shape-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
                top: '20%',
                left: '10%',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            
            <motion.div 
              className="geometric-shape shape-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -3, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              style={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)',
                top: '60%',
                right: '20%',
                borderRadius: '50%',
                boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            
            <motion.div 
              className="geometric-shape shape-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              style={{
                position: 'absolute',
                width: '120px',
                height: '120px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
                top: '40%',
                right: '40%',
                clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Mobile Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            text-align: center;
            padding: 0 16px !important;
          }
          
          .hero-visual {
            height: 300px !important;
            order: -1;
          }
          
          .hero-stats {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          
          .hero-cta {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
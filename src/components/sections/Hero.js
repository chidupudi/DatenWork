import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

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

  // Animation keyframes
  const animationKeyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    @keyframes floatShape1 {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-20px) rotate(5deg);
      }
    }

    @keyframes floatShape2 {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-15px) rotate(-3deg);
      }
    }

    @keyframes floatShape3 {
      0%, 100% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-25px) rotate(8deg);
      }
    }
  `;

  // Main hero section styles
  const heroStyles = {
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f766e 100%)',
    color: 'white',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    width: '100%'
  };

  // Background overlay styles
  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
      url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.08)"/></pattern></defs><rect width="100" height="100" fill="url(%23dots)"/></svg>')
    `,
    zIndex: 0
  };

  const darkOverlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: 0
  };

  // Container styles
  const heroContainerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '32px' : '48px',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    width: '100%',
    textAlign: window.innerWidth <= 768 ? 'center' : 'left'
  };

  // Content styles
  const heroContentStyles = {
    animation: 'fadeInUp 0.8s ease-out'
  };

  const heroTitleStyles = {
    fontSize: window.innerWidth <= 768 ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    marginBottom: '24px',
    color: '#ffffff',
    textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
  };

  const heroSubtitleStyles = {
    fontSize: window.innerWidth <= 768 ? '1.125rem' : '1.25rem',
    marginBottom: '32px',
    color: '#e2e8f0',
    lineHeight: '1.6',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',
    fontWeight: '400'
  };

  const heroCtaStyles = {
    display: 'flex',
    gap: '16px',
    marginBottom: '48px',
    flexWrap: 'wrap',
    justifyContent: window.innerWidth <= 768 ? 'center' : 'flex-start',
    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
    alignItems: window.innerWidth <= 768 ? 'center' : 'flex-start'
  };

  const heroStatsStyles = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(3, 1fr)',
    gap: window.innerWidth <= 768 ? '16px' : '24px'
  };

  const statStyles = {
    textAlign: 'center'
  };

  const statNumberStyles = {
    display: 'block',
    fontSize: window.innerWidth <= 768 ? '2rem' : '3rem',
    fontWeight: '800',
    color: '#fbbf24',
    marginBottom: '4px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
  };

  const statLabelStyles = {
    fontSize: '0.875rem',
    opacity: '0.9',
    color: '#ffffff',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
  };

  // Visual section styles
  const heroVisualStyles = {
    position: 'relative',
    height: window.innerWidth <= 768 ? '300px' : '500px',
    animation: 'fadeInRight 0.8s ease-out 0.2s both',
    order: window.innerWidth <= 768 ? -1 : 0
  };

  const heroImagePlaceholderStyles = {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const geometricShapeBaseStyles = {
    position: 'absolute',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const shape1Styles = {
    ...geometricShapeBaseStyles,
    width: '200px',
    height: '200px',
    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2) 0%, rgba(245, 158, 11, 0.2) 100%)',
    top: '20%',
    left: '10%',
    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
    animation: 'floatShape1 4s ease-in-out infinite'
  };

  const shape2Styles = {
    ...geometricShapeBaseStyles,
    width: '150px',
    height: '150px',
    background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)',
    top: '60%',
    right: '20%',
    borderRadius: '50%',
    boxShadow: '0 8px 32px rgba(20, 184, 166, 0.15)',
    animation: 'floatShape2 3s ease-in-out infinite 1s'
  };

  const shape3Styles = {
    ...geometricShapeBaseStyles,
    width: '120px',
    height: '120px',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)',
    top: '40%',
    right: '40%',
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.1)',
    animation: 'floatShape3 5s ease-in-out infinite 2s'
  };

  return (
    <>
      {/* Inject keyframes */}
      <style>{animationKeyframes}</style>
      
      <section style={heroStyles} id="home">
        <div style={overlayStyles} />
        <div style={darkOverlayStyles} />
        
        <motion.div 
          style={heroContainerStyles}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div style={heroContentStyles} variants={itemVariants}>
            <motion.h1 
              style={heroTitleStyles}
              variants={itemVariants}
            >
              Empowering Talent, Driving Global Tech Success
            </motion.h1>
            
            <motion.p 
              style={heroSubtitleStyles}
              variants={itemVariants}
            >
              Transform your career with expert training, guaranteed placements, and world-class consultancy
            </motion.p>
            
            <motion.div 
              style={heroCtaStyles}
              variants={itemVariants}
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
              style={heroStatsStyles}
              variants={itemVariants}
            >
              <motion.div 
                style={statStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>500+</span>
                <span style={statLabelStyles}>Successful Placements</span>
              </motion.div>
              
              <motion.div 
                style={statStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>5+</span>
                <span style={statLabelStyles}>Years Experience</span>
              </motion.div>
              
              <motion.div 
                style={statStyles}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span style={statNumberStyles}>50+</span>
                <span style={statLabelStyles}>Partner Companies</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            style={heroVisualStyles}
            variants={itemVariants}
          >
            <div style={heroImagePlaceholderStyles}>
              <div style={shape1Styles} />
              <div style={shape2Styles} />
              <div style={shape3Styles} />
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
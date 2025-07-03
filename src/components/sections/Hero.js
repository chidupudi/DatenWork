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

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero" id="home">
      <motion.div 
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Empowering Talent, Driving Global Tech Success
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            variants={itemVariants}
          >
            Transform your career with expert training, guaranteed placements, and world-class consultancy
          </motion.p>
          <motion.div 
            className="hero-cta"
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
            className="hero-stats"
            variants={itemVariants}
          >
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="stat-number">500+</span>
              <span className="stat-label">Successful Placements</span>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="stat-number">50+</span>
              <span className="stat-label">Partner Companies</span>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          variants={itemVariants}
        >
          <div className="hero-image-placeholder">
            <motion.div 
              className="geometric-shape shape-1"
              variants={shapeVariants}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            <motion.div 
              className="geometric-shape shape-2"
              variants={shapeVariants}
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
            ></motion.div>
            <motion.div 
              className="geometric-shape shape-3"
              variants={shapeVariants}
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
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
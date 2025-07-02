import React from 'react';
import Button from '../common/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Empowering Talent, Driving Global Tech Success
          </h1>
          <p className="hero-subtitle">
            Transform your career with expert training, guaranteed placements, and world-class consultancy
          </p>
          <div className="hero-cta">
            <Button variant="primary" size="large">
              Explore Training Programs
            </Button>
            <Button variant="secondary" size="large">
              Find Your Dream Job
            </Button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Successful Placements</span>
            </div>
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Partner Companies</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-placeholder">
            <div className="geometric-shape shape-1"></div>
            <div className="geometric-shape shape-2"></div>
            <div className="geometric-shape shape-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
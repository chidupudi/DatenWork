import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

// Professional color palette inspired by premium SaaS platforms
const brandColors = {
  // Primary brand colors
  primary: '#6366f1',
  primaryDark: '#4f46e5',
  primaryLight: '#a5b4fc',
  
  // Sophisticated gradients
  primaryGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  heroGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  cardGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  
  // Neutral colors (modern gray scale)
  white: '#ffffff',
  gray50: '#fafafa',
  gray100: '#f5f5f5',
  gray200: '#e5e5e5',
  gray300: '#d4d4d4',
  gray400: '#a3a3a3',
  gray500: '#737373',
  gray600: '#525252',
  gray700: '#404040',
  gray800: '#262626',
  gray900: '#171717',
  
  // Text colors
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textTertiary: '#64748b',
  textInverse: '#ffffff',
  
  // Background colors
  background: '#ffffff',
  backgroundSecondary: '#fafafa',
  backgroundTertiary: '#f8fafc',
  
  // Border colors
  border: '#e2e8f0',
  borderLight: '#f1f5f9',
  borderDark: '#cbd5e1',
  
  // Status colors
  success: '#059669',
  successLight: '#d1fae5',
  warning: '#d97706',
  warningLight: '#fef3c7',
  error: '#dc2626',
  errorLight: '#fee2e2',
  info: '#0284c7',
  infoLight: '#dbeafe',
  
  // Plan-specific colors
  basicColor: '#8b5cf6',
  basicGradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)',
  basicBg: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
  
  eliteColor: '#6366f1',
  eliteGradient: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
  eliteBg: 'linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)',
  
  advanceColor: '#059669',
  advanceGradient: 'linear-gradient(135deg, #34d399 0%, #059669 100%)',
  advanceBg: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
  
  premiumColor: '#dc2626',
  premiumGradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
  premiumBg: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
  
  platinumColor: '#7c3aed',
  platinumGradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)',
  platinumBg: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
  
  // Shadow colors
  shadowSm: 'rgba(0, 0, 0, 0.05)',
  shadowMd: 'rgba(0, 0, 0, 0.1)',
  shadowLg: 'rgba(0, 0, 0, 0.15)',
  shadowXl: 'rgba(0, 0, 0, 0.25)'
};

const PlacementProgram = () => {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateCards(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Professional pricing plans with enhanced features
  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic',
      subtitle: 'Perfect for fresh graduates',
      totalCost: '$1,500 + 17%',
      prePlacementCost: '$1,500',
      postPlacementCost: '17% of first year salary',
      monthlyEquivalent: '$125/month',
      yearlyEquivalent: '$1,500/year',
      popular: false,
      tier: 'starter',
      color: brandColors.basicColor,
      gradient: brandColors.basicGradient,
      bgGradient: brandColors.basicBg,
      icon: '🎯',
      badge: null,
      features: {
        paymentTerms: '4 EMI',
        resumePrep: 'Professional Resume Writing',
        rucSession: '5 Support Sessions',
        interviewAssessment: 'Mock Interview Training',
        support: 'Email & Chat Support',
        jobGuarantee: '1 Year',
        coverage: '180',
        recruiterType: 'Certified Recruiter',
        linkedinSupport: true,
        profileMarketing: true,
        backgroundCheck: true,
        personalBranding: false,
        executiveCoaching: false,
        prioritySupport: false,
        dedicatedManager: false
      }
    },
    {
      id: 'elite',
      name: 'Elite',
      subtitle: 'Most popular for mid-level professionals',
      totalCost: '$3,000 + 15%',
      prePlacementCost: '$3,000',
      postPlacementCost: '15% of first year salary',
      monthlyEquivalent: '$250/month',
      yearlyEquivalent: '$3,000/year',
      popular: true,
      tier: 'professional',
      color: brandColors.eliteColor,
      gradient: brandColors.eliteGradient,
      bgGradient: brandColors.eliteBg,
      icon: '🚀',
      badge: 'Most Popular',
      features: {
        paymentTerms: '4 EMI',
        resumePrep: 'Premium Resume + LinkedIn Optimization',
        rucSession: '15 Support + Advanced Training',
        interviewAssessment: 'Advanced Mock Interviews',
        support: 'Priority Support + Phone',
        jobGuarantee: '1 Year',
        coverage: '180',
        recruiterType: 'Senior Recruiter',
        linkedinSupport: true,
        profileMarketing: true,
        backgroundCheck: true,
        personalBranding: true,
        executiveCoaching: false,
        prioritySupport: true,
        dedicatedManager: false
      }
    },
    {
      id: 'advance',
      name: 'Advance',
      subtitle: 'For experienced professionals',
      totalCost: '$5,000 + 12%',
      prePlacementCost: '$5,000',
      postPlacementCost: '12% of first year salary',
      monthlyEquivalent: '$417/month',
      yearlyEquivalent: '$5,000/year',
      popular: false,
      tier: 'advanced',
      color: brandColors.advanceColor,
      gradient: brandColors.advanceGradient,
      bgGradient: brandColors.advanceBg,
      icon: '💎',
      badge: 'Best Value',
      features: {
        paymentTerms: '4 EMI',
        resumePrep: 'Executive Resume + Portfolio',
        rucSession: 'Unlimited Support + Mentoring',
        interviewAssessment: 'Professional Interview Coaching',
        support: '24/7 Dedicated Support',
        jobGuarantee: '2 Years',
        coverage: '150',
        recruiterType: 'Expert Recruiter (3+ years)',
        linkedinSupport: true,
        profileMarketing: true,
        backgroundCheck: true,
        personalBranding: true,
        executiveCoaching: true,
        prioritySupport: true,
        dedicatedManager: true
      }
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Executive-level placement',
      totalCost: '$15,000',
      prePlacementCost: '$6,000',
      postPlacementCost: '$9,000',
      monthlyEquivalent: '$1,250/month',
      yearlyEquivalent: '$15,000/year',
      popular: false,
      tier: 'executive',
      color: brandColors.premiumColor,
      gradient: brandColors.premiumGradient,
      bgGradient: brandColors.premiumBg,
      icon: '👑',
      badge: 'Executive',
      features: {
        paymentTerms: '4 EMI',
        resumePrep: 'C-Suite Resume + Executive Branding',
        rucSession: '30 Sessions + Leadership Coaching',
        interviewAssessment: 'Executive Panel Interview Prep',
        support: 'Concierge-level Support',
        jobGuarantee: '3 Years',
        coverage: '110',
        recruiterType: 'Executive Recruiter (6+ years)',
        linkedinSupport: true,
        profileMarketing: true,
        backgroundCheck: true,
        personalBranding: true,
        executiveCoaching: true,
        prioritySupport: true,
        dedicatedManager: true
      }
    },
    {
      id: 'platinum',
      name: 'Platinum',
      subtitle: 'Ultimate career transformation',
      totalCost: '$20,000',
      prePlacementCost: '$8,000',
      postPlacementCost: '$12,000',
      monthlyEquivalent: '$1,667/month',
      yearlyEquivalent: '$20,000/year',
      popular: false,
      tier: 'enterprise',
      color: brandColors.platinumColor,
      gradient: brandColors.platinumGradient,
      bgGradient: brandColors.platinumBg,
      icon: '⭐',
      badge: 'Enterprise',
      features: {
        paymentTerms: '4 EMI',
        resumePrep: 'VIP Resume + Personal Branding Suite',
        rucSession: 'Unlimited + Executive Mentorship',
        interviewAssessment: 'C-Suite Interview Mastery',
        support: 'White-glove Service',
        jobGuarantee: '4 Years',
        coverage: '110',
        recruiterType: 'C-Suite Recruiter (10+ years)',
        linkedinSupport: true,
        profileMarketing: true,
        backgroundCheck: true,
        personalBranding: true,
        executiveCoaching: true,
        prioritySupport: true,
        dedicatedManager: true
      }
    }
  ];

  const features = [
    {
      icon: '🎯',
      title: 'Job Guarantee',
      description: 'We guarantee job placement within specified days based on your chosen plan with legal commitment',
      color: brandColors.primary,
      gradient: brandColors.primaryGradient
    },
    {
      icon: '📝',
      title: 'Expert Resume Preparation',
      description: 'Professional resume crafting by industry experts with ATS optimization',
      color: brandColors.success,
      gradient: brandColors.advanceGradient
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Personal recruiter and unlimited support throughout your career journey',
      color: brandColors.eliteColor,
      gradient: brandColors.eliteGradient
    },
    {
      icon: '💼',
      title: 'Interview Training',
      description: 'Comprehensive interview preparation and mock sessions with industry professionals',
      color: brandColors.premiumColor,
      gradient: brandColors.premiumGradient
    },
    {
      icon: '🔄',
      title: 'Flexible Payment',
      description: 'Easy EMI options for post-placement costs with transparent pricing',
      color: brandColors.basicColor,
      gradient: brandColors.basicGradient
    },
    {
      icon: '🏆',
      title: 'Success Guarantee',
      description: 'Comprehensive refund policy if we cant find you a job within guarantee period',
      color: brandColors.platinumColor,
      gradient: brandColors.platinumGradient
    }
  ];

  const guaranteeTerms = [
    "If Datenwork is unable to find the candidate a job within 110 days (Platinum plan), 150 days (Premium plan), 180 days (Advance/Elite/Basic plan) working days as per agreement, we will refund the Pre-Placement cost paid by candidate if demanded.",
    "After refunding the amount, Datenwork will not stop the candidate's services and continue to provide the services (Resume marketing, LinkedIn optimization, and background clearance for 1 or 2 years depending on the plan candidate is enrolled) by mutual understanding with candidate.",
    "After getting the job, candidate would pay us only the Post-Placement cost (Commission part) of his/her first year salary in 4 easy instalments.",
    "Commission part will be payable in first 4 months of job from the date of joining with flexible payment options.",
    "All commitments would be documented in a comprehensive legal agreement with transparent terms and conditions.",
    "Guarantee days will start from the first day of active marketing and job search activities for the candidate's profile.",
    "Extended service support (1-2 years depending on plan) includes continuous resume marketing, LinkedIn profile optimization, interview preparation, and background verification assistance.",
    "Datenwork provides dedicated career counseling, industry insights, and personalized job matching based on candidate's skills and career aspirations.",
    "In case of any disputes, Datenwork follows a transparent resolution process with candidate satisfaction as the primary goal."
  ];

  // Professional styling with modern design system
  const containerStyles = {
    minHeight: '100vh',
    background: `
      radial-gradient(ellipse at top, ${brandColors.gray50} 0%, ${brandColors.white} 100%),
      linear-gradient(180deg, ${brandColors.backgroundTertiary} 0%, ${brandColors.background} 50%)
    `,
    position: 'relative'
  };

  const heroSectionStyles = {
    padding: '120px 20px 100px',
    textAlign: 'center',
    background: brandColors.heroGradient,
    color: brandColors.textInverse,
    position: 'relative',
    overflow: 'hidden',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center'
  };

  const heroContentStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 3
  };

  const heroTitleStyles = {
    fontSize: 'clamp(3rem, 6vw, 5rem)',
    fontWeight: '900',
    marginBottom: '32px',
    lineHeight: '1.1',
    color: brandColors.textInverse,
    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    letterSpacing: '-0.02em'
  };

  const heroSubtitleStyles = {
    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
    marginBottom: '48px',
    opacity: 0.95,
    maxWidth: '750px',
    margin: '0 auto 48px auto',
    lineHeight: '1.6',
    fontWeight: '400',
    color: brandColors.textInverse
  };

  const sectionStyles = {
    padding: '120px 20px',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const sectionTitleStyles = {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: '24px',
    color: brandColors.textPrimary,
    lineHeight: '1.2',
    letterSpacing: '-0.02em'
  };

  const sectionSubtitleStyles = {
    textAlign: 'center',
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    color: brandColors.textSecondary,
    maxWidth: '700px',
    margin: '0 auto 80px auto',
    lineHeight: '1.6',
    fontWeight: '400'
  };

  // Enterprise-grade comparison table
  const comparisonTableStyles = {
    background: brandColors.white,
    borderRadius: '32px',
    overflow: 'hidden',
    boxShadow: `
      0 32px 64px ${brandColors.shadowLg},
      0 0 0 1px ${brandColors.borderLight}
    `,
    border: `1px solid ${brandColors.border}`,
    marginTop: '80px',
    position: 'relative'
  };

  const tableHeaderStyles = {
    background: `linear-gradient(135deg, ${brandColors.gray50} 0%, ${brandColors.backgroundTertiary} 100%)`,
    padding: '0',
    borderBottom: `2px solid ${brandColors.border}`,
    position: 'relative'
  };

  const planCardHeaderStyles = (plan) => ({
    padding: '48px 24px',
    background: plan.bgGradient,
    textAlign: 'center',
    position: 'relative',
    border: plan.popular 
      ? `3px solid ${plan.color}` 
      : `1px solid ${brandColors.borderLight}`,
    borderRadius: plan.popular ? '24px 24px 0 0' : '20px 20px 0 0',
    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
    zIndex: plan.popular ? 10 : 1,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    overflow: 'hidden'
  });

  const featuresGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '40px',
    marginTop: '100px'
  };

  const featureCardStyles = {
    background: brandColors.white,
    padding: '48px 40px',
    borderRadius: '24px',
    boxShadow: `0 20px 40px ${brandColors.shadowMd}`,
    textAlign: 'center',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: `1px solid ${brandColors.borderLight}`,
    position: 'relative',
    overflow: 'hidden'
  };

  const guaranteeTermsStyles = {
    background: `linear-gradient(135deg, ${brandColors.white} 0%, ${brandColors.backgroundSecondary} 100%)`,
    padding: '80px 48px',
    borderRadius: '32px',
    boxShadow: `0 24px 48px ${brandColors.shadowMd}`,
    marginTop: '120px',
    border: `1px solid ${brandColors.border}`,
    position: 'relative'
  };

  return (
    <div>
      <Header />
      
      <div style={containerStyles}>
        {/* Hero Section */}
        <section style={heroSectionStyles}>
          {/* Animated Background */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%)
            `,
            zIndex: 1
          }} />
          
          {/* Floating Elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '100px',
            height: '100px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: 'float 6s ease-in-out infinite',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite reverse',
            zIndex: 1
          }} />
          
          <motion.div 
            style={heroContentStyles}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
              style={{
                fontSize: '5rem',
                marginBottom: '32px',
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))'
              }}
            >
              🚀
            </motion.div>
            
            <motion.h1 
              style={heroTitleStyles}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Full Time Placement Program
            </motion.h1>
            
            <motion.p 
              style={heroSubtitleStyles}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your career with our comprehensive placement program. Get guaranteed job placement, 
              expert mentorship, and industry-leading support to land your dream job with top-tier companies.
            </motion.p>
            
            <motion.div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                marginTop: '48px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {[
                { icon: '🎯', text: '100% Job Guarantee', color: '#10b981' },
                { icon: '💼', text: 'Expert Mentorship', color: '#6366f1' },
                { icon: '🏆', text: 'Industry Recognition', color: '#f59e0b' },
                { icon: '⚡', text: 'Fast Placement', color: '#ec4899' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: '16px 28px',
                    borderRadius: '24px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    fontSize: '1rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    background: 'rgba(255, 255, 255, 0.25)',
                    borderColor: badge.color
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{badge.icon}</span>
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>
            
            {/* Hero CTA */}
            <motion.div
              style={{ marginTop: '48px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                style={{
                  background: brandColors.white,
                  color: brandColors.textPrimary,
                  padding: '20px 48px',
                  borderRadius: '20px',
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -4,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                🎯 Start Your Journey Today
              </motion.button>
            </motion.div>
          </motion.div>

          {/* CSS Animation for floating elements */}
          <style jsx>{`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
        </section>

        {/* Features Section */}
        <section style={sectionStyles}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animateCards ? 1 : 0, y: animateCards ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 style={sectionTitleStyles}>Why Choose Our Program?</h2>
            <p style={sectionSubtitleStyles}>
              Our comprehensive placement program offers end-to-end career support with guaranteed results and industry-leading success rates
            </p>
            
            <div style={featuresGridStyles}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  style={featureCardStyles}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: animateCards ? 1 : 0, y: animateCards ? 0 : 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    y: -16,
                    scale: 1.02,
                    boxShadow: `0 32px 64px ${brandColors.shadowLg}`
                  }}
                  onMouseEnter={() => setHoveredPlan(index)}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  {/* Gradient Border */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    background: feature.gradient,
                    borderRadius: '24px 24px 0 0'
                  }} />
                  
                  {/* Background Pattern */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '120px',
                    height: '120px',
                    background: `${feature.color}08`,
                    borderRadius: '50%',
                    transform: 'translate(40px, -40px)',
                    transition: 'all 0.4s ease',
                    opacity: hoveredPlan === index ? 1 : 0.5
                  }} />
                  
                  <div style={{
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{ 
                      fontSize: '4rem', 
                      marginBottom: '32px',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                      transform: hoveredPlan === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}>
                      {feature.icon}
                    </div>
                    
                    <h3 style={{
                      fontSize: '1.6rem',
                      fontWeight: '800',
                      marginBottom: '20px',
                      color: brandColors.textPrimary,
                      letterSpacing: '-0.01em'
                    }}>
                      {feature.title}
                    </h3>
                    
                    <p style={{
                      color: brandColors.textSecondary,
                      lineHeight: '1.7',
                      fontSize: '1.05rem',
                      fontWeight: '400'
                    }}>
                      {feature.description}
                    </p>
                    
                    {/* Decorative Element */}
                    <div style={{
                      marginTop: '24px',
                      padding: '12px 20px',
                      background: `${feature.color}10`,
                      borderRadius: '12px',
                      border: `1px solid ${feature.color}20`,
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: feature.color,
                      textAlign: 'center'
                    }}>
                      ✨ Premium Service
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Enterprise-Grade Pricing Comparison Table */}
        <section style={sectionStyles}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animateCards ? 1 : 0, y: animateCards ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 style={sectionTitleStyles}>Choose Your Perfect Plan</h2>
            <p style={sectionSubtitleStyles}>
              Compare our placement plans and find the perfect fit for your career goals and experience level. 
              Each plan is designed to maximize your success with industry-leading support.
            </p>

            <div style={comparisonTableStyles}>
              {/* Enhanced Plan Headers */}
              <div style={tableHeaderStyles}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '320px repeat(5, 1fr)',
                  gap: '0',
                  position: 'relative'
                }}>
                  <div style={{
                    padding: '56px 32px',
                    background: brandColors.heroGradient,
                    color: brandColors.textInverse,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '800',
                    fontSize: '1.3rem',
                    borderRadius: '24px 0 0 0',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '24px 0 0 0'
                    }} />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{ fontSize: '2rem', marginBottom: '12px' }}>🏆</div>
                      <div>Compare Plans</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '500', opacity: 0.9, marginTop: '8px' }}>
                        Find your perfect fit
                      </div>
                    </div>
                  </div>
                  
                  {pricingPlans.map((plan, index) => (
                    <motion.div
                      key={plan.id}
                      style={planCardHeaderStyles(plan)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      {plan.badge && (
                        <div style={{
                          position: 'absolute',
                          top: '-16px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          background: plan.gradient,
                          color: brandColors.textInverse,
                          padding: '8px 20px',
                          borderRadius: '24px',
                          fontSize: '12px',
                          fontWeight: '700',
                          boxShadow: `0 8px 16px ${plan.color}40`,
                          border: `2px solid ${brandColors.white}`,
                          whiteSpace: 'nowrap'
                        }}>
                          {plan.badge}
                        </div>
                      )}
                      
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: plan.gradient,
                        borderRadius: '20px 20px 0 0'
                      }} />
                      
                      <div style={{ 
                        fontSize: '3rem', 
                        marginBottom: '16px',
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                      }}>
                        {plan.icon}
                      </div>
                      
                      <h3 style={{
                        fontSize: '1.6rem',
                        fontWeight: '800',
                        marginBottom: '8px',
                        color: brandColors.textPrimary,
                        letterSpacing: '-0.01em'
                      }}>
                        {plan.name}
                      </h3>
                      
                      <p style={{
                        fontSize: '0.95rem',
                        color: brandColors.textSecondary,
                        marginBottom: '20px',
                        fontWeight: '500'
                      }}>
                        {plan.subtitle}
                      </p>
                      
                      <div style={{
                        fontSize: '2.2rem',
                        fontWeight: '900',
                        color: brandColors.textPrimary,
                        marginBottom: '8px',
                        letterSpacing: '-0.02em'
                      }}>
                        {plan.totalCost}
                      </div>
                      
                      <div style={{
                        fontSize: '0.9rem',
                        color: brandColors.textTertiary,
                        backgroundColor: plan.popular ? `${plan.color}15` : brandColors.backgroundTertiary,
                        padding: '4px 12px',
                        borderRadius: '12px',
                        display: 'inline-block',
                        fontWeight: '600'
                      }}>
                        {plan.monthlyEquivalent}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Professional Feature Comparison */}
              {[
                { 
                  label: 'Investment', 
                  items: [
                    { label: 'Pre-Placement Cost', key: 'prePlacementCost', type: 'cost' },
                    { label: 'Post-Placement Cost', key: 'postPlacementCost', type: 'text' },
                    { label: 'Payment Terms', key: 'paymentTerms', type: 'text' }
                  ]
                },
                { 
                  label: 'Career Services', 
                  items: [
                    { label: 'Resume Preparation', key: 'resumePrep', type: 'text' },
                    { label: 'RUC Sessions', key: 'rucSession', type: 'text' },
                    { label: 'Interview Assessment', key: 'interviewAssessment', type: 'text' }
                  ]
                },
                { 
                  label: 'Support & Guarantee', 
                  items: [
                    { label: 'Support Type', key: 'support', type: 'text' },
                    { label: 'Job Guarantee', key: 'jobGuarantee', type: 'badge' },
                    { label: 'Coverage Period', key: 'coverage', type: 'days' },
                    { label: 'Recruiter Type', key: 'recruiterType', type: 'text' }
                  ]
                },
                { 
                  label: 'Premium Features', 
                  items: [
                    { label: 'LinkedIn Support', key: 'linkedinSupport', type: 'boolean' },
                    { label: 'Profile Marketing', key: 'profileMarketing', type: 'boolean' },
                    { label: 'Personal Branding', key: 'personalBranding', type: 'boolean' },
                    { label: 'Executive Coaching', key: 'executiveCoaching', type: 'boolean' },
                    { label: 'Priority Support', key: 'prioritySupport', type: 'boolean' },
                    { label: 'Dedicated Manager', key: 'dedicatedManager', type: 'boolean' }
                  ]
                }
              ].map((section, sectionIndex) => (
                <div key={section.label}>
                  {/* Section Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '320px repeat(5, 1fr)',
                    background: `linear-gradient(135deg, ${brandColors.gray100} 0%, ${brandColors.backgroundSecondary} 100%)`,
                    borderTop: `2px solid ${brandColors.border}`
                  }}>
                    <div style={{
                      padding: '20px 32px',
                      fontWeight: '800',
                      fontSize: '1.1rem',
                      color: brandColors.textPrimary,
                      background: brandColors.backgroundTertiary,
                      borderRight: `1px solid ${brandColors.border}`,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {section.label}
                    </div>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} style={{ borderRight: `1px solid ${brandColors.border}` }} />
                    ))}
                  </div>

                  {/* Section Rows */}
                  {section.items.map((row, rowIndex) => (
                    <div
                      key={row.key}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '320px repeat(5, 1fr)',
                        borderBottom: `1px solid ${brandColors.borderLight}`,
                        background: rowIndex % 2 === 0 ? brandColors.white : brandColors.backgroundSecondary,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{
                        padding: '20px 32px',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        color: brandColors.textSecondary,
                        background: brandColors.backgroundTertiary,
                        display: 'flex',
                        alignItems: 'center',
                        borderRight: `1px solid ${brandColors.border}`
                      }}>
                        {row.label}
                      </div>
                      
                      {pricingPlans.map((plan, planIndex) => (
                        <div
                          key={`${plan.id}-${row.key}`}
                          style={{
                            padding: '20px 16px',
                            textAlign: 'center',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRight: planIndex < pricingPlans.length - 1 ? `1px solid ${brandColors.borderLight}` : 'none',
                            position: 'relative'
                          }}
                        >
                          {row.type === 'boolean' ? (
                            plan.features[row.key] ? (
                              <div style={{
                                background: brandColors.successLight,
                                color: brandColors.success,
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                              }}>
                                <span>✓</span> Included
                              </div>
                            ) : (
                              <div style={{
                                color: brandColors.textTertiary,
                                fontSize: '0.8rem'
                              }}>
                                –
                              </div>
                            )
                          ) : row.type === 'days' ? (
                            <div style={{
                              background: plan.popular ? `${plan.color}15` : brandColors.infoLight,
                              color: plan.popular ? plan.color : brandColors.info,
                              padding: '6px 12px',
                              borderRadius: '12px',
                              fontSize: '0.85rem',
                              fontWeight: '600'
                            }}>
                              {plan.features[row.key]} Days
                            </div>
                          ) : row.type === 'badge' ? (
                            <div style={{
                              background: plan.gradient,
                              color: brandColors.textInverse,
                              padding: '6px 12px',
                              borderRadius: '12px',
                              fontSize: '0.85rem',
                              fontWeight: '600'
                            }}>
                              {plan.features[row.key]}
                            </div>
                          ) : row.type === 'cost' ? (
                            <div style={{
                              color: brandColors.textPrimary,
                              fontWeight: '700',
                              fontSize: '1rem'
                            }}>
                              {plan[row.key]}
                            </div>
                          ) : (
                            <div style={{
                              color: brandColors.textSecondary,
                              fontWeight: '500',
                              lineHeight: '1.4'
                            }}>
                              {plan.features[row.key]}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              {/* Enhanced CTA Buttons */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '320px repeat(5, 1fr)',
                background: `linear-gradient(135deg, ${brandColors.backgroundTertiary} 0%, ${brandColors.backgroundSecondary} 100%)`,
                borderTop: `2px solid ${brandColors.border}`
              }}>
                <div style={{ 
                  padding: '40px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: brandColors.backgroundTertiary,
                  borderRight: `1px solid ${brandColors.border}`
                }}>
                  <div style={{
                    fontSize: '0.9rem',
                    color: brandColors.textSecondary,
                    textAlign: 'center',
                    fontWeight: '600'
                  }}>
                    <div>🚀 Ready to start?</div>
                    <div style={{ marginTop: '4px', fontSize: '0.8rem' }}>Choose your plan</div>
                  </div>
                </div>
                
                {pricingPlans.map((plan, index) => (
                  <div
                    key={`cta-${plan.id}`}
                    style={{
                      padding: '40px 20px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRight: index < pricingPlans.length - 1 ? `1px solid ${brandColors.borderLight}` : 'none'
                    }}
                  >
                    <motion.button
                      style={{
                        width: '100%',
                        maxWidth: '200px',
                        padding: '16px 24px',
                        borderRadius: '16px',
                        background: plan.popular ? plan.gradient : 'transparent',
                        color: plan.popular ? brandColors.textInverse : plan.color,
                        border: plan.popular ? 'none' : `2px solid ${plan.color}`,
                        fontSize: '1rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: plan.popular ? `0 12px 24px ${plan.color}40` : 'none',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -2
                      }}
                      whileTap={{ scale: 0.98 }}
                      onMouseEnter={(e) => {
                        if (!plan.popular) {
                          e.target.style.background = plan.gradient;
                          e.target.style.color = brandColors.textInverse;
                          e.target.style.boxShadow = `0 12px 24px ${plan.color}40`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!plan.popular) {
                          e.target.style.background = 'transparent';
                          e.target.style.color = plan.color;
                          e.target.style.boxShadow = 'none';
                        }
                      }}
                      onClick={() => window.location.href = '/contact'}
                    >
                      Choose {plan.name}
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Guarantee Terms Section */}
        <section style={sectionStyles}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animateCards ? 1 : 0, y: animateCards ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 style={sectionTitleStyles}>Terms of Enrollment & Guarantee</h2>
            
            <div style={guaranteeTermsStyles}>
              <div style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '16px'
                }}>
                  🛡️
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: brandColors.text
                }}>
                  Job Guarantee Terms
                </h3>
                <p style={{
                  color: brandColors.textLight,
                  fontSize: '1.1rem',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  We stand behind our commitment to your success with comprehensive guarantees and transparent terms
                </p>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '24px'
              }}>
                {guaranteeTerms.map((term, index) => (
                  <motion.div
                    key={index}
                    style={{
                      background: brandColors.white,
                      padding: '24px',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{
                      transform: 'translateY(-4px)',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px'
                    }}>
                      <div style={{
                        background: brandColors.gradient,
                        color: brandColors.white,
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: '700',
                        flexShrink: 0
                      }}>
                        {index + 1}
                      </div>
                      
                      <p style={{
                        color: brandColors.text,
                        lineHeight: '1.7',
                        fontSize: '0.95rem',
                        margin: 0
                      }}>
                        {term}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced CTA Section */}
        <section style={{
          background: brandColors.heroGradient,
          padding: '120px 20px',
          margin: '0',
          textAlign: 'center',
          color: brandColors.textInverse,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Advanced Background Effects */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)
            `,
            zIndex: 1
          }} />
          
          {/* Animated Particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                top: `${20 + i * 15}%`,
                left: `${10 + i * 15}%`,
                animation: `float ${4 + i}s ease-in-out infinite`,
                zIndex: 1
              }}
            />
          ))}
          
          <motion.div
            style={{ 
              maxWidth: '900px', 
              margin: '0 auto',
              position: 'relative',
              zIndex: 2
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: animateCards ? 1 : 0, y: animateCards ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div 
              style={{
                fontSize: '5rem',
                marginBottom: '32px',
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3))'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              🎯
            </motion.div>
            
            <motion.h2 
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '900',
                marginBottom: '32px',
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Ready to Transform Your Career?
            </motion.h2>
            
            <motion.p 
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.4rem)',
                marginBottom: '48px',
                opacity: 0.95,
                lineHeight: '1.7',
                fontWeight: '400'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              Join thousands of professionals who have successfully landed their dream jobs through our placement program. 
              Your career transformation starts here with industry-leading support and guaranteed results.
            </motion.p>
            
            <motion.div 
              style={{ 
                display: 'flex', 
                gap: '24px', 
                justifyContent: 'center', 
                flexWrap: 'wrap',
                marginBottom: '48px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                style={{
                  padding: '20px 48px',
                  borderRadius: '20px',
                  background: brandColors.white,
                  color: brandColors.textPrimary,
                  border: 'none',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.2)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                🚀 Start Your Journey Today
              </motion.button>
              
              <motion.button
                style={{
                  padding: '20px 48px',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: brandColors.textInverse,
                  border: `3px solid rgba(255, 255, 255, 0.3)`,
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -6,
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderColor: 'rgba(255, 255, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://profortiz.net', '_blank')}
              >
                📖 Learn More
              </motion.button>
            </motion.div>
            
            {/* Success Stats */}
            <motion.div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                marginTop: '64px'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              {[
                { icon: '🎯', stat: '100%', label: 'Job Guarantee', color: '#10b981' },
                { icon: '👥', stat: '2500+', label: 'Success Stories', color: '#6366f1' },
                { icon: '⚡', stat: '60 Days', label: 'Avg Placement', color: '#f59e0b' },
                { icon: '🏆', stat: '95%', label: 'Client Satisfaction', color: '#ec4899' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '24px 20px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderColor: item.color
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>
                    {item.icon}
                  </div>
                  <div style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    marginBottom: '4px',
                    color: brandColors.textInverse
                  }}>
                    {item.stat}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    opacity: 0.9,
                    fontWeight: '600'
                  }}>
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlacementProgram;
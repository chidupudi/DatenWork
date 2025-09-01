import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';
import { placementPlansService, placementContentService } from '../services/firebaseData';

// World-class minimalistic design palette
const designSystem = {
  // Colors - Subtle and sophisticated
  colors: {
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    primaryDark: '#1d4ed8',
    accent: '#06b6d4',
    
    // Neutrals - Perfect gray scale
    white: '#ffffff',
    gray50: '#fafafa',
    gray100: '#f4f4f5',
    gray200: '#e4e4e7',
    gray300: '#d4d4d8',
    gray400: '#a1a1aa',
    gray500: '#71717a',
    gray600: '#52525b',
    gray700: '#3f3f46',
    gray800: '#27272a',
    gray900: '#18181b',
    
    // Status colors - Carefully chosen
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626',
    
    // Special colors
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    heroGradient: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    cardGradient: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
  },
  
  // Typography - Perfect hierarchy
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heroTitle: 'clamp(3.5rem, 8vw, 6rem)',
    title: 'clamp(2rem, 4vw, 3rem)',
    subtitle: 'clamp(1.1rem, 2.5vw, 1.3rem)',
    body: '1rem',
    small: '0.875rem',
    micro: '0.75rem'
  },
  
  // Spacing - Reduced gaps for tighter layout
  space: {
    xs: '0.5rem',
    sm: '1rem', 
    md: '1.5rem',
    lg: '2rem',
    xl: '2.5rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '5rem',
    '5xl': '7rem'
  },
  
  // Shadows - Subtle depth
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  
  // Border radius - Consistent rounding
  radius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    full: '9999px'
  }
};

const PlacementProgram = () => {
  const [plans, setPlans] = useState([]);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [plansData, contentData] = await Promise.all([
          placementPlansService.getAll(),
          placementContentService.get()
        ]);
        
        setPlans(plansData.filter(plan => plan.isActive).sort((a, b) => a.prePlacementCost - b.prePlacementCost) || []);
        setContent(contentData || {});
      } catch (error) {
        console.error('Error loading placement data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Default content
  const defaultContent = {
    hero: {
      title: 'US-IT Placement Program',
      subtitle: 'Transform your career with guaranteed placement in top US companies. Expert guidance, proven results.',
      badges: [
        { icon: '🎯', text: '100% Job Guarantee', color: designSystem.colors.success },
        { icon: '🇺🇸', text: 'US Market Focus', color: designSystem.colors.primary },
        { icon: '⚡', text: 'Fast Track', color: designSystem.colors.accent }
      ]
    },
    features: [
      {
        icon: '🎯',
        title: 'Guaranteed Placement',
        description: 'Legal commitment to place you in a US company within 180 days or full refund'
      },
      {
        icon: '🧠', 
        title: 'Expert Mentorship',
        description: 'One-on-one guidance from US industry professionals and hiring managers'
      },
      {
        icon: '📝',
        title: 'US-Ready Resume',
        description: 'ATS-optimized resume and LinkedIn profile tailored for US job market'
      },
      {
        icon: '🤝',
        title: 'Interview Mastery',
        description: 'Comprehensive training for US technical and behavioral interviews'
      }
    ],
    stats: [
      { stat: '100%', label: 'Success Rate', icon: '🎯' },
      { stat: '45 Days', label: 'Avg. Placement', icon: '⚡' },
      { stat: '$85K+', label: 'Avg. Salary', icon: '💰' },
      { stat: '500+', label: 'Placements', icon: '👥' }
    ]
  };

  const pageContent = content || defaultContent;

  if (loading) {
    return (
      <div>
        <Header />
        <div style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          background: designSystem.colors.gray50,
          fontFamily: designSystem.typography.fontFamily
        }}>
          <div style={{ textAlign: 'center' }}>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ fontSize: '3rem', marginBottom: '1rem' }}
            >
              🚀
            </motion.div>
            <h2 style={{ 
              color: designSystem.colors.gray700,
              fontSize: designSystem.typography.title,
              fontWeight: '600',
              margin: 0
            }}>
              Loading...
            </h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ fontFamily: designSystem.typography.fontFamily }}>
      <Header />
      
      {/* Hero Section - Clean and Minimal */}
      <section style={{
        background: designSystem.colors.heroGradient,
        padding: `${designSystem.space['4xl']} ${designSystem.space.lg}`,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, ${designSystem.colors.primary}08 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, ${designSystem.colors.accent}06 0%, transparent 50%)
          `,
          zIndex: 1
        }} />
        
        <motion.div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '1000px',
            margin: '0 auto'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: designSystem.space.sm,
              background: designSystem.colors.white,
              padding: `${designSystem.space.sm} ${designSystem.space.lg}`,
              borderRadius: designSystem.radius.full,
              boxShadow: designSystem.shadows.md,
              border: `1px solid ${designSystem.colors.gray200}`,
              marginBottom: designSystem.space.xl,
              fontSize: designSystem.typography.small,
              fontWeight: '500',
              color: designSystem.colors.gray700
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>🇺🇸</span>
            Premium US-IT Placement Program
            <span style={{ 
              background: designSystem.colors.success, 
              color: 'white', 
              padding: '2px 8px', 
              borderRadius: designSystem.radius.md,
              fontSize: designSystem.typography.micro,
              fontWeight: '600'
            }}>
              NEW
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: designSystem.typography.heroTitle,
              fontWeight: '800',
              lineHeight: '1.1',
              color: designSystem.colors.gray900,
              marginBottom: designSystem.space.lg,
              letterSpacing: '-0.02em'
            }}
          >
            {pageContent.hero?.title}
          </motion.h1>

          {/* Hero Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: designSystem.typography.subtitle,
              color: designSystem.colors.gray600,
              marginBottom: designSystem.space.xl,
              lineHeight: '1.6',
              maxWidth: '600px',
              margin: `0 auto ${designSystem.space.xl} auto`
            }}
          >
            {pageContent.hero?.subtitle}
          </motion.p>

          {/* Hero Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: designSystem.space.md,
              flexWrap: 'wrap',
              marginBottom: designSystem.space['2xl']
            }}
          >
            {(pageContent.hero?.badges || []).map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2, scale: 1.02 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: designSystem.space.sm,
                  background: designSystem.colors.white,
                  padding: `${designSystem.space.sm} ${designSystem.space.md}`,
                  borderRadius: designSystem.radius.xl,
                  boxShadow: designSystem.shadows.sm,
                  border: `1px solid ${designSystem.colors.gray200}`,
                  fontSize: designSystem.typography.small,
                  fontWeight: '500',
                  color: designSystem.colors.gray700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{badge.icon}</span>
                {badge.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Hero CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: designSystem.colors.primary,
                color: designSystem.colors.white,
                padding: `${designSystem.space.md} ${designSystem.space['2xl']}`,
                borderRadius: designSystem.radius.xl,
                border: 'none',
                fontSize: designSystem.typography.body,
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: `${designSystem.shadows.lg}, 0 0 0 1px ${designSystem.colors.primary}`,
                transition: 'all 0.2s ease',
                fontFamily: 'inherit'
              }}
              onClick={() => window.location.href = '/contact'}
            >
              Start Your US Career Journey →
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - Minimal Grid */}
      <section style={{
        padding: `${designSystem.space['3xl']} ${designSystem.space.lg}`,
        background: designSystem.colors.white
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: designSystem.space['2xl'] }}
          >
            <h2 style={{
              fontSize: designSystem.typography.title,
              fontWeight: '700',
              color: designSystem.colors.gray900,
              marginBottom: designSystem.space.md,
              letterSpacing: '-0.01em'
            }}>
              Why Choose Our Program?
            </h2>
            <p style={{
              fontSize: designSystem.typography.subtitle,
              color: designSystem.colors.gray600,
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Comprehensive support designed for your success in the US job market
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: designSystem.space.xl,
            marginTop: designSystem.space.xl
          }}>
            {(pageContent.features || []).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                style={{
                  background: designSystem.colors.cardGradient,
                  padding: designSystem.space.xl,
                  borderRadius: designSystem.radius['2xl'],
                  border: `1px solid ${designSystem.colors.gray200}`,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: designSystem.space.md,
                  filter: 'grayscale(0)'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: designSystem.colors.gray900,
                  marginBottom: designSystem.space.sm,
                  letterSpacing: '-0.01em'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: designSystem.colors.gray600,
                  lineHeight: '1.6',
                  fontSize: designSystem.typography.body,
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans - Clean Two-Column Layout */}
      <section style={{
        padding: `${designSystem.space['3xl']} ${designSystem.space.lg}`,
        background: designSystem.colors.gray50
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: designSystem.space['2xl'] }}
          >
            <h2 style={{
              fontSize: designSystem.typography.title,
              fontWeight: '700',
              color: designSystem.colors.gray900,
              marginBottom: designSystem.space.md,
              letterSpacing: '-0.01em'
            }}>
              Choose Your Plan
            </h2>
            <p style={{
              fontSize: designSystem.typography.subtitle,
              color: designSystem.colors.gray600,
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Simple, transparent pricing. Both plans include job guarantee.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: plans.length === 2 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: designSystem.space.xl,
            marginTop: designSystem.space.xl
          }}>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredPlan(plan.id)}
                onHoverEnd={() => setHoveredPlan(null)}
                style={{
                  background: designSystem.colors.white,
                  padding: designSystem.space['2xl'],
                  borderRadius: designSystem.radius['2xl'],
                  border: plan.popular 
                    ? `2px solid ${designSystem.colors.primary}` 
                    : `1px solid ${designSystem.colors.gray200}`,
                  boxShadow: plan.popular 
                    ? `${designSystem.shadows.xl}, 0 0 0 1px ${designSystem.colors.primary}20`
                    : hoveredPlan === plan.id 
                      ? designSystem.shadows.xl 
                      : designSystem.shadows.md,
                  position: 'relative',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  transform: plan.popular ? 'scale(1.02)' : 'scale(1)'
                }}
              >
                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: designSystem.colors.primary,
                    color: designSystem.colors.white,
                    padding: `${designSystem.space.xs} ${designSystem.space.md}`,
                    borderRadius: designSystem.radius.full,
                    fontSize: designSystem.typography.micro,
                    fontWeight: '600',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{
                  fontSize: '3rem',
                  marginBottom: designSystem.space.md
                }}>
                  {plan.icon}
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: designSystem.colors.gray900,
                  marginBottom: designSystem.space.xs,
                  letterSpacing: '-0.01em'
                }}>
                  {plan.name}
                </h3>

                <p style={{
                  color: designSystem.colors.gray600,
                  marginBottom: designSystem.space.lg,
                  fontSize: designSystem.typography.body
                }}>
                  {plan.subtitle}
                </p>

                <div style={{
                  marginBottom: designSystem.space.lg
                }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: designSystem.colors.gray900,
                    marginBottom: designSystem.space.xs,
                    letterSpacing: '-0.02em'
                  }}>
                    ${plan.prePlacementCost?.toLocaleString()}
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.small,
                    color: designSystem.colors.gray500,
                    marginBottom: designSystem.space.xs
                  }}>
                    + {plan.postPlacementPercentage}% of first year salary
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: plan.popular ? `${designSystem.colors.primary}10` : designSystem.colors.gray100,
                    color: plan.popular ? designSystem.colors.primary : designSystem.colors.gray600,
                    padding: `${designSystem.space.xs} ${designSystem.space.sm}`,
                    borderRadius: designSystem.radius.md,
                    fontSize: designSystem.typography.small,
                    fontWeight: '500'
                  }}>
                    {plan.monthlyEquivalent}
                  </div>
                </div>

                {/* Key Features - Dynamic Bullet Points */}
                <div style={{
                  textAlign: 'left',
                  marginBottom: designSystem.space.xl
                }}>
                  <div style={{
                    display: 'grid',
                    gap: designSystem.space.sm
                  }}>
                    {(plan.bulletFeatures || [])
                      .filter(feature => feature.enabled)
                      .map((feature, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: designSystem.space.sm,
                        fontSize: designSystem.typography.small,
                        color: designSystem.colors.gray700
                      }}>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: designSystem.colors.success,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                        </div>
                        {feature.text}
                      </div>
                    ))}
                    
                    {/* Fallback to old structure if no bullet features */}
                    {(!plan.bulletFeatures || plan.bulletFeatures.length === 0) && [
                      plan.features?.resumePrep,
                      plan.features?.supportSessions,
                      plan.features?.interviewTraining,
                      `${plan.features?.jobGuarantee} Job Guarantee`,
                      plan.features?.recruiterType
                    ].filter(Boolean).map((feature, idx) => (
                      <div key={`fallback-${idx}`} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: designSystem.space.sm,
                        fontSize: designSystem.typography.small,
                        color: designSystem.colors.gray700
                      }}>
                        <div style={{
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          background: designSystem.colors.success,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <span style={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>✓</span>
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    background: plan.popular ? designSystem.colors.primary : designSystem.colors.white,
                    color: plan.popular ? designSystem.colors.white : designSystem.colors.primary,
                    border: `2px solid ${designSystem.colors.primary}`,
                    padding: `${designSystem.space.md} ${designSystem.space.lg}`,
                    borderRadius: designSystem.radius.xl,
                    fontSize: designSystem.typography.body,
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'inherit',
                    boxShadow: plan.popular ? designSystem.shadows.md : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.popular) {
                      e.target.style.background = designSystem.colors.primary;
                      e.target.style.color = designSystem.colors.white;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.popular) {
                      e.target.style.background = designSystem.colors.white;
                      e.target.style.color = designSystem.colors.primary;
                    }
                  }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started with {plan.name}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Clean and Minimal */}
      <section style={{
        padding: `${designSystem.space['2xl']} ${designSystem.space.lg}`,
        background: designSystem.colors.white
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: designSystem.space.xl
            }}>
              {(pageContent.stats || []).map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    padding: designSystem.space.lg,
                    background: designSystem.colors.gray50,
                    borderRadius: designSystem.radius.xl,
                    border: `1px solid ${designSystem.colors.gray200}`
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: designSystem.space.sm }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '800',
                    color: designSystem.colors.gray900,
                    marginBottom: designSystem.space.xs,
                    letterSpacing: '-0.01em'
                  }}>
                    {stat.stat}
                  </div>
                  <div style={{
                    fontSize: designSystem.typography.small,
                    color: designSystem.colors.gray600,
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Elegant and Simple */}
      <section style={{
        background: designSystem.colors.gradient,
        padding: `${designSystem.space['3xl']} ${designSystem.space.lg}`,
        textAlign: 'center',
        color: designSystem.colors.white,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          zIndex: 1
        }} />
        
        <motion.div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: '700px',
            margin: '0 auto'
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ fontSize: '4rem', marginBottom: designSystem.space.lg }}>
            🚀
          </div>
          
          <h2 style={{
            fontSize: designSystem.typography.title,
            fontWeight: '700',
            marginBottom: designSystem.space.md,
            lineHeight: '1.2',
            letterSpacing: '-0.01em'
          }}>
            Ready to Launch Your US Career?
          </h2>
          
          <p style={{
            fontSize: designSystem.typography.subtitle,
            marginBottom: designSystem.space.xl,
            opacity: 0.9,
            lineHeight: '1.6'
          }}>
            Join hundreds of professionals who've successfully transitioned to high-paying US roles. Your journey starts today.
          </p>
          
          <div style={{ display: 'flex', gap: designSystem.space.md, justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: designSystem.colors.white,
                color: designSystem.colors.gray900,
                padding: `${designSystem.space.md} ${designSystem.space.xl}`,
                borderRadius: designSystem.radius.xl,
                border: 'none',
                fontSize: designSystem.typography.body,
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: designSystem.shadows.lg,
                transition: 'all 0.2s ease',
                fontFamily: 'inherit'
              }}
              onClick={() => window.location.href = '/contact'}
            >
              Start Application →
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: designSystem.colors.white,
                padding: `${designSystem.space.md} ${designSystem.space.xl}`,
                borderRadius: designSystem.radius.xl,
                border: '2px solid rgba(255, 255, 255, 0.3)',
                fontSize: designSystem.typography.body,
                fontWeight: '600',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.2s ease',
                fontFamily: 'inherit'
              }}
              onClick={() => window.open('tel:+1-555-123-4567', '_self')}
            >
              Schedule Call
            </motion.button>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PlacementProgram;
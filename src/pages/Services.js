import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/sections/Footer';

// --- SVG ASSETS & COMPONENTS ---

const illustrations = {
    training: (
        <svg viewBox="0 0 130 100" style={{ width: '100%', height: '100%' }}>
            <rect fill="#EAF0F6" width="130" height="100" rx="8"></rect>
            <rect fill="#4A5568" x="10" y="80" width="110" height="10" rx="2"></rect>
            <rect fill="#BCCCDC" x="20" y="15" width="90" height="55" rx="4"></rect>
            <circle fill="#667EEA" cx="65" cy="42" r="15"></circle>
            <path d="M 58,42 L 68,42 M 63,37 L 63,47" stroke="#fff" strokeWidth="2"></path>
            <rect fill="#fff" x="25" y="20" width="15" height="3" rx="1.5"></rect>
            <rect fill="#fff" x="25" y="28" width="25" height="3" rx="1.5"></rect>
        </svg>
    ),
    placement: (
        <svg viewBox="0 0 130 100" style={{ width: '100%', height: '100%' }}>
            <rect fill="#FEF6E6" width="130" height="100" rx="8"></rect>
            <path d="M 20 80 Q 40 20, 65 50 T 110 20" stroke="#FA709A" strokeWidth="4" fill="none" strokeLinecap="round"></path>
            <circle fill="#FEE140" cx="110" cy="20" r="10"></circle>
            <circle fill="#FFF" cx="110" cy="20" r="4"></circle>
            <rect fill="#BCCCDC" x="15" y="85" width="20" height="5" rx="2"></rect>
            <rect fill="#BCCCDC" x="55" y="85" width="20" height="5" rx="2"></rect>
        </svg>
    ),
    engineering: (
        <svg viewBox="0 0 130 100" style={{ width: '100%', height: '100%' }}>
            <rect fill="#FEF0F2" width="130" height="100" rx="8"></rect>
            <rect fill="#FF9A9E" x="15" y="30" width="40" height="40" rx="4"></rect>
            <rect fill="#FECFEF" x="75" y="50" width="40" height="40" rx="4"></rect>
            <rect fill="#BCCCDC" x="45" y="60" width="40" height="40" rx="4"></rect>
            <path d="M 35 50 L 55 70 M 55 50 L 35 70" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round"></path>
        </svg>
    ),
    consulting: (
        <svg viewBox="0 0 130 100" style={{ width: '100%', height: '100%' }}>
            <rect fill="#E6F7FE" width="130" height="100" rx="8"></rect>
            <rect fill="#BCCCDC" x="10" y="10" width="50" height="80" rx="4"></rect>
            <rect fill="#4FACFE" x="70" y="30" width="50" height="60" rx="4"></rect>
            <circle fill="#00F2FE" cx="95" cy="60" r="15"></circle>
            <path d="M 88,55 L 102,65 M 88,65 L 102,55" stroke="#fff" strokeWidth="2"></path>
        </svg>
    )
};

const HeroIllustration = () => (
    <svg viewBox="0 0 500 400">
        <rect x="0" y="0" width="500" height="400" fill="#F7FAFC"/>
        <circle cx="250" cy="200" r="150" fill="#EAF0F6" />
        <rect x="150" y="150" width="200" height="150" rx="10" fill="#FFFFFF" />
        <rect x="160" y="160" width="180" height="10" rx="5" fill="#CBD5E0" />
        <rect x="160" y="180" width="120" height="10" rx="5" fill="#E2E8F0" />
        <rect x="160" y="220" width="180" height="60" rx="5" fill="#667EEA" />
        <circle cx="210" cy="80" r="30" fill="#667EEA" opacity="0.3" />
        <circle cx="380" cy="320" r="40" fill="#764BA2" opacity="0.3" />
        <path d="M50 150 Q 150 50 250 150 T 450 150" stroke="#764BA2" strokeWidth="4" fill="none" strokeDasharray="10 5" />
    </svg>
);

const ShapeDivider = ({ position, color }) => {
    const style = {
        position: 'absolute',
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        transform: position === 'top' ? 'rotate(180deg)' : 'none',
        [position]: 0,
        zIndex: 1,
    };

    const svgStyle = {
        position: 'relative',
        display: 'block',
        width: 'calc(100% + 1.3px)',
        height: '80px',
    };

    return (
        <div style={style}>
            <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{ fill: color }}></path>
            </svg>
        </div>
    );
};

const Services = () => {
    const [activeService, setActiveService] = useState('training');
    const [hoveredFeature, setHoveredFeature] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 992);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- UPDATED SERVICES ARRAY WITH CERTIFICATION ASSISTANCE ---
    const services = [
        {
            id: 'training',
            title: 'Professional Training',
            subtitle: 'Transform Your Career with Industry-Leading Education',
            description: 'Comprehensive programs to bridge the gap between academic knowledge and real-world skills.',
            illustration: illustrations.training,
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            features: [
                { title: 'Live Interactive Sessions', description: 'Real-time learning with industry experts', icon: '📡' },
                { title: 'Hands-on Projects', description: 'Build portfolio-worthy applications', icon: '💡' },
                { title: 'Lifetime Access', description: 'Never stop learning with unlimited access', icon: '♾️' },
                { title: 'Industry Certification', description: 'Get certified by leading tech companies', icon: '🏆' },
                { title: 'Certification Assistance', description: 'Comprehensive support for industry certifications', icon: '📜' },
                { title: 'Exam Preparation', description: 'Structured prep for certification exams', icon: '📚' }
            ],
            process: [
                { title: 'Enrollment', description: 'Choose your course and enroll online.' },
                { title: 'Live Classes', description: 'Attend interactive sessions and workshops.' },
                { title: 'Project Work', description: 'Apply skills to real-world projects.' },
                { title: 'Certification Prep', description: 'Structured preparation for industry certifications.' },
                { title: 'Certification', description: 'Receive your industry-recognized certificate.' }
            ],
            stats: [{ label: 'Students', value: '12,500+' }, { label: 'Completion', value: '95%' }, { label: 'Certifications', value: '8,200+' }]
        },
        {
            id: 'placement',
            title: 'Elite Placement',
            subtitle: 'Your Gateway to Top-Tier Tech Companies',
            description: 'Your gateway to top-tier tech companies with strategic career placement services.',
            illustration: illustrations.placement,
            gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            features: [
                { title: 'Resume Building', description: 'ATS-optimized professional resumes', icon: '📄' },
                { title: 'Mock Interviews', description: 'Practice with industry professionals', icon: '🎤' },
                { title: 'Direct Referrals', description: 'Skip the queue with partner companies', icon: '🔗' },
                { title: 'Salary Negotiation', description: 'Maximize your compensation package', icon: '💰' },
                { title: 'Certification Showcase', description: 'Highlight your certifications to employers', icon: '🏅' },
                { title: 'Skills Validation', description: 'Verify your expertise through certified assessments', icon: '✅' }
            ],
            process: [
                { title: 'Profile Review', description: 'We analyze your strengths and career goals.' },
                { title: 'Skill Enhancement', description: 'Targeted training to fill any skill gaps.' },
                { title: 'Certification Verification', description: 'Validate and showcase your certifications.' },
                { title: 'Interview Prep', description: 'Intensive preparation for technical and HR rounds.' },
                { title: 'Job Offer', description: 'Land your dream job with our support.' }
            ],
            stats: [{ label: 'Avg. Package', value: '15 LPA' }, { label: 'Placement Rate', value: '97%' }, { label: 'Certified Placements', value: '85%' }]
        },
        {
            id: 'engineering',
            title: 'Product Engineering',
            subtitle: 'From Idea to Market-Ready Product',
            description: 'Bespoke services to build, launch, and scale your robust and beautiful digital products.',
            illustration: illustrations.engineering,
            gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            features: [
                { title: 'UI/UX Design', description: 'Intuitive and beautiful user interfaces', icon: '🎨' },
                { title: 'Full-Stack Development', description: 'Web & mobile app development', icon: '💻' },
                { title: 'QA & Testing', description: 'Ensuring bug-free, high-quality products', icon: '🧪' },
                { title: 'DevOps & CI/CD', description: 'Automated pipelines for rapid deployment', icon: '🔄' },
                { title: 'Security Certifications', description: 'ISO 27001 and SOC 2 compliant development', icon: '🔐' },
                { title: 'Quality Assurance', description: 'Industry-standard testing and certification', icon: '🎯' }
            ],
            process: [
                { title: 'Discovery', description: 'Understanding your vision and requirements.' },
                { title: 'Design & Prototype', description: 'Creating wireframes and mockups.' },
                { title: 'Development', description: 'Agile sprints to build the product.' },
                { title: 'Quality Certification', description: 'Industry-standard testing and validation.' },
                { title: 'Launch & Support', description: 'Go-to-market strategy and ongoing maintenance.' }
            ],
            stats: [{ label: 'Products Launched', value: '50+' }, { label: 'Client Retention', value: '99%' }, { label: 'Certified Products', value: '100%' }]
        },
        {
            id: 'consulting',
            title: 'IT Consulting',
            subtitle: 'Strategic Technology Solutions for Business Growth',
            description: 'End-to-end technology consulting to help enterprises modernize, scale, and stay competitive.',
            illustration: illustrations.consulting,
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            features: [
                { title: 'Digital Transformation', description: 'Modernize your tech infrastructure', icon: '🌐' },
                { title: 'Cloud Migration', description: 'Seamless transition to cloud platforms', icon: '☁️' },
                { title: 'AI Integration', description: 'Leverage AI for business intelligence', icon: '🤖' },
                { title: 'Security Audit', description: 'Comprehensive cybersecurity assessment', icon: '🔒' },
                { title: 'Compliance Certification', description: 'Achieve industry-standard certifications', icon: '📋' },
                { title: 'Technology Validation', description: 'Certified technology assessments and audits', icon: '🔍' }
            ],
            process: [
                { title: 'Assessment', description: 'Analyzing your current technology landscape.' },
                { title: 'Strategy', description: 'Developing a roadmap for digital transformation.' },
                { title: 'Implementation', description: 'Executing the plan with expert precision.' },
                { title: 'Certification Support', description: 'Guidance for industry certifications and compliance.' },
                { title: 'Optimization', description: 'Continuous improvement and support.' }
            ],
            stats: [{ label: 'Projects', value: '250+' }, { label: 'Avg. ROI', value: '4x' }, { label: 'Compliance Rate', value: '100%' }]
        }
    ];

    const testimonials = [
        { quote: "The training program was a game-changer for my career. The hands-on projects are simply the best.", author: "Priya Sharma", company: "Software Engineer at Google" },
        { quote: "Their placement service is unparalleled. I landed a job at my dream company within a month of completion.", author: "Raj Patel", company: "Data Scientist at Amazon" },
        { quote: "The consulting team helped us scale our infrastructure seamlessly. True professionals with deep expertise.", author: "Anjali Mehta", company: "CTO at InnovateCorp" }
    ];

    const selectedService = services.find(s => s.id === activeService);

    // --- CERTIFICATION SECTION DATA ---
    const certificationPrograms = [
        {
            icon: '☁️',
            title: 'Cloud Certifications',
            certifications: ['AWS Solutions Architect', 'Microsoft Azure Fundamentals', 'Google Cloud Professional', 'AWS DevOps Engineer'],
            successRate: '92%'
        },
        {
            icon: '💻',
            title: 'Development Certifications',
            certifications: ['Oracle Java Certification', 'Microsoft .NET Developer', 'React Developer Certification', 'Full Stack Web Developer'],
            successRate: '89%'
        },
        {
            icon: '🛡️',
            title: 'Security Certifications',
            certifications: ['CISSP', 'CEH (Ethical Hacker)', 'CompTIA Security+', 'CISM'],
            successRate: '85%'
        },
        {
            icon: '📊',
            title: 'Data & Analytics',
            certifications: ['Google Analytics', 'Tableau Desktop Specialist', 'Microsoft Power BI', 'AWS Data Analytics'],
            successRate: '91%'
        }
    ];

    const certificationSteps = [
        {
            title: 'Assessment & Planning',
            description: 'We evaluate your current skills and create a personalized certification roadmap aligned with your career goals.'
        },
        {
            title: 'Study Materials & Resources',
            description: 'Access to premium study guides, practice exams, video tutorials, and hands-on lab environments.'
        },
        {
            title: 'Structured Learning Path',
            description: 'Follow our proven curriculum with scheduled milestones and regular progress assessments.'
        },
        {
            title: 'Practice & Mock Exams',
            description: 'Extensive practice with real exam scenarios and detailed feedback on your performance.'
        },
        {
            title: 'Exam Support & Guidance',
            description: 'Complete support for exam registration, scheduling, and last-minute preparation strategies.'
        },
        {
            title: 'Post-Certification Career Support',
            description: 'Leverage your new certification for better job opportunities and salary negotiations.'
        }
    ];

    const certificationBenefits = [
        {
            icon: '💰',
            title: 'Higher Salary',
            description: 'Certified professionals earn 20-30% more than their non-certified counterparts.'
        },
        {
            icon: '🚀',
            title: 'Career Advancement',
            description: 'Fast-track your career with industry-recognized credentials that employers value.'
        },
        {
            icon: '🎯',
            title: 'Skill Validation',
            description: 'Prove your expertise with objective, third-party validation of your technical skills.'
        },
        {
            icon: '🌟',
            title: 'Market Credibility',
            description: 'Build trust with clients and employers through recognized professional certifications.'
        }
    ];

    // --- STYLES ---
    const pageStyles = {
        background: '#FFFFFF', position: 'relative', overflowX: 'hidden'
    };

    const backgroundPatternStyles = {
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        opacity: 0.5,
        background: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e2e8f0" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
        zIndex: 0
    };
    
    const heroSectionStyles = {
        padding: isMobile ? '120px 0 100px' : '160px 0 140px',
        position: 'relative', zIndex: 1, background: '#F7FAFC'
    };
    
    const heroContainerStyles = {
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '40px' : '60px',
        textAlign: isMobile ? 'center' : 'left'
    };

    const heroTextContainerStyles = { flex: 1 };
    const heroIllustrationContainerStyles = { flex: 1, maxWidth: isMobile ? '400px' : '500px' };

    const heroTitleStyles = {
        fontSize: isMobile ? '2.8rem' : '3.8rem',
        fontWeight: '800', color: '#1A202C',
        marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1.5px'
    };

    const heroSubtitleStyles = {
        fontSize: '1.25rem', color: '#4A5568',
        maxWidth: '550px', margin: isMobile ? '0 auto 32px' : '0 0 32px 0',
        lineHeight: 1.6
    };
    
    const ctaButtonStyles = {
        padding: '16px 40px', fontSize: '1.1rem', fontWeight: '600',
        color: 'white',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none', borderRadius: '12px', cursor: 'pointer',
        boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
        transition: 'all 0.3s ease', display: 'inline-flex', alignItems: 'center', gap: '10px'
    };

    const servicesSectionStyles = { padding: '120px 0', position: 'relative', zIndex: 1 };
    const servicesContainerStyles = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
    
    const servicesGridStyles = {
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
        gap: '30px', marginBottom: '80px'
    };

    const serviceCardStyles = (isActive) => ({
        background: 'white',
        borderRadius: '20px', padding: '30px',
        boxShadow: isActive ? '0 20px 40px -10px rgba(0, 0, 0, 0.2)' : '0 4px 15px -2px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        transform: isActive ? 'translateY(-15px)' : 'translateY(0)',
        border: `2px solid ${isActive ? '#667eea' : 'transparent'}`,
        textAlign: 'center'
    });

    const illustrationContainerStyles = {
        height: '100px', marginBottom: '20px'
    };

    const serviceTitleStyles = {
        fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: '#2d3748'
    };

    const serviceDescriptionStyles = {
        fontSize: '0.95rem', lineHeight: '1.6', color: '#718096', minHeight: '80px'
    };
    
    const detailSectionStyles = {
        padding: '100px 0', background: '#F7FAFC',
        position: 'relative', zIndex: 2,
    };
    
    const detailContainerStyles = { maxWidth: '1200px', margin: '0 auto', padding: '0 24px' };
    const detailHeaderStyles = { textAlign: 'center', marginBottom: '80px' };

    const detailTitleStyles = {
        fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: '800', marginBottom: '16px',
        background: selectedService ? selectedService.gradient : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
    };

    const detailSubtitleStyles = {
        fontSize: '1.5rem', color: '#4a5568',
        maxWidth: '800px', margin: '0 auto'
    };
    
    const sectionHeaderStyles = {
        textAlign: 'center', fontSize: '2.5rem', fontWeight: '700',
        color: '#343a40', marginBottom: '60px', position: 'relative'
    };
    
    const featuresGridStyles = {
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '40px', marginBottom: '100px'
    };

    const featureCardStyles = (isHovered) => ({
        background: '#fff', borderRadius: '20px', padding: '40px',
        position: 'relative', overflow: 'hidden',
        border: `2px solid ${isHovered ? '#667eea' : '#e9ecef'}`,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 15px 30px -10px rgba(102, 126, 234, 0.2)' : '0 4px 6px -1px rgba(0,0,0,0.03)',
        transition: 'all 0.3s ease-in-out', cursor: 'pointer'
    });

    const featureIconStyles = { fontSize: '2.5rem', marginBottom: '20px', display: 'inline-block' };
    const featureTitleStyles = { fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px', color: '#2d3748' };
    const featureDescriptionStyles = { fontSize: '1.0625rem', color: '#718096', lineHeight: '1.6' };

    const processContainerStyles = {
        display: 'flex', justifyContent: 'space-between',
        position: 'relative', marginBottom: '100px',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '30px' : '0'
    };
    
    const processLineStyles = {
        position: 'absolute', left: '5%', top: '25px',
        width: '90%', height: '2px', background: '#e0e0e0',
        display: isMobile ? 'none' : 'block'
    };
    
    const processItemStyles = {
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        width: isMobile ? '100%' : '22%', textAlign: 'center'
    };

    const processIconWrapper = (gradient) => ({
        width: '50px', height: '50px', borderRadius: '50%',
        background: gradient, color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', fontWeight: 'bold',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
        position: 'relative', zIndex: 1
    });

    const processTitleStyles = { fontSize: '1.2rem', fontWeight: '600', color: '#333', marginTop: '20px' };
    const processDescStyles = { fontSize: '0.95rem', color: '#777', marginTop: '8px' };
    
    const statsContainerStyles = {
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '40px', padding: '60px',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #eef2f7 100%)',
        borderRadius: '32px', border: '1px solid #e9ecef'
    };

    const statItemStyles = { textAlign: 'center' };
    const statValueStyles = {
        fontSize: '3.5rem', fontWeight: '800', marginBottom: '8px',
        background: selectedService ? selectedService.gradient : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
    };
    const statLabelStyles = { fontSize: '1.125rem', color: '#718096', fontWeight: '500' };

    // --- CERTIFICATION SECTION STYLES ---
    const certificationSectionStyles = {
        padding: '100px 0',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        position: 'relative'
    };

    const certificationHeaderStyles = {
        textAlign: 'center',
        marginBottom: '80px'
    };

    const certificationTitleStyles = {
        fontSize: '3rem',
        fontWeight: '800',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    const certificationSubtitleStyles = {
        fontSize: '1.25rem',
        color: '#64748b',
        maxWidth: '800px',
        margin: '0 auto',
        lineHeight: '1.6'
    };

    const certificationFeaturesStyles = {
        marginBottom: '80px'
    };

    const certificationMainCardStyles = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px',
        borderRadius: '20px',
        textAlign: 'center',
        marginBottom: '60px',
        boxShadow: '0 20px 40px -10px rgba(102, 126, 234, 0.3)'
    };

    const certificationIconContainerStyles = {
        marginBottom: '30px'
    };

    const certificationMainIconStyles = {
        fontSize: '4rem',
        display: 'inline-block'
    };

    const certificationMainTitleStyles = {
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '20px'
    };

    const certificationMainDescStyles = {
        fontSize: '1.2rem',
        lineHeight: '1.7',
        maxWidth: '800px',
        margin: '0 auto',
        opacity: 0.95
    };

    const certificationGridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px'
    };

    const certificationCardStyles = {
        background: 'white',
        padding: '40px',
        borderRadius: '16px',
        boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0',
        textAlign: 'center',
        transition: 'all 0.3s ease'
    };

    const certificationCardIconStyles = {
        fontSize: '3rem',
        marginBottom: '20px',
        display: 'block'
    };

    const certificationCardTitleStyles = {
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '20px'
    };

    const certificationListStyles = {
        listStyle: 'none',
        padding: 0,
        margin: '0 0 20px 0'
    };

    const certificationListItemStyles = {
        padding: '8px 0',
        color: '#64748b',
        borderBottom: '1px solid #f1f5f9',
        fontSize: '0.95rem'
    };

    const certificationSuccessRateStyles = {
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontWeight: '600',
        fontSize: '0.9rem',
        display: 'inline-block'
    };

    const certificationProcessStyles = {
        marginBottom: '80px'
    };

    const certificationProcessTitleStyles = {
        fontSize: '2.5rem',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '50px',
        color: '#1e293b'
    };

    const certificationStepsStyles = {
        maxWidth: '900px',
        margin: '0 auto'
    };

    const certificationStepStyles = {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '30px',
        marginBottom: '40px',
        padding: '30px',
        background: 'white',
        borderRadius: '16px',
        boxShadow: '0 4px 15px -5px rgba(0, 0, 0, 0.08)',
        flexDirection: isMobile ? 'column' : 'row',
        textAlign: isMobile ? 'center' : 'left'
    };

    const certificationStepNumberStyles = {
        width: '50px',
        height: '50px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '1.2rem',
        flexShrink: 0,
        margin: isMobile ? '0 auto' : '0'
    };

    const certificationStepContentStyles = {
        flex: 1
    };

    const certificationStepTitleStyles = {
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '10px'
    };

    const certificationStepDescStyles = {
        color: '#64748b',
        lineHeight: '1.6'
    };

    const certificationBenefitsStyles = {
        textAlign: 'center'
    };

    const certificationBenefitsTitleStyles = {
        fontSize: '2.5rem',
        fontWeight: '700',
        marginBottom: '50px',
        color: '#1e293b'
    };

    const certificationBenefitsGridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px'
    };

    const certificationBenefitCardStyles = {
        background: 'white',
        padding: '40px 30px',
        borderRadius: '16px',
        boxShadow: '0 8px 20px -5px rgba(0, 0, 0, 0.1)',
        border: '1px solid #e2e8f0',
        textAlign: 'center'
    };

    const certificationBenefitIconStyles = {
        fontSize: '3rem',
        marginBottom: '20px',
        display: 'block'
    };

    const certificationBenefitTitleStyles = {
        fontSize: '1.3rem',
        fontWeight: '600',
        color: '#1e293b',
        marginBottom: '15px'
    };

    const certificationBenefitDescStyles = {
        color: '#64748b',
        lineHeight: '1.6',
        fontSize: '0.95rem'
    };

    const testimonialsSectionStyles = {
        padding: '120px 0', position: 'relative', backgroundColor: '#FFFFFF', zIndex: 1
    };
    
    const testimonialsGridStyles = {
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '40px', marginTop: '60px'
    };

    const testimonialCardStyles = {
        background: 'white', borderRadius: '20px', padding: '30px',
        boxShadow: '0 8px 25px -5px rgba(0, 0, 0, 0.05)',
        border: '1px solid #e9ecef', display: 'flex', flexDirection: 'column'
    };
    
    const testimonialQuoteStyles = {
        fontSize: '1.1rem', color: '#555', lineHeight: 1.6,
        fontStyle: 'italic', flexGrow: 1, marginBottom: '20px'
    };

    const testimonialAuthorStyles = {
        fontSize: '1rem', fontWeight: '700', color: '#1A202C'
    };

    const testimonialCompanyStyles = {
        fontSize: '0.9rem', color: '#667EEA', fontWeight: '500'
    };

    // --- CERTIFICATION SECTION COMPONENT ---
    const CertificationSection = () => (
        <section style={certificationSectionStyles}>
            <div style={servicesContainerStyles}>
                <div style={certificationHeaderStyles}>
                    <h2 style={certificationTitleStyles}>Certification Assistance Program</h2>
                    <p style={certificationSubtitleStyles}>
                        Comprehensive support to help you achieve industry-recognized certifications and advance your career
                    </p>
                </div>
                
                <div style={certificationFeaturesStyles}>
                    <div style={certificationMainCardStyles}>
                        <div style={certificationIconContainerStyles}>
                            <span style={certificationMainIconStyles}>🎓</span>
                        </div>
                        <h3 style={certificationMainTitleStyles}>Why Certifications Matter</h3>
                        <p style={certificationMainDescStyles}>
                            Industry certifications validate your skills, increase your earning potential by 20-30%, 
                            and make you stand out to employers. We provide end-to-end support to help you achieve 
                            the most valuable certifications in your field.
                        </p>
                    </div>
                    
                    <div style={certificationGridStyles}>
                        {certificationPrograms.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <div style={certificationCardStyles}>
                                    <div style={certificationCardIconStyles}>{program.icon}</div>
                                    <h4 style={certificationCardTitleStyles}>{program.title}</h4>
                                    <ul style={certificationListStyles}>
                                        {program.certifications.map((cert, idx) => (
                                            <li key={idx} style={certificationListItemStyles}>{cert}</li>
                                        ))}
                                    </ul>
                                    <div style={certificationSuccessRateStyles}>
                                        Success Rate: {program.successRate}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div style={certificationProcessStyles}>
                    <h3 style={certificationProcessTitleStyles}>Our Certification Process</h3>
                    <div style={certificationStepsStyles}>
                        {certificationSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                style={certificationStepStyles}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div style={certificationStepNumberStyles}>{index + 1}</div>
                                <div style={certificationStepContentStyles}>
                                    <h4 style={certificationStepTitleStyles}>{step.title}</h4>
                                    <p style={certificationStepDescStyles}>{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div style={certificationBenefitsStyles}>
                    <h3 style={certificationBenefitsTitleStyles}>Certification Benefits</h3>
                    <div style={certificationBenefitsGridStyles}>
                        {certificationBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div style={certificationBenefitCardStyles}>
                                    <div style={certificationBenefitIconStyles}>{benefit.icon}</div>
                                    <h4 style={certificationBenefitTitleStyles}>{benefit.title}</h4>
                                    <p style={certificationBenefitDescStyles}>{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    return (
        <>
            <div style={pageStyles}>
                <div style={backgroundPatternStyles} />
                <Header />
                
                <section style={heroSectionStyles}>
                    <div style={heroContainerStyles}>
                        <motion.div style={heroTextContainerStyles} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <h1 style={heroTitleStyles}>Integrated Tech Solutions</h1>
                            <p style={heroSubtitleStyles}>Driving growth through expert training, strategic placements, and robust engineering for businesses and professionals.</p>
                            <motion.button style={ctaButtonStyles} whileHover={{ scale: 1.05, boxShadow: '0 12px 30px rgba(102, 126, 234, 0.4)' }} whileTap={{ scale: 0.95 }}>
                                Explore Services
                                <span style={{ fontSize: '1.5rem' }}>→</span>
                            </motion.button>
                        </motion.div>
                        <motion.div style={heroIllustrationContainerStyles} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
                           <HeroIllustration />
                        </motion.div>
                    </div>
                    <ShapeDivider position="bottom" color="#FFFFFF" />
                </section>

                <section style={servicesSectionStyles}>
                    <div style={servicesContainerStyles}>
                        <div style={servicesGridStyles}>
                            {services.map(service => (
                                <motion.div
                                    key={service.id}
                                    onClick={() => setActiveService(service.id)}
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
                                >
                                    <div style={serviceCardStyles(activeService === service.id)}>
                                        <div style={illustrationContainerStyles}>{service.illustration}</div>
                                        <h3 style={serviceTitleStyles}>{service.title}</h3>
                                        <p style={serviceDescriptionStyles}>{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {selectedService && (
                    <motion.section style={detailSectionStyles} key={activeService} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <ShapeDivider position="top" color="#FFFFFF" />
                        <div style={detailContainerStyles}>
                            <div style={detailHeaderStyles}>
                                <motion.h2 style={detailTitleStyles} key={`${activeService}-title`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                                    {selectedService.title}
                                </motion.h2>
                                <motion.p style={detailSubtitleStyles} key={`${activeService}-subtitle`} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                                    {selectedService.subtitle}
                                </motion.p>
                            </div>
                            
                            <h3 style={sectionHeaderStyles}>Core Features</h3>
                            <div style={featuresGridStyles}>
                                {selectedService.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.15 }}
                                        onMouseEnter={() => setHoveredFeature(index)}
                                        onMouseLeave={() => setHoveredFeature(null)}
                                    >
                                        <div style={featureCardStyles(hoveredFeature === index)}>
                                            <div style={featureIconStyles}>{feature.icon}</div>
                                            <h4 style={featureTitleStyles}>{feature.title}</h4>
                                            <p style={featureDescriptionStyles}>{feature.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <h3 style={sectionHeaderStyles}>Our Process</h3>
                            <motion.div style={processContainerStyles} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <div style={processLineStyles}></div>
                                {selectedService.process.map((step, index) => (
                                    <motion.div style={processItemStyles} key={index} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 * index }}>
                                        <div style={processIconWrapper(selectedService.gradient)}>{index + 1}</div>
                                        <h4 style={processTitleStyles}>{step.title}</h4>
                                        <p style={processDescStyles}>{step.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div style={statsContainerStyles} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                                {selectedService.stats.map((stat, index) => (
                                    <div key={index} style={statItemStyles}>
                                        <div style={statValueStyles}>{stat.value}</div>
                                        <div style={statLabelStyles}>{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <ShapeDivider position="bottom" color="#FFFFFF" />
                    </motion.section>
                )}

                {/* CERTIFICATION ASSISTANCE SECTION */}
                <CertificationSection />

                <section style={testimonialsSectionStyles}>
                    <div style={servicesContainerStyles}>
                        <h2 style={{...sectionHeaderStyles, textAlign: 'center', marginBottom: '60px' }}>Loved by Professionals Worldwide</h2>
                        <div style={testimonialsGridStyles}>
                            {testimonials.map((t, i) => (
                                <motion.div key={i} style={testimonialCardStyles} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                    <p style={testimonialQuoteStyles}>"{t.quote}"</p>
                                    <div>
                                        <p style={testimonialAuthorStyles}>{t.author}</p>
                                        <p style={testimonialCompanyStyles}>{t.company}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <Footer />
            </div>
        </>
    );
};

export default Services;
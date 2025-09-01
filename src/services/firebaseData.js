import { 
  collection, 
  getDocs, 
  getDoc,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  setDoc,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../firebase';

// Collection names
export const COLLECTIONS = {
  HERO_CONTENT: 'hero_content',
  COURSES: 'courses',
  PROGRAMS: 'programs',
  INDUSTRY_JOBS: 'industry_jobs',
  COMPANY_INFO: 'company_info',
  ANALYTICS: 'analytics',
  PLACEMENT_PLANS: 'placement_plans',
  PLACEMENT_CONTENT: 'placement_content'
};

// Initial data migration function
export const migrateInitialData = async () => {
  try {
    // Hero section data
    const heroData = {
      title: "Empowering Talent, Driving Global Tech Success",
      subtitle: "Transform your career with expert training, guaranteed placements, and world-class consultancy services",
      statistics: [
        { number: "600+", label: "Successful Placements" },
        { number: "6+", label: "Years Experience" },
        { number: "50+", label: "Placement Companies" }
      ],
      buttons: [
        { text: "Explore Training Programs", link: "/programs", variant: "primary" },
        { text: "Find Your Dream Job", link: "https://docs.google.com/forms/d/e/1FAIpQLSe2mqWXkm0W43PxgYna5nFPwCOMshtsYhc9NPEBQCocdTiCEQ/viewform?usp=header", variant: "secondary" }
      ],
      formTitle: "Start Your Journey",
      formSubtitle: "Join thousands of successful tech professionals",
      courseOptions: [
        { value: "react", label: "React Development" },
        { value: "node", label: "Node.js Backend" },
        { value: "fullstack", label: "Full Stack Development" },
        { value: "python", label: "Python Programming" },
        { value: "data-science", label: "Data Science" },
        { value: "mainframe", label: "Mainframe" }
      ],
      updatedAt: serverTimestamp()
    };
    await setDoc(doc(db, COLLECTIONS.HERO_CONTENT, 'main'), heroData);

    // Courses data (complete list from existing courses)
    const coursesData = [
      {
        title: 'Mainframe Training & Placement Program',
        category: 'backend',
        duration: '40 hours',
        level: 'Beginner to Job-Ready',
        technologies: ['COBOL', 'JCL', 'DB2', 'CICS', 'IBM z/OS', 'VSAM'],
        price: '₹30,000',
        originalPrice: '₹60,000',
        discount: '50% OFF',
        icon: '🖥️',
        gradient: 'linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)',
        rating: 4.8,
        students: 187,
        instructor: 'Robert Kumar',
        nextStart: 'March 25, 2024',
        features: ['Job Guarantee', 'Industry Mentors', 'Real Projects', 'Certification'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'Data Science with Python',
        category: 'data',
        duration: '60 hours',
        level: 'Beginner to Advanced',
        technologies: ['Python', 'Pandas', 'TensorFlow', 'Scikit-learn', 'SQL'],
        price: '₹50,000',
        originalPrice: '₹60,000',
        discount: '17% OFF',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        rating: 4.9,
        students: 88,
        instructor: 'Dr. Emily Rodriguez',
        nextStart: 'April 5, 2024',
        features: ['Real Datasets', 'ML Projects', 'Data Visualization', 'Career Support'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'Full Stack Web Development Bootcamp',
        category: 'fullstack',
        duration: '80 hours',
        level: 'Beginner to Advanced',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'HTML/CSS'],
        price: '₹75,000',
        originalPrice: '₹1,00,000',
        discount: '25% OFF',
        icon: '🚀',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        rating: 4.9,
        students: 1250,
        instructor: 'Sarah Johnson',
        nextStart: 'March 15, 2024',
        features: ['1-on-1 Mentorship', 'Job Placement', 'Personal Mentor', 'Lifetime Access'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'React.js Mastery Course',
        category: 'frontend',
        duration: '45 hours',
        level: 'Intermediate',
        technologies: ['React', 'Redux', 'TypeScript', 'Jest', 'React Router', 'Styled Components'],
        price: '₹40,000',
        originalPrice: '₹55,000',
        discount: '27% OFF',
        icon: '⚛️',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        rating: 4.8,
        students: 890,
        instructor: 'Michael Chen',
        nextStart: 'March 22, 2024',
        features: ['1-on-1 Sessions', 'Personal Mentor', 'Performance', 'Live Projects'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'Node.js Backend Development',
        category: 'backend',
        duration: '50 hours',
        level: 'Intermediate',
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
        price: '₹45,000',
        originalPrice: '₹65,000',
        discount: '31% OFF',
        icon: '⚙️',
        gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        rating: 4.7,
        students: 654,
        instructor: 'David Park',
        nextStart: 'March 29, 2024',
        features: ['API Design', 'Database Design', 'Security', 'Deployment'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'Modern JavaScript Fundamentals',
        category: 'frontend',
        duration: '35 hours',
        level: 'Beginner',
        technologies: ['JavaScript', 'ES6+', 'DOM', 'Fetch API', 'Async/Await', 'Modules'],
        price: '₹25,000',
        originalPrice: '₹40,000',
        discount: '38% OFF',
        icon: '💻',
        gradient: 'linear-gradient(135deg, #a8eaaa 0%, #867165 90%)',
        rating: 4.6,
        students: 1120,
        instructor: 'Alex Thompson',
        nextStart: 'March 18, 2024',
        features: ['Interactive Coding', 'Projects', 'Code Review', 'Community'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
    ];

    for (const course of coursesData) {
      await addDoc(collection(db, COLLECTIONS.COURSES), course);
    }

    // Programs data
    const programsData = [
      {
        title: 'Full Stack Development Bootcamp',
        description: 'Comprehensive 16-week program covering frontend, backend, and deployment technologies',
        duration: '16 weeks',
        level: 'Beginner to Job-Ready',
        price: '₹1,50,000',
        originalPrice: '₹2,50,000',
        discount: '40% OFF',
        icon: '🚀',
        gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        rating: 4.9,
        students: 450,
        instructor: 'Team of Experts',
        nextStart: 'April 1, 2024',
        features: ['Job Guarantee', 'Industry Mentors', '1-on-1 Support', 'Portfolio Development'],
        curriculum: ['HTML/CSS/JavaScript', 'React.js', 'Node.js', 'MongoDB', 'DevOps', 'Project Work'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'Data Science & AI Program',
        description: 'Master data science, machine learning, and AI with Python and industry tools',
        duration: '20 weeks',
        level: 'Beginner to Advanced',
        price: '₹1,75,000',
        originalPrice: '₹3,00,000',
        discount: '42% OFF',
        icon: '🤖',
        gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        rating: 4.8,
        students: 320,
        instructor: 'Dr. Priya Sharma',
        nextStart: 'March 25, 2024',
        features: ['Real Datasets', 'Industry Projects', 'Certification', 'Job Assistance'],
        curriculum: ['Python Programming', 'Statistics', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        title: 'Cloud DevOps Engineer Program',
        description: 'Become a DevOps engineer with hands-on experience in AWS, Docker, and Kubernetes',
        duration: '14 weeks',
        level: 'Intermediate to Advanced',
        price: '₹1,25,000',
        originalPrice: '₹2,00,000',
        discount: '38% OFF',
        icon: '☁️',
        gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        rating: 4.7,
        students: 280,
        instructor: 'Raj Kumar',
        nextStart: 'April 8, 2024',
        features: ['AWS Certification', 'Hands-on Labs', 'Industry Mentorship', 'Job Support'],
        curriculum: ['Linux & Networking', 'AWS Services', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Monitoring', 'Security'],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
    ];

    for (const program of programsData) {
      await addDoc(collection(db, COLLECTIONS.PROGRAMS), program);
    }

    // Industry jobs data
    const jobsData = [
      {
        id: 1,
        industry: 'FinTech',
        title: 'Senior Full Stack Developer',
        company: 'Leading Financial Services',
        location: 'Bangalore, Hyderabad',
        experience: '3-5 years',
        package: '₹12-18 LPA',
        skills: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript'],
        urgency: 'Immediate',
        openings: 5,
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        id: 2,
        industry: 'Healthcare',
        title: 'Data Scientist',
        company: 'Healthcare Technology',
        location: 'Pune, Mumbai',
        experience: '2-4 years',
        package: '₹10-15 LPA',
        skills: ['Python', 'Machine Learning', 'SQL', 'TensorFlow', 'R'],
        urgency: 'This Week',
        openings: 3,
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
      // Add more jobs here...
    ];

    for (const job of jobsData) {
      await addDoc(collection(db, COLLECTIONS.INDUSTRY_JOBS), job);
    }

    // Company info data
    const companyData = {
      name: "Datenwork",
      tagline: "Empowering Talent, Driving Global Tech Success",
      email: "info@datenwork.com",
      phone: "+1 (555) 123-4567",
      address: "Your Company Address",
      socialLinks: {
        linkedin: "https://linkedin.com/company/datenwork",
        twitter: "https://twitter.com/datenwork",
        github: "https://github.com/datenwork"
      },
      services: [
        { name: "Training", description: "Comprehensive skill development programs" },
        { name: "Placement", description: "Guaranteed job placement assistance" },
        { name: "Consultancy", description: "Expert technology consulting services" }
      ],
      updatedAt: serverTimestamp()
    };
    await setDoc(doc(db, COLLECTIONS.COMPANY_INFO, 'main'), companyData);

    // Placement Plans data (Professional design - only 2 plans)
    const placementPlansData = [
      {
        id: 'professional',
        name: 'Professional',
        subtitle: 'Perfect for career starters',
        prePlacementCost: 2300,
        postPlacementPercentage: 17,
        monthlyEquivalent: '$192/month',
        yearlyEquivalent: '$2,300/year',
        popular: false,
        icon: '🎯',
        badge: null,
        features: {
          paymentTerms: '4 EMI',
          resumePrep: 'Professional Resume + LinkedIn',
          supportSessions: '10 Support Sessions',
          interviewTraining: 'Mock Interview Training',
          support: 'Email & Chat Support',
          jobGuarantee: '180 Days',
          recruiterType: 'Certified Recruiter',
          linkedinOptimization: true,
          profileMarketing: true,
          backgroundCheck: true,
          personalBranding: false,
          dedicatedManager: false
        },
        bulletFeatures: [
          { text: 'Professional Resume + LinkedIn', enabled: true },
          { text: '10 Support Sessions', enabled: true },
          { text: 'Mock Interview Training', enabled: true },
          { text: '180 Days Job Guarantee', enabled: true },
          { text: 'Certified Recruiter', enabled: true }
        ],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      },
      {
        id: 'elite',
        name: 'Elite',
        subtitle: 'Most popular choice',
        prePlacementCost: 3300,
        postPlacementPercentage: 15,
        monthlyEquivalent: '$275/month',
        yearlyEquivalent: '$3,300/year',
        popular: true,
        icon: '🚀',
        badge: 'Most Popular',
        features: {
          paymentTerms: '4 EMI',
          resumePrep: 'Premium Resume + Portfolio',
          supportSessions: '20 Support + Advanced Training',
          interviewTraining: 'Advanced Interview Coaching',
          support: 'Priority Support + Phone',
          jobGuarantee: '180 Days',
          recruiterType: 'Senior Recruiter',
          linkedinOptimization: true,
          profileMarketing: true,
          backgroundCheck: true,
          personalBranding: true,
          dedicatedManager: true
        },
        bulletFeatures: [
          { text: 'Premium Resume + Portfolio', enabled: true },
          { text: '20 Support + Advanced Training', enabled: true },
          { text: 'Advanced Interview Coaching', enabled: true },
          { text: '180 Days Job Guarantee', enabled: true },
          { text: 'Senior Recruiter', enabled: true },
          { text: 'Personal Branding', enabled: true },
          { text: 'Dedicated Account Manager', enabled: true }
        ],
        isActive: true,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
    ];

    for (const plan of placementPlansData) {
      await setDoc(doc(db, COLLECTIONS.PLACEMENT_PLANS, plan.id), plan);
    }

    // Placement Program Content (editable content for the page)
    const placementContentData = {
      hero: {
        title: 'US-IT Placement Program',
        subtitle: 'Transform your career with guaranteed placement in top US companies. Expert guidance, proven results, and comprehensive support for your US tech career journey.',
        badges: [
          { icon: '🎯', text: '100% Job Guarantee', color: '#059669' },
          { icon: '🇺🇸', text: 'US Market Focus', color: '#2563eb' },
          { icon: '⚡', text: 'Fast Track', color: '#06b6d4' }
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
      guaranteeTerms: [
        "If Datenwork is unable to find the candidate a job within 180 days, we will refund the Pre-Placement cost paid by candidate if demanded.",
        "After refunding, Datenwork will continue to provide services (Resume marketing, LinkedIn optimization, background clearance) for 1 year.",
        "After getting the job, candidate pays only the Post-Placement cost (Commission) of first year salary in 4 easy installments.",
        "Commission is payable in first 4 months from joining date with flexible payment options.",
        "All commitments documented in comprehensive legal agreement with transparent terms and conditions.",
        "Guarantee period starts from first day of active marketing and job search activities for candidate's profile.",
        "Extended service includes continuous resume marketing, LinkedIn optimization, interview prep, and background verification.",
        "Datenwork provides dedicated career counseling, industry insights, and personalized job matching based on skills and aspirations.",
        "Transparent dispute resolution process with candidate satisfaction as primary goal."
      ],
      stats: [
        { stat: '100%', label: 'Success Rate', icon: '🎯', color: '#059669' },
        { stat: '45 Days', label: 'Avg. Placement', icon: '⚡', color: '#06b6d4' },
        { stat: '$85K+', label: 'Avg. Salary', icon: '💰', color: '#f59e0b' },
        { stat: '500+', label: 'Placements', icon: '👥', color: '#2563eb' }
      ],
      updatedAt: serverTimestamp()
    };

    await setDoc(doc(db, COLLECTIONS.PLACEMENT_CONTENT, 'main'), placementContentData);

    console.log('Initial data migration completed successfully');
    return true;
  } catch (error) {
    console.error('Error migrating initial data:', error);
    return false;
  }
};

// CRUD operations for Hero Content
export const heroService = {
  get: async () => {
    const docRef = doc(db, COLLECTIONS.HERO_CONTENT, 'main');
    const docSnap = await getDocs(collection(db, COLLECTIONS.HERO_CONTENT));
    return docSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  update: async (data) => {
    const docRef = doc(db, COLLECTIONS.HERO_CONTENT, 'main');
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  }
};

// CRUD operations for Courses
export const coursesService = {
  getAll: async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.COURSES));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  add: async (courseData) => {
    const docRef = await addDoc(collection(db, COLLECTIONS.COURSES), {
      ...courseData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },
  
  update: async (id, data) => {
    const docRef = doc(db, COLLECTIONS.COURSES, id);
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  },
  
  delete: async (id) => {
    const docRef = doc(db, COLLECTIONS.COURSES, id);
    await deleteDoc(docRef);
  }
};

// CRUD operations for Programs
export const programsService = {
  getAll: async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.PROGRAMS));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  add: async (programData) => {
    const docRef = await addDoc(collection(db, COLLECTIONS.PROGRAMS), {
      ...programData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },
  
  update: async (id, data) => {
    const docRef = doc(db, COLLECTIONS.PROGRAMS, id);
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  },
  
  delete: async (id) => {
    const docRef = doc(db, COLLECTIONS.PROGRAMS, id);
    await deleteDoc(docRef);
  }
};

// CRUD operations for Industry Jobs
export const jobsService = {
  getAll: async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.INDUSTRY_JOBS));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  add: async (jobData) => {
    const docRef = await addDoc(collection(db, COLLECTIONS.INDUSTRY_JOBS), {
      ...jobData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },
  
  update: async (id, data) => {
    const docRef = doc(db, COLLECTIONS.INDUSTRY_JOBS, id);
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  },
  
  delete: async (id) => {
    const docRef = doc(db, COLLECTIONS.INDUSTRY_JOBS, id);
    await deleteDoc(docRef);
  }
};

// CRUD operations for Company Info
export const companyService = {
  get: async () => {
    const docRef = doc(db, COLLECTIONS.COMPANY_INFO, 'main');
    const docSnap = await getDocs(collection(db, COLLECTIONS.COMPANY_INFO));
    return docSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  update: async (data) => {
    const docRef = doc(db, COLLECTIONS.COMPANY_INFO, 'main');
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  }
};

// Analytics service
export const analyticsService = {
  trackPageView: async (page) => {
    await addDoc(collection(db, COLLECTIONS.ANALYTICS), {
      type: 'page_view',
      page: page,
      timestamp: serverTimestamp(),
      userAgent: navigator.userAgent,
      referrer: document.referrer
    });
  },
  
  getAnalytics: async (days = 30) => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.ANALYTICS));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};

// CRUD operations for Placement Plans
export const placementPlansService = {
  getAll: async () => {
    const querySnapshot = await getDocs(collection(db, COLLECTIONS.PLACEMENT_PLANS));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  
  get: async (id) => {
    const docRef = doc(db, COLLECTIONS.PLACEMENT_PLANS, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  },
  
  update: async (id, data) => {
    const docRef = doc(db, COLLECTIONS.PLACEMENT_PLANS, id);
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  },
  
  add: async (planData) => {
    const docRef = await addDoc(collection(db, COLLECTIONS.PLACEMENT_PLANS), {
      ...planData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  },
  
  delete: async (id) => {
    const docRef = doc(db, COLLECTIONS.PLACEMENT_PLANS, id);
    await deleteDoc(docRef);
  }
};

// CRUD operations for Placement Content
export const placementContentService = {
  get: async () => {
    const docRef = doc(db, COLLECTIONS.PLACEMENT_CONTENT, 'main');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  },
  
  update: async (data) => {
    const docRef = doc(db, COLLECTIONS.PLACEMENT_CONTENT, 'main');
    await updateDoc(docRef, { ...data, updatedAt: serverTimestamp() });
  }
};
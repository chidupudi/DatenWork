import { 
  collection, 
  getDocs, 
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
  ANALYTICS: 'analytics'
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
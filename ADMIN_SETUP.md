# Datenwork Admin Panel Setup Guide

## 🔥 Firebase Configuration

### 1. Setup Firebase Security Rules
Copy the rules from `firebase-rules.txt` to your Firebase Console:
1. Go to **Firebase Console > Firestore Database > Rules**
2. Replace existing rules with the content from `firebase-rules.txt`
3. Click **Publish**

### 2. Setup Admin User
1. Go to **Firebase Console > Authentication > Users**
2. Add a new user manually or sign up through the app
3. Go to **Authentication > Users > [Select User] > Custom Claims**
4. Add custom claim: `{ "admin": true }`

### 3. Environment Setup
Make sure your `src/firebase.js` is configured with your Firebase credentials:
```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

## 🚀 Database Migration

### Option 1: Use Admin Dashboard Button
1. Start the development server: `npm start`
2. Navigate to `/admin/login`
3. Login with your admin credentials
4. Go to Dashboard
5. Click **"Migrate to DB"** button
6. Wait for migration to complete

### Option 2: Browser Console
1. Open browser developer tools
2. Navigate to Console tab
3. Run: `runDataMigration()`
4. Wait for success message

## 📊 Admin Panel Features

### Available Admin Pages:
- **Dashboard** (`/admin/dashboard`) - Overview and migration
- **Courses** (`/admin/courses`) - Manage training courses
- **Programs** (`/admin/programs`) - Manage bootcamp programs  
- **Analytics** (`/admin/analytics`) - View website analytics
- **Company Info** (`/admin/settings`) - Manage company details
- **Hero Section** (`/admin/hero`) - Edit homepage hero content
- **Form Responses** (`/admin/responses`) - View contact form submissions
- **Jobs** (`/admin/jobs`) - Manage job listings

### Data Collections Created:
- `hero_content` - Homepage hero section data
- `courses` - Training courses (6 sample courses)
- `programs` - Bootcamp programs (3 sample programs)
- `industry_jobs` - Job listings (2 sample jobs)
- `company_info` - Company information
- `analytics` - Website usage analytics

## 🛠️ CRUD Operations

All admin pages support full CRUD operations:
- **Create**: Add new items
- **Read**: View and search items
- **Update**: Edit existing items  
- **Delete**: Remove items

## 🔒 Security Features

- Admin-only access with Firebase Authentication
- Custom claims for role-based access
- Firestore security rules
- Protected routes
- Input validation

## 📝 Sample Data Included

### Courses (6 samples):
1. Mainframe Training & Placement Program
2. Data Science with Python
3. Full Stack Web Development Bootcamp
4. React.js Mastery Course
5. Node.js Backend Development
6. Modern JavaScript Fundamentals

### Programs (3 samples):
1. Full Stack Development Bootcamp
2. Data Science & AI Program
3. Cloud DevOps Engineer Program

### Jobs (2 samples):
1. Senior Full Stack Developer (FinTech)
2. Data Scientist (Healthcare)

## 🚨 Troubleshooting

### Migration Issues:
- Ensure Firebase rules are properly set
- Check Firebase configuration
- Verify admin user has custom claims
- Check browser console for errors

### Access Issues:
- Verify admin user authentication
- Check custom claims are set correctly
- Ensure Firestore rules allow admin access

### Build Issues:
- Run `npm install` to ensure all dependencies
- Check for any import errors
- Verify all files are properly saved

## 🎯 Next Steps

1. Configure Firebase project
2. Set up admin user with custom claims
3. Run database migration
4. Test all admin functionality
5. Customize content as needed
6. Deploy to production

The admin panel is now fully functional with complete CRUD operations for all data types!
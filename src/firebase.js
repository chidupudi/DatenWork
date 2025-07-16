// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK6R73AnP-82DAzuqgjXDGRtaKd7T0f3c",
  authDomain: "datenwork.firebaseapp.com",
  projectId: "datenwork",
  storageBucket: "datenwork.firebasestorage.app",
  messagingSenderId: "314141049278",
  appId: "1:314141049278:web:b67fbf8bd08a70db3a79ef",
  measurementId: "G-HEPHVH9K5S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db, analytics };
export default app;
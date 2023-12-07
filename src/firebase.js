// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "task-manager-35431.firebaseapp.com",
  projectId: "task-manager-35431",
  storageBucket: "task-manager-35431.appspot.com",
  messagingSenderId: "174264475007",
  appId: "1:174264475007:web:00fa22ce9bbae338848e4a",
  measurementId: "G-C1BN38EF76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
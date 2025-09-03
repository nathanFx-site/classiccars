// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBORD0TJMSeWoZsFVvAO0lv1Jc9IpW7wbs",
  authDomain: "vinnie-a057e.firebaseapp.com",
  projectId: "vinnie-a057e",
  storageBucket: "vinnie-a057e.firebasestorage.app",
  messagingSenderId: "725405233413",
  appId: "1:725405233413:web:986373f9c8e658dfbc876c",
  measurementId: "G-5JXYTEHRKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSYPCL-ykbFR-AYTTFf4JBZg6i4rRhzhw",
  authDomain: "book-vibe-202b7.firebaseapp.com",
  projectId: "book-vibe-202b7",
  storageBucket: "book-vibe-202b7.firebasestorage.app",
  messagingSenderId: "26780694995",
  appId: "1:26780694995:web:136baf15a4adbeba4a5726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
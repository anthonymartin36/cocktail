// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxYi5mEUqiaQYRBltzwXf-HbVTPS7vfBw",
  authDomain: "cocktail-312cf.firebaseapp.com",
  projectId: "cocktail-312cf",
  storageBucket: "cocktail-312cf.appspot.com",
  messagingSenderId: "157694428794",
  appId: "1:157694428794:web:05cba12db1af82065b9dc3",
  measurementId: "G-ENEZ718WXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
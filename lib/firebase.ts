// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_n4e794-5uP3sNysfjpFICKZgGCJVA3Q",
  authDomain: "sereevia-2f3d3.firebaseapp.com",
  projectId: "sereevia-2f3d3",
  storageBucket: "sereevia-2f3d3.firebasestorage.app",
  messagingSenderId: "13792791768",
  appId: "1:13792791768:web:7dade2b28463e2f67b5bad",
  measurementId: "G-NHZXHWX1P7"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
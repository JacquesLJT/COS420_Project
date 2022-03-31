// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdOLsCIHAmzXHch0fiys67JzFjfXLnzyY",
  authDomain: "cswap-c394f.firebaseapp.com",
  databaseURL: "https://cswap-c394f-default-rtdb.firebaseio.com",
  projectId: "cswap-c394f",
  storageBucket: "cswap-c394f.appspot.com",
  messagingSenderId: "881473991107",
  appId: "1:881473991107:web:42cb3df58fa4e008ab4d76",
  measurementId: "G-4CLGQTRKM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export {app, db, analytics, auth};
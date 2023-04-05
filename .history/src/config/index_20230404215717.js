// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDataBase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  import { Form } from "react-router-dom";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb21sJWS-5zKioLZQNek1jJ9zeYbMq9L4",
  authDomain: "meeky-portfolio.firebaseapp.com",
  databaseURL: "https://meeky-portfolio-default-rtdb.firebaseio.com",
  projectId: "meeky-portfolio",
  storageBucket: "meeky-portfolio.appspot.com",
  messagingSenderId: "216185419483",
  appId: "1:216185419483:web:92bf312f659951ead07efe",
  measurementId: "G-P55CJDDPCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBjmW7ulGBJMORbOr5jnsay5MxwInirkk",
  authDomain: "gothrough-c6fbe.firebaseapp.com",
  projectId: "gothrough-c6fbe",
  storageBucket: "gothrough-c6fbe.appspot.com",
  messagingSenderId: "702788780343",
  appId: "1:702788780343:web:18cbc1d07a4e4ad0499ab2",
  measurementId: "G-Z7N8DR0XJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth,analytics};
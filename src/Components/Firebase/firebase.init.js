// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6EmdGxusTSnaNZUtPBxC501wB_8y1lVc",
  authDomain: "hotel-redisons.firebaseapp.com",
  projectId: "hotel-redisons",
  storageBucket: "hotel-redisons.appspot.com",
  messagingSenderId: "586565914224",
  appId: "1:586565914224:web:2260cb720dc87b543c6eb5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

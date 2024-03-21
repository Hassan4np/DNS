// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCbyn9uYl7oaut3w5RtVyZwf2hSKkAFJg",
    authDomain: "auth-project-4064d.firebaseapp.com",
    projectId: "auth-project-4064d",
    storageBucket: "auth-project-4064d.appspot.com",
    messagingSenderId: "270178800057",
    appId: "1:270178800057:web:3a37caeed317c5858aa668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app }
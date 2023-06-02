// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFsv2QV9jvSVt9XbZ8aus9lVpLkdjbYso",
    authDomain: "dragon-news-firebase-aut-5c988.firebaseapp.com",
    projectId: "dragon-news-firebase-aut-5c988",
    storageBucket: "dragon-news-firebase-aut-5c988.appspot.com",
    messagingSenderId: "356578394780",
    appId: "1:356578394780:web:134fecd8c048446e12e359"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
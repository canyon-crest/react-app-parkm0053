// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNmXy9VhrJZ278PPjvXPsfFUgQtkNQqs0",
  authDomain: "react-firebase-app-6259a.firebaseapp.com",
  projectId: "react-firebase-app-6259a",
  storageBucket: "react-firebase-app-6259a.firebasestorage.app",
  messagingSenderId: "289093978275",
  appId: "1:289093978275:web:f8c587ee89ecbbcd229716"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
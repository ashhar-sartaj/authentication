// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUxbN3ig5NnwVHMFUzF8t0X9mRDlPCtyQ",
  authDomain: "loginsignup-project-71939.firebaseapp.com",
  projectId: "loginsignup-project-71939",
  storageBucket: "loginsignup-project-71939.appspot.com",
  messagingSenderId: "405468614795",
  appId: "1:405468614795:web:007c18f781415493d3c48e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
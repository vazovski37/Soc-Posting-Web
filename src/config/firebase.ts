import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHzi4Y-LiTnXqJphyCuPaMYF-o2g9V7B8",
  authDomain: "soc-posting-web.firebaseapp.com",
  projectId: "soc-posting-web",
  storageBucket: "soc-posting-web.appspot.com",
  messagingSenderId: "212679417587",
  appId: "1:212679417587:web:8f4f41fca68c0a12cbe186"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider
export const db = getFirestore(app)


// Import the functions you need from the SDKs you need
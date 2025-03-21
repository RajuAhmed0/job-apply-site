// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5y181_j3fex5ifH3MxLF-dJiVQjrhQIs",
  authDomain: "job-apply-site.firebaseapp.com",
  projectId: "job-apply-site",
  storageBucket: "job-apply-site.firebasestorage.app",
  messagingSenderId: "1019393733079",
  appId: "1:1019393733079:web:a1540a72a6c8624a671b92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(); 
export { auth, googleProvider };




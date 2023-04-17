// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB512lI1xk5FsfBIm-F4lBazDEOU9pxeB0",
  authDomain: "conceptual-session-basic-fb.firebaseapp.com",
  projectId: "conceptual-session-basic-fb",
  storageBucket: "conceptual-session-basic-fb.appspot.com",
  messagingSenderId: "1018358201634",
  appId: "1:1018358201634:web:6424cc112352dcdd37397b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
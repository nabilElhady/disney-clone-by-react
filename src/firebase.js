// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF8frueg02GdGQTg8PrcHRDkMV9wAs_0A",
  authDomain: "disney-4cc60.firebaseapp.com",
  projectId: "disney-4cc60",
  storageBucket: "disney-4cc60.appspot.com",
  messagingSenderId: "885505393639",
  appId: "1:885505393639:web:818857132b5eec8e877342",
  measurementId: "G-WK3MJMNHL9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

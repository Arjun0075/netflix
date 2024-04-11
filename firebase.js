// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjeEEZcg3q1BiIvS8ZreHzX9X0DByAmNg",
  authDomain: "netflix-b0fe9.firebaseapp.com",
  projectId: "netflix-b0fe9",
  storageBucket: "netflix-b0fe9.appspot.com",
  messagingSenderId: "1045062824457",
  appId: "1:1045062824457:web:45ad4c5670973cab2b7ed8",
  measurementId: "G-CTGSXTNCEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
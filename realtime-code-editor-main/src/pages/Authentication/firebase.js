// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPdC4l9j4XLvQzblhByQ9zi8-RPaLHDbU",
  authDomain: "auth-code-tool.firebaseapp.com",
  projectId: "auth-code-tool",
  storageBucket: "auth-code-tool.appspot.com",
  messagingSenderId: "189885986368",
  appId: "1:189885986368:web:7f805f1568ebedfc5ed1a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

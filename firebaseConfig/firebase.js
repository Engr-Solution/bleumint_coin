import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj14xkrlXtHbUnkkpXUcMF8MIKSK58PRA",
  authDomain: "social-login-btns-fiverr.firebaseapp.com",
  projectId: "social-login-btns-fiverr",
  storageBucket: "social-login-btns-fiverr.appspot.com",
  messagingSenderId: "460613638861",
  appId: "1:460613638861:web:7c544e9900a275a746a784",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


export default firebase;

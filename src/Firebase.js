import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBM7LMjTH0pWGEfLpgoNSj621fFMjxh9YE",
    authDomain: "comida-para-todos-595f3.firebaseapp.com",
    databaseURL: "https://comida-para-todos-595f3.firebaseio.com",
    projectId: "comida-para-todos-595f3",
    storageBucket: "comida-para-todos-595f3.appspot.com",
    messagingSenderId: "603490946934",
    appId: "1:603490946934:web:6c1001c2e84f2fa1f1f457"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
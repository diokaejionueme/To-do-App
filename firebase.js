/* import { initializeApp } from "firebase/app";*/


const firebaseConfig = {

    apiKey: "AIzaSyAwrZHYhJPYSf6tcBiYW6APW4KImo7DowE",

    authDomain: "to-do-live-6dd61.firebaseapp.com",

    projectId: "to-do-live-6dd61",

    storageBucket: "to-do-live-6dd61.appspot.com",

    messagingSenderId: "1062570535637",

    appId: "1:1062570535637:web:3246e6596dd105bb63505c",

    measurementId: "G-HE547XVVYM"

  };


  // Initialize Firebase

  firebaseConfig.initializeApp(firebaseConfig);
  firebaseConfig.analytics();

  var db = firebase.firestore();

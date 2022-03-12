import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAZzpHy0xZkiOlQ18BdvVvODrHfR66D_-I",
    authDomain: "bicycles-71a4b.firebaseapp.com",
    projectId: "bicycles-71a4b",
    storageBucket: "bicycles-71a4b.appspot.com",
    messagingSenderId: "714589746065",
    appId: "1:714589746065:web:039362f4b2fffd99526030"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

import firebase from 'firebase/app';
// const auth=require('firebase/auth');
// const db=require('firebase/database');

import "firebase/auth";//extra added
import "firebase/database";//extra added

 var firebaseConfig = {
    apiKey: "AIzaSyA0hmDsrxdiKHGCuLa6Mw2ydG5jVmyCfn0",
    authDomain: "social-media-d9d79.firebaseapp.com",
    databaseURL: "https://social-media-d9d79-default-rtdb.firebaseio.com",
    projectId: "social-media-d9d79",
    storageBucket: "social-media-d9d79.appspot.com",
    messagingSenderId: "261539924770",
    appId: "1:261539924770:web:24f0b7c2a836b562f7337b",
    measurementId: "G-N7MPXTSX5T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);//const instance left empty


  const database=firebase.database()

  const GoogleAuthProvider=new firebase.auth.GoogleAuthProvider();
  
  // console.log('hello from firebaase')
  
  export {database as default,firebase,GoogleAuthProvider};
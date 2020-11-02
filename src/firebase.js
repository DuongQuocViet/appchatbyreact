import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const  firebaseConfig = {
  apiKey: "AIzaSyD0gz380-JUjvrQKmc6NHYB5-lXUHou73o",
  authDomain: "appchatreact-1079d.firebaseapp.com",
  databaseURL: "https://appchatreact-1079d.firebaseio.com",
  projectId: "appchatreact-1079d",
  storageBucket: "appchatreact-1079d.appspot.com",
  messagingSenderId: "831624873619",
  appId: "1:831624873619:web:a2b8739d7633fed3cb6f66"
};
  firebase.initializeApp(firebaseConfig);

  export const firebaseAuth = firebase.auth();
  export const firebaseDb = firebase.firestore();
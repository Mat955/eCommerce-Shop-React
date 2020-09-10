import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAYk7bhlm2RU7oq6ewT0N3GtZe8d5NbVCg",
  authDomain: "ecommerceshopbarca.firebaseapp.com",
  databaseURL: "https://ecommerceshopbarca.firebaseio.com",
  projectId: "ecommerceshopbarca",
  storageBucket: "ecommerceshopbarca.appspot.com",
  messagingSenderId: "556631475379",
  appId: "1:556631475379:web:a1538800667ece14755cc6",
  measurementId: "G-F7Q07Z8DSE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
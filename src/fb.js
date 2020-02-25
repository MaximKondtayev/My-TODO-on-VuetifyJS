import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDXvMMzaS-V8j6TO-G6Jgy7fgBb1UAZzFo",
    authDomain: "todo-nextit.firebaseapp.com",
    databaseURL: "https://todo-nextit.firebaseio.com",
    projectId: "todo-nextit",
    storageBucket: "todo-nextit.appspot.com",
    messagingSenderId: "676315317398",
    appId: "1:676315317398:web:e0bfe96eb804c200b5eeb7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});

export default db;
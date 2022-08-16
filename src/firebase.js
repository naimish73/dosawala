import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDwvfNrsDw0dUgFlEBilKNQzGfSspQdwQ",
    authDomain: "dosawala-f2d72.firebaseapp.com",
    projectId: "dosawala-f2d72",
    storageBucket: "dosawala-f2d72.appspot.com",
    messagingSenderId: "1098170744984",
    appId: "1:1098170744984:web:df161241fb8c281dfbd0ed",
    measurementId: "G-XR632XH84Y",
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

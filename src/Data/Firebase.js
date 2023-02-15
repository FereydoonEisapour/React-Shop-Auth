import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhfRvjBoLj97PyNphZ7pCbrExNls4zXb0",
    authDomain: "react-shop-ed8dd.firebaseapp.com",
    databaseURL: "https://react-shop-ed8dd-default-rtdb.firebaseio.com",
    projectId: "react-shop-ed8dd",
    storageBucket: "react-shop-ed8dd.appspot.com",
    messagingSenderId: "255338913370",
    appId: "1:255338913370:web:a8b1c4037561a082aec263",
    measurementId: "G-QQG60VD0DM"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };

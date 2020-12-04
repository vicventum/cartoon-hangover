import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/analytics"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPvTyMBcWybprPeHjiO0FCXnI_0UGbJMI",
    authDomain: "vicventum.firebaseapp.com",
    databaseURL: "https://vicventum.firebaseio.com",
    projectId: "vicventum",
    storageBucket: "vicventum.appspot.com",
    messagingSenderId: "158662617162",
    appId: "1:158662617162:web:34184d8517a223e90b9eb3",
    measurementId: "G-XHW4KW6YDW"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
console.log('Start Firebase')

firebase.analytics()
// Referencia a la base de datos
const db = firebase.firestore()

export {db}
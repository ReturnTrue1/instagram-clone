import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyChNmDbqXmdC6MNwE4KYIdwDPYuyInGxoY",
    authDomain: "instagram-clone-f010a.firebaseapp.com",
    projectId: "instagram-clone-f010a",
    storageBucket: "instagram-clone-f010a.appspot.com",
    messagingSenderId: "724644426071",
    appId: "1:724644426071:web:f8d37a9839182b1b870e12",
    measurementId: "G-L27BD8HYPG"
});

let storage = firebase.storage().ref()
let auth = firebase.auth()

export { 
    firebase, storage, auth
}

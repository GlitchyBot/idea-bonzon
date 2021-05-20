import firebase from 'firebase'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBhml26BypOdtCQJWICHN-tVe7KkdWjM9o",
    authDomain: "tienda-react-3d809.firebaseapp.com",
    projectId: "tienda-react-3d809",
    storageBucket: "tienda-react-3d809.appspot.com",
    messagingSenderId: "846844279857",
    appId: "1:846844279857:web:79d3dd91adc2319707a910"
})

export const getFirebase = () => app

export const getFirestore = () => firebase.firestore(app)
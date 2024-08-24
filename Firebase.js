
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC-ubNkqLGgVy2Va5KgNBSAikNFclaUpW8",
  authDomain: "the-notes-app-cfe0c.firebaseapp.com",
  projectId: "the-notes-app-cfe0c",
  storageBucket: "the-notes-app-cfe0c.appspot.com",
  messagingSenderId: "352919141780",
  appId: "1:352919141780:web:aba1ba4a7288c381bce381"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, 'notes')
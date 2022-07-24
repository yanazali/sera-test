// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

let firebaseConfig = {
  apiKey: "AIzaSyDHFg0MHJQ0hW-ZZIcwpnFosZHaed1V3UQ",
  authDomain: "sera-test-2034b.firebaseapp.com",
  projectId: "sera-test-2034b",
  storageBucket: "sera-test-2034b.appspot.com",
  messagingSenderId: "537642890766",
  appId: "1:537642890766:web:f701503f7ec3ef040bee5f",
  measurementId: "G-KGTSJFL7NS",
};

// Get a Firestore instance
export const db = firebase.initializeApp(firebaseConfig).firestore()

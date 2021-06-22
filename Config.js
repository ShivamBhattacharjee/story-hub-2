import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA50kPVbYKpy1yu6AseUHRu3IEDTs_apIY",
  authDomain: "storyhub-9e181.firebaseapp.com",
  projectId: "storyhub-9e181",
  storageBucket: "storyhub-9e181.appspot.com",
  messagingSenderId: "927177617315",
  appId: "1:927177617315:web:1fcae84ac2a829964a3416",
  measurementId: "G-G2N1T4Y1XR"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
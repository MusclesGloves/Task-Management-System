



import firebase from 'firebase'

// const firebaseConfig = {
//   apiKey: "AIzaSyAv5bMw1ivOk3OUI-zduV301zq4SFwcd3c",
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DB_URL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyAv5bMw1ivOk3OUI-zduV301zq4SFwcd3c",
  authDomain: "fir-demo-ae000.firebaseapp.com",
  projectId: "fir-demo-ae000",
  storageBucket: "fir-demo-ae000.firebasestorage.app",
  messagingSenderId: "712168957203",
  appId: "1:712168957203:web:723627c14eb16011ffe6e6",
  measurementId: "G-NJKRZ9PEXC"
};

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
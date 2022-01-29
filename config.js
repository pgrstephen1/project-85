import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJ3c3XX565Uq363mY2jU2AoTbZIeHh2uw",
    authDomain: "spectogram-8a098.firebaseapp.com",
    projectId: "spectogram-8a098",
    storageBucket: "spectogram-8a098.appspot.com",
    messagingSenderId: "552106495877",
    appId: "1:552106495877:web:cecfb1a9d6f7d947123eec"
  };
  
  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app();
  }

  export default firebase.firestore();
import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyA-Y-mmqFx0md5TZO4OCrV_QVLU8u3HgqI",
    authDomain: "linkedinclone-4ae36.firebaseapp.com",
    projectId: "linkedinclone-4ae36",
    storageBucket: "linkedinclone-4ae36.appspot.com",
    messagingSenderId: "730151338890",
    appId: "1:730151338890:web:82966179edad3b8e647e73",
    measurementId: "G-8YL7KZ1TC0"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth=firebase.auth()

  export {db,auth};

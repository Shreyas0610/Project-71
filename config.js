import firebase from 'firebase'
require("@firebase/firestore")

  const firebaseConfig = {
    apiKey: "AIzaSyBF3qRdKLfi6RR-GMJdcj0bwqhXzQx2ccI",
    authDomain: "complaint-foru.firebaseapp.com",
    projectId: "complaint-foru",
    storageBucket: "complaint-foru.appspot.com",
    messagingSenderId: "63190402066",
    appId: "1:63190402066:web:9f7e043c7c96188fae84cb"
  };
  
  firebase.initializeApp(firebaseConfig);
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()


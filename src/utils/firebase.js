import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDgUZW9bkYiWCbqVrvaV6AsdlVFAmAl-Kw',
  authDomain: 'soundrenaline18.firebaseapp.com',
  databaseURL: 'https://soundrenaline18.firebaseio.com',
  projectId: 'soundrenaline18',
  storageBucket: 'soundrenaline18.appspot.com',
  messagingSenderId: '247431289346'
});

const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

firestore.enablePersistence().catch(function(err) {
  if (err.code == 'failed-precondition') {
    // Multiple tabs open, persistence can only be enabled
    // in one tab at a a time.
    // ...
  } else if (err.code == 'unimplemented') {
    // The current browser does not support all of the
    // features required to enable persistence
    // ...
  }
});

export { firestore };

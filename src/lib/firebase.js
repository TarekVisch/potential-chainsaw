import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC9jwu86fCdSD-7ruHKs_IOFRI_4EUOZ9c',
  authDomain: 'instagram-60f53.firebaseapp.com',
  projectId: 'instagram-60f53',
  storageBucket: 'instagram-60f53.appspot.com',
  messagingSenderId: '548990916399',
  appId: '1:548990916399:web:6118f7a5158c937b2ef3da'
};
firebase.initializeApp(config);

const { FieldValue } = firebase.firestore;

export { firebase, FieldValue };

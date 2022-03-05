import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCclRuN9CnQUAaJ3_izrhujyqf0KqFTMhs",
    authDomain: "my-yt-clone.firebaseapp.com",
    projectId: "my-yt-clone",
    storageBucket: "my-yt-clone.appspot.com",
    messagingSenderId: "958064712095",
    appId: "1:958064712095:web:5c9ed67ab468f4aa2085aa"
};

firebase.initializeApp (firebaseConfig)

export default firebase.auth()
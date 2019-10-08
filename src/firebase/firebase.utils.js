import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyB6UKv3dtZkv7SKHEkTQ7e9g7pAcby2W_c",
    authDomain: "crwn-db-bd6ee.firebaseapp.com",
    databaseURL: "https://crwn-db-bd6ee.firebaseio.com",
    projectId: "crwn-db-bd6ee",
    storageBucket: "",
    messagingSenderId: "592496773068",
    appId: "1:592496773068:web:a73f05bffe9c56ec65ff69",
    measurementId: "G-CCDBB5JN8Q"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if(!userAuth) return; // !null = true there is no user logging in
        const userInfo = firestore.doc(`users/${userAuth.uid}`)
        const snapShot = await userInfo.get()
      if(!snapShot.exists){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try {
              await userInfo.set({
                  displayName,
                  email,
                  createdAt,
                  ...additionalData
              })
          } catch (error){
            console.log('error creating user: ', error.message)
          }
      }

      return userInfo;
  }

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

const signInWithGoogle = () => auth.signInWithPopup(provider);

export {auth, firestore, signInWithGoogle, firebase as default};
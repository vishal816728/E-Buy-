// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    signOut
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCg6K6A9B3oIpK1moge0eKY_AAWEN9YcZ0",
  authDomain: "shopping-clothing-db-bfad0.firebaseapp.com",
  projectId: "shopping-clothing-db-bfad0",
  storageBucket: "shopping-clothing-db-bfad0.appspot.com",
  messagingSenderId: "359141467867",
  appId: "1:359141467867:web:cc90a32ea79addd86d8efe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp=initializeApp(firebaseConfig)

const provider=new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth=getAuth()
export const signInWIthGooglePopup=()=>signInWithPopup(auth,provider)

export const db=getFirestore()

export const createUserDocumentFromAuth=async(userAuth)=>{
    const userDocRef=doc(db,'users',userAuth.uid)

    // console.log(userDocRef)

    const userSnapShot=await getDoc(userDocRef)
    // console.log(userSnapShot)
    // console.log(userSnapShot.exists())

    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth
        const createdAt=new Date()
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })

        }catch(err){
            console.log(err)
        }
    }
    return userDocRef
}

export const signOutUser=()=>signOut(auth)
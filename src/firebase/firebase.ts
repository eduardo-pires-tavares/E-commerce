import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyBHHPyHnEewuLwuPihNaVi6UewpY-w8LAs",
	authDomain: "e-commerce-1b6cb.firebaseapp.com",
	projectId: "e-commerce-1b6cb",
	storageBucket: "e-commerce-1b6cb.appspot.com",
	messagingSenderId: "554146034860",
	appId: "1:554146034860:web:204b877c9c0998ce5adb09",
	measurementId: "G-C2GVX9GEHE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

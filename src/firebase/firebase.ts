import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export interface User {
	id?: string;
	displayName?: string;
	email?: string;
	createdAt?: Date;
	additionalData?: any;
}

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

export const createUserProfileDocument = async (
	userAuth: firebase.User | null,
	additionalData: any | null,
) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		const newUser: User = {
			displayName,
			email,
			createdAt,
			...additionalData,
		};

		try {
			await userRef.set(newUser);
		} catch (error) {
			console.log("Error setting user", error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

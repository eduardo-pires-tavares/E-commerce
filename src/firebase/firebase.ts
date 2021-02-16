import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { DATA } from "../store/shop/types";

import { User } from "../store/users/types";

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

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();

	objectsToAdd.forEach((element: any) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, element);
	});

	await batch.commit();
};

export const convertCollectionsSnapshotToMap = (
	collections: firebase.firestore.QuerySnapshot<DATA>,
) => {
	const transformedCollection = collections.docs.map(doc => {
		const { items, title } = doc.data();
		return {
			id: doc.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items,
		};
	});
	return transformedCollection.reduce((acc: any, collection) => {
		acc[collection.title.toLowerCase()] = collection;
		return acc;
	}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider().setCustomParameters({
	prompt: "select_account",
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

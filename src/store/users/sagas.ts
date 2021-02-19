import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth, googleProvider, createUserProfileDocument } from "../../firebase";
import {
	googleSignInErrorAction,
	googleSignInSuccessAction,
	signOutSuccessAction,
	signOutErrorAction,
	emailSignInSuccessAction,
	emailSignInErrorAction,
	signUpSuccessAction,
	signUpErrorAction,
} from "./actions";
import { UsersTypes, emailSignInLoadingAction, signUpLoadingAction } from "./types";
import firebase from "firebase";

export function* signInWithGoogle() {
	try {
		const res: firebase.auth.UserCredential = yield auth.signInWithPopup(googleProvider);
		const { user } = res;
		const userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = yield createUserProfileDocument(
			user,
			null,
		);
		const userSnapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = yield userRef.get();
		yield put(googleSignInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(googleSignInErrorAction(error.message));
	}
}

export function* signInWithEmail({ payload: { email, password } }: emailSignInLoadingAction) {
	try {
		const res: firebase.auth.UserCredential = yield auth.signInWithEmailAndPassword(
			email,
			password,
		);

		const { user } = res;
		const userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = yield createUserProfileDocument(
			user,
			null,
		);
		const userSnapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = yield userRef.get();
		yield put(emailSignInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(emailSignInErrorAction(error.message));
	}
}

export function* signUp({ payload: { email, password, username } }: signUpLoadingAction) {
	try {
		const res: firebase.auth.UserCredential = yield auth.createUserWithEmailAndPassword(
			email,
			password,
		);
		const { user } = res;

		const newUser: any = { ...user, displayName: username };

		const userRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData> = yield createUserProfileDocument(
			newUser,
			null,
		);
		const userSnapshot: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> = yield userRef.get();
		yield put(signUpSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signUpErrorAction(error.message));
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccessAction());
	} catch (error) {
		yield put(signOutErrorAction(error.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UsersTypes.GOOGLE_SIGNIN_LOADING, signInWithGoogle);
}

export function* onSignOutStart() {
	yield takeLatest(UsersTypes.SIGN_OUT_LOADING, signOut);
}

export function* onEmailSignInStart() {
	yield takeLatest(UsersTypes.EMAIL_SIGNIN_LOADING, signInWithEmail);
}

export function* onSignUpStart() {
	yield takeLatest(UsersTypes.SIGN_UP_LOADING, signUp);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onSignOutStart),
		call(onEmailSignInStart),
		call(onSignUpStart),
	]);
}

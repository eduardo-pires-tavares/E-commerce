export enum UsersTypes {
	GOOGLE_SIGNIN_LOADING = "@users/GOOGLE_SIGNIN_LOADING",
	EMAIL_SIGNIN_LOADING = "@users/EMAIL_SIGNIN_LOADING",
	SIGN_IN_SUCCESS = "@user/SIGN_IN_SUCCESS",
	SIGN_IN_ERROR = "@user/SIGN_IN_ERROR",
	SIGN_OUT_LOADING = "@users/SIGN_OUT_LOADING",
	SIGN_OUT_SUCCESS = "@users/SIGN_OUT_SUCCESS",
	SIGN_OUT_ERROR = "@users/SIGN_OUT_ERROR",
	SIGN_UP_LOADING = "@users/SIGN_UP_LOADING",
	SIGN_UP_SUCCESS = "@users/SIGN_UP_SUCCESS",
	SIGN_UP_ERROR = "@users/SIGN_UP_ERROR",
	CHECK_USER_SESSION = "@users/CHECK_USER_SESSION",
}

export interface User {
	id?: string;
	displayName?: string;
	email?: string;
	createdAt?: Date;
	additionalData?: any;
	[otherProps: string]: any;
}

export interface UserState {
	currentUser: User | null;
	loading: boolean;
	errorMessage: string;
}

export interface googleSignInLoadingAction {
	type: typeof UsersTypes.GOOGLE_SIGNIN_LOADING;
}

export interface signOutLoadingAction {
	type: typeof UsersTypes.SIGN_OUT_LOADING;
}

export interface signOutSuccessAction {
	type: typeof UsersTypes.SIGN_OUT_SUCCESS;
}

export interface signOutErrorAction {
	type: typeof UsersTypes.SIGN_OUT_ERROR;
	payload: string;
}

export interface emailSignInLoadingAction {
	type: typeof UsersTypes.EMAIL_SIGNIN_LOADING;
	payload: {
		email: string;
		password: string;
	};
}
export interface signUpLoadingAction {
	type: typeof UsersTypes.SIGN_UP_LOADING;
	payload: {
		username: string;
		email: string;
		password: string;
	};
}

export interface signUpSuccessAction {
	type: typeof UsersTypes.SIGN_UP_SUCCESS;
	payload: User | null;
}

export interface signUpErrorAction {
	type: typeof UsersTypes.SIGN_UP_ERROR;
	payload: string;
}

export interface signInSucessAction {
	type: typeof UsersTypes.SIGN_IN_SUCCESS;
	payload: User | null;
}

export interface signInErrorAction {
	type: typeof UsersTypes.SIGN_IN_ERROR;
	payload: string;
}

export interface checkUserSessionAction {
	type: typeof UsersTypes.CHECK_USER_SESSION;
}

export type UserActionTypes =
	| googleSignInLoadingAction
	| emailSignInLoadingAction
	| signOutLoadingAction
	| signOutSuccessAction
	| signOutErrorAction
	| signUpLoadingAction
	| signUpSuccessAction
	| signUpErrorAction
	| signInSucessAction
	| checkUserSessionAction
	| signInErrorAction;

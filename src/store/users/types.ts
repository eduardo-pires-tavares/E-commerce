export enum UsersTypes {
	SET_CURRENT_USER = "@users/SET_CURRENT_USER",
	GOOGLE_SIGNIN_LOADING = "@users/GOOGLE_SIGNIN_LOADING",
	GOOGLE_SIGNIN_SUCCESS = "@users/GOOGLE_SIGNIN_SUCCESS",
	GOOGLE_SIGNIN_ERROR = "@users/GOOGLE_SIGNIN_ERROR",
	EMAIL_SIGNIN_LOADING = "@users/EMAIL_SIGNIN_LOADING",
	EMAIL_SIGNIN_SUCCESS = "@users/EMAIL_SIGNIN_SUCCESS",
	EMAIL_SIGNIN_ERROR = "@users/EMAIL_SIGNIN_ERROR",
	SIGN_OUT_LOADING = "@users/SIGN_OUT_LOADING",
	SIGN_OUT_SUCCESS = "@users/SIGN_OUT_SUCCESS",
	SIGN_OUT_ERROR = "@users/SIGN_OUT_ERROR",
}

export interface User {
	id?: string;
	displayName?: string;
	email?: string;
	createdAt?: Date;
	additionalData?: any;
	[otherProps: string]: any;
}

export type UserType = User | null;

export interface UserState {
	currentUser: UserType;
	loading: boolean;
	errorMessage: string;
}

interface SetCurrentUserAction {
	type: typeof UsersTypes.SET_CURRENT_USER;
	payload: User | null;
}

export interface googleSignInLoadingAction {
	type: typeof UsersTypes.GOOGLE_SIGNIN_LOADING;
}

export interface googleSignInSuccessAction {
	type: typeof UsersTypes.GOOGLE_SIGNIN_SUCCESS;
	payload: User | null;
}

export interface googleSignInErrorAction {
	type: typeof UsersTypes.GOOGLE_SIGNIN_ERROR;
	payload: string;
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

export interface emailSignInSuccessAction {
	type: typeof UsersTypes.EMAIL_SIGNIN_SUCCESS;
	payload: User | null;
}

export interface emailSignInErrorAction {
	type: typeof UsersTypes.EMAIL_SIGNIN_ERROR;
	payload: string;
}

export type UserActionTypes =
	| SetCurrentUserAction
	| googleSignInLoadingAction
	| googleSignInErrorAction
	| googleSignInSuccessAction
	| emailSignInSuccessAction
	| emailSignInLoadingAction
	| emailSignInErrorAction
	| signOutLoadingAction
	| signOutSuccessAction
	| signOutErrorAction;

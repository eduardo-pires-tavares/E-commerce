import { UsersTypes, UserActionTypes, UserType } from "./types";

export const setCurrentUser = (data: UserType): UserActionTypes => {
	return {
		type: UsersTypes.SET_CURRENT_USER,
		payload: data,
	};
};

export const googleSignInLoadingAction = (): UserActionTypes => {
	return {
		type: UsersTypes.GOOGLE_SIGNIN_LOADING,
	};
};

export const googleSignInSuccessAction = (data: UserType): UserActionTypes => {
	return {
		type: UsersTypes.GOOGLE_SIGNIN_SUCCESS,
		payload: data,
	};
};

export const googleSignInErrorAction = (errorMessage: string): UserActionTypes => {
	return {
		type: UsersTypes.GOOGLE_SIGNIN_ERROR,
		payload: errorMessage,
	};
};

export const emailSignInLoadingAction = (data: any): UserActionTypes => {
	return {
		type: UsersTypes.EMAIL_SIGNIN_LOADING,
		payload: data,
	};
};

export const emailSignInSuccessAction = (data: UserType): UserActionTypes => {
	return {
		type: UsersTypes.EMAIL_SIGNIN_SUCCESS,
		payload: data,
	};
};

export const emailSignInErrorAction = (errorMessage: string): UserActionTypes => {
	return {
		type: UsersTypes.EMAIL_SIGNIN_ERROR,
		payload: errorMessage,
	};
};

export const signOutLoadingAction = (): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_OUT_LOADING,
	};
};

export const signOutSuccessAction = (): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_OUT_SUCCESS,
	};
};

export const signOutErrorAction = (errorMessage: string): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_OUT_ERROR,
		payload: errorMessage,
	};
};

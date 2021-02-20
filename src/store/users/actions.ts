import { UsersTypes, UserActionTypes, User } from "./types";

export const googleSignInLoadingAction = (): UserActionTypes => {
	return {
		type: UsersTypes.GOOGLE_SIGNIN_LOADING,
	};
};

export const emailSignInLoadingAction = (data: any): UserActionTypes => {
	return {
		type: UsersTypes.EMAIL_SIGNIN_LOADING,
		payload: data,
	};
};

export const signInSucessAction = (data: User | null): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_IN_SUCCESS,
		payload: data,
	};
};

export const signInErrorAction = (errorMessage: string): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_IN_ERROR,
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

export const signUpLoadingAction = ({
	username,
	password,
	email,
}: {
	username: string;
	password: string;
	email: string;
}): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_UP_LOADING,
		payload: {
			email,
			password,
			username,
		},
	};
};

export const signUpSuccessAction = (data: User): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_UP_SUCCESS,
		payload: data,
	};
};

export const signUpErrorAction = (errorMessage: string): UserActionTypes => {
	return {
		type: UsersTypes.SIGN_UP_ERROR,
		payload: errorMessage,
	};
};

export const checkUserSessionAction = (): UserActionTypes => {
	return {
		type: UsersTypes.CHECK_USER_SESSION,
	};
};

export enum UsersTypes {
	SET_CURRENT_USER = "@users/SET_CURRENT_USER",
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
}

interface SetCurrentUserAction {
	type: typeof UsersTypes.SET_CURRENT_USER;
	payload: User | null;
}

export type UserActionTypes = SetCurrentUserAction;

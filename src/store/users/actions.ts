//import { action } from "typesafe-actions";
import { UsersTypes, UserActionTypes, UserType } from "./types";

export const setCurrentUser = (data: UserType): UserActionTypes => {
	return {
		type: UsersTypes.SET_CURRENT_USER,
		payload: data,
	};
};

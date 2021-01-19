import { Reducer } from "redux";
import { UserState, UsersTypes } from "./types";

const INITIAL_STATE: UserState = {
	currentUser: null,
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UsersTypes.SET_CURRENT_USER: {
			return { ...state, currentUser: action.payload };
		}
		default:
			return { ...state };
	}
};

export default userReducer;

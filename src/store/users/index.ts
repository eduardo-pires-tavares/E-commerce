import { Reducer } from "redux";
import { UserState, UsersTypes } from "./types";

const INITIAL_STATE: UserState = {
	currentUser: null,
	errorMessage: "",
	loading: false,
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UsersTypes.SET_CURRENT_USER: {
			return { ...state, currentUser: action.payload };
		}
		case UsersTypes.GOOGLE_SIGNIN_LOADING: {
			return { ...state, loading: true };
		}
		case UsersTypes.GOOGLE_SIGNIN_SUCCESS: {
			return { ...state, loading: false, currentUser: action.payload };
		}
		case UsersTypes.GOOGLE_SIGNIN_ERROR: {
			return { ...state, loading: false, errorMessage: action.payload };
		}
		case UsersTypes.EMAIL_SIGNIN_LOADING: {
			return { ...state, loading: true };
		}
		case UsersTypes.EMAIL_SIGNIN_SUCCESS: {
			return { ...state, loading: false, currentUser: action.payload };
		}
		case UsersTypes.EMAIL_SIGNIN_ERROR: {
			return { ...state, loading: false, errorMessage: action.payload };
		}
		case UsersTypes.SIGN_OUT_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case UsersTypes.SIGN_OUT_SUCCESS: {
			return {
				...state,
				currentUser: null,
				loading: false,
			};
		}
		case UsersTypes.SIGN_OUT_ERROR: {
			return {
				...state,
				loading: false,
				errorMessage: action.payload,
			};
		}
		default:
			return state;
	}
};

export default userReducer;

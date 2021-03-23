import { Reducer } from "redux";
import { UserState, UsersTypes } from "./types";

const INITIAL_STATE: UserState = {
	currentUser: null,
	errorMessage: "",
	loading: false,
	loginFromCheckout: false,
};

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UsersTypes.GOOGLE_SIGNIN_LOADING: {
			return { ...state, loading: true };
		}

		case UsersTypes.EMAIL_SIGNIN_LOADING: {
			return { ...state, loading: true };
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
		case UsersTypes.SIGN_UP_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case UsersTypes.SIGN_UP_SUCCESS: {
			return {
				...state,
				currentUser: action.payload,
				loading: false,
			};
		}
		case UsersTypes.SIGN_UP_ERROR: {
			return {
				...state,
				loading: false,
				errorMessage: action.payload,
			};
		}
		case UsersTypes.SIGN_IN_SUCCESS: {
			return {
				...state,
				currentUser: action.payload,
				loading: false,
			};
		}
		case UsersTypes.SIGN_IN_ERROR: {
			return {
				...state,
				loading: false,
				errorMessage: action.payload,
			};
		}
		case UsersTypes.LOGIN_FROM_CHECKOUT: {
			const { loginFromCheckout } = state;

			return {
				...state,
				loginFromCheckout: !loginFromCheckout,
			};
		}
		default:
			return state;
	}
};

export default userReducer;

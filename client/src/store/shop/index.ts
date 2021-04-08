import { Reducer } from "redux";
import { SHOP_DATA_TYPE, ShopTypes } from "./types";

const INITIAL_STATE: SHOP_DATA_TYPE = {
	collections: {},
	loading: false,
	errorMessage: "",
};

const shopReducer: Reducer<SHOP_DATA_TYPE> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopTypes.SHOP_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case ShopTypes.SHOP_SUCCESS: {
			return {
				...state,
				loading: false,
				collections: action.payload,
			};
		}
		case ShopTypes.SHOP_ERROR: {
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

export default shopReducer;

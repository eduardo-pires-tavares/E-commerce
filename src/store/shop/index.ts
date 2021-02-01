import { Reducer } from "redux";
import { SHOP_DATA_TYPE, ShopTypes } from "./types";

const INITIAL_STATE: SHOP_DATA_TYPE = {
	collections: {},
};

const shopReducer: Reducer<SHOP_DATA_TYPE> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopTypes.UPDATE_COLLECTIONS: {
			return {
				...state,
				collections: action.payload,
			};
		}

		default:
			return state;
	}
};

export default shopReducer;

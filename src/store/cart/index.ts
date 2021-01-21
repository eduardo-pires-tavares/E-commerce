import { Reducer } from "redux";
import { CartTypes, Cart } from "./types";

const INITIAL_STATE: Cart = {
	hidden: true,
};

const cartReducer: Reducer<Cart> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartTypes.TOGGLE_CART:
			return {
				...state,
				hidden: !state.hidden,
			};
		default:
			return state;
	}
};

export default cartReducer;

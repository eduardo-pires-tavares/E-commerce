import { Reducer } from "redux";
import { CartTypes, Cart } from "./types";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./utils";

const INITIAL_STATE: Cart = {
	open: false,
	items: [],
};

const cartReducer: Reducer<Cart> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartTypes.TOGGLE_CART:
			return {
				...state,
				open: !state.open,
			};
		case CartTypes.ADD_TO_CART: {
			return {
				...state,
				items: addItemToCart(state.items!, action.payload),
			};
		}
		case CartTypes.REMOVE_FROM_CART: {
			return {
				...state,
				items: removeItemFromCart(state.items!, action.payload),
			};
		}
		case CartTypes.CLEAR_FROM_CART: {
			return {
				...state,
				items: clearItemFromCart(state.items!, action.payload),
			};
		}
		case CartTypes.CLEAR_CART: {
			return {
				...state,
				items: [],
			};
		}

		default:
			return state;
	}
};

export default cartReducer;

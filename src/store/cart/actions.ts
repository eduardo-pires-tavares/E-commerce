import { CartActionTypes, CartTypes } from "./types";

export const toggleCart = (): CartActionTypes => {
	return {
		type: CartTypes.TOGGLE_CART,
	};
};

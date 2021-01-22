import { CartActionTypes, CartTypes, CartItem } from "./types";

export const toggleCart = (): CartActionTypes => {
	return {
		type: CartTypes.TOGGLE_CART,
	};
};

export const addToCart = (data: CartItem): CartActionTypes => {
	return {
		type: CartTypes.ADD_TO_CART,
		payload: data,
	};
};

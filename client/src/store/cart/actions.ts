import { CartActionTypes, CartTypes, CartItem } from "./types";

export const toggleCart = (): CartActionTypes => {
	return {
		type: CartTypes.TOGGLE_CART,
	};
};

export const clearCart = (): CartActionTypes => {
	return {
		type: CartTypes.CLEAR_CART,
	};
};

export const addToCart = (data: CartItem): CartActionTypes => {
	return {
		type: CartTypes.ADD_TO_CART,
		payload: data,
	};
};

export const clearItemFromCart = (data: CartItem): CartActionTypes => {
	return {
		type: CartTypes.CLEAR_FROM_CART,
		payload: data,
	};
};

export const removeFromCart = (data: CartItem): CartActionTypes => {
	return { type: CartTypes.REMOVE_FROM_CART, payload: data };
};

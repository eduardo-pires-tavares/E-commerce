import { CartItem } from "./types";

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: CartItem) => {
	const existingCartItem = cartItems.find(
		item => item.id === cartItemToAdd.id && item.size === cartItemToAdd.size,
	);

	if (existingCartItem) {
		return cartItems.map((item: CartItem) => {
			if (item.id === cartItemToAdd.id && item.size === cartItemToAdd.size) {
				return {
					...cartItemToAdd,
					quantity: existingCartItem.quantity! + 1,
				};
			}
			return item;
		});
	}

	return [...cartItems, cartItemToAdd];
};

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
	const existingCartItem = cartItems.find(
		item => item.id === cartItemToRemove.id && item.size === cartItemToRemove.size,
	);

	if (existingCartItem) {
		return cartItems.map((item: CartItem) => {
			if (item.id === cartItemToRemove.id && item.size === cartItemToRemove.size) {
				return {
					...cartItemToRemove,
					quantity: existingCartItem.quantity! - 1,
				};
			}
			return item;
		});
	}

	return [...cartItems, cartItemToRemove];
};

export const clearItemFromCart = (cartItems: CartItem[], cartItem: CartItem) => {
	const existingCartItem = cartItems.find(item => item.id === cartItem.id);

	if (existingCartItem) {
		return cartItems.filter(item => item.id !== cartItem.id);
	}

	return [...cartItems];
};

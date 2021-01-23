import { CartItem } from "./types";

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: CartItem) => {
	const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

	if (existingCartItem) {
		return cartItems.map((item: CartItem) => {
			if (item.id === cartItemToAdd.id) {
				return {
					...cartItemToAdd,
					quantity: existingCartItem.quantity! + 1,
					price: existingCartItem.price! + cartItemToAdd.price!,
				};
			}
			return item;
		});
	}

	return [...cartItems, cartItemToAdd];
};

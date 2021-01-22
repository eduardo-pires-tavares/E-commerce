export enum CartTypes {
	TOGGLE_CART = "@cart/TOGGLE_CART",
	ADD_TO_CART = "@cart/ADD_TO_CART",
}

export interface CartItem {
	quantity?: number;
	name?: string;
	id?: number;
	price?: number;
	imageUrl?: string;
}
export interface Cart {
	hidden: boolean;
	items: CartItem[] | null;
}

export interface CartState {
	cart: Cart;
}

interface ToggleCartAction {
	type: typeof CartTypes.TOGGLE_CART;
}

interface AddToCartAction {
	type: typeof CartTypes.ADD_TO_CART;
	payload: CartItem;
}

export type CartActionTypes = ToggleCartAction | AddToCartAction;

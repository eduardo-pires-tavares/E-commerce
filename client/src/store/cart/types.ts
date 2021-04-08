export enum CartTypes {
	TOGGLE_CART = "@cart/TOGGLE_CART",
	ADD_TO_CART = "@cart/ADD_TO_CART",
	CLEAR_FROM_CART = "@cart/CLEAR_FROM_CART",
	REMOVE_FROM_CART = "@cart/REMOVE_FROM_CART",
	CLEAR_CART = "@cart/CLEAR_CART",
}

export interface CartItem {
	quantity?: number;
	name?: string;
	id?: number;
	price?: number;
	imageUrl?: string;
	size?: string;
}
export interface Cart {
	open: boolean;
	items: CartItem[] | null;
}

export interface CartState {
	cart: Cart;
}

interface ToggleCartAction {
	type: typeof CartTypes.TOGGLE_CART;
}

interface ClearCartAction {
	type: typeof CartTypes.CLEAR_CART;
}
interface AddToCartAction {
	type: typeof CartTypes.ADD_TO_CART;
	payload: CartItem;
}

interface ClearItemFromCart {
	type: typeof CartTypes.CLEAR_FROM_CART;
	payload: CartItem;
}

interface RemoveItemFromCart {
	type: typeof CartTypes.REMOVE_FROM_CART;
	payload: CartItem;
}

export type CartActionTypes =
	| ToggleCartAction
	| AddToCartAction
	| RemoveItemFromCart
	| ClearItemFromCart
	| ClearCartAction;

export enum CartTypes {
	TOGGLE_CART = "@cart/TOGGLE_CART",
}

export interface Cart {
	hidden: boolean;
}

export interface CartState {
	cart: Cart;
}

interface ToggleCartAction {
	type: typeof CartTypes.TOGGLE_CART;
}

export type CartActionTypes = ToggleCartAction;

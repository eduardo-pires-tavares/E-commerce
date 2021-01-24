import { createSelector } from "reselect";
import { ApplicationState } from "..";

const selectCart = (state: ApplicationState) => state.cart;

export const selectCartVisibility = createSelector([selectCart], cart => cart.open);

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const selectCartItemsCount = createSelector([selectCartItems], cartItemsCount =>
	cartItemsCount?.reduce((acc, curr) => acc + curr.quantity!, 0),
);

export const selectCartTotalPrice = createSelector([selectCartItems], totalPrice =>
	totalPrice?.reduce((acc, curr) => acc + curr.quantity! * curr.price!, 0),
);

export interface ICartSelector {
	open?: ReturnType<typeof selectCartVisibility>;
	cartItems?: ReturnType<typeof selectCartItems>;
	cartItemsCount?: ReturnType<typeof selectCartItemsCount>;
	cartItemsTotalPrice?: ReturnType<typeof selectCartTotalPrice>;
}

import { createSelector } from "reselect";
import { ApplicationState } from "..";

const selectShop = (state: ApplicationState) => state.shop;

export const selectShopData = createSelector([selectShop], shop => shop.collections);

export interface IShopSelector {
	collections?: ReturnType<typeof selectShopData>;
}

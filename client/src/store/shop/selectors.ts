import { createSelector } from "reselect";
import { ApplicationState } from "..";

const selectShop = (state: ApplicationState) => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollection = (collectionName: string) =>
	createSelector([selectShop], shop => shop.collections[collectionName]);

export const isCollecionsFetching = createSelector([selectShop], shop => shop.loading);

export interface IShopSelector {
	collections?: ReturnType<typeof selectCollections>;
	collection?: ReturnType<typeof selectCollection>;
	loading?: ReturnType<typeof isCollecionsFetching>;
}

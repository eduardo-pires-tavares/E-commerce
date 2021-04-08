import { DATA, HashTable, ShopActionTypes, ShopTypes } from "./types";

export const loadShopSucess = (data: HashTable<DATA>): ShopActionTypes => {
	return {
		type: ShopTypes.SHOP_SUCCESS,
		payload: data,
	};
};

export const loadShopStart = (): ShopActionTypes => {
	return {
		type: ShopTypes.SHOP_LOADING,
	};
};

export const loadShopError = (data: string): ShopActionTypes => {
	return {
		type: ShopTypes.SHOP_ERROR,
		payload: data,
	};
};

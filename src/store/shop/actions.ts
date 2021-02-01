import { DATA, HashTable, ShopActionTypes, ShopTypes } from "./types";

export const updateCollection = (data: HashTable<DATA>): ShopActionTypes => {
	return {
		type: ShopTypes.UPDATE_COLLECTIONS,
		payload: data,
	};
};

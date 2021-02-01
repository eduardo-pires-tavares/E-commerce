export enum ShopTypes {
	UPDATE_COLLECTIONS = "@shop/UPDATE_COLLECTIONS",
}

export type SHOP_DATA_TYPE = {
	collections: HashTable<DATA>;
};

export type DATA = {
	id?: number;
	title: string;
	routeName: string;
	items: ITEMS[];
};

export type ITEMS = {
	id?: number;
	name: string;
	imageUrl: string;
	price: number;
};

export interface HashTable<T> {
	[key: string]: T;
}

interface updateCollectionsAction {
	type: typeof ShopTypes.UPDATE_COLLECTIONS;
	payload: HashTable<DATA>;
}

export type ShopActionTypes = updateCollectionsAction;

export enum ShopTypes {
	SHOP_LOADING = "@shop/SHOP_LOADING",
	SHOP_SUCCESS = "@shop/SHOP_SUCCESS",
	SHOP_ERROR = "@shop/SHOP_ERROR",
}

export type SHOP_DATA_TYPE = {
	collections: HashTable<DATA>;
	loading: boolean;
	errorMessage: string;
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
interface loadCollectionsRequestAction {
	type: typeof ShopTypes.SHOP_LOADING;
}

interface loadCollectionsSucessAction {
	type: typeof ShopTypes.SHOP_SUCCESS;
	payload: HashTable<DATA>;
}

interface loadCollectionErrorAction {
	type: typeof ShopTypes.SHOP_ERROR;
	payload: string;
}

export type ShopActionTypes =
	| loadCollectionsRequestAction
	| loadCollectionsSucessAction
	| loadCollectionErrorAction;

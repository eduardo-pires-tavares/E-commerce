export type SHOP_DATA_TYPE = {
	collections: HastTable<DATA>;
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

export interface HastTable<T> {
	[key: string]: T;
}

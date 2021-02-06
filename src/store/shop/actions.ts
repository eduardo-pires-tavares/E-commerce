import { DATA, HashTable, ShopActionTypes, ShopTypes } from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { ApplicationState } from "..";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase";
import firebase from "firebase";

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

export const fetchShopCollections = (): ThunkAction<
	Promise<void>,
	{},
	ApplicationState,
	ShopActionTypes
> => {
	return async (dispatch: ThunkDispatch<{}, {}, ShopActionTypes>) => {
		const collectionRef = firestore.collection(
			"collections",
		) as firebase.firestore.CollectionReference<DATA>;
		dispatch(loadShopStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collections = convertCollectionsSnapshotToMap(snapshot);
				dispatch(loadShopSucess(collections));
			})
			.catch(error => dispatch(loadShopError(error.message)));
	};
};

import { takeLatest, put, call, all } from "redux-saga/effects";
import { DATA, HashTable, ShopTypes } from "./types";
import { loadShopError, loadShopSucess } from "./actions";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase";
import firebase from "firebase";

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection(
			"collections",
		) as firebase.firestore.CollectionReference<DATA>;
		const snapshot: firebase.firestore.QuerySnapshot<DATA> = yield collectionRef.get();
		const collectionsMap: HashTable<DATA> = yield call(
			convertCollectionsSnapshotToMap,
			snapshot,
		);
		yield put(loadShopSucess(collectionsMap));
	} catch (error) {
		yield put(loadShopError(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopTypes.SHOP_LOADING, fetchCollectionsAsync);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart)]);
}

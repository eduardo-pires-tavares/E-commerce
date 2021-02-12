import { takeLatest, put, call } from "redux-saga/effects";
import { DATA, ShopTypes } from "./types";
import { loadShopError, loadShopSucess } from "./actions";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase";
import firebase from "firebase";

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection(
			"collections",
		) as firebase.firestore.CollectionReference<DATA>;
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(loadShopSucess(collectionsMap));
	} catch (error) {
		yield put(loadShopError(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopTypes.SHOP_LOADING, fetchCollectionsAsync);
}

import { call, all } from "redux-saga/effects";
import { fetchCollectionsStart } from "./shop/sagas";
import { userSagas } from "./users/sagas";

export default function* rootSaga() {
	yield all([call(fetchCollectionsStart), call(userSagas)]);
}

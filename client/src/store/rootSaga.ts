import { call, all } from "redux-saga/effects";
import { shopSagas } from "./shop/sagas";
import { userSagas } from "./users/sagas";

export default function* rootSaga() {
	yield all([call(shopSagas), call(userSagas)]);
}

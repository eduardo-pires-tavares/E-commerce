import { createStore, Store, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import persitedReducer, { rootReducer } from "./root-reducer";
import { fetchCollectionsStart } from "./shop/sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store: Store<ApplicationState> = createStore(
	persitedReducer,
	applyMiddleware(...middlewares),
);

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);

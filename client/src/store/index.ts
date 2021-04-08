import { createStore, Store, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import persitedReducer, { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

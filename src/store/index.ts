import { createStore, Store, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import persitedReducer, { rootReducer } from "./root-reducer";

const middlewares = [logger];

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store: Store<ApplicationState> = createStore(
	persitedReducer,
	applyMiddleware(...middlewares),
);

export const persistor = persistStore(store);

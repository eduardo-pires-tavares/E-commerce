import { createStore, Store, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import persitedReducer, { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

export type ApplicationState = ReturnType<typeof rootReducer>;

export const store: Store<ApplicationState> = createStore(
	persitedReducer,
	applyMiddleware(thunk, ...middlewares),
);

export const persistor = persistStore(store);

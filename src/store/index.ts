import { createStore, Store, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

export type ApplicationState = ReturnType<typeof rootReducer>;

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

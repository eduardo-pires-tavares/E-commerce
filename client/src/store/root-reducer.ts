import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./cart";
import directoryReducer from "./directory";
import shopReducer from "./shop";
import userReducer from "./users";

export const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directoryMenu: directoryReducer,
	shop: shopReducer,
});

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "user"],
};

export default persistReducer<any>(persistConfig, rootReducer);

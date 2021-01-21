import { combineReducers } from "redux";
import cartReducer from "./cart";
import userReducer from "./users";

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});

import { createSelector } from "reselect";
import { ApplicationState } from "..";

const selectUser = (state: ApplicationState) => state.user;

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);

export const isAuthStateChanging = createSelector([selectUser], user => user.loading);

export const isLoginFromCheckout = createSelector([selectUser], user => user.loginFromCheckout);

export interface ISelectUser {
	currentUser?: ReturnType<typeof selectCurrentUser>;
	loading?: ReturnType<typeof isAuthStateChanging>;
	loginFromCheckout?: ReturnType<typeof isLoginFromCheckout>;
}

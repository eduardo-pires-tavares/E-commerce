import { Route, Switch, Redirect } from "react-router-dom";
import { FC, Dispatch, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "./store";
import { ISelectUser, selectCurrentUser } from "./store/users/selectors";
import { createStructuredSelector } from "reselect";
import { GlobalStyle } from "./globalStyles";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import CheckoutPage from "./pages/checkout";
import { UserActionTypes } from "./store/users/types";
import { checkUserSessionAction } from "./store/users/actions";

const App: FC<AppProps> = ({ currentUser, checkUserSession }) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<Header />
			<div className='content'>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route
						path='/signin'
						exact
						render={() => (currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />)}
					/>
				</Switch>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ISelectUser>({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	checkUserSession: () => dispatch(checkUserSessionAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);

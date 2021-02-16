import { Route, Switch, Redirect } from "react-router-dom";
import { Component } from "react";
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

class App extends Component<AppProps, {}> {
	render() {
		const { currentUser } = this.props;

		return (
			<div>
				<GlobalStyle />
				<Header />
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
		);
	}
}

const mapStateToProps = createStructuredSelector<ApplicationState, ISelectUser>({
	currentUser: selectCurrentUser,
});

const connector = connect(mapStateToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);

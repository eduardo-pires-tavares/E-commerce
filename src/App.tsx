import "./App.styles.scss";
import { Dispatch } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase";
import { Component } from "react";
import { connect, ConnectedProps } from "react-redux";
import { setCurrentUser } from "./store/users/actions";
import { UserActionTypes, UserType } from "./store/users/types";
import { ApplicationState } from "./store";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";

class App extends Component<AppProps, {}> {
	unsubscribeFromAuth: any = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userRef = await createUserProfileDocument(user, {});

				userRef!.onSnapshot(snapshot => {
					this.props.setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else {
				this.props.setCurrentUser(null);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={ShopPage} />
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

const mapStateToProps = ({ user: { currentUser } }: ApplicationState) => ({
	currentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	setCurrentUser: (user: UserType) => dispatch(setCurrentUser(user)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type AppProps = ConnectedProps<typeof connector>;

export default connector(App);

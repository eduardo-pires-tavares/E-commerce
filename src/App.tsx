import "./App.styles.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import { auth, createUserProfileDocument, User } from "./firebase";
import { Component } from "react";

interface State {
	currentUser: User | null;
}

class App extends Component<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth: any = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
			if (user) {
				const userRef = await createUserProfileDocument(user, {});

				userRef!.onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			}

			this.setState({ currentUser: null });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.state;

		return (
			<div>
				<Header currentUser={currentUser} />
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
	}
}

export default App;

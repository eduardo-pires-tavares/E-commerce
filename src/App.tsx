import "./App.styles.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";
import { auth } from "./firebase";
import { Component } from "react";
import firebase from "firebase";

interface State {
	currentUser: firebase.User | null;
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
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
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

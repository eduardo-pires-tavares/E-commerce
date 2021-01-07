import "./App.styles.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up";

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route exact path='/shop' component={ShopPage} />
				<Route path='/signin' component={SignInAndSignUpPage} />
			</Switch>
		</>
	);
};

export default App;

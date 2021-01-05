import "./App.styles.scss";
import Homepage from "./pages/homepage";
import ShopPage from "./pages/shop";

import { Route, Switch } from "react-router-dom";

const App = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/shop' component={ShopPage} />
			</Switch>
		</>
	);
};

export default App;

import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
import { Wrapper } from "./styles";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Loading from "../../components/loader";
import { ApplicationState } from "../../store";
import { ISelectUser, isAuthStateChanging } from "../../store/users/selectors";

const mapStateToProps = createStructuredSelector<ApplicationState, ISelectUser>({
	loading: isAuthStateChanging,
});

const SignInAndSignUpPage = () => {
	return (
		<Wrapper>
			<SignIn />
			<SignUp />
		</Wrapper>
	);
};

const connector = connect(mapStateToProps);

export default connector(Loading(SignInAndSignUpPage));

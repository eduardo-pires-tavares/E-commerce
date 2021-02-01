import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
import { Wrapper } from "./styles";

const SignInAndSignUpPage = () => {
	return (
		<Wrapper>
			<SignIn />
			<SignUp />
		</Wrapper>
	);
};

export default SignInAndSignUpPage;

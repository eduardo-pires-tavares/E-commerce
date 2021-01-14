import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";
import "./index.styles.scss";

const SignInAndSignUpPage = () => {
	return (
		<div className='wrapper'>
			<SignIn />
			<SignUp />
		</div>
	);
};

export default SignInAndSignUpPage;

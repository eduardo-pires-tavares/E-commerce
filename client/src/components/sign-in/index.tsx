import { ChangeEvent, FormEvent, Dispatch, FC, useState } from "react";
import { SignInContainer, Title, ButtonWrapper } from "./styles";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { UserActionTypes } from "../../store/users/types";
import { emailSignInLoadingAction, googleSignInLoadingAction } from "../../store/users/actions";
import { connect, ConnectedProps } from "react-redux";

const SignIn: FC<SignInProps> = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState<IUserCredentials>({
		email: "",
		password: "",
	});

	const { email, password } = userCredentials;

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		emailSignInStart({ email, password });

		setUserCredentials({ email: "", password: "" });
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.currentTarget;

		setUserCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SignInContainer>
			<Title>I already have an account</Title>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					handleChange={handleChange}
					label={"Email"}
					required
					value={email}
					name='email'
					id='email'
					type='email'
				/>
				<FormInput
					handleChange={handleChange}
					label={"Password"}
					required
					value={password}
					name='password'
					id='password'
					type='password'
				/>
				<ButtonWrapper>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>
						Sign in with google
					</CustomButton>
				</ButtonWrapper>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	googleSignInStart: () => dispatch(googleSignInLoadingAction()),
	emailSignInStart: (data: any) => dispatch(emailSignInLoadingAction(data)),
});

const connector = connect(null, mapDispatchToProps);

interface IUserCredentials {
	email?: string;
	password?: string;
}

type SignInProps = ConnectedProps<typeof connector>;

export default connector(SignIn);

import { Component, ChangeEvent, FormEvent, Dispatch } from "react";
import { SignInContainer, Title, ButtonWrapper } from "./styles";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { UserActionTypes } from "../../store/users/types";
import { emailSignInLoadingAction, googleSignInLoadingAction } from "../../store/users/actions";
import { connect, ConnectedProps } from "react-redux";

interface State {
	email: string;
	password: string;
}

class SignIn extends Component<SignInProps, State> {
	state = {
		email: "",
		password: "",
	};

	handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { email, password } = this.state;
		const { emailSignInStart } = this.props;

		emailSignInStart({ email, password });
		this.setState({
			email: "",
			password: "",
		});
	};

	handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.currentTarget;

		if (name === "email") {
			this.setState({ ...this.state, email: value });
		} else {
			this.setState({ ...this.state, password: value });
		}
	};

	render() {
		const { email, password } = this.state;
		const { googleSignInStart } = this.props;
		return (
			<SignInContainer>
				<Title>I already have an account</Title>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						handleChange={this.handleChange}
						label={"Email"}
						required
						value={email}
						name='email'
						id='email'
						type='email'
					/>
					<FormInput
						handleChange={this.handleChange}
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
	}
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	googleSignInStart: () => dispatch(googleSignInLoadingAction()),
	emailSignInStart: (data: any) => dispatch(emailSignInLoadingAction(data)),
});

const connector = connect(null, mapDispatchToProps);

type SignInProps = ConnectedProps<typeof connector>;

export default connector(SignIn);

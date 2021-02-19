import { ChangeEvent, Component, Dispatch, FormEvent } from "react";
import { SignUpContainer, Title } from "./styles";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { UserActionTypes } from "../../store/users/types";
import { signUpLoadingAction } from "../../store/users/actions";
import { connect, ConnectedProps } from "react-redux";

interface State {
	email: string;
	confirmPassword: string;
	password: string;
	displayName: string;
}

class SignUp extends Component<SignUpProps, State> {
	state = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	};

	handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const { email, displayName, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		const { signUpUser } = this.props;

		signUpUser({
			email,
			password,
			username: displayName,
		});
	};

	handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;

		switch (name) {
			case "displayName":
				this.setState({ ...this.state, displayName: value });
				break;
			case "email":
				this.setState({ ...this.state, email: value });
				break;
			case "password":
				this.setState({ ...this.state, password: value });
				break;
			case "confirmPassword":
				this.setState({ ...this.state, confirmPassword: value });
				break;
		}
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<Title>I do not have a google account</Title>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						label={"Username"}
						required
						value={displayName}
						name='displayName'
						id='displayName'
						type='text'
						handleChange={this.handleChange}
					/>
					<FormInput
						label={"Email"}
						required
						value={email}
						name='email'
						id='sign-up-email'
						type='email'
						handleChange={this.handleChange}
					/>
					<FormInput
						label={"Password"}
						required
						value={password}
						name='password'
						id='sign-up-password'
						type='password'
						handleChange={this.handleChange}
					/>
					<FormInput
						label={"Confirm Password"}
						required
						value={confirmPassword}
						name='confirmPassword'
						id='confirmPassword'
						type='password'
						handleChange={this.handleChange}
					/>
					<CustomButton type='submit'>Sign Up</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	signUpUser: (data: any) => dispatch(signUpLoadingAction(data)),
});

const connector = connect(null, mapDispatchToProps);

type SignUpProps = ConnectedProps<typeof connector>;

export default connector(SignUp);

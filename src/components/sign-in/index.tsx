import { Component, ChangeEvent } from "react";
import "./index.styles.scss";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { signInWithGoogle } from "../../firebase";

interface State {
	email: string;
	password: string;
}

class SignIn extends Component<{}, State> {
	constructor(props: {}) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit(event: ChangeEvent<HTMLInputElement>) {
		event.preventDefault();
	}

	handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = event.currentTarget;

		if (name === "email") {
			this.setState({ email: value });
		} else {
			this.setState({ password: value });
		}
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form action='/*'>
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
				</form>
				<div className='sign-in-button-wrapper'>
					<CustomButton type='submit'>Sign in</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign in with google
					</CustomButton>
				</div>
			</div>
		);
	}
}

export default SignIn;

import { Component, ChangeEvent, FormEvent } from "react";
import "./index.styles.scss";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth, signInWithGoogle } from "../../firebase";

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

	handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: "",
				password: "",
			});
		} catch (error) {
			console.log(error);
		}
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
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
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
					<div className='sign-in-button-wrapper'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton type='button' isGoogleSignIn onClick={signInWithGoogle}>
							Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;

import { Component, ChangeEvent } from "react";

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

	handleChange(event: ChangeEvent<HTMLInputElement>) {
		const { value, name } = event.currentTarget;

		if (name === "email") {
			this.setState({ email: value });
		} else {
			this.setState({ password: value });
		}
	}

	render() {
		const { email, password } = this.state;
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form action='/*'>
					<input
						onChange={e => this.handleChange(e)}
						type='email'
						required
						name='email'
						id='email'
						value={email}
					/>
					<label htmlFor='email'>Email</label>
					<input
						onChange={e => this.handleChange(e)}
						type='password'
						name='password'
						id='password'
						value={password}
					/>
					<label htmlFor='password'>Password</label>
					<button type='submit'>SignIn</button>
				</form>
			</div>
		);
	}
}

export default SignIn;

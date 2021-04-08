import { ChangeEvent, Dispatch, FormEvent, FC, useState } from "react";
import { SignUpContainer, Title } from "./styles";
import CustomButton from "../custom-button";
import FormInput from "../form-input";
import { UserActionTypes } from "../../store/users/types";
import { signUpLoadingAction } from "../../store/users/actions";
import { connect, ConnectedProps } from "react-redux";

const SignUp: FC<SignUpProps> = ({ signUpUser }) => {
	const [formData, setFormData] = useState<IFormData>({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { email, displayName, password, confirmPassword } = formData;

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}

		signUpUser({
			email,
			password,
			username: displayName,
		});
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;

		setFormData({ ...formData, [name]: value });
	};

	return (
		<SignUpContainer>
			<Title>I do not have a google account</Title>
			<span>Sign up with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					label={"Username"}
					required
					value={displayName}
					name='displayName'
					id='displayName'
					type='text'
					handleChange={handleChange}
				/>
				<FormInput
					label={"Email"}
					required
					value={email}
					name='email'
					id='sign-up-email'
					type='email'
					handleChange={handleChange}
				/>
				<FormInput
					label={"Password"}
					required
					value={password}
					name='password'
					id='sign-up-password'
					type='password'
					handleChange={handleChange}
				/>
				<FormInput
					label={"Confirm Password"}
					required
					value={confirmPassword}
					name='confirmPassword'
					id='confirmPassword'
					type='password'
					handleChange={handleChange}
				/>
				<CustomButton type='submit'>Sign Up</CustomButton>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	signUpUser: (data: any) => dispatch(signUpLoadingAction(data)),
});

interface IFormData {
	email: string;
	confirmPassword: string;
	password: string;
	displayName: string;
}

const connector = connect(null, mapDispatchToProps);

type SignUpProps = ConnectedProps<typeof connector>;

export default connector(SignUp);

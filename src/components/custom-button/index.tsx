import { ReactNode } from "react";
import "./index.styles.scss";

type Props = {
	children: ReactNode;
	isGoogleSignIn?: boolean;
	[otherProps: string]: any;
};

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: Props) => {
	return (
		<button
			className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default CustomButton;

import { ReactNode } from "react";
import "./index.styles.scss";

type Props = {
	children: ReactNode;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
	[otherProps: string]: any;
};

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }: Props) => {
	return (
		<button
			className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""} ${
				inverted ? "inverted" : ""
			}`}
			{...otherProps}
		>
			{children}
		</button>
	);
};
export default CustomButton;

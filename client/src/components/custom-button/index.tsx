import { ReactNode } from "react";

import { CustomButtonContainer } from "./styles";

type Props = {
	children: ReactNode;
	isGoogleSignIn?: boolean;
	inverted?: boolean;
	[otherProps: string]: any;
};

const CustomButton = ({ children, ...otherProps }: Props) => {
	return <CustomButtonContainer {...otherProps}>{children}</CustomButtonContainer>;
};
export default CustomButton;

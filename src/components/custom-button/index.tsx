import { ReactNode } from "react";
import "./index.styles.scss";

type Props = {
	children: ReactNode;
	[otherProps: string]: any;
};

const CustomButton = ({ children, ...otherProps }: Props) => {
	return (
		<button className='custom-button' {...otherProps}>
			{children}
		</button>
	);
};
export default CustomButton;

import { ChangeEvent } from "react";
import { FormGroupInput, FormLabel, FormContainer } from "./styles";

type Props = {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	label: string;
	[otherProps: string]: any;
};

const FormInput = ({ handleChange, label, ...otherProps }: Props) => {
	return (
		<FormContainer>
			<FormGroupInput onChange={e => handleChange(e)} {...otherProps} />
			{label && <FormLabel value={otherProps.value.length}>{label}</FormLabel>}
		</FormContainer>
	);
};

export default FormInput;

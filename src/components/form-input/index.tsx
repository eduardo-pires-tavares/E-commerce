import { ChangeEvent } from "react";
import "./index.styles.scss";

type Props = {
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
	label: string;
	[otherProps: string]: any;
};

const FormInput = ({ handleChange, label, ...otherProps }: Props) => {
	return (
		<div className='input-group'>
			<input className='form-input' onChange={e => handleChange(e)} {...otherProps} />
			{label ? (
				<label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;

import { FC } from "react";
import { StyledBurger } from "./styles";

type Props = {
	open: boolean;
	setOpen: (open: boolean) => void;
};

const Burger: FC<Props> = ({ open, setOpen }) => {
	return (
		<StyledBurger open={open} onClick={() => setOpen(!open)}>
			<div />
			<div />
			<div />
		</StyledBurger>
	);
};

export default Burger;

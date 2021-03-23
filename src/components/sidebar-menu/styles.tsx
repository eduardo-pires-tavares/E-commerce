import styled from "styled-components";

type Props = {
	open: boolean;
};

export const StyledMenu = styled.nav<Props>`
	display: none;
	flex-direction: column;
	justify-content: center;
	background: rgb(235, 237, 238);
	height: 100vh;
	text-align: left;
	padding: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
	transition: transform 0.3s ease-in-out;

	@media (max-width: 800px) {
		width: 100%;
		display: flex;
	}

	a {
		font-size: 2rem;
		text-transform: uppercase;
		padding: 2rem 0;
		font-weight: bold;
		letter-spacing: 0.5rem;
		color: black;
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: 800px) {
			font-size: 1.5rem;
			text-align: center;
		}
	}

	div {
		flex-direction: column;
		justify-content: flex-start;
		overflow-y: auto;
		height: 80vh;

		@media (max-width: 800px) {
			width: 100%;
			display: flex;
		}
	}
`;

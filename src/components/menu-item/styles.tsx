import styled from "styled-components";

interface MenuItemContainerProps {
	size?: string;
}

interface ImageContainerProps {
	backgroundImage: string;
}

export const Title = styled.h1`
	font-weight: bold;
	font-size: 22px;
	margin-bottom: 6px;
	color: #4a4a4a;
`;

export const SubTitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;

export const ContentContainer = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
	height: 100%;
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: ${props => `url(${props.backgroundImage})`};
`;

export const MenuItemContainer = styled.div<MenuItemContainerProps>`
	min-width: 30%;
	height: ${props => (props.size === "large" ? "380px" : "340px")};
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover {
		cursor: pointer;

		& ${ImageContainer} {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& ${ContentContainer} {
			opacity: 0.9;
		}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-right: 7.5px;
	}
`;

import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ContentContainer, ImageContainer, MenuItemContainer, SubTitle, Title } from "./styles";

type Props = {
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
};

type ComposedProps = Props & RouteComponentProps<Props>;

const MenuItem: React.FC<ComposedProps> = ({ title, imageUrl, size, linkUrl, match, history }) => {
	return (
		<MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
			<ImageContainer backgroundImage={imageUrl}></ImageContainer>
			<ContentContainer>
				<Title>{title.toUpperCase()}</Title>
				<SubTitle>SHOP NOW</SubTitle>
			</ContentContainer>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);

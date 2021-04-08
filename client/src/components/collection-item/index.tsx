import { FC, useState, useEffect } from "react";
import { ITEMS } from "../../store/shop/types";
import {
	CollectionItemContainer,
	CollectionItemFooter,
	ImageContainer,
	Name,
	Price,
	ViewMore,
} from "./styles";
import CustomButton from "../custom-button";
import { RouteComponentProps, withRouter } from "react-router";

const CollectionItem: FC<CollectionItemProps> = ({
	imageUrl,
	name,
	price,
	collection,
	location,
}) => {
	const [backgroundImage, setBackgroundImage] = useState<string>("");

	useEffect(() => {
		const img = new Image();
		img.src = imageUrl;
		img.onload = () => setBackgroundImage(imageUrl);

		return () => {
			setBackgroundImage("");
		};
	}, [imageUrl]);

	return (
		<>
			{backgroundImage && (
				<CollectionItemContainer className='collection-item'>
					<ImageContainer backgroundImage={backgroundImage} />
					<CollectionItemFooter>
						<Name>{name}</Name>
						<Price>{price} $</Price>
					</CollectionItemFooter>
					<CustomButton inverted>
						<ViewMore
							to={{
								pathname: `/details/${collection}/${name}`,
								state: { from: location },
							}}
						>
							VIEW MORE
						</ViewMore>
					</CustomButton>
				</CollectionItemContainer>
			)}
		</>
	);
};

interface OwnProps extends ITEMS {
	collection: string;
}

type CollectionItemProps = OwnProps & RouteComponentProps;

export default withRouter(CollectionItem);

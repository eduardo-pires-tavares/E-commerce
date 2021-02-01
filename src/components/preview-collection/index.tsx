import { ITEMS, DATA } from "../../store/shop/types";
import CollectionItem from "../collection-item";
import { Title, CollectionPreviewContainer, Preview } from "./styles";

const CollectionPreview = ({ items, title }: DATA) => {
	return (
		<div>
			<CollectionPreviewContainer>
				<Title>{title.toUpperCase()}</Title>
				<Preview>
					{items
						.filter((_, idx: number) => idx < 4)
						.map(({ id, ...otherComponentProps }: ITEMS) => {
							return <CollectionItem key={id} id={id} {...otherComponentProps} />;
						})}
				</Preview>
			</CollectionPreviewContainer>
		</div>
	);
};

export default CollectionPreview;

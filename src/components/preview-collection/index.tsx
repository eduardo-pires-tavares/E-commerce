import { withRouter, RouteComponentProps } from "react-router-dom";
import { ITEMS, DATA } from "../../store/shop/types";
import CollectionItem from "../collection-item";
import { Title, CollectionPreviewContainer, Preview } from "./styles";

type Props = DATA;

type ComposedProps = Props & RouteComponentProps;

const CollectionPreview = ({ items, title, history, match, routeName }: ComposedProps) => {
	return (
		<div>
			<CollectionPreviewContainer>
				<Title onClick={() => history.push(`${match.url}/${routeName}`)}>
					{title.toUpperCase()}
				</Title>
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

export default withRouter(CollectionPreview);

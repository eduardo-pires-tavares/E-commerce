import { ITEMS, DATA } from "../../assets/shop-data";
import CollectionItem from "../collection-item";

import "./index.styles.scss";

const CollectionPreview = ({ items, title }: DATA) => {
	return (
		<div>
			<div className='collection-preview'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<div className='preview'>
					{items
						.filter((_, idx: number) => idx < 4)
						.map(({ id, ...otherComponentProps }: ITEMS) => {
							return <CollectionItem key={id} id={id} {...otherComponentProps} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default CollectionPreview;

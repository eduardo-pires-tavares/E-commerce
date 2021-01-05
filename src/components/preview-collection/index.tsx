import { ITEMS, DATA } from "../../assets/shop-data";

import "./index.styles.scss";

const CollectionPreview = ({ items, title }: DATA) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title}</h1>
			<div className='preview'>
				{items.map(({ name }: ITEMS) => {
					return <div>{name}</div>;
				})}
			</div>
		</div>
	);
};

export default CollectionPreview;

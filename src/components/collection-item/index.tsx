import { ITEMS } from "../../assets/shop-data";

import "./index.styles.scss";

const CollectionItem = ({ imageUrl, name, price }: ITEMS) => {
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='collection-item-footer'>
				<span className='name'>{name}</span>
				<span className='price'>${price}</span>
			</div>
		</div>
	);
};

export default CollectionItem;

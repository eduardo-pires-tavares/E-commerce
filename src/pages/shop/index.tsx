import { Component } from "react";
import SHOP_DATA, { SHOP_DATA_TYPE, DATA } from "../../assets/shop-data";
import CollectionPreview from "../../components/preview-collection";

class ShopPage extends Component<{}, SHOP_DATA_TYPE> {
	constructor(props: {}) {
		super(props);

		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;

		return collections.map(({ id, ...otherProps }: DATA) => {
			return <CollectionPreview key={id} {...otherProps} />;
		});
	}
}

export default ShopPage;

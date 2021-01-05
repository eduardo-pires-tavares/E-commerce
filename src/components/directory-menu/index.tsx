import React, { Component } from "react";
import MenuItem from "../menu-item";
import "./index.styles.scss";

type Section = {
	title: string;
	imageUrl: string;
	id: number;
	linkUrl: string;
	size?: string;
};

interface State {
	Sections: Section[];
}

class DirectoryMenu extends Component<{}, State> {
	constructor(props: {}) {
		super(props);

		this.state = {
			Sections: [
				{
					title: "hats",
					imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
					id: 1,
					linkUrl: "shop/hats",
				},
				{
					title: "jackets",
					imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
					id: 2,
					linkUrl: "shop/jackets",
				},
				{
					title: "sneakers",
					imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
					id: 3,
					linkUrl: "shop/sneakers",
				},
				{
					title: "womens",
					imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
					size: "large",
					id: 4,
					linkUrl: "shop/womens",
				},
				{
					title: "mens",
					imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
					size: "large",
					id: 5,
					linkUrl: "shop/mens",
				},
			],
		};
	}

	render() {
		const { Sections } = this.state;

		return (
			<div className='directory-menu'>
				{Sections.map(({ id, title, imageUrl, size }) => {
					return (
						<MenuItem
							key={id}
							title={title}
							imageUrl={imageUrl}
							size={size}
						/>
					);
				})}
			</div>
		);
	}
}

export default DirectoryMenu;
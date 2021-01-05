import React, { Component } from "react";
import MenuItem from "../menu-item";
import "./index.styles.scss";
import {
	hatsImageUrl,
	jacketsImageUrl,
	menImageUrl,
	sneakersImageUrl,
	womensImageUrl,
} from "./../../assets/images";

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
					imageUrl: hatsImageUrl,
					id: 1,
					linkUrl: "shop/hats",
				},
				{
					title: "jackets",
					imageUrl: jacketsImageUrl,
					id: 2,
					linkUrl: "shop/jackets",
				},
				{
					title: "sneakers",
					imageUrl: sneakersImageUrl,
					id: 3,
					linkUrl: "shop/sneakers",
				},
				{
					title: "womens",
					imageUrl: womensImageUrl,
					size: "large",
					id: 4,
					linkUrl: "shop/womens",
				},
				{
					title: "mens",
					imageUrl: menImageUrl,
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
				{Sections.map(({ id, ...otherSectionProps }) => {
					return <MenuItem key={id} {...otherSectionProps} />;
				})}
			</div>
		);
	}
}

export default DirectoryMenu;

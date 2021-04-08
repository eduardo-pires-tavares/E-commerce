import { DirectoryMenu } from "./types";
import {
	hatsImageUrl,
	jacketsImageUrl,
	menImageUrl,
	sneakersImageUrl,
	womensImageUrl,
} from "./../../assets/images";
import { Reducer } from "redux";

const INITITAL_STATE: DirectoryMenu = {
	sections: [
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

const directoryReducer: Reducer<DirectoryMenu> = (state = INITITAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;

import React from "react";
import "./index.styles.scss";

interface Props {
	title: string;
	imageUrl: string;
	size?: string;
}

const MenuItem: React.FC<Props> = ({ title, imageUrl, size }) => {
	return (
		<div className={`menu-item ${size}`}>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>

			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default MenuItem;

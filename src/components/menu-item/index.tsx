import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "./index.styles.scss";

type Props = {
	title: string;
	imageUrl: string;
	size?: string;
	linkUrl: string;
};

type ComposedProps = Props & RouteComponentProps<Props>;

const MenuItem: React.FC<ComposedProps> = ({ title, imageUrl, size, linkUrl, match, history }) => {
	return (
		<div
			className={`menu-item ${size ? size : ""}`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<div className='background-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>

			<div className='content'>
				<h1 className='title'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</div>
	);
};

export default withRouter(MenuItem);

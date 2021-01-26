import "./index.styles.scss";
import { RouteComponentProps } from "react-router-dom";

const Collection = ({ match }: RouteComponentProps) => {
	return (
		<>
			<h1>{match.path}</h1>
		</>
	);
};

export default Collection;

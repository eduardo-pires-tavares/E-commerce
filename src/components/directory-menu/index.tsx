import { FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ApplicationState } from "../../store";
import {
	selectDirectoryMenuSections,
	IDirectoryMenuSelector,
} from "../../store/directory/selectors";
import { DirectoryMenuContainer } from "./styles";
import MenuItem from "../menu-item";

const DirectoryMenu: FC<DirectoryMenuProps> = ({ sections }) => {
	return (
		<DirectoryMenuContainer>
			{sections?.map(({ id, ...otherSectionProps }) => {
				return <MenuItem key={id} {...otherSectionProps} />;
			})}
		</DirectoryMenuContainer>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, IDirectoryMenuSelector>({
	sections: selectDirectoryMenuSections,
});

const connector = connect(mapStateToProps);

type DirectoryMenuProps = ConnectedProps<typeof connector>;

export default connector(DirectoryMenu);

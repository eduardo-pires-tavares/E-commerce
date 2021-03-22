import { Dispatch, FC } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { ApplicationState } from "../../store";
import { signOutLoadingAction } from "../../store/users/actions";
import { ISelectUser, selectCurrentUser } from "../../store/users/selectors";
import { UserActionTypes } from "../../store/users/types";
import { StyledMenu } from "./styles";

type sideBarLink = {
	name: string;
	path: string;
};

type Props = {
	open: boolean;
	sideBarLinks: sideBarLink[];
	setOpen: (open: boolean) => void;
};

const Menu: FC<MenuProps> = ({ open, sideBarLinks, currentUser, signOut, setOpen }) => {
	return (
		<StyledMenu open={open}>
			<>
				{sideBarLinks.map(({ name, path }, i) => {
					return (
						<Link key={i} to={path} onClick={() => setOpen(!open)}>
							{name}
						</Link>
					);
				})}
				{currentUser ? (
					<>
						<Link onClick={() => setOpen(!open)} to='/*'>
							ORDERS
						</Link>
						<Link
							to='/'
							onClick={() => {
								signOut();
								setOpen(!open);
							}}
						>
							SIGN OUT
						</Link>
					</>
				) : (
					<>
						<Link onClick={() => setOpen(!open)} to='/signin'>
							SIGN IN
						</Link>
					</>
				)}
			</>
		</StyledMenu>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ISelectUser>({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	signOut: () => dispatch(signOutLoadingAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type MenuProps = ConnectedProps<typeof connector> & Props;

export default connector(Menu);

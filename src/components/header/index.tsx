import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { Dispatch, FC, useState } from "react";
import { ISelectUser, selectCurrentUser } from "../../store/users/selectors";
import { createStructuredSelector } from "reselect";
import {
	LogoContainer,
	HeaderContainer,
	OptionLink,
	OptionsContainer,
	LogoWrapper,
	MainCategoriesNav,
} from "./styles";
import Burguer from "../burguer";
import SideBarMenu from "../sidebar-menu";
import Cart from "../cart";
import { UserActionTypes } from "../../store/users/types";
import { signOutLoadingAction } from "../../store/users/actions";

const Header: FC<HeaderProps> = ({ currentUser, signOut }) => {
	type HeaderLinksType = {
		name: string;
		path: string;
	};

	const [open, setOpen] = useState<boolean>(false);

	const headerLinks: HeaderLinksType[] = [
		{ name: "MEN", path: "/shop/mens" },
		{
			name: "WOMEN",
			path: "/shop/womens",
		},
		{
			name: "SNEAKERS",
			path: "/shop/sneakers",
		},
		{
			name: "JACKETS",
			path: "/shop/jackets",
		},
		{
			name: "HATS",
			path: "/shop/hats",
		},
		{
			name: "BEST SELLERS",
			path: "/shop",
		},
	];

	return (
		<HeaderContainer>
			<Burguer open={open} setOpen={setOpen} />
			<SideBarMenu
				open={open}
				sideBarLinks={headerLinks.map(({ name, path }) => {
					return { name, path };
				})}
				setOpen={setOpen}
			/>

			<MainCategoriesNav>
				<OptionsContainer width='60%' justifyContent='space-between'>
					{headerLinks.map(({ name, path }, i) => {
						return (
							<OptionLink key={i} to={path}>
								{name}
							</OptionLink>
						);
					})}
				</OptionsContainer>
			</MainCategoriesNav>

			<LogoWrapper>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>
			</LogoWrapper>
			<OptionsContainer justifyContent='space-around'>
				{currentUser ? (
					<>
						<OptionLink to='/orders'>ORDERS</OptionLink>
						<OptionLink as='div' className='option' onClick={() => signOut()}>
							SIGN OUT
						</OptionLink>
					</>
				) : (
					<OptionLink className='option' to='/signin'>
						SIGN IN
					</OptionLink>
				)}
			</OptionsContainer>
			<Cart />
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector<ApplicationState, ISelectUser>({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
	signOut: () => dispatch(signOutLoadingAction()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);

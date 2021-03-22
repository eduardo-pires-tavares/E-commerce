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
	CategoriesContainer,
	CategorieLink,
	MainCategoriesNav,
} from "./styles";
import Burguer from "../burguer";
import SideBarMenu from "../sidebar-menu";
import Cart from "../cart";
import { UserActionTypes } from "../../store/users/types";
import { signOutLoadingAction } from "../../store/users/actions";

const Header: FC<HeaderProps> = ({ currentUser, signOut }) => {
	type headerLinksType = {
		name: string;
		path: string;
		categories: string[];
		active: boolean;
	};

	const [open, setOpen] = useState<boolean>(false);

	const [headerLinks, setHeaderLinks] = useState<Array<headerLinksType>>([
		{ name: "MEN", path: "/", categories: ["HATS", "JACKETS", "SNEAKERS"], active: false },
		{
			name: "WOMEN",
			path: "/",
			categories: ["HATS", "TOPS", "BOOTS", "JACKETS", "SNEAKERS", "DRESS"],
			active: false,
		},
		{
			name: "BEST SELLERS",
			path: "/shop",
			categories: [],
			active: false,
		},
	]);

	const toggleCategories = (currentLinkName: string) => {
		setHeaderLinks(
			headerLinks.map(link => {
				if (link.active === true) {
					link.active = false;
				}
				if (link.name === currentLinkName) {
					link.active = true;
				}
				return link;
			}),
		);
	};

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
				<OptionsContainer width='40%' justifyContent='space-between'>
					{headerLinks.map(({ name, path, active }, i) => {
						return (
							<OptionLink
								key={i}
								active={active ? 1 : 0}
								onMouseOver={() => {
									toggleCategories(name);
								}}
								to={path}
							>
								{name}
							</OptionLink>
						);
					})}
				</OptionsContainer>
				<CategoriesContainer>
					{headerLinks
						.find(({ active }) => active === true)
						?.categories.map(categorie => (
							<CategorieLink key={categorie} to='/'>
								{categorie}
							</CategorieLink>
						))}
				</CategoriesContainer>
			</MainCategoriesNav>

			<LogoWrapper>
				<LogoContainer to='/'>
					<Logo className='logo' />
				</LogoContainer>
			</LogoWrapper>
			<OptionsContainer justifyContent='flex-end'>
				{currentUser ? (
					<>
						<OptionLink to='/*'>ORDERS</OptionLink>
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

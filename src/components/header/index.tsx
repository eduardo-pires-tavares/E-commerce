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
	MainCategoriesNav,
} from "./styles";
import Cart from "../cart";
import { UserActionTypes } from "../../store/users/types";
import { signOutLoadingAction } from "../../store/users/actions";

const Header: FC<HeaderProps> = ({ currentUser, signOut }) => {
	const [isShown, setIsShown] = useState<boolean>(false);

	const handleHover = () => {
		setIsShown(!isShown);
	};

	return (
		<HeaderContainer>
			<OptionsContainer width='40%' justifyContent='space-evenly'>
				<OptionLink onMouseOver={handleHover} onMouseLeave={handleHover} to='/'>
					MEN
				</OptionLink>
				<OptionLink onMouseOver={handleHover} onMouseLeave={handleHover} to='/'>
					WOMEN
				</OptionLink>
				<OptionLink onMouseOver={handleHover} onMouseLeave={handleHover} to='/shop'>
					BEST SELLERS
				</OptionLink>
			</OptionsContainer>

			{isShown && (
				<MainCategoriesNav>
					<CategoriesContainer></CategoriesContainer>
				</MainCategoriesNav>
			)}

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

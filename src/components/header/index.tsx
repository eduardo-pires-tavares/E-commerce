import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { Dispatch, FC } from "react";
import { ISelectUser, selectCurrentUser } from "../../store/users/selectors";
import { createStructuredSelector } from "reselect";
import { LogoContainer, HeaderContainer, OptionLink, OptionsContainer } from "./styles";
import Cart from "../cart";
import { UserActionTypes } from "../../store/users/types";
import { signOutLoadingAction } from "../../store/users/actions";

const Header: FC<HeaderProps> = ({ currentUser, signOut }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>

			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>

				<OptionLink to='/'>COLLECTIONS</OptionLink>
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
				<Cart />
			</OptionsContainer>
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

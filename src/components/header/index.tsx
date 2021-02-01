import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { auth } from "../../firebase";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { FC } from "react";
import { ISelectUser, selectCurrentUser } from "../../store/users/selectors";
import { createStructuredSelector } from "reselect";
import { LogoContainer, HeaderContainer, OptionLink, OptionsContainer } from "./styles";
import Cart from "../cart";

const Header: FC<HeaderProps> = ({ currentUser }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>

			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>

				<OptionLink to='/'>COLLECTIONS</OptionLink>
				{currentUser ? (
					<OptionLink as='div' className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
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

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);

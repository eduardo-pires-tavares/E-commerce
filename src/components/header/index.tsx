import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { Dispatch, FC } from "react";
import { ISelectUser, selectCurrentUser } from "../../store/users/selectors";
import { createStructuredSelector } from "reselect";
import {
	LogoContainer,
	HeaderContainer,
	OptionLink,
	OptionsContainer,
	LogoWrapper,
} from "./styles";
import Cart from "../cart";
import { UserActionTypes } from "../../store/users/types";
import { signOutLoadingAction } from "../../store/users/actions";
import { RiArrowDownSLine } from "react-icons/ri";

const Header: FC<HeaderProps> = ({ currentUser, signOut }) => {
	return (
		<HeaderContainer>
			<OptionsContainer width='30%' justifyContent='space-between'>
				<OptionLink to='/'>HOME</OptionLink>

				<OptionLink to='/shop'>
					SHOP
					<RiArrowDownSLine style={{ height: "0.7em" }} />
				</OptionLink>
			</OptionsContainer>

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

import "./index.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { connect, ConnectedProps } from "react-redux";
import { ApplicationState } from "../../store";
import { FC } from "react";

const Header: FC<HeaderProps> = ({ currentUser }) => {
	return (
		<div className='header'>
			<div className='header-logo'>
				<Link to='/'>
					<Logo className='logo' />
				</Link>
			</div>
			<div className='header-options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='/signin'>
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (state: ApplicationState) => ({
	currentUser: state.user.currentUser,
});

const connector = connect(mapStateToProps);

type HeaderProps = ConnectedProps<typeof connector>;

export default connector(Header);

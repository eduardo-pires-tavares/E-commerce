import "./index.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../firebase";

type Props = {
	currentUser: firebase.User | null;
};

const Header = ({ currentUser }: Props) => {
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

export default Header;

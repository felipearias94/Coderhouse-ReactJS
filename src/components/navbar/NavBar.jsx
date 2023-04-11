import "./NavBar.css";
import brandLogo from "../assets/brandLogo.png";
import CartWidget from "../cartWidget/CartWidget";
import NavButtons from "./NavButtons";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<Link to={"/"} className='navbar-brand'>
					<img
						src={brandLogo}
						alt='Logo'
						width='40'
						height='34'
						className='d-inline-block align-text-top'
					></img>
					El Vergel
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav nav-bar'>
						<NavLink to={"/"}>
							<NavButtons label='Productos' />
						</NavLink>
						<NavLink>
							<NavButtons label='Deshabilitado' disabled={true} />
						</NavLink>

						<CartWidget itemCounter={0} />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

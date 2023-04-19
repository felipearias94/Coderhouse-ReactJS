import "./NavBar.css";
import brandLogo from "../assets/brandLogo.png";
import CartWidget from "../shared/cartWidget/CartWidget";
import NavButtons from "./NavButtons";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-success p-2 text-dark bg-opacity-25'>
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
						<NavLink to={"/category/1"}>
							<NavButtons label='Unidades' />
						</NavLink>
						<NavLink to={"/category/2"}>
							<NavButtons label='Cajones' />
						</NavLink>
						<NavLink to={"/cart"}>
							<CartWidget itemCounter={0} />
						</NavLink>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

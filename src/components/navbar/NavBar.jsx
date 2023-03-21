import "./NavBar.css";
import brandLogo from "../assets/brandLogo.png";
import CartWidget from "./cartWidget/CartWidget";
import NavButtons from "./NavButtons";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='home'>
					<img
						src={brandLogo}
						alt='Logo'
						width='40'
						height='34'
						class='d-inline-block align-text-top'
					></img>
					El Vergel
				</a>
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
					<ul className='navbar-nav'>
						<NavButtons label='Productos' route='products' />
						<NavButtons label='Disabled' disabled={true} />
						<CartWidget />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

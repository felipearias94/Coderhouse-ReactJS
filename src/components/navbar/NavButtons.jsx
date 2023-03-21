import React from "react";

const NavButtons = ({ route, label, disabled }) => {
	return (
		<li className='nav-item'>
			<a
				className={disabled ? "nav-link disabled" : "nav-link active"}
				aria-current='page'
				href={route}
			>
				{label}
			</a>
		</li>
	);
};

export default NavButtons;

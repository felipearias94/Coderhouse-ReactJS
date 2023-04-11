import React from "react";

const NavButtons = ({ label, disabled }) => {
	return (
		<li className='nav-item'>
			<span
				className={disabled ? "nav-link disabled" : "nav-link active"}
				aria-current='page'
			>
				{label}
			</span>
		</li>
	);
};

export default NavButtons;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backIcon from "../../assets/icons/back.svg";

const NavigationButton = ({
	route,
	goBack = true,
	label,
	action = () => {},
}) => {
	const navigate = useNavigate();
	const actions = () => {
		action();
		navigate(route);
	};
	return (
		<>
			{goBack ? (
				<div>
					<Link to={route} className='back-button'>
						<img src={backIcon} alt='volver'></img>
					</Link>
				</div>
			) : (
				<button className={`btn btn-primary w-100`} onClick={actions}>
					{label}
				</button>
			)}
		</>
	);
};

export default NavigationButton;

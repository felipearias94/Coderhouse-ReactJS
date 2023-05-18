import React from "react";
import "./Alert.css";
import Cross from "../../assets/icons/cross-icon.svg";

const Alert = ({ message }) => {
	return (
		<div className="alert-wrapper">
			<img src={Cross} alt='' srcset='' />
			<span>{message}</span>
		</div>
	);
};

export default Alert;

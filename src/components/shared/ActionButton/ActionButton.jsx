
const ActionButton = ({ buttonClass, label, actionHandler }) => {
	return (
		<button className={`btn btn-${buttonClass}`} onClick={actionHandler}>
			{label}
		</button>
	);
};

export default ActionButton;

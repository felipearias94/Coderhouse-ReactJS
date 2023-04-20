
const ActionButton = ({ buttonClass, label, actionHandler }) => {
	return (
		<button className={`btn btn-${buttonClass} w-100`} onClick={actionHandler}>
			{label}
		</button>
	);
};

export default ActionButton;

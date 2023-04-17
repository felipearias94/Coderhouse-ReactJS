import "./CustomButton.css";

const CustomButton = ({ importance, label, actionHandler }) => {
	return (
		<button className={`btn btn-${importance} w-100`} onClick={actionHandler}>
			{label}
		</button>
	);
};

export default CustomButton;

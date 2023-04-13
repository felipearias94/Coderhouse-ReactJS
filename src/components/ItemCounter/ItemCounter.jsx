import { useState } from "react";
import "./ItemCounter.css";
import { Link } from "react-router-dom";

const ItemCounter = ({ min, max, onAdd }) => {
	const [counter, setCounter] = useState(1);

	const increaseHandler = () => {
		if (counter < max) setCounter(counter + 1);
	};
	const decreaseHandler = () => {
		if (counter > min) setCounter(counter - 1);
	};

	return (
		<div className='counter-wrapper'>
			<button
				className={"btn btn-outline-secondary " + (max <= 1 ? "disabled" : "")}
				onClick={decreaseHandler}
			>
				-
			</button>
			<input readOnly={true} value={counter}></input>
			<button
				className={"btn btn-outline-secondary " + (max <= 1 ? "disabled" : "")}
				onClick={increaseHandler}
			>
				+
			</button>
			<Link to={"../cart"}>
				<button
					className={"btn btn-outline-primary " + (max === 0 ? "disabled" : "")}
					onClick={() => onAdd(counter)}
				>
					{max < 1 ? "Sin stock" : "Agregar al carrito"}
				</button>
			</Link>
		</div>
	);
};

export default ItemCounter;

import { useState } from "react";
import "./ItemCounter.css";
import ActionButton from "../ActionButton/ActionButton";
import NavigationButton from "../NavigationButton/NavigationButton";

const ItemCounter = ({ min, max, onAdd, showNavigation }) => {
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
				onClick={() => decreaseHandler()}
			>
				-
			</button>
			<input readOnly={true} value={counter}></input>
			<button
				className={"btn btn-outline-secondary " + (max <= 1 ? "disabled" : "")}
				onClick={() => increaseHandler()}
			>
				+
			</button>
			<ActionButton
				label={max < 1 ? "Sin stock" : "Agregar al carrito"}
				buttonClass={"outline-primary " + `${max === 0 ? "disabled" : ""}`}
				actionHandler={() => onAdd(counter)}
			/>
			{showNavigation && (
				<NavigationButton
					route={"../cart"}
					label={"Finalizar compra"}
					goBack={false}
				/>
			)}
		</div>
	);
};

export default ItemCounter;

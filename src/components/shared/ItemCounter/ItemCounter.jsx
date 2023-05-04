import { useState } from "react";
import "./ItemCounter.css";
import ActionButton from "../ActionButton/ActionButton";
import NavigationButton from "../NavigationButton/NavigationButton";

const ItemCounter = ({ max, onAdd, showNavigation }) => {
	const [counter, setCounter] = useState(1);

	const increaseHandler = (amount) => {
		setCounter((currentValue) => {
			return currentValue + amount;
		});
	};

	return (
		<div className='counter-wrapper'>
			<button
				className={"btn btn-outline-secondary " + (max <= 1 ? "disabled" : "")}
				onClick={() => increaseHandler(-1)}
			>
				-
			</button>
			<input readOnly={true} value={counter}></input>
			<button
				className={"btn btn-outline-secondary " + (max <= 1 ? "disabled" : "")}
				onClick={() => increaseHandler(1)}
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

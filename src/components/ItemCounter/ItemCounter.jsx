import { useEffect, useState } from "react";
import "./ItemCounter.css";

const ItemCounter = ({ min, max }) => {
	const [counter, setCounter] = useState(1);

	const increaseHandler = () => {
		if (counter < max) setCounter(counter + 1);
	};
	const decreaseHandler = () => {
		if (counter > min) setCounter(counter - 1);
	};

	const addToCart = () => {
		console.log(`Agregado ${counter} items`);
	};

	return (
		<div className='counter-wrapper'>
			<button className='btn btn-outline-secondary' onClick={decreaseHandler}>
				-
			</button>
			<input readOnly={true} value={counter}></input>
			<button className='btn btn-outline-secondary' onClick={increaseHandler}>
				+
			</button>
			<button className='btn btn-outline-primary' onClick={addToCart}>
				Agregar al carrito
			</button>
		</div>
	);
};

export default ItemCounter;

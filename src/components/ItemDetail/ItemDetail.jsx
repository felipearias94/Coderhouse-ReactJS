import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCounter from "../shared/ItemCounter/ItemCounter";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
	const { addItem } = useContext(CartContext);
	const [showNavigationButton, setShowNavigationButton] = useState(false);

	const addToCartHandler = (counter) => {
		const item = { id, name, price, img };
		addItem(item, counter);
		setShowNavigationButton(true);
	};

	return (
		<>
			<img className='product-image' src={img} alt={name} />

			<div className='product-info'>
				<p className='card-title'>{name}</p>
				<p className='card-price'>$ {price}</p>
				<p className='card-text'>{description}</p>
			</div>

			<ItemCounter
				onAdd={addToCartHandler}
				min={1}
				max={stock}
				showNavigation={showNavigationButton}
			/>
		</>
	);
};

export default ItemDetail;

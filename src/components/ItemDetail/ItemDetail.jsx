import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = ({ id, name, price, img, description, stock }) => {
	const counterHandler = (counter) => {
		console.log(counter);
	};
	return (
		<>
			<img className='product-image' src={img} alt={name} />
			<div className='product-info'>
				<p className='card-title'>{name}</p>
				<p className='card-price'>$ {price}</p>
				<p className='card-text'>{description}</p>
			</div>
			<ItemCounter addToCart={counterHandler} min={1} max={stock} />
		</>
	);
};

export default ItemDetail;

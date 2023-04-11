import "./ItemDetail.css";
import ItemCounter from "../ItemCounter/ItemCounter";

const ItemDetail = ({ id, name, price, img, description }) => {
	return (
		<>
			<img className='product-image' src={img} alt={name} />
			<div className='product-info'>
				<p className='card-title'>{name}</p>
				<p className='card-price'>$ {price}</p>
				<p className='card-text'>{description}</p>
			</div>
			<ItemCounter min={1} max={10} />
		</>
	);
};

export default ItemDetail;

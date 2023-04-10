import "./ItemDetail.css";

const ItemDetail = ({ id, name, price, img, description }) => {
	return (
		<>
			<img className='product-image' src={img} alt={name} />
			<div className='product-info'>
				<p className='card-title'>{name}</p>
				<p className='card-price'>$ {price}</p>
				<p className='card-text'>{description}</p>
			</div>
		</>
	);
};

export default ItemDetail;

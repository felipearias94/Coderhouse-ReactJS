import "./NotFoundPage.css";
import notFound from "../../assets/icons/404-error-message.png";

const NotFoundPage = () => {
	return (
		<div className='wrapper'>
			<img src={notFound} alt='No se encontro' />
		</div>
	);
};

export default NotFoundPage;

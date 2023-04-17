import "./Loader.css";
import CustomImageLoader from "react-custom-image-loader.";
import brandLogo from "../../assets/brandLogo.png";

const Loader = ({ isLoaded }) => {
	return (
		<div className='loader'>
			<CustomImageLoader
				image={brandLogo}
				isLoaded={isLoaded}
				circle={true}
				speed={2}
				animationType={"flash"}
			/>
		</div>
	);
};

export default Loader;

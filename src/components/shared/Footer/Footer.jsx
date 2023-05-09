import "./Footer.css";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import gitHubIcon from "../../assets/icons/github.svg";
import locationIcon from "../../assets/icons/location-pin.svg";
import elVergelLogo from "../../assets/brandLogo.png";

const Footer = () => {
	const currentYear = new Date().getFullYear();
	const mapsURL = "https://goo.gl/maps/EvvpCS1W5tpLE86FA";
	const linkedinProfile = "https://www.linkedin.com/in/felipeariasdev/";
	const gitHubProfile = "https://github.com/felipearias94?tab=repositories";
	const instagramProfile =
		"https://instagram.com/elvergelhidroponia?igshid=NTc4MTIwNjQ2YQ==";

	return (
		<div className='container footer-wrapper'>
			<footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
				<div className='col-md-4 d-flex align-items-center'>
					<a
						href='/'
						className='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'
					>
						<img className='logo' src={elVergelLogo} alt='El Vergel' />
					</a>
					<span className='mb-3 mb-md-0 text-body-secondary'>
						&copy; Finca El Vergel, hidroponia - {currentYear}
					</span>
				</div>
				<a href={mapsURL} target='blank'>
					<img className='location' src={locationIcon} alt='' />
					<span className='text-body-secondary'>Almafuerte, Córdoba, Arg</span>
				</a>

				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					<li className='ms-3'>
						<a
							className='text-body-secondary'
							href={instagramProfile}
							target='_blank'
						>
							<img src={instagramIcon} alt='' />
						</a>
					</li>
					<li className='ms-3'>
						<a
							className='text-body-secondary'
							href={linkedinProfile}
							target='_blank'
						>
							<img src={linkedinIcon} alt='' />
						</a>
					</li>
					<li className='ms-3'>
						<a
							className='text-body-secondary'
							href={gitHubProfile}
							target='_blank'
						>
							<img src={gitHubIcon} alt='' />
						</a>
					</li>
				</ul>
			</footer>
		</div>
	);
};

export default Footer;

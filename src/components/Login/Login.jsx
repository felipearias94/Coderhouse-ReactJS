import { useState } from "react";
import "./Login.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/icons/google-icon.svg";

const Login = () => {
	const { login, googleLogin } = useAuth();
	const navigate = useNavigate();
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState();

	const handlerChange = ({ target: { name, value } }) => {
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleGoogleSignIn = async () => {
		try {
			await googleLogin();
			navigate("/cart/checkout");
		} catch (error) {
			console.error("Google error: ", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		try {
			await login(userCredentials);
			navigate("/cart/checkout");
		} catch (error) {
			if (
				error.code === "auth/user-not-found" ||
				error.code === "auth/wrong-password"
			) {
				setError("Correo y/o contraseña inválido");
			}
			if (error.code === "auth/too-many-requests") {
				setError(
					"Cuenta bloqueda debido a muchos intentos erroneos. Contáctate con nosotros",
				);
			}
		}
	};

	return (
		<div className='container'>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					className='form-control mb-3'
					type='email'
					name='email'
					id='email'
					placeholder='youremail@mail.com'
					onChange={handlerChange}
				/>

				<label htmlFor='password'>Contraseña</label>
				<input
					className='form-control mb-3'
					type='password'
					name='password'
					id='password'
					onChange={handlerChange}
				/>
				<button className='btn btn-primary mt-3' type='submit'>
					Iniciar Sesión
				</button>
			</form>
			<div className='account-buttons'>
				<a href='/register'>No tienes cuenta. Registrate!</a>
				<button className='btn btn-light mt-3' onClick={handleGoogleSignIn}>
					Iniciar sesión con{" "}
					<img style={{  padding: '6px'}} src={GoogleIcon} alt='' srcset='' />
				</button>
			</div>
		</div>
	);
};

export default Login;

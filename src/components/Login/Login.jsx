import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [userCredentials, setUserCredentials] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState();

	const handlerChange = ({ target: { name, value } }) => {
		setUserCredentials({ ...userCredentials, [name]: value });
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
		}
	};

	return (
		<div>
			{error && <p>{error}</p>}
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='youremail@mail.com'
					onChange={handlerChange}
				/>

				<label htmlFor='password'></label>
				<input
					type='password'
					name='password'
					id='password'
					onChange={handlerChange}
				/>
				<button type='submit'>Iniciar Sesión</button>
			</form>
		</div>
	);
};

export default Login;

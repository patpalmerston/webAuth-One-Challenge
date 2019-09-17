import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = props => {
	const [authenticated, setAuthenticated] = useState(null);
	const [user, setUser] = useState(null);

	useEffect(() => {
		props.axiosWithAuth().then(axiosWithAuth => {
			if(axiosWithAuth !== authenticated) {
				setAuthenticated(axiosWithAuth)
			}
		})
	});

	useEffect(() => {
		if (authenticated) {

		}
	})


	const { username, password } = user;

	const handleInput = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value
		});

	const handleSubmit = e => {
		e.preventDefault();

		axiosWithAuth()
			.post(`http://localhost:5000/api/auth/login`, { username, password })
			.then(res => {
				localStorage.setItem('jwt', res.data.token);
				props.history.push('`http://localhost:5000/api/restricted/users`');
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='username'>username</label>
						<input
							type='username'
							name='username'
							value={user.username}
							onChange={handleInput}
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							name='password'
							value={user.password}
							onChange={handleInput}
							required
						/>
					</div>

					<button type='submit'> Login </button>
				</form>
			</h1>
		</div>
	);
};

export default Login;

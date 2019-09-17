import axios from 'axios';

// middleware which will allow us access to the local storage Token and apply it to the headers for each API call we attach it to
export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');

	return axios.create({
		headers: {
			Authorization: token
		}
	});
};

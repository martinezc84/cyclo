//@ts-check
import axios from 'axios';
import { headers, URLS } from '../utils/utils';
const URL = URLS.tiposDeTurno;

//@ts-ignore
exports.handler = async (event, context) => {
	try {
		//@ts-ignore
		let { data } = await axios.get(URL, { headers });
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		};
	} catch (error) {
		console.error(error);
		console.log(URL);
		return {
			statusCode: 503,
			body: JSON.stringify(error)
		};
	}
};

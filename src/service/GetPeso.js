//@ts-check
import axios from 'axios';
import { headers, APIP_URL } from '../utils/utils';
const URL = APIP_URL.formula;
const headersr = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	'Content-Type': 'application/json',
	'Access-Control-Allow-Methods': '*',
	'Access-Control-Max-Age': '2592000',
	'Access-Control-Allow-Credentials': 'true',
  };
//@ts-ignore
exports.handler = async (event, context) => {
	try {
		//@ts-ignore
		let id = event.queryStringParameters.id;
		let { data } = await axios.get(`http://192.168.11.186:5000` );
		//console.log(data)
		return {
			statusCode: 200,
			body: data,
			headers:headersr
		};
	} catch (error) {
		console.error(error);
		return {
			statusCode: 502,
			body: JSON.stringify(error)
		};
	}
};

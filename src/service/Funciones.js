//@ts-check
import axios from 'axios';
import { headers, API_URL } from '../utils/utils';
const URL = API_URL.listadoMandados;


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
		let int = event.queryStringParameters.int;
		let dow = event.queryStringParameters.dow;
		let funcion = event.queryStringParameters.funcion;
		let url = 'https://dcgse.com/calendario_api/apical/'+funcion+'?int='+int+"&dow="+dow;
		//let body = JSON.parse(event.body);
	    //const { valor}  = body;
		console.log(url)
		let { data } = await axios.get(url, { headers });
		return {
			statusCode: 200,
			headers:headersr,
			body: JSON.stringify(data)
		};
	} catch (error) {
		console.error(error);
		return {
			statusCode: 502,
			body: JSON.stringify(error)
		};
	}
};

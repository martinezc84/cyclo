//@ts-check
import axios from 'axios';
import { headers, ZAURU } from '../utils/utils';
const URL = ZAURU.lotezauru;
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
		
		let parameters = event.queryStringParameters;
		let paramstring="?"
		for (let key in parameters){
		paramstring=paramstring+"&"+key+"="+parameters[key]
		};
		
		let { data } = await axios.get('https://dcgse.com/calendario_api/apiprod/'+parameters.method+paramstring, { headers });
		//let data={resp:"ok"}
		return {
			statusCode: 200,
			body: JSON.stringify(data),
			headers:headersr
		};
	} catch (error) {
		//console.error(error);
		return {
			statusCode: 502,
			body: JSON.stringify(error.response.data)
		};
	}
};

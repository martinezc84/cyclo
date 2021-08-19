//@ts-check
import axios from 'axios';
<<<<<<< HEAD
import { headers, APIP_URL } from '../utils/utils';
const URL = APIP_URL.formula;
=======
import { headers, URLS } from '../utils/utils';
const URL = URLS.empleados;
>>>>>>> d09db81b9b3c83247eb0dc2ae19b7dccb85d57a8
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
<<<<<<< HEAD
		let { data } = await axios.get(URL+"?id="+id, { headers });
		//console.log(data)
=======
		let { data } = await axios.get("https://dcgse.com/calendario_api/apiprod/formula?id="+id, { headers });
		console.log(data)
>>>>>>> d09db81b9b3c83247eb0dc2ae19b7dccb85d57a8
		return {
			statusCode: 200,
			body: JSON.stringify(data),
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

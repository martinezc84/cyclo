//@ts-check
import axios from 'axios';
import { headers, URLS } from '../utils/utils';
const URL = URLS.UnpaidInvoices;


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
		
		let url = `${URL}`;
		let body = JSON.parse(event.body);
	    const { valor}  = body;
			console.log('{"draw":"1", "start":"0", "length":"200","search":{"value":"'+valor+'","regex":"false"}}')
		let { data } = await axios.post(url, '{"draw":"1", "start":"0", "length":"200","search":{"value":"'+valor+'","regex":"false"}}' ,{ headers });
	
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

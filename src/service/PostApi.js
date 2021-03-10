//@ts-check
import axios from 'axios';
import { headers, APIP_URL } from '../utils/utils';
const URL = APIP_URL.guardaritem;
import JSON from 'circular-json';

const headersr = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
	'Content-Type': 'application/json',
	'Access-Control-Allow-Methods': '*',
	'Access-Control-Max-Age': '2592000',
	'Access-Control-Allow-Credentials': 'true',
  };

exports.handler = (event, context, callback) => {
	
	console.log(event.body);
	let parameters = event.queryStringParameters;
	let method = event.queryStringParameters.method;
	event.queryStringParameters.method='';
	let paramstring="?"
	for (let key in parameters){
		paramstring=paramstring+"&"+key+"="+parameters[key]
		};
	console.log('https://dcgse.com/calendario_api/apiprod/'+method+paramstring);
	return axios
		.post('https://dcgse.com/calendario_api/apiprod/'+method+paramstring, event.body, { headers: headers })
		.then((data) => {
			
			console.log(data);
			return {
				statusCode: 200,
				body: JSON.stringify(data.data),
				headers:headersr,
			};
		})
		.catch((error) => ({
			statusCode: 422,
			body: `Oops! Something went wrong. ${error}`,
			headers:headersr,
		}));
};

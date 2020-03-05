//@ts-check
import React, { Component } from 'react';
import { Table,  Button, Icon, Dropdown, Checkbox } from 'semantic-ui-react';

export default class PesaDetalle extends Component {

	state ={
		
	}



	shouldComponentUpdate(np) {
		//return true;
		if(np.unico !== this.props.unico || np.item_id !== this.props.item_id || np.cantidad !== this.props.cantidad || np.items !== this.props.items  ){
			return true;
		}else{
			return false;
		}
		
	}

	
	

	render() {
		let {  peso, view } = this.props;
		
		
	//console.log(item_id)

			
				if (view){
					return(
						<div>
						Peso:{{peso}}
						</div>

					)
				}else{
					return(
						<div>
						
						</div>

					)
				}
				
				
			
	
	
		
	}
}
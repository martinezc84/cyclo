//@ts-check
import React, { Component } from 'react';
import { Table,  Button, Icon, Dropdown, Checkbox } from 'semantic-ui-react';

export default class FilaDetalle extends Component {

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

	handleInputChange = event => {
		const target = event.target
		const value = target.value
		const name = target.name
		this.props.guardarcantidad(this.props.id,value)
		this.setState({
		  [name]: value,
		})
	  }
	

	render() {
		let {  items, line, pesar, item_id, selectitem, id, formulas, cantidad, from_orden } = this.props;
		
		
	//console.log(item_id)

			return (
				<Table.Row>
					{ from_orden ? (
					<Table.Cell>
						{line.item_bundle_name}
					</Table.Cell>
					):('')
					}
					{ from_orden ? (
					<Table.Cell>
					{line.item_cantidad}
					
					</Table.Cell>
					):('')
				}
					<Table.Cell>
					
					{items!==null?(
					<Dropdown
						value={item_id}
						placeholder='Item'
						onChange={selectitem}
						search
						fluid
						selection
						id={id}
						options={formulas}
						/>):('')}
					</Table.Cell>
					<Table.Cell>
					<input
					type="text"
					name="cantidad"
					value={cantidad}
					onChange={this.handleInputChange}
<<<<<<< HEAD
					className="inputform"
=======
					onKeyDown={(event)=>{
						//console.log(event.keyCode);
						if(event.keyCode === 13){
							this.props.agregarlinea(this.state.code,fila.id)
							console.log(this.state.code);

						}

						if(event.keyCode === 9){
							this.props.editarlinea(this.state.code,fila.id)
							console.log(this.state.code);

						}
						
					}}
                    className="inputform"
                  />
					</Table.Cell>
					
>>>>>>> d09db81b9b3c83247eb0dc2ae19b7dccb85d57a8
					
		  			/>
			
			</Table.Cell>
				</Table.Row>
			)
	
	
		
	}
}
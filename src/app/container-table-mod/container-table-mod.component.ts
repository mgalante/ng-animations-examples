import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
//table modular models
//import { TableModConfig, CircleButton, RowActionType, CmItem, RowAction, TableModMode, TableModHead, TableModBody, RowFeedback } from "./table-modular/table-modular.model";


@Component({
  selector: 'app-container-table-mod',
  templateUrl: './container-table-mod.component.html',
  styleUrls: ['./container-table-mod.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ContainerTableModComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


// Table Modular
	onTableModAction(rowEmitter) {
		console.log('table emitter:', rowEmitter)
		// Can only be edited one at a time
		if (rowEmitter.action == 'edit') {
			for (let i = 0; i < this.tModBody.length; i++) {
				if (i != rowEmitter.index) {
					this.tModBody[i].state = "view" /* TableModMode.view */
				} else {
					this.tModBody[i].state = "editable" /* TableModMode.editable */
				}
			}
			this.tModConfig.addItemActive = false

		}
		// Acept edition actions here
		if (rowEmitter.action == 'aceptEdit') {
			this.tModBody[rowEmitter.index].state = "view" /* TableModMode.view */
		}
		// Cancel edition actions here
		if (rowEmitter.action == 'cancelEdit') {
			this.tModBody[rowEmitter.index].state = "view" /* TableModMode.view */
		}


		//this.router.navigate([item]);
	}
	/* onTableModOrderby(orderbyEmitter){
		console.log("order by emitter:", orderbyEmitter)
	} */
	onOutsideTableAction(outTableEmitter) {
		console.log('outside table emitter:', outTableEmitter)
		// show input for new item
		if (outTableEmitter.action == 'addItem') {
			this.tModConfig.addItemActive = true
			// hide edit mode
			if (outTableEmitter.tableMode == "editable" /* TableModMode.editable */) {
				for (let i = 0; i < this.tModBody.length; i++) {
					this.tModBody[i].state = "view" /* TableModMode.view */
				}
			}
		}
		// acept or cancel new item
		if (outTableEmitter.action == "aceptAddItem") {
			this.tModConfig.addItemActive = false
		} else if (outTableEmitter.action == "cancelAddItem") {
			this.tModConfig.addItemActive = false
		}
	}
	//Configuration for inputs
	inputs = {
		date: {
			//component config:
			displayInView: true,
			displayInEdit: true,
			//Plugin config setings: 
			//https://www.npmjs.com/package/ng2-datetime
			readonly: false,
			time: false,
			pluginConfig: {
				startDate: new Date(2016, 5, 10),
				autoclose: true,
				todayBtn: 'linked',
				todayHighlight: true,
				assumeNearbyYear: true,
				format: 'd M yyyy',
				placeholder: "fecha",
				language: 'pl'
			}
		},
		dropdown: {
			displayInView: true,
			displayInEdit: true,
			required: true,
			disable: false,
			placeholder: "un placeholder",
			//style:" width:'100px' ",
			list: [
				{//dropdown Selected: 0 
					text: "Firmar",
					id: "sign"
				},
				{//dropdown Selected: 1
					text: "Liberar",
					id: "release"
				}
			]
		},
		input: {
			displayInView: true,
			displayInEdit: true,
			required: true,
			disable: false,
			placeholder: "un placeholder"
		},
		radio: {
			displayInView: true,
			displayInEdit: true,
			required: true,
			disable: false
		},
		check: {
			displayInView: true,
			displayInEdit: true,
			required: true,
			disable: false
		}
  }
  
  // : TableModConfig
	tModConfig = {
		addItemActive: false, // used for add item row
		// buttons Arrays
		rowViewActions: [
			{
				type: "button" /* RowActionType.button */,
				//tooltip: "Ver detalles",
				action: "go_details",
				title: "Ver detalles"
			},
			{
				type: "contextMenu" /* RowActionType.contextMenu */,
				cmItems: [
					{
						title: "Imprimir",
						action: "print"
					},
					{
						title: "Descargar",
						action: "download"
					},
					{
						title: "Enviar por mail",
						action: "mail"
					}
				]
			},
			{
				type: "icon" /* RowActionType.icon */,
				tooltip: "Eliminar",
				action: "remove",
				icon: "fa fa-trash"
			}
		],
		rowEditActions: [
			{
				type: "icon" /* RowActionType.icon */,
				tooltip: "Eliminar",
				action: "remove",
				icon: "fa fa-trash"
			}
		],
		circleButtons: [
			{
				icon: "fa fa-plus",
				text: "Agregar items",
				action: "addItem" // this action activate the addItem row
			},
			{
				icon: "fa fa-bell",
				text: "Accion extra",
				action: "go_to_some_page"
			}
		]
	}
  
  // : TableModHead[]
	tModHead = [
		{ title: "String", attribute: { value: "stringText"}, sortBtnDisplay: true, dataType: 0, },//Default (string) 
		{ title: "Monto", attribute: { value: "value", currency: "currency" }, sortBtnDisplay: true, dataType: 1, },//Currency & Value 
		/* { title: "Dropdown", attribute: {
				value: "dropdownSelected",
				config: this.inputs.dropdown,
				items: "dropdownItems"
			}, sortBtnDisplay: true, dataType: 2,},//dropdown & dropdownSelected
		{ title: "datepicker", attribute: { value: "datepickerSelected", config: this.inputs.date }, sortBtnDisplay: true, dataType: 4, },//datepicker 		 */
		{ title: "Input", attribute: { value: "inputValue", config: this.inputs.input }, sortBtnDisplay: true, dataType: 3, },//input text: Value & config 							
		{ title: "check", attribute: { value: "checkSelected", config: this.inputs.check }, sortBtnDisplay: true, dataType: 5, },//checkbox 
		{ title: "radio", attribute: { value: "radioSelected", config: this.inputs.radio }, sortBtnDisplay: false, dataType: 6, },//radiobutton 
		{ title: "Number", attribute: { value: "inputNumValue", config: this.inputs.input }, sortBtnDisplay: true, dataType: 7, },//input number: Value& config 
		{ title: "Mail", attribute: { value: "inputMailValue", config: this.inputs.input }, sortBtnDisplay: true, dataType: 8, },//input mail: Value& config 
	]
  
  // : TableModBody[]
	tModBody = [
		{
			disable: false,
			checked: false,
			rowFeedback: null, //clould be: "success","warning","info","danger"
			state: null,
			rowData: {
				stringText: "String1",
				currency: "$",
				value: 8000.567,
				/* datepickerSelected: new Date(2016, 5, 10),
				dropdownSelected: 1,
				dropdownItems: this.inputs.dropdown.list, */
				checkSelected: true,
				radioSelected: true,
				inputValue: "created",
				inputNumValue: 3,
				inputMailValue: "lala@lala.com",
			}
		}, {
			disable: false,
			checked: false,
			rowFeedback: null, //clould be: "success","warning","info","danger"
			state: null,
			rowData: {
				stringText:"aaaa",
				currency: "$",
				value: 500,
				/* datepickerSelected: null,
				dropdownSelected: 0,
				dropdownItems: this.inputs.dropdown.list, */
				checkSelected: true,
				radioSelected: false,
				inputValue: "un valor",
				inputNumValue: 45,
				inputMailValue: "blabla@blabla.com",
			}
		}, {
			disable: false,
			checked: false,
			rowFeedback: null, //clould be: "success","warning","info","danger"
			state: null,
			rowData: {
				stringText:"aab",
				currency: "$",
				value: 0,
				/* datepickerSelected: null,
				dropdownSelected: 0,
				dropdownItems: this.inputs.dropdown.list, */
				checkSelected: false,
				radioSelected: false,
				inputValue: null,
				inputNumValue: null,
				inputMailValue: null,
			}
		}
	]
// END Table Modular

}

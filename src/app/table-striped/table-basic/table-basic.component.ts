import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DetailsGeneralComponent } from './details-general.component';
import { DetailsHistoricComponent } from './details-historic.component';

import { trigger, state, style, animate, transition } from "@angular/animations";
import { AcordionToggle } from "../../animations/animations.component";

@Component({
	selector: 'table-basic-component',
	templateUrl: './table-basic.component.html',
	styleUrls: ['./table-basic.css'],
	animations: [AcordionToggle]
})

export class TableBasicComponent {

	@Input() tBasicSummary:any
	@Input() tConfig:any
	@Input() tHead: any
	@Input() tBody: any


	//this.tConfig.sortByColumn
	//sortByColumn = 0 
	sortDescending = false
	checkAll = false
	historyDetailItem(index){
		if(this.tBody[index].details.historyDetail && this.tBody[index].details.historyDetail.length != 0){
			let itemNum = this.tBody[index].details.historyDetail.length-1
			return itemNum
		} else {
			return null
		}
	}
	toggleDetail(index) {
		if(this.tBody[index].state === "open")
		{
			this.tBody[index].state = "close";
		}else{
			this.tBody[index].state = "open";
		}
	}
	sortByIcon(index){
		for (let th of this.tHead) {
			if(index == this.tConfig.sortByColumn){
				if(this.sortDescending == false){
					return	"fa-sort-desc"
				} else {
					return	"fa-sort-asc"
				}
			} else {
				return	"fa-sort"
			}
		}
	}
	sortBy(index){
		if(this.tConfig.sortByColumn != index){
			this.sortDescending = false
		} else {
			this.sortDescending =  this.sortDescending ? false : true;
		}
		this.tConfig.sortByColumn = index
		this.sortByIcon(index)
	}
	rowCheck(index){
		// Cambiar por emitir datos
		this.tBody[index].checked =  this.tBody[index].checked ? false : true;
	}
	rowCheckAll(){
		let totalItems = 0
		for (let row of this.tBody) {
			if(row.checked){
				 totalItems ++
			}
		}
		if(totalItems == this.tBody.length){
			this.checkAll = false
			for (let row of this.tBody) {
				row.checked = false
			}
		} else {
			this.checkAll = true
			for (let row of this.tBody) {
				row.checked = true
			}
		}
	}
	rowAction(index: string, row: any, action: string){
		//let tableEvent: TableBasicEvent = new TableBasicEvent(index, row, action);
		//this.actionEmitter.emit(tableEvent);
		//console.log("EventEmitter: " + JSON.stringify(tableEvent));
		//console.log(row[0]) 

		if(action =="edit"){
			console.log("go to edit")
			this.tBody[index].rowFeedback = null

		} else if(action =='reopen'){
			console.log("go to edit")
			this.tBody[index].rowFeedback = null
		
		//} else if(action =='create'){

		} else if(action =='sign'){
			this.tBody[index].rowData.statusTitle = "Firmada"
			this.tBody[index].rowData.status = "signed"
			this.tBody[index].rowActions.mainAction.title = "Aprobar"
			this.tBody[index].rowActions.mainAction.action = "approve"
			this.tBody[index].details.historyDetail.push({
					image:"static/minb/assets/images/client-image.png",
					name:"Nombre Apellido",
					date:"10 Nov 2016 09:32",
					status:"signed",
					statusTitle:"Firmada"
				})
			this.tBody[index].rowFeedback = "success"

		} else if(action =='approve'){
			this.tBody[index].rowData.statusTitle = "Aprobada"
			this.tBody[index].rowData.status = "approved"
			this.tBody[index].rowActions.mainAction.title = "Liberar"
			this.tBody[index].rowActions.mainAction.action = "release"
			this.tBody[index].details.historyDetail.push({
					image:"static/minb/assets/images/client-image.png",
					name:"Nombre Apellido",
					date:"10 Nov 2016 09:32",
					status:"approved",
					statusTitle:"Aprobada"
				})
			this.tBody[index].rowFeedback = "success"

		} else if(action =='release'){
			this.tBody[index].rowData.statusTitle = "Liberada"
			this.tBody[index].rowData.status = "released"
			this.tBody[index].rowActions.mainAction.title = "Ver detalles"
			this.tBody[index].rowActions.mainAction.action = "go_details"
			this.tBody[index].details.historyDetail.push({
					image:"static/minb/assets/images/client-image.png",
					name:"Nombre Apellido",
					date:"10 Nov 2016 09:32",
					status:"released",
					statusTitle:"Liberada"
				})
			this.tBody[index].rowActions.contextualMenu = [
						{
							title:"Imprimir",
							action:"print"
						},
						{
							title:"Descargar",
							action:"download"
						},
						{
							title:"Enviar por mail",
							action:"mail"
						}
					]
			this.tBody[index].rowFeedback = "success"

		} else if(action =='deny'){
			this.tBody[index].rowData.statusTitle = "Denegada"
			this.tBody[index].rowData.status = "denied"
			this.tBody[index].rowActions.mainAction.title = "Ver detalles"
			this.tBody[index].rowActions.mainAction.action = "go_details"
			this.tBody[index].details.historyDetail.push({
					image:"static/minb/assets/images/client-image.png",
					name:"Nombre Apellido",
					date:"10 Nov 2016 09:32",
					status:"denied",
					statusTitle:"Denegada"
				})
			this.tBody[index].rowActions.contextualMenu = [
						{
							title:"Imprimir",
							action:"print"
						},
						{
							title:"Descargar",
							action:"download"
						},
						{
							title:"Enviar por mail",
							action:"mail"
						}
					]
			this.tBody[index].rowFeedback = "danger"

		} else if(action =='go_details'){
			console.log("go to details")
			this.tBody[index].rowFeedback = null

		} else if(action =='print'){
			console.log("print modal")
			this.tBody[index].rowFeedback = null

		} else if(action =='download'){
			console.log("download modal")
			this.tBody[index].rowFeedback = null

		} else if(action =='mail'){
			console.log("mail modal")
			this.tBody[index].rowFeedback = null

		} else if(action =='remove'){
			console.log("remove draft")
			this.tBody[index].rowFeedback = null
		} else {
			console.log("This action didn't match")
		}
		//this.summaryAction()
	}
}

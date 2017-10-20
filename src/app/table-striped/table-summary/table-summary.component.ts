import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import {  trigger,  state,  style,  animate,  transition, keyframes} from '@angular/animations';
import { TableBasicSummary } from "../../animations/animations.component";

@Component({
	selector: 'table-summary-component',
	templateUrl: './table-summary.component.html',
	styleUrls: ['./table-summary.css'],
	animations: [TableBasicSummary]
})
export class TableSummaryComponent {
	
	@Input() tBasicSummary:any 
	@Input() tBody:any

	totalItems : number = 0
	totalValue : number = 0
	openClose: string = "close"
	

	summaryAction(action){
		console.log("summaryAction: "+this.tBasicSummary.data.actions.mainAction.action)
	}
	getTotalItems(){
		let totalItems = 0
		for (let row of this.tBody) {
			if(row.checked){
				 totalItems ++
			}
		}
		if(this.totalItems != totalItems){
			this.totalItems = totalItems
			this.tBodyChange(totalItems)
		}
		return  totalItems
	}
	/*enableAllRows(){
		for (let row of this.tBody) { 
			row.disable = false 
		}
	}
	disableNotStatusRows(){
		for (let row of this.tBody) {
			if(row.rowActions.mainAction.action != "sign"){ 
				if(row.rowActions.mainAction.action != "approve"){ 
					if(row.rowActions.mainAction.action != "release"){ 
						row.disable = true
					}
				}
			}
		}
	}
	disableNotEditRows(){
		for (let row of this.tBody) {
			if(row.rowActions.mainAction.action != "edit"){ 
				row.disable = true
			}
		}
	}
	disableNotHistoRows(){
		for (let row of this.tBody) {
			if(row.rowActions.mainAction.action != "go_details"){ 
				row.disable = true
			}
		}
	}*/
	tBodyChange(totalItems){
		//console.log("totalItems"+totalItems)
		
		// Open Close Summary
			if(totalItems  > 0){
				this.openClose = "open"
			} else {
				//this.enableAllRows()
				this.openClose = "close"
			}
		
		// Total Value
			let totalValue = 0
			for (let row of this.tBody) {
				if(row.checked){
					 totalValue += row.rowData.value
				}
			}
			this.totalValue = totalValue

		// Actions
			// One item selected ///////////////////////////////////////////////////
			//(Same action an contextual menu as row)
			if(totalItems  == 1){
				for (let row of this.tBody) {
					if(row.checked){
						this.tBasicSummary.data.actions.mainAction.title = row.rowActions.mainAction.title    // same as row action
						this.tBasicSummary.data.actions.mainAction.action = row.rowActions.mainAction.action  // same as row action
						this.tBasicSummary.data.actions.contextualMenu = row.rowActions.contextualMenu        // same as row action
						
						// Disabled not related rows
						/*if(row.rowActions.mainAction.action  == "sign" || row.rowActions.mainAction.action  == "approve" || row.rowActions.mainAction.action  == "release"){
							this.disableNotStatusRows()
						}
						if(row.rowActions.mainAction.action  == "edit" ){
							this.disableNotEditRows()
						}
						if(row.rowActions.mainAction.action  == "go_details" ){
							this.disableNotHistoRows()
						}*/

					}
				}
				
			// Set of actions //////////////////////////////////////////////////////
			} else {
				let action = ""
				let actionsGrup = []
				let statusAction = true
				let sameAction = true
				for (let row of this.tBody) {
					if(row.checked){
					
						actionsGrup.push(row.rowActions.mainAction.action)
						for (let actItem of actionsGrup) {
							// is a status action?
							if(actItem != "sign"){ 
								if(actItem != "approve"){ 
									if(actItem != "release"){ 
										statusAction = false
									}
								}
							}
							// is a group of diferents actions?
							for (let actItemB of actionsGrup) {
								if(actItem != actItemB){
									sameAction = false
								}
							}
						}
							
						if (sameAction == true){//////// Same Action///////////////////
							///////////////////////////////////////////////////////////

							//console.log("Same Action:"+actionsGrup)
							// edit group
							if(actionsGrup[0] == "edit"){
								//console.log("remove_group")
								this.tBasicSummary.data.actions.mainAction.title = "Eliminar"
								this.tBasicSummary.data.actions.mainAction.action = "remove_group"
								this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.editCM
							// sign, approve or release
							} else if(actionsGrup[0] == "sign" || actionsGrup[0] == "approve" || actionsGrup[0] == "release"){
								//console.log("status_group")
								this.tBasicSummary.data.actions.mainAction.title = row.rowActions.mainAction.title
								this.tBasicSummary.data.actions.mainAction.action = "same_status_group"
								this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.statusCM
							// go_details group
							} else if(actionsGrup[0] == "go_details"){
								//console.log("print_group")
								this.tBasicSummary.data.actions.mainAction.title = "Descargar"
								this.tBasicSummary.data.actions.mainAction.action = "download_group"
								this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.downloadCM
							// sign, approve or release group
							}
						} else { ///////////////// Diferents Action ///////////////////
							///////////////////////////////////////////////////////////

							//console.log("Diferents Action: "+actionsGrup)							
							if(statusAction == true){
								this.tBasicSummary.data.actions.mainAction.title = "Continuar"
								this.tBasicSummary.data.actions.mainAction.action = "diferent_status_group"
								this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.statusCM

							} else {
								this.tBasicSummary.data.actions.mainAction.title = "Descargar"
								this.tBasicSummary.data.actions.mainAction.action = "download_group"
								this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.downloadCM
							}

						}
					}
				}

			}
	
	}
	
	closeSummary(){
		for (let row of this.tBody) {
			row.checked = false
			row.disable = false
		}
	}
}

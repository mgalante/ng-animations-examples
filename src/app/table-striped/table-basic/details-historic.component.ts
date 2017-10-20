import { Component, Input } from '@angular/core';

@Component({
  selector: 'details-historic-component',
  templateUrl: './details-historic.component.html',
	styleUrls: ['./table-details.css']
})
export class DetailsHistoricComponent {
	@Input() row:any
	@Input() histoPendingActions:any

	reminderModal(action,user){
		console.log("Action:"+action+" - user:"+user)
	}
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'details-general-component',
  templateUrl: './details-general.component.html',
	styleUrls: ['./table-details.css']
})
export class DetailsGeneralComponent {
	@Input() row:any
}

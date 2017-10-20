import {  Component,  Input} from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';
import { routerTransition } from '../router.animations';

@Component({
	selector: 'test-animation-component',
	template: `
		<div class="container">
			<h2>Animation: simple</h2>
			<p>Primer ejemplo</p>
			<button class="btn btn-secondary" [@myTrigger]="state" (click)="toggleState()">trigger animation</button>
		</div>`,
	styles:[
	],
	animations: [
		routerTransition(),
	  	
	  	trigger('myTrigger', [
	  		state('small', 
	  			style({
	        		transform: 'scale(1)'
	      		})
	  		),
	  		state('big', 
	  			style({
	        		transform: 'scale(1.4)'
	      		})
	  		),
			//transition('small => big', animate('1000ms ease-in')),
			//transition('big => small', animate('1000ms ease-out'))

//			, para definir varias transiciones de estado juntas
			//transition('big => small, small => big', animate('200ms ease-out'))

//			* para de cualquier estado a...
//			* => * para todas las transiciones
			//transition('* => big', animate('1000ms ease-out'))
			transition('* => *', animate('100ms ease-out'))
	    ])
	],
    host: {'[@routerTransition]': ''}
	
})
export class TestAnimation{
	state = "small"

	toggleState(){
		if(this.state == "small"){
			this.state = "big"
		}else{
			this.state = "small"
		}
		//this.state = (state === "small" ? "big" : "small")
	}
}
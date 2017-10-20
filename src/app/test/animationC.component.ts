import {  Component} from '@angular/core';
import {  trigger,  state,  style,  animate,  transition, keyframes} from '@angular/animations';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'animation-c-component',
    template: `
		<div class="container">
			<h2>Animation C: Items</h2>
			<p>Keyframes</p>
			<ul>
				<li *ngFor="let item of items" [@myTrigger]="state">
					{{item.name}}, {{item.content}}
				</li>
			</ul>
			<button class="btn btn-primary" (click)="addItem()">+ Add</button>
		</div>
		`,
	styles:[`
		ul {
			list-style-type:none;
    		padding-left: 0;}
		li{
			background:#f1f1f1;
			padding:10px;
			margin-bottom:3px;
		}
	`],
	animations: [
		routerTransition(),
		
	  	trigger('myTrigger', [ 
	  		
	  		state('fadeIn', 
	  			style({
	        		opacity: '1'
	      		})
	  		),
//			void : transcicion de elementos nuevos 
//			tiempo: 0.5s 500ms 500
//			Espera: se agrega otro intervalo de tiempo al lado ej: 500 500
			transition('void => *', [
					animate(300, 
						keyframes([
							style({ opacity: '0', transform: 'translateY(-20px)', offset: 0 }),
							style({ opacity: '1', transform: 'translateY(5px) scale(1.01)', offset: .3 }),
							style({ opacity: '1', transform: 'translateY(0)', offset: 1 })
						])
					)
				]
			)
	    ])
	],
    host: {'[@routerTransition]': ''}
})
export class TestAnimationC {

	state = "small"
	items = []
	addItem(){
		this.items.push(
			{
				name: "New item",
				content: "bla bla bla"
			}
		)
		this.state = "fadeIn"
	}
}

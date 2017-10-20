import {  Component} from '@angular/core';
import {  trigger,  state,  style,  animate,  transition, keyframes} from '@angular/animations';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'animation-d-component',
    template: `
		<div class="container">
			<h2>Animation D: Items</h2>
			<p>trigger function .start & .done</p>
			<ul>
				<li *ngFor="let item of items" [@myTrigger]="state" (@myTrigger.start)="animStart()" (@myTrigger.done)="animDone()" >
					{{item.name}}, {{item.content}}
				</li>
			</ul>
			<button class="btn btn-primary" (click)="addItem()" [@removeTrigger]="removeState" >+ Add</button>
			<button class="btn btn-primary" (click)="removeItem()">- Remove</button>
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
	  		state('fadeOut', 
	  			style({
	        		opacity: '0',
	        		display: 'none'
	      		})
	  		),
			transition('void => *', [
					animate(300, 
						keyframes([
							style({ opacity: '0', transform: 'translateY(-20px)', offset: 0 }),
							style({ opacity: '1', transform: 'translateY(5px) scale(1.01)', offset: .3 }),
							style({ opacity: '1', transform: 'translateY(0)', offset: 1 })
						])
					)
				]
			),
			transition('* => fadeOut', [
					animate(300, 
						keyframes([
							style({ opacity: '1', transform: 'translateY(0)', offset: 0 }),
							style({ opacity: '1', transform: 'translateY(5px) scale(1.01)', offset: .3 }),
							style({ opacity: '0', transform: 'translateY(-20px)', offset: 1 })
						])
					)
				]
			)
	    ]),
	    trigger('removeTrigger', [ 
	  		state('fadeOut', 
	  			style({
	        		opacity: '0',
	        		width: '0',
	        		display: 'none'
	      		})
	  		),
			transition('* => fadeOut', [
					animate(300, 
						keyframes([
							style({ opacity: '1', transform: 'translateY(0)', offset: 0 }),
							style({ opacity: '1', transform: 'translateY(5px) scale(0.1)', offset: .3 }),
							style({ opacity: '0', transform: 'translateY(-20px) scale(0)', offset: 1 })
						])
					)
				]
			)
	    ])
	],
    host: {'[@routerTransition]': ''}
})
export class TestAnimationD {

	state = ""
	removeState = ""
	items = []
	addItem(){
		this.items.push({name: "New item", content: "bla bla bla"})
		this.state = "fadeIn"
		console.log(" add item")
	}
	removeItem(){
		//this.removeState = "fadeOut"
		//this.state = "fadeOut"
		console.log(" remove item")
		let lastItem = this.items.length - 1
		this.items.splice(lastItem, 1);
	}
	animStart(){
		console.log(" anim start")
	}
	animDone(){
		console.log(" anim done")
		if(this.items.length > 2){
			this.removeState = "fadeOut"
		} else {
			this.removeState = "fadeIn"
		}
	}
}

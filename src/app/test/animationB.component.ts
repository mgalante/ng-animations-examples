import {  Component,  Input} from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'animation-b-component',
    template: `
	<div class="container">
		<h2>Animation B: Heros</h2>
		<p>con delay antes</p>
		<ul>
			<li *ngFor="let hero of heroes" [@myTrigger]="state" >
				{{hero.name}}, {{hero.weapon}}
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
					style({
						opacity: '0',
						transform: 'translateY(20px)'
					}),
					animate('200ms 500ms  ease-in-out')
				]
			)
	    ])
	],
    host: {'[@routerTransition]': ''}
})
export class TestAnimationB {
	//@Input() heroes:any
	state = "small"

	addItem(){
		this.heroes.push(
			{
				name: "New Hero",
				weapon: "weapon",
				posicion: "num"
			}
		)
		this.state = "fadeIn"
	}

	heroes = [
        {
                name: "Aragon",
                weapon: "Andúril",
                posicion: "1"
        },        
        {
                name: "Luke Skywalker",
                weapon: "Saber laser ",
                posicion: "4"
        },        
        {
                name: "Marty McFly",
                weapon: "Skate board",
                posicion: "2"
        },
        {
                name: "Guybrush Threepwood",
                weapon: "none",
                posicion: "3"
        }
    ]
}

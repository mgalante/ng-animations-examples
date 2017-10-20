import { Component, Input } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
	selector: 'test-binding',
	template: `
	<div class="container">
		<h1>Test binding</h1>
		<p>{{tabsBadges[0].name}}</p>
		<input type="text" [(ngModel)]="tabsBadges[0].name" />
		<input type="text" [(ngModel)]="myModel" (blur)="onBlurMethod()" [value]="tabsBadges[0].name" >
		<input type="text" id="oneway" [value]="tabsBadges[0].name" />
		<button class="btn btn-secondary" (click)="changeMovie(newName)" >default name</button>
	</div>
	`,
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class TestBindingComponent {
	//@Input() tabsBadges:any

	
	changeMovie(){
		this.tabsBadges[0].name = "BTF"
	}
	myModel: any;
	constructor(){
		this.myModel = '';
	}
	onBlurMethod(){
		this.tabsBadges[0].name = this.myModel
		console.log("value "+this.myModel)
		//.toUpperCase()
	}

	tabsBadges = [
        {
            name: "Pendientes",
            content: "listado de pendientes",
            posicion: "1"
        },        
        {
            name: "Historico",
            content: "listado de Historico",
            posicion: "4"
        },        
        {
            name: "Reportes",
            direccion: "lalalaal",
            posicion: "2"
        },
        {
            name: "Reportes",
            content: "listado de Reportes",
            posicion: "3"
        }
    ]


}

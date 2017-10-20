import { Component, Input } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
	selector: 'sortby-component',
	template: `
    <div class="container">
        <table class="table">
            <thead>
            <tr>
                <th>#</th>
                <th><a (click)="sort('name')" >Name</a></th>
                <th><a (click)="sort('weapon')" >Weapon</a></th>
                <th><a (click)="sort('posicion')" >Position</a></th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let hero of heroes; let index=index">
                <td>{{index}}</td>
                <td>{{hero.prop.name}}</td>
                <td>{{hero.prop.weapon}}</td>
                <td>{{hero.prop.posicion}}</td>
            </tr>
            </tbody>
        </table>
    </div>`,
	animations: [routerTransition()],
	host: { '[@routerTransition]': '' }
})
export class SortbyComponent {

	heroes = [
		{
			prop: {
				name: "Luke Skywalker",
				weapon: "Saber laser ",
				posicion: 4
			}
		},
		{
			prop: {
				name: "Aragon",
				weapon: "Andúril",
				posicion: 1
			}
		},
		{
			prop: {
				name: "Marty McFly",
				weapon: "Skate board",
				posicion: 2
			}
		},
		{
			prop: {
				name: "Guybrush Threepwood",
				weapon: "none",
				posicion: 3
			}
		}
	]

	isDesc: boolean = true
	column: string = "name"
	sort(property) {
		console.log(property)
		this.isDesc = !this.isDesc; //change the direction    
		this.column = property;
		let direction = this.isDesc ? 1 : -1;

		this.heroes.sort(function (a, b) {
			if (a.prop[property] < b.prop[property]) {
				return -1 * direction;
			} else if (a.prop[property] > b.prop[property]) {
				return 1 * direction;
			} else {
				return 0;
			}
		});
	};

}

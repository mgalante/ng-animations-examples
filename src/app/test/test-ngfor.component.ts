import { Component, Input } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'test-ngfor-component',
    template: `
    <div class="container">
        <h1>Test bucles y condicionantes</h1><br>
        <p>[hidden], *ngIf, *ngFor, [ngSwitch], [ngClass], [class.xxx]  </p>
        <ul>
            <li>? 			se usa para que no de error si no hay info</li>
            <li>! 			condicion inversa</li>
            <li>[hidden] 	oculta</li>
            <li>*ngIf: 		condicionante</li>
            <li>ngSwitch		condicionante multiple</li>
            <li>addClass		ex = [class.text-success]="tab?.posicion==='1'"</li>
            <li>ngClass		ex = [ngClass]="<br>
                    /llave<br>
                    'text-success': tab?.posicion === '1', 'text-danger': tab?.posicion === '2' <br>
                    /llave<br>
                    "
            </li>
        </ul>
        <test-ngfor-child-component *ngFor="let tab of tabsBadges" [tab]="tab"></test-ngfor-child-component>

        
    </div>
    `,
	animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class TestNgforComponent {
  //@Input() tabsBadges:any

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

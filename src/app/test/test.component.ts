import { Component, Input } from '@angular/core';
import { routerTransition } from '../router.animations';
//import { testData } from '../test-data.component';

@Component({
    selector: 'test-component',
    template: `
    <div class="container">
        <h1>Test variables to/from child</h1>
        <test-child-component  (eventClick)="handleEventClicked($event)" [event]="tabsBadges[0]" ></test-child-component>
        <test-child-component  #thumbnail [event]="tabsBadges[0]" ></test-child-component>
        <button class="btn btn-secondary" (click)="thumbnail.logFoo()">logFoo</button>
    </div>`,
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class TestComponent {
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
    
    handleEventClicked(data){
        console.log("recived", data)// muestra data del child
    }

}

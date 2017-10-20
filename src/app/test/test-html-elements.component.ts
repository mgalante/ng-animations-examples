import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'test-html-elements',
    template: `
    <div class="container">
        <h1>Test elements</h1>
			  <p>display on console.log</p>
        <h3 
        (mouseover)="log('mouseover')"
        (mousedown)="log('mousedown')"
        (mouseleave)="log('mouseleave')"
        (mouseup)="log('mouseup')"
        (click)="log('mouseover')"
        >
        una accion</h3><br>

        <input 
        (blur)="log('blur')"
        (focus)="log('focus')"
        (keydown)="log('keydown')"
        (keyup)="log('keyup')"
        (keypress)="logEvent('keypress',$event)"
        />
     </div>
    `,
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class TestElementsComponent {
    log(thelog){
      console.log(thelog)
    }
    logEvent(thelog,event){
      console.log(event.key)
    }
}

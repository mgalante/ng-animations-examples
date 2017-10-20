import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TestComponent } from './test.component';

@Component({
  selector: 'test-child-component',
  template: `
  <h2>recive from father: {{event.name}}</h2>
  <button class="btn btn-primary" (click)="handleClickMe()">Child to father</button>

  `
})
export class TestChildComponent {
	@Input() event:any
	@Output() eventClick = new EventEmitter() 

	handleClickMe(){
		console.log("click")
		this.eventClick.emit("Emitter: child to father") //envia string a test
	}
	logFoo(){
		console.log("#Variable: child to father")

	}
}




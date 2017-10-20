import { Component, Input} from '@angular/core';


@Component({
	selector: 'test-ngfor-child-component',
	template: `
	<h5>Nombre {{ tab?.name }}</h5>
	<div class="row">
		<div class="col-xs-2">
			<p>*ngIf</p>
			<div *ngIf="tab?.content">
				<p>content: <b>{{ tab?.content }}</b></p>
			</div>
			<div *ngIf="tab?.direccion">
				<p>direccion: <b>{{ tab?.direccion }}</b></p>
			</div>
		</div>

		<div class="col-xs-2">
			<p>[hidden]</p>
			<div [hidden]="tab?.content">
				<p>content: <b>{{ tab?.content }}</b></p>
			</div>
			<div [hidden]="!tab?.direccion">
				<p>direccion: <b>{{ tab?.direccion }}</b></p>
			</div>
		</div>

		<div class="col-xs-2">
			<p>[ngSwitch]</p>
			<div [ngSwitch]="tab?.posicion">
				<span *ngSwitchCase="1" >El primero</span>
				<span *ngSwitchCase="2">casi gana</span>
				<span *ngSwitchDefault>Total LOOOOSER!</span>
			</div>
		</div>

		<div class="col-xs-2">
			<p>[add class]</p>
			<div [ngSwitch]="tab?.posicion" [class.text-success]="tab?.posicion==='1'">
				<span *ngSwitchCase="1">El primero</span>
				<span *ngSwitchCase="2">casi gana</span>
				<span *ngSwitchDefault>Total LOOOOSER!</span>
			</div>
		</div>

		<div class="col-xs-2">
			<p>[ngClass]</p>
			<div [ngSwitch]="tab?.posicion" 
			[ngClass]="{'text-success': tab?.posicion === '1', 
						'text-info': tab?.posicion === '2' , 
						'text-danger': tab?.posicion >=  '3'}">
				<span *ngSwitchCase="1">El primero</span>
				<span *ngSwitchCase="2">casi gana</span>
				<span *ngSwitchDefault>Total LOOOOSER!</span>
			</div>
		</div>

	</div>
	`
	// ? 			se usa para que no de error si no hay info
	// ! 			condicion inversa
	// [hidden] 	oculta
	// *ngIf: 		condicionante
	// ngSwitch		condicionante multiple
	// addClass		ex = [class.text-success]="tab?.posicion==='1'"
	// ngClass		ex = [ngClass]="{'text-success': tab?.posicion === '1', 'text-danger': tab?.posicion === '2' }"

})
export class TestNgforChildComponent {
   @Input() tab:any
}

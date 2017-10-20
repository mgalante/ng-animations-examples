"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestNgforChildComponent = (function () {
    function TestNgforChildComponent() {
    }
    return TestNgforChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TestNgforChildComponent.prototype, "tab", void 0);
TestNgforChildComponent = __decorate([
    core_1.Component({
        selector: 'test-ngfor-child-component',
        template: "\n\t<h5>Nombre {{ tab?.name }}</h5>\n\n\n\t<div class=\"row\">\n\t\t<div class=\"col-xs-2\">\n\t\t\t<p>*ngIf</p>\n\t\t\t<div *ngIf=\"tab?.content\">\n\t\t\t\t<p>content: <b>{{ tab?.content }}</b></p>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"tab?.direccion\">\n\t\t\t\t<p>direccion: <b>{{ tab?.direccion }}</b></p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-2\">\n\t\t\t<p>[hidden]</p>\n\t\t\t<div [hidden]=\"tab?.content\">\n\t\t\t\t<p>content: <b>{{ tab?.content }}</b></p>\n\t\t\t</div>\n\t\t\t<div [hidden]=\"!tab?.direccion\">\n\t\t\t\t<p>direccion: <b>{{ tab?.direccion }}</b></p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-2\">\n\t\t\t<p>[ngSwitch]</p>\n\t\t\t<div [ngSwitch]=\"tab?.posicion\">\n\t\t\t\t<span *ngSwitchCase=\"1\" >El primero</span>\n\t\t\t\t<span *ngSwitchCase=\"2\">casi gana</span>\n\t\t\t\t<span *ngSwitchDefault>Total LOOOOSER!</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-2\">\n\t\t\t<p>[add class]</p>\n\t\t\t<div [ngSwitch]=\"tab?.posicion\" [class.text-success]=\"tab?.posicion==='1'\">\n\t\t\t\t<span *ngSwitchCase=\"1\">El primero</span>\n\t\t\t\t<span *ngSwitchCase=\"2\">casi gana</span>\n\t\t\t\t<span *ngSwitchDefault>Total LOOOOSER!</span>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-2\">\n\t\t\t<p>[ngClass]</p>\n\t\t\t<div [ngSwitch]=\"tab?.posicion\" \n\t\t\t[ngClass]=\"{'text-success': tab?.posicion === '1', \n\t\t\t\t\t\t'text-info': tab?.posicion === '2' , \n\t\t\t\t\t\t'text-danger': tab?.posicion >=  '3'}\">\n\t\t\t\t<span *ngSwitchCase=\"1\">El primero</span>\n\t\t\t\t<span *ngSwitchCase=\"2\">casi gana</span>\n\t\t\t\t<span *ngSwitchDefault>Total LOOOOSER!</span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\t"
        // ? 			se usa para que no de error si no hay info
        // *ngIf: 		condicionante
        // [hidden] 	oculta
        // ! 			oculta si no existe, default oculta
        // ngSwitch		condicionante
        // addClass		harcodeado = [class.text-success]="tab?.posicion==='1'"
        // ngClass		harcodeado = [ngClass]="{'text-success': tab?.posicion === '1', 'text-danger': tab?.posicion === '2' }"
    })
], TestNgforChildComponent);
exports.TestNgforChildComponent = TestNgforChildComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestComponent = (function () {
    function TestComponent() {
        this.tab1 = {
            name: "Pendientes",
            content: "listado de pendientes"
        };
        this.tab2 = {
            name: "Historico",
            content: "listado de Historico"
        };
    }
    TestComponent.prototype.handleEventClicked = function (data) {
        console.log("recived", data); // muestra data del child
    };
    return TestComponent;
}());
TestComponent = __decorate([
    core_1.Component({
        selector: 'test-component',
        template: "\n    <h1>Test variables to/from child</h1>\n    <div class=\"container\">\n        <p>{{tab1.content}}</p>\n        <test-child-component  (eventClick)=\"handleEventClicked($event)\" [event]=\"tab1\" ></test-child-component>\n        <test-child-component  #thumbnail [event]=\"tab2\" ></test-child-component>\n        <button class=\"btn btn-secondary\" (click)=\"thumbnail.logFoo()\">logFoo</button>\n    </div>"
    })
], TestComponent);
exports.TestComponent = TestComponent;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestElementsComponent = (function () {
    function TestElementsComponent() {
    }
    TestElementsComponent.prototype.log = function (thelog) {
        console.log(thelog);
    };
    return TestElementsComponent;
}());
TestElementsComponent = __decorate([
    core_1.Component({
        selector: 'test-html-elements',
        template: "\n    <h1>Test elements</h1>\n    <h3 \n    (mouseover)=\"log('mouseover')\"\n    (mousedown)=\"log('mousedown')\"\n    (mouseleave)=\"log('mouseleave')\"\n    (mouseup)=\"log('mouseup')\"\n    (click)=\"log('mouseover')\"\n    >\n    una accion</h3><br>\n\n    <input \n    (blur)=\"log('blur')\"\n    (focus)=\"log('focus')\"\n    (keydown)=\"log('keydown')\"\n    (keyup)=\"log('keyup')\"\n    (keypress)=\"log('keypress')\"\n     />\n\n    \n    "
    })
], TestElementsComponent);
exports.TestElementsComponent = TestElementsComponent;

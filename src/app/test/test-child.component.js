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
var TestChildComponent = (function () {
    function TestChildComponent() {
        this.eventClick = new core_1.EventEmitter();
    }
    TestChildComponent.prototype.handleClickMe = function () {
        console.log("click");
        this.eventClick.emit("Emitter: child to father"); //envia string a test
    };
    TestChildComponent.prototype.logFoo = function () {
        console.log("#Variable: child to father");
    };
    return TestChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TestChildComponent.prototype, "event", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TestChildComponent.prototype, "eventClick", void 0);
TestChildComponent = __decorate([
    core_1.Component({
        selector: 'test-child-component',
        template: "\n  <h2>recive from father: {{event.content}}</h2>\n  <button class=\"btn btn-primary\" (click)=\"handleClickMe()\">Child to father</button>\n\n  "
    })
], TestChildComponent);
exports.TestChildComponent = TestChildComponent;

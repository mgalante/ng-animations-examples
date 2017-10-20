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
var TestBindingComponent = (function () {
    function TestBindingComponent() {
        this.movie = {
            name: "Back to the future",
            actor: "Michael fox"
        };
        this.myModel = '';
    }
    TestBindingComponent.prototype.changeMovie = function () {
        this.movie.name = "BTF";
    };
    TestBindingComponent.prototype.onBlurMethod = function () {
        this.movie.name = this.myModel;
        console.log("value " + this.myModel);
        //.toUpperCase()
    };
    return TestBindingComponent;
}());
TestBindingComponent = __decorate([
    core_1.Component({
        selector: 'test-binding',
        template: "\n    <h1>Test binding</h1>\n\n    <p>{{movie.name}}</p>\n    <input type=\"text\" [(ngModel)]=\"movie.name\" />\n    <input type=\"text\" id=\"oneway\" [value]=\"movie.name\" />\n    <input type=\"text\" [(ngModel)]=\"myModel\" (blur)=\"onBlurMethod()\" [value]=\"movie.name\" >\n    <button class=\"btn btn-secondary\" (click)=\"changeMovie(newName)\" >default name</button>\n    "
    }),
    __metadata("design:paramtypes", [])
], TestBindingComponent);
exports.TestBindingComponent = TestBindingComponent;

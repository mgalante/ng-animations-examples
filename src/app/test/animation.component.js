"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestAnimation = (function () {
    function TestAnimation() {
        this.heroes = [
            {
                name: "Aragon",
                weapon: "Andúril",
                posicion: "1"
            },
            {
                name: "Luke Skywalker",
                weapon: "Saber laser ",
                posicion: "4"
            },
            {
                name: "Marty McFly",
                weapon: "Skate board",
                posicion: "2"
            },
            {
                name: "Guybrush Threepwood",
                weapon: "none",
                posicion: "3"
            }
        ];
    }
    TestAnimation.prototype.toggleState = function () {
        console.log('log toggleState');
    };
    return TestAnimation;
}());
TestAnimation = __decorate([
    core_1.Component({
        selector: 'test-animation-component',
        template: "\n \t<h2>Heros</h2>\n\t <ul>\n\t\t <li *ngFor=\"let hero of heroes\"\n\t\t\t\t(click)=\"toggleState()\">\n\t\t\t\t\t{{hero.name}}, {{hero.weapon}}\n\t\t </li>\n\t </ul>\n ",
        styles: [] /* ,
      animations: [
        trigger('heroState', [
          state('inactive', style({
            backgroundColor: '#eee',
            transform: 'scale(1)'
          })),
          state('active',   style({
            backgroundColor: '#cfd8dc',
            transform: 'scale(1.1)'
          })),
          transition('inactive => active', animate('100ms ease-in')),
          transition('active => inactive', animate('100ms ease-out'))
        ])
      ]
      */
    })
], TestAnimation);
exports.TestAnimation = TestAnimation;

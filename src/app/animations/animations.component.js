"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animations_1 = require("@angular/animations");
exports.SlideDownToggle = animations_1.trigger("slideDownToggle", [
    animations_1.state("close", animations_1.style({ display: 'none', height: "0px", opacity: '0' })),
    animations_1.state("open", animations_1.style({ display: 'block', height: "*", opacity: '1' })),
    animations_1.transition('close <=> open', animations_1.animate('300ms ease-out'))
]);
exports.SlideLeftToggle = animations_1.trigger("slideLeftToggle", [
    animations_1.state("close", animations_1.style({ height: "0px", opacity: '0' })),
    animations_1.state("open", animations_1.style({ height: "*", opacity: '1' })),
    animations_1.transition('close <=> open', animations_1.animate('500ms ease-out'))
]);
exports.AcordionToggle = animations_1.trigger("acordionToggle", [
    animations_1.state("close", animations_1.style({ height: "0px", overflow: 'hidden', display: 'none' })),
    animations_1.state("open", animations_1.style({ height: "*", overflow: 'visible', display: 'block' })),
    animations_1.transition('* => open', [
        animations_1.animate('500ms ease-in-out', animations_1.keyframes([
            animations_1.style({ overflow: 'hidden', height: '0px', offset: 0 }),
            animations_1.style({ overflow: 'hidden', height: '*', offset: 1 })
        ]))
    ]),
    animations_1.transition('open => close', [
        animations_1.animate('500ms ease-in-out', animations_1.keyframes([
            animations_1.style({ overflow: 'hidden', height: '*', offset: 0 }),
            animations_1.style({ overflow: 'hidden', height: '0px', offset: 1 })
        ]))
    ])
]);
exports.ContenttIn = animations_1.trigger('contentTrigger', [
    animations_1.state('in', animations_1.style({
        height: "*",
        overflow: 'visible',
        opacity: '1'
    })),
    animations_1.transition('void => *', [
        animations_1.animate('500ms ease-in-out', animations_1.keyframes([
            animations_1.style({ overflow: 'hidden', height: 'auto', opacity: '0', offset: 0 }),
            animations_1.style({ overflow: 'hidden', height: '*', opacity: '1', offset: 1 })
        ]))
    ])
]);
exports.TableBasicSummary = animations_1.trigger('summaryTrigger', [
    animations_1.state('open', animations_1.style({
        height: "*",
        overflow: 'visible'
    })),
    animations_1.state('close', animations_1.style({
        height: "0px",
        overflow: 'hidden'
    })),
    animations_1.transition('* => open', [
        animations_1.animate('300ms ease-in-out', animations_1.keyframes([
            animations_1.style({ overflow: 'hidden', height: '0px', offset: 0 }),
            animations_1.style({ overflow: 'visible', height: '*', offset: 1 })
        ]))
    ]),
    animations_1.transition('open => close', [
        animations_1.animate('900ms ease-in-out', animations_1.keyframes([
            animations_1.style({ overflow: 'hidden', height: '*', offset: 0 }),
            animations_1.style({ overflow: 'hidden', height: '*', offset: .6 }),
            animations_1.style({ overflow: 'hidden', height: '0px', offset: 1 })
        ]))
    ])
]);
exports.ChangeStateWizardBarStep = animations_1.trigger("changeStateWizardBarStep", [
    animations_1.state("inactive", animations_1.style({ backgroundColor: "#bfbebe" })),
    animations_1.state("active", animations_1.style({ backgroundColor: "#676767" })),
    animations_1.state("processing", animations_1.style({ backgroundColor: "#447eaf" })),
    animations_1.state("completed", animations_1.style({ backgroundColor: "#80af79" })),
    animations_1.state("error", animations_1.style({ backgroundColor: '#c4161c' })),
    animations_1.transition('* => *', animations_1.animate('300ms'))
]);

import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from "@angular/animations";

export const SlideDownToggle = trigger("slideDownToggle", [
    state("close", style({ display:'none', height: "0px", opacity: '0' })),
    state("open", style({ display:'block', height: "*", opacity: '1' })),
    transition('close <=> open', animate('300ms ease-out'))
]);

export const SlideLeftToggle = trigger("slideLeftToggle", [
    state("close", style({ height: "0px", opacity: '0' })),
    state("open", style({ height: "*", opacity: '1' })),
    transition('close <=> open', animate('500ms ease-out'))
]);

export const AcordionToggle = trigger("acordionToggle", [
    state("close", style({ height: "0px", overflow: 'hidden', display:'none'  })),
    state("open", style({ height: "*", overflow: 'visible', display:'block' })),
    transition('* => open', [
            animate('500ms ease-in-out', 
                keyframes([
                    style({ overflow: 'hidden', height: '0px', offset: 0 }),
                    style({ overflow: 'hidden', height: '*', offset: 1 })
                ])
            )
        ]
    ),
    transition('open => close', [
            animate('500ms ease-in-out', 
                keyframes([
                    style({ overflow: 'hidden', height: '*', offset: 0 }),
                    style({ overflow: 'hidden', height: '0px', offset: 1 })
                ])
            )
        ]
    )
])
export const ContenttIn = trigger('contentTrigger', [ 
    state('in', 
        style({
            height: "*",
            overflow: 'visible',
            opacity: '1'
        })
    ),
    transition('void => *', [
            animate('500ms ease-in-out', 
                keyframes([
                    style({ overflow: 'hidden', height: 'auto', opacity: '0', offset: 0 }),
                    style({ overflow: 'hidden', height: '*',  opacity: '1', offset: 1 })
                ])
            )
        ]
    )
])

export const TableBasicSummary = trigger('summaryTrigger', [ 
    state('open', 
        style({
            height: "*",
            overflow: 'visible'
        })
    ),
    state('close', 
        style({
            height: "0px",
            overflow: 'hidden'
        })
    ),
    transition('* => open', [
            animate('300ms ease-in-out', 
                keyframes([
                    style({ overflow: 'hidden', height: '0px', offset: 0 }),
                    style({ overflow: 'visible', height: '*', offset: 1 })
                ])
            )
        ]
    ),
    transition('open => close', [
            animate('900ms ease-in-out', 
                keyframes([
                    style({ overflow: 'hidden', height: '*', offset: 0 }),
                    style({ overflow: 'hidden', height: '*', offset: .6 }),
                    style({ overflow: 'hidden', height: '0px', offset: 1 })
                ])
            )
        ]
    )
])

export const ShowHideNewRow = trigger("showHideNewRow", [
	state('close', style({ opacity: '0', height: '0px', overflow: 'hidden',  display: 'none' })),
	state('open',  style({ opacity: '1', height: '*',   overflow: 'visible', display: 'block' })),
	transition('* => open', [
		animate(300,
			keyframes([
				style({ opacity: '1', height: '0px', transform: 'translateY(-20px)', offset: 0 }),
				style({ opacity: '1', height: '*',   transform: 'translateY(5px) ', offset: .3 }),
				style({ opacity: '1', height: '*',   transform: 'translateY(0)', offset: 1 })
			])
		)
	]
	),
	transition('open => close', [
		animate(300,
			keyframes([
				style({ opacity: '1', height: '*',    overflow: 'hidden', transform: 'translateY(0)', offset: 0 }),
				style({ opacity: '1', height: '0px',  overflow: 'hidden', transform: 'translateY(-5px)', offset: 1 })
			])
		)
	]
	)
])
    
export const ContentFadeIn = trigger('contentFadeIn', [
	state('in',
		style({
			height: "*",
			overflow: 'visible',
			opacity: '1'
		})
	),
	transition('void => *', [
		animate('500ms ease-in-out',
			keyframes([
				style({ overflow: 'hidden', height: 'auto', opacity: '0', offset: 0 }),
				style({ overflow: 'hidden', height: '*', opacity: '1', offset: 1 })
			])
		)
	]
	)
])
export const ChangeStateWizardBarStep = trigger("changeStateWizardBarStep", [
    state("inactive", style({ backgroundColor: "#bfbebe" })),
    state("active", style({ backgroundColor: "#676767" })),
    state("processing", style({ backgroundColor: "#447eaf" })),
    state("completed", style({ backgroundColor:  "#80af79"})),
    state("error", style({ backgroundColor:  '#c4161c'})),
    transition('* => *', animate('300ms'))
]);
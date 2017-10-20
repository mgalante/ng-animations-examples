import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { DetailsGeneralComponent } from './table-basic/details-general.component';
import { DetailsHistoricComponent } from './table-basic/details-historic.component';

@Component({
	selector: 'app-table-striped',
	templateUrl: './table-striped.component.html',
	styleUrls: ['./table-striped.component.css'],
    animations: [routerTransition()],
	host: {'[@routerTransition]': ''}
})
export class TableStripedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// Table basic Sumary
    tBasicSummary = {
        config:{
            hasItemTotal : true,
            hasValueTotal : true,
            hasActionBtn: true,
            hasContexmenu : true,
            hasCloseBtn : true
        },
        data:{
            actions:{
                mainAction:{
                        title:"",
                        action:""
                },
                contextualMenu : []
            }
        },

        // Define contextua Menu for diferent kind of summary BTN actions
        ContxtualMenuOptions : {
            editCM : [
                {
                    title:"Imprimir",
                    action:"print"
                },
                {
                    title:"Descargar",
                    action:"download"
                },
                {
                    title:"Enviar por mail",
                    action:"mail"
                },
                {
                    title:"Eliminar",
                    action:"remove"
                }
            ],
            statusCM : [
                {
                    title:"Imprimir",
                    action:"print"
                },
                {
                    title:"Descargar",
                    action:"download"
                },
                {
                    title:"Enviar por mail",
                    action:"mail"
                },
                {
                    title:"Denegar",
                    action:"deny"
                }
            ],
            downloadCM : [
                {
                    title:"Imprimir",
                    action:"print"
                },
                {
                    title:"Enviar por mail",
                    action:"mail"
                }
            ]
        }

    }
// END Table basic Sumary
  // table basic data	
	tConfig = {
        /* SETINGS FOR TABLE-BASIC-COMPONENT
        ************************************/
        // false to hidde property
		hasThead: true,
		hasFeedbackline: true,
		hasCheckbox: true,
		hasContextualMenu: true,
		hasDetails: true,
		hasMainAction: true,
		sortByColumn: 1,
        // Title for actions column (change laguage here)
		mainActionTitle : "Acciones",

        // detail history card: posible users to sign, approve or release 
		histoPendingActions : { 
            // Pending actions (change laguage here)
			actions:[
			"Para firmar",
			"Para aprobar",
			"Para liberar"
			],
			users:[
				{
					name:"Alberto Bustamante",
					action:"reminder"
				},{
					name:"Carlos Gutierrez",
					action:"reminder"
				},{
					name:"Rodrigo Rios",
					action:"reminder"
				}
			]
		}
	}
	tHead = [
		{title:"",         attribute:"image",                                 sortBtnDisplay: false,  dataType:5 },//Photo
		{title:"Tipo",     attribute:"type",                                  sortBtnDisplay: true,	  dataType:0 },//Default (string)  
		{title:"Tooltip",  attribute:{att1:"unCampo", att2:"unCampoTooltip"}, sortBtnDisplay: true,	  dataType:6 },//string & Tooltip
		{title:"Fecha",    attribute:{att1:"date", att2:"dateAlert"},         sortBtnDisplay: true,	  dataType:4 },//date & dateAlert
		{title:"Valor",    attribute:{att1:"currency", att2:"value"},         sortBtnDisplay: true,	  dataType:1 },//Currency & Value
		{title:"Links",    attribute:{att1:"linkRute", att2:"linkTitle"},     sortBtnDisplay: true,	  dataType:2 },//LinkRute & linkTitle
		{title:"Agenda",   attribute:{att1:"agActive", att2:"agProd"},        sortBtnDisplay: true,	  dataType:7 },//products Bullets
		{title:"Estado",   attribute:{att1:"statusTitle", att2:"status"},     sortBtnDisplay: true,	  dataType:3 } //StatusTitle & status
        // title: display string in table head (change language here)
        // atribute: display info in columns (must correspond with tBody.rowData info)
        // dataType: kind of element to display
        /* // POSSIBLE dataType
            0 = Default (string) 
            1 = Currency & Value
            2 = LinkRute & linkTitle
            3 = StatusTitle & status
            4 = Date, date flag
            5 = Photo
        /*
        /* // POSSIBLE STATUS STATES
            draft
            reopened
            created
            signed
            approved
            release
            in-process
            process
            with-errors
            denied
            expired
            rejected
        */
        /* // POSSIBLE DATE STATES
            none
            nextTo
            inmediate
        */
	]
	tBody = [
		{
			disable:false,
			checked:false,      
			rowFeedback: null, //clould be: "success","warning","info","danger"
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"nextTo", 
				currency:"U$S",
				value:8000.567,
				statusTitle:"Borrador",
				status:"draft",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
                // Main BTN element
				mainAction:{
						title:"Editar",
						action:"edit"
				},
                // Contextual Menu element
                // Empty array don´t display button
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					},
					{
						title:"Ver detalles",
						action:"go_details"
					},
					{
						title:"Eliminar",
						action:"remove"
					}
				]
			},
            // Accordion information
            // Empty array listDetail & historyDetail don´t display accordion button
			details:{
                // Empty array don´t display list detail
				listDetail:[
				],
                // Empty array don´t display history detail
				historyDetail:[
				]    
			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"inmediate", 
				currency:"U$S",
				value:8000.567,
				statusTitle:"Borrador",
				status:"draft",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Editar",
						action:"edit"
				},
				contextualMenu : [
					
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"Otro titulo",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:"link-here",
								tooltip: "texto tooltip"
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null,
								tooltip: "texto tooltip"
							}
						]
					}

				],
				historyDetail:[
				]    
			}
		},
		{
			disable:true,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"U$S",
				value:5000.76543,
				statusTitle:"Creada",
				status:"created",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Firmar",
						action:"sign"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					},
					{
						title:"Ver detalles",
						action:"go_details"
					},
					{
						title:"Denegar",
						action:"deny"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:"una-accion",
								tooltip: "texto tooltip"
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null,
								tooltip: "texto tooltip"
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					},
					{
						listTitle:"Otro titulo",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:"una-accion",
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					}

				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					}
				]    
			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"U$S",
				value:5000.76543,
				statusTitle:"Creada",
				status:"created",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Firmar",
						action:"sign"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					},
					{
						title:"Ver detalles",
						action:"go_details"
					},
					{
						title:"Denegar",
						action:"deny"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					},
					{
						listTitle:"Otro titulo",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					}

				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					}
				]    
			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"U$S",
				value:25000000,
				statusTitle:"Firmada",
				status:"signed",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Abrobar",
						action:"approve"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					},
					{
						title:"Ver detalles",
						action:"go_details"
					},
					{
						title:"Denegar",
						action:"deny"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:"link-here"
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:"link-here"
							}
						]
					}
				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"signed",
						statusTitle:"Firmada"
					}
				]    

			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"$",
				value:400,
				statusTitle:"Aprobada",
				status:"approved",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Liberar",
						action:"release"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					},
					{
						title:"Ver detalles",
						action:"go_details"
					},
					{
						title:"Denegar",
						action:"deny"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					}
				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"signed",
						statusTitle:"Firmada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"approved",
						statusTitle:"Aprobada"
					}
				]    

			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"$",
				value:85800.3456,
				statusTitle:"Liberada",
				status:"released",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Ver detalles",
						action:"go_details"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					}
				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"signed",
						statusTitle:"Firmada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"approved",
						statusTitle:"Aprobada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"released",
						statusTitle:"Liberada"
					}
				]    

			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback:null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"$",
				value:5682.1,
				statusTitle:"Procesada",
				status:"process",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Ver detalles",
						action:"go_details"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					}
				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"signed",
						statusTitle:"Firmada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"approved",
						statusTitle:"Aprobada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"released",
						statusTitle:"Liberada"
					},
					{
						image:"",
						name:"",
						date:"10 Nov 2016 09:32",
						status:"process",
						statusTitle:"Procesada"
					}
				]    

			}
		},
		{
			disable:false,
			checked:false,
			rowFeedback: null,
			rowData:{
				unCampo: "un texto",
				unCampoTooltip: "un tooltip",       
				image:"./assets/images/client-image.png",
				type:"Titulos", 
				linkTitle:"Un link", 
				linkRute:"#", 
				date:"12 Nov 2016", 
				dateAlert:"none", 
				currency:"$",
				value:40602,
				statusTitle:"Denegada",
				status:"denied",
				agActive:"e",
				agProd:[
					{prod:"e",tooltip:"Empleados"},
					{prod:"p",tooltip:"Proveedores"},
					{prod:"be",tooltip:"Beneficiarios del Exterior"},
					{prod:"gc",tooltip:"Global Custody"}]
			},
			rowActions:{
				mainAction:{
						title:"Ver detalles",
						action:"go_details"
				},
				contextualMenu : [
					{
						title:"Imprimir",
						action:"print"
					},
					{
						title:"Descargar",
						action:"download"
					},
					{
						title:"Enviar por mail",
						action:"mail"
					}
				]
			},
			details:{
				listDetail:[
					{
						listTitle:"NOMBRE DE LA LISTA - ICBC ID",
						listData:[
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							},
							{
								title:"Razón social",
								text:"Nombre de la empresa S.A.",
								action:null
							}
						]
					}
				],
				historyDetail:[
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"created",
						statusTitle:"Creada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"signed",
						statusTitle:"Firmada"
					},
					{
						image:"./assets/images/client-image.png",
						name:"Carlos Gutierrez",
						date:"10 Nov 2016 09:32",
						status:"denied",
						statusTitle:"Denegada"
					}
				]    

			}
		}
            
	]
// END table basic data

}

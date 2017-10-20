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
var table_basic_event_model_1 = require("../models/table-basic-event.model");
var animations_component_1 = require("./../../../library/multipay-library-fe/animations/animations.component");
var TableBasicComponent = (function () {
    function TableBasicComponent() {
        this.tHead = new Array();
        this.tBody = new Array();
        /*@Input() public settings: TableSettings = new TableSettings();*/
        this.actionEmitter = new core_1.EventEmitter();
        /*
            rowMainAction(index: string, row: any, action: string) {
        
                let tableEvent: TableBasicEvent = new TableBasicEvent(index, row, action);
                this.actionEmitter.emit(tableEvent);
        
                console.log("EventEmitter: " + JSON.stringify(tableEvent));
                this.rowAction(index, row, action)
            }
        
            rowContextualMenu(index: string, row: any, action: string) {
        
                let tableEvent: TableBasicEvent = new TableBasicEvent(index, row, action);
                this.actionEmitter.emit(tableEvent);
        
                console.log("EventEmitter: " + JSON.stringify(tableEvent));
                this.rowAction(index, row, action)
            }
        */
        //this.tConfig.sortByColumn
        //sortByColumn = 0 
        this.sortDescending = false;
        this.checkAll = false;
    }
    TableBasicComponent.prototype.ngOnInit = function () { };
    TableBasicComponent.prototype.historyDetailItem = function (index) {
        if (this.tBody[index].details.historyDetail && this.tBody[index].details.historyDetail.length != 0) {
            var itemNum = this.tBody[index].details.historyDetail.length - 1;
            return itemNum;
        }
        else {
            return null;
        }
    };
    TableBasicComponent.prototype.toggleDetail = function (index) {
        if (this.tBody[index].state === "open") {
            this.tBody[index].state = "close";
        }
        else {
            this.tBody[index].state = "open";
        }
    };
    TableBasicComponent.prototype.sortByIcon = function (index) {
        for (var _i = 0, _a = this.tHead; _i < _a.length; _i++) {
            var th = _a[_i];
            if (index == this.tConfig.sortByColumn) {
                //console.log("index: "+index +" - this.tConfig.sortByColumn"+ this.tConfig.sortByColumn + " - this.sortDescending: " + this.sortDescending)
                if (this.sortDescending == false) {
                    return "fa-sort-desc";
                }
                else {
                    return "fa-sort-asc";
                }
            }
            else {
                return "fa-sort";
            }
        }
    };
    TableBasicComponent.prototype.sortBy = function (index) {
        if (this.tConfig.sortByColumn != index) {
            this.sortDescending = false;
        }
        else {
            this.sortDescending = this.sortDescending ? false : true;
        }
        this.tConfig.sortByColumn = index;
        this.sortByIcon(index);
    };
    TableBasicComponent.prototype.rowCheck = function (index) {
        // Cambiar por emitir datos
        this.tBody[index].checked = this.tBody[index].checked ? false : true;
    };
    TableBasicComponent.prototype.rowCheckAll = function () {
        var totalItems = 0;
        for (var _i = 0, _a = this.tBody; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.checked) {
                totalItems++;
            }
        }
        if (totalItems == this.tBody.length) {
            this.checkAll = false;
            for (var _b = 0, _c = this.tBody; _b < _c.length; _b++) {
                var row = _c[_b];
                row.checked = false;
            }
        }
        else {
            this.checkAll = true;
            for (var _d = 0, _e = this.tBody; _d < _e.length; _d++) {
                var row = _e[_d];
                row.checked = true;
            }
        }
    };
    TableBasicComponent.prototype.rowAction = function (index, row, action) {
        var tableEvent = new table_basic_event_model_1.TableBasicEvent(index, row, action);
        this.actionEmitter.emit(tableEvent);
        //console.log("EventEmitter: " + JSON.stringify(tableEvent));
        //console.log(row[0]) 
        if (action == "edit") {
            console.log("go to edit");
            this.tBody[index].rowFeedback = null;
        }
        else if (action == 'reopen') {
            console.log("go to edit");
            this.tBody[index].rowFeedback = null;
            //} else if(action =='create'){
        }
        else if (action == 'sign') {
            this.tBody[index].rowData.statusTitle = "Firmada";
            this.tBody[index].rowData.status = "signed";
            this.tBody[index].rowActions.mainAction.title = "Aprobar";
            this.tBody[index].rowActions.mainAction.action = "approve";
            this.tBody[index].details.historyDetail.push({
                image: "static/minb/assets/images/client-image.png",
                name: "Nombre Apellido",
                date: "10 Nov 2016 09:32",
                status: "signed",
                statusTitle: "Firmada"
            });
            this.tBody[index].rowFeedback = "success";
        }
        else if (action == 'approve') {
            this.tBody[index].rowData.statusTitle = "Aprobada";
            this.tBody[index].rowData.status = "approved";
            this.tBody[index].rowActions.mainAction.title = "Liberar";
            this.tBody[index].rowActions.mainAction.action = "release";
            this.tBody[index].details.historyDetail.push({
                image: "static/minb/assets/images/client-image.png",
                name: "Nombre Apellido",
                date: "10 Nov 2016 09:32",
                status: "approved",
                statusTitle: "Aprobada"
            });
            this.tBody[index].rowFeedback = "success";
        }
        else if (action == 'release') {
            this.tBody[index].rowData.statusTitle = "Liberada";
            this.tBody[index].rowData.status = "released";
            this.tBody[index].rowActions.mainAction.title = "Ver detalles";
            this.tBody[index].rowActions.mainAction.action = "go_details";
            this.tBody[index].details.historyDetail.push({
                image: "static/minb/assets/images/client-image.png",
                name: "Nombre Apellido",
                date: "10 Nov 2016 09:32",
                status: "released",
                statusTitle: "Liberada"
            });
            this.tBody[index].rowActions.contextualMenu = [
                {
                    title: "Imprimir",
                    action: "print"
                },
                {
                    title: "Descargar",
                    action: "download"
                },
                {
                    title: "Enviar por mail",
                    action: "mail"
                }
            ];
            this.tBody[index].rowFeedback = "success";
        }
        else if (action == 'deny') {
            this.tBody[index].rowData.statusTitle = "Denegada";
            this.tBody[index].rowData.status = "denied";
            this.tBody[index].rowActions.mainAction.title = "Ver detalles";
            this.tBody[index].rowActions.mainAction.action = "go_details";
            this.tBody[index].details.historyDetail.push({
                image: "static/minb/assets/images/client-image.png",
                name: "Nombre Apellido",
                date: "10 Nov 2016 09:32",
                status: "denied",
                statusTitle: "Denegada"
            });
            this.tBody[index].rowActions.contextualMenu = [
                {
                    title: "Imprimir",
                    action: "print"
                },
                {
                    title: "Descargar",
                    action: "download"
                },
                {
                    title: "Enviar por mail",
                    action: "mail"
                }
            ];
            this.tBody[index].rowFeedback = "danger";
        }
        else if (action == 'go_details') {
            console.log("go to details");
            this.tBody[index].rowFeedback = null;
        }
        else if (action == 'print') {
            console.log("print modal");
            this.tBody[index].rowFeedback = null;
        }
        else if (action == 'download') {
            console.log("download modal");
            this.tBody[index].rowFeedback = null;
        }
        else if (action == 'mail') {
            console.log("mail modal");
            this.tBody[index].rowFeedback = null;
        }
        else if (action == 'remove') {
            console.log("remove draft");
            this.tBody[index].rowFeedback = null;
        }
        else {
            console.log("This action didn't match");
        }
        //this.summaryAction()
    };
    return TableBasicComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableBasicComponent.prototype, "tBasicSummary", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableBasicComponent.prototype, "tConfig", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TableBasicComponent.prototype, "tHead", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TableBasicComponent.prototype, "tBody", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], TableBasicComponent.prototype, "actionEmitter", void 0);
TableBasicComponent = __decorate([
    core_1.Component({
        selector: 'table-basic-component',
        templateUrl: './static/library/multipay-library-fe/table-basic/table-basic.component.html',
        animations: [animations_component_1.AcordionToggle]
    })
], TableBasicComponent);
exports.TableBasicComponent = TableBasicComponent;

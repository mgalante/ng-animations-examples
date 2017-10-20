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
var animations_component_1 = require("./../../../library/multipay-library-fe/animations/animations.component");
var TableSummaryComponent = (function () {
    function TableSummaryComponent() {
        this.totalItems = 0;
        this.totalValue = 0;
        this.openClose = "close";
    }
    TableSummaryComponent.prototype.summaryAction = function (action) {
        console.log("summaryAction: " + this.tBasicSummary.data.actions.mainAction.action);
    };
    TableSummaryComponent.prototype.getTotalItems = function () {
        var totalItems = 0;
        for (var _i = 0, _a = this.tBody; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.checked) {
                totalItems++;
            }
        }
        if (this.totalItems != totalItems) {
            this.totalItems = totalItems;
            this.tBodyChange(totalItems);
        }
        return totalItems;
    };
    /*enableAllRows(){
        for (let row of this.tBody) {
            row.disable = false
        }
    }
    disableNotStatusRows(){
        for (let row of this.tBody) {
            if(row.rowActions.mainAction.action != "sign"){
                if(row.rowActions.mainAction.action != "approve"){
                    if(row.rowActions.mainAction.action != "release"){
                        row.disable = true
                    }
                }
            }
        }
    }
    disableNotEditRows(){
        for (let row of this.tBody) {
            if(row.rowActions.mainAction.action != "edit"){
                row.disable = true
            }
        }
    }
    disableNotHistoRows(){
        for (let row of this.tBody) {
            if(row.rowActions.mainAction.action != "go_details"){
                row.disable = true
            }
        }
    }*/
    TableSummaryComponent.prototype.tBodyChange = function (totalItems) {
        //console.log("totalItems"+totalItems)
        // Open Close Summary
        if (totalItems > 0) {
            this.openClose = "open";
        }
        else {
            //this.enableAllRows()
            this.openClose = "close";
        }
        // Total Value
        var totalValue = 0;
        for (var _i = 0, _a = this.tBody; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.checked) {
                totalValue += row.rowData.value;
            }
        }
        this.totalValue = totalValue;
        // Actions
        // One item selected ///////////////////////////////////////////////////
        //(Same action an contextual menu as row)
        if (totalItems == 1) {
            for (var _b = 0, _c = this.tBody; _b < _c.length; _b++) {
                var row = _c[_b];
                if (row.checked) {
                    this.tBasicSummary.data.actions.mainAction.title = row.rowActions.mainAction.title; // same as row action
                    this.tBasicSummary.data.actions.mainAction.action = row.rowActions.mainAction.action; // same as row action
                    this.tBasicSummary.data.actions.contextualMenu = row.rowActions.contextualMenu; // same as row action
                    // Disabled not related rows
                    /*if(row.rowActions.mainAction.action  == "sign" || row.rowActions.mainAction.action  == "approve" || row.rowActions.mainAction.action  == "release"){
                        this.disableNotStatusRows()
                    }
                    if(row.rowActions.mainAction.action  == "edit" ){
                        this.disableNotEditRows()
                    }
                    if(row.rowActions.mainAction.action  == "go_details" ){
                        this.disableNotHistoRows()
                    }*/
                }
            }
            // Set of actions //////////////////////////////////////////////////////
        }
        else {
            var action = "";
            var actionsGrup = [];
            var statusAction = true;
            var sameAction = true;
            for (var _d = 0, _e = this.tBody; _d < _e.length; _d++) {
                var row = _e[_d];
                if (row.checked) {
                    actionsGrup.push(row.rowActions.mainAction.action);
                    for (var _f = 0, actionsGrup_1 = actionsGrup; _f < actionsGrup_1.length; _f++) {
                        var actItem = actionsGrup_1[_f];
                        // is a status action?
                        if (actItem != "sign") {
                            if (actItem != "approve") {
                                if (actItem != "release") {
                                    statusAction = false;
                                }
                            }
                        }
                        // is a group of diferents actions?
                        for (var _g = 0, actionsGrup_2 = actionsGrup; _g < actionsGrup_2.length; _g++) {
                            var actItemB = actionsGrup_2[_g];
                            if (actItem != actItemB) {
                                sameAction = false;
                            }
                        }
                    }
                    if (sameAction == true) {
                        ///////////////////////////////////////////////////////////
                        //console.log("Same Action:"+actionsGrup)
                        // edit group
                        if (actionsGrup[0] == "edit") {
                            //console.log("remove_group")
                            this.tBasicSummary.data.actions.mainAction.title = "Eliminar";
                            this.tBasicSummary.data.actions.mainAction.action = "remove_group";
                            this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.editCM;
                            // sign, approve or release
                        }
                        else if (actionsGrup[0] == "sign" || actionsGrup[0] == "approve" || actionsGrup[0] == "release") {
                            //console.log("status_group")
                            this.tBasicSummary.data.actions.mainAction.title = row.rowActions.mainAction.title;
                            this.tBasicSummary.data.actions.mainAction.action = "same_status_group";
                            this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.statusCM;
                            // go_details group
                        }
                        else if (actionsGrup[0] == "go_details") {
                            //console.log("print_group")
                            this.tBasicSummary.data.actions.mainAction.title = "Descargar";
                            this.tBasicSummary.data.actions.mainAction.action = "download_group";
                            this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.downloadCM;
                            // sign, approve or release group
                        }
                    }
                    else {
                        ///////////////////////////////////////////////////////////
                        //console.log("Diferents Action: "+actionsGrup)							
                        if (statusAction == true) {
                            this.tBasicSummary.data.actions.mainAction.title = "Continuar";
                            this.tBasicSummary.data.actions.mainAction.action = "diferent_status_group";
                            this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.statusCM;
                        }
                        else {
                            this.tBasicSummary.data.actions.mainAction.title = "Descargar";
                            this.tBasicSummary.data.actions.mainAction.action = "download_group";
                            this.tBasicSummary.data.actions.contextualMenu = this.tBasicSummary.ContxtualMenuOptions.downloadCM;
                        }
                    }
                }
            }
        }
    };
    TableSummaryComponent.prototype.closeSummary = function () {
        for (var _i = 0, _a = this.tBody; _i < _a.length; _i++) {
            var row = _a[_i];
            row.checked = false;
            row.disable = false;
        }
    };
    return TableSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableSummaryComponent.prototype, "tBasicSummary", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TableSummaryComponent.prototype, "tBody", void 0);
TableSummaryComponent = __decorate([
    core_1.Component({
        selector: 'table-summary-component',
        templateUrl: './static/library/multipay-library-fe/table-summary/table-summary.component.html',
        animations: [animations_component_1.TableBasicSummary]
    })
], TableSummaryComponent);
exports.TableSummaryComponent = TableSummaryComponent;

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
//table modular models
var library_1 = require("static/minb/library");
var animations_component_1 = require("library/animations/animations.component");
var TableModularComponent = (function () {
    function TableModularComponent() {
        this.tableActionEmitter = new core_1.EventEmitter();
        /* @Output() tableOrderbyActionEmitter : EventEmitter<any> = new EventEmitter() */
        this.outsideTableActionEmitter = new core_1.EventEmitter();
        this.sortByColumn = 0;
        this.isDesc = true;
        this.checkAll = false;
        //NgSelect 
        this.value = {};
        this._disabledV = '0';
        this.disabled = false;
        // End NgSelect
    }
    TableModularComponent.prototype.ngOnInit = function () {
        var viewActionEdit = {
            type: "icon",
            tooltip: "Editar",
            action: "edit",
            icon: "icon-edit"
        };
        var editActionAcept = {
            type: "icon",
            tooltip: "Aceptar",
            action: "aceptEdit",
            icon: "icon-check"
        };
        var editActionCancel = {
            type: "icon",
            tooltip: "Cancelar",
            action: "cancelEdit",
            icon: "icon-close"
        };
        for (var i = 0; i < this.tModBody.length; i++) {
            if (this.tableMode == "editable") {
                this.tModBody[i].state = "view";
            }
            else if (this.tableMode == "view") {
                this.tModBody[i].state = "view";
            }
            else if (this.tableMode == "form") {
                this.tModBody[i].state = "editable";
            }
            else {
                console.log("tableMode error");
            }
        }
        // If has edit mode, add buttons
        if (this.tableMode == "editable") {
            this.tModConfig.rowViewActions.splice(0, 0, viewActionEdit);
            this.tModConfig.rowEditActions.splice(0, 0, editActionAcept, editActionCancel);
        }
        this.sortBy(this.sortByColumn);
        this.addressbookMode();
    };
    TableModularComponent.prototype.rowBtnAction = function (index, row, action) {
        var rowEmitter = {
            tableMode: this.tableMode,
            index: index,
            row: row,
            action: action
        };
        this.tableActionEmitter.emit(rowEmitter);
    };
    TableModularComponent.prototype.outsideTableAction = function (action) {
        var outsideTableEmmiter = {
            tableMode: this.tableMode,
            action: action
        };
        this.outsideTableActionEmitter.emit(outsideTableEmmiter);
    };
    TableModularComponent.prototype.sortBy = function (index) {
        if (this.sortByColumn != index) {
            this.isDesc = false;
        }
        else {
            this.isDesc = this.isDesc ? false : true;
        }
        this.sortByColumn = index;
        this.sortByDisplayIcon(index);
        var property = this.tModHead[this.sortByColumn].attribute.value;
        //console.log(property)
        //this.isDesc = !this.isDesc; //change the direction    
        //this.column = property;
        var direction = this.isDesc ? 1 : -1;
        this.tModBody.sort(function (a, b) {
            if (a.rowData[property] < b.rowData[property]) {
                return -1 * direction;
            }
            else if (a.rowData[property] > b.rowData[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
        // emit objet
        /* let tableOrderbyEmmiter={
            property : this.tModHead[index].attribute.value,
            index : index,
            isDesc: this.isDesc
        }
        this.tableOrderbyActionEmitter.emit(tableOrderbyEmmiter) */
    };
    TableModularComponent.prototype.sortByDisplayIcon = function (index) {
        for (var _i = 0, _a = this.tModHead; _i < _a.length; _i++) {
            var th = _a[_i];
            if (index == this.sortByColumn) {
                if (this.isDesc == false) {
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
    TableModularComponent.prototype.addressbookMode = function () {
        var property = this.tModHead[this.sortByColumn].attribute.value;
        var capital;
        var prevCapital;
        if (this.hasAddressbookMode == true) {
            for (var i = 0; i < this.tModBody.length; i++) {
                capital = this.tModBody[i].rowData[property].substring(0, 1);
                this.tModBody[i].capitalLeter = capital;
                if (capital != prevCapital) {
                    this.tModBody[i].capital = "show";
                }
                else {
                    this.tModBody[i].capital = "hide";
                }
                if (capital != undefined) {
                    prevCapital = capital;
                }
            }
        }
    };
    TableModularComponent.prototype.allDisabled = function (frezze) {
        for (var _i = 0, _a = this.tModBody; _i < _a.length; _i++) {
            var row = _a[_i];
            if (frezze == true) {
                row.disable = true;
            }
            else {
                row.disable = false;
            }
        }
    };
    TableModularComponent.prototype.openCloseAddItem = function (bool) {
        if (bool == true) {
            return "open";
        }
        else {
            return "close";
        }
    };
    TableModularComponent.prototype.colspan = function () {
        var checkbox = 0;
        var data = 0;
        var buttons = 0;
        var colspanNum;
        if (this.hasCheckbox) {
            checkbox = 1;
        }
        if (this.tModHead) {
            data = this.tModHead.length;
        }
        if (this.tModConfig.rowViewActions || this.tModConfig.rowEditActions) {
            buttons = 1;
        }
        colspanNum = checkbox + data + buttons;
        return colspanNum;
    };
    TableModularComponent.prototype.getTotalItems = function () {
        var totalItems = 0;
        for (var _i = 0, _a = this.tModBody; _i < _a.length; _i++) {
            var row = _a[_i];
            //if(row.checked){
            totalItems++;
            //}
        }
        return totalItems;
    };
    TableModularComponent.prototype.getTotalValue = function () {
        var totalValue = 0;
        for (var _i = 0, _a = this.tModBody; _i < _a.length; _i++) {
            var row = _a[_i];
            totalValue += row.rowData.value;
        }
        return totalValue;
    };
    TableModularComponent.prototype.rowCheck = function (index) {
        this.tModBody[index].checked = this.tModBody[index].checked ? false : true;
    };
    TableModularComponent.prototype.rowCheckAll = function () {
        var totalItems = 0;
        for (var _i = 0, _a = this.tModBody; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.checked) {
                totalItems++;
            }
        }
        if (totalItems == this.tModBody.length) {
            this.checkAll = false;
            for (var _b = 0, _c = this.tModBody; _b < _c.length; _b++) {
                var row = _c[_b];
                row.checked = false;
            }
        }
        else {
            this.checkAll = true;
            for (var _d = 0, _e = this.tModBody; _d < _e.length; _d++) {
                var row = _e[_d];
                row.checked = true;
            }
        }
    };
    Object.defineProperty(TableModularComponent.prototype, "disabledV", {
        get: function () {
            return this._disabledV;
        },
        set: function (value) {
            this._disabledV = value;
            this.disabled = this._disabledV === '1';
        },
        enumerable: true,
        configurable: true
    });
    TableModularComponent.prototype.selected = function (value) {
        console.log('Selected value is: ', value);
    };
    TableModularComponent.prototype.removed = function (value) {
        console.log('Removed value is: ', value);
    };
    TableModularComponent.prototype.typed = function (value) {
        console.log('New search input: ', value);
    };
    TableModularComponent.prototype.refreshValue = function (value) {
        this.value = value;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableModularComponent.prototype, "tableMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hasSummary", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hasThead", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hasCheckbox", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hasCustomEditable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hasAddressbookMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableModularComponent.prototype, "hasAddressbookSortby", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hasCircleBtns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableModularComponent.prototype, "hiddeBtnsForAddItems", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableModularComponent.prototype, "tModConfig", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableModularComponent.prototype, "tModHead", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableModularComponent.prototype, "tModBody", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TableModularComponent.prototype, "tableActionEmitter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TableModularComponent.prototype, "outsideTableActionEmitter", void 0);
    TableModularComponent = __decorate([
        core_1.Component({
            selector: 'table-modular-component',
            styleUrls: ['./table-modular.css', '../table-basic/table-buttons.css'],
            moduleId: module.id,
            templateUrl: './table-modular.component.html',
            animations: [animations_component_1.ContentFadeIn, animations_component_1.ShowHideNewRow]
        })
    ], TableModularComponent);
    return TableModularComponent;
}());
exports.TableModularComponent = TableModularComponent;

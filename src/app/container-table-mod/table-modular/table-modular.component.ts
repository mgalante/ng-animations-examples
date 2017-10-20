import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { SelectModule } from 'ng2-select';
//table modular models
//import {  TableModConfig, CircleButton, RowActionType, CmItem, RowAction, TableModMode, TableModHead, TableModBody, RowFeedback} from "./table-modular.model";
import { ContentFadeIn, ShowHideNewRow } from "../../animations/animations.component";

@Component({
    selector: 'table-modular-component',
    styleUrls: [ './table-modular.css'],
    templateUrl: './table-modular.component.html',
	animations: [ContentFadeIn, ShowHideNewRow]
})

export class TableModularComponent implements OnInit { 
  

    @Input() tableMode//:TableModMode
    @Input() hasSummary: boolean
    @Input() hasThead: boolean
    @Input() hasCheckbox: boolean
    @Input() hasCustomEditable: boolean 
    @Input() hasAddressbookMode : boolean
    @Input() hasAddressbookSortby : string
    @Input() hasCircleBtns : boolean
	@Input() hiddeBtnsForAddItems : boolean 
    @Input() tModConfig//: TableModConfig
    @Input() tModHead: any[]
    @Input() tModBody: any[]
    @Output() tableActionEmitter : EventEmitter<any> = new EventEmitter()
    /* @Output() tableOrderbyActionEmitter : EventEmitter<any> = new EventEmitter() */
    @Output() outsideTableActionEmitter : EventEmitter<any> = new EventEmitter()


    ngOnInit(){
        let viewActionEdit={
            type:"icon",
            tooltip:"Editar",
            action:"edit",
            icon:"fa fa-pencil"
        }
		let editActionAcept={
            type:"icon",
            tooltip:"Aceptar",
            action:"aceptEdit",
            icon:"fa fa-check"
        }
		let editActionCancel={
            type:"icon",
            tooltip:"Cancelar",
            action:"cancelEdit",
            icon:"fa fa-times"
        }
        for (let i = 0; i < this.tModBody.length; i++) {
            if(this.tableMode == "editable"){
                this.tModBody[i].state = "view"
            } else if(this.tableMode == "view"){
                this.tModBody[i].state = "view"
            } else if(this.tableMode == "form"){
                this.tModBody[i].state = "editable"
            } else {
                console.log("tableMode error")
            }
        }
        // If has edit mode, add buttons
        if(this.tableMode == "editable"){
            this.tModConfig.rowViewActions.splice(0, 0, viewActionEdit)
            this.tModConfig.rowEditActions.splice(0, 0, editActionAcept,editActionCancel)
        }

        this.sortBy(this.sortByColumn)
        this.addressbookMode()
    }
    rowBtnAction(index, row, action) {
        let rowEmitter={
            tableMode : this.tableMode,
            index : index,
            row: row,
            action: action
        }
        this.tableActionEmitter.emit(rowEmitter)
    }
    outsideTableAction(action){
        let outsideTableEmmiter={
            tableMode : this.tableMode,
            action : action
        }
        this.outsideTableActionEmitter.emit(outsideTableEmmiter)
    }
    sortByColumn = 0
    isDesc = true
    sortBy(index) {
        if (this.sortByColumn != index) {
            this.isDesc = false
        } else {
            this.isDesc = this.isDesc ? false : true;
        }
        this.sortByColumn = index
        this.sortByDisplayIcon(index)

        let property = this.tModHead[this.sortByColumn].attribute.value
        //console.log(property)
        //this.isDesc = !this.isDesc; //change the direction    
        //this.column = property;
        let direction = this.isDesc ? 1 : -1;
        this.tModBody.sort(function (a, b) {
            if (a.rowData[property] < b.rowData[property]) {
                return -1 * direction;
            } else if (a.rowData[property] > b.rowData[property]) {
                return 1 * direction;
            } else {
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
    }
    sortByDisplayIcon(index) {
        for (let th of this.tModHead) {
            if (index == this.sortByColumn) {
                if (this.isDesc == false) {
                    return "fa-sort-desc"
                } else {
                    return "fa-sort-asc"
                }
            } else {
                return "fa-sort"
            }
        }
    }
    addressbookMode(){
        let property = this.tModHead[this.sortByColumn].attribute.value
        let capital:string
        let prevCapital:string
        if(this.hasAddressbookMode == true){
            for (let i = 0; i < this.tModBody.length; i++) {
                capital=this.tModBody[i].rowData[property].substring(0,1) 
                this.tModBody[i].capitalLeter = capital
                
                if(capital != prevCapital){
                    this.tModBody[i].capital = "show"
                } else {
                    this.tModBody[i].capital = "hide"
                } 
                if (capital != undefined){
                    prevCapital = capital 
                }
            }
        }
    }
    allDisabled(frezze){  
		for (let row of this.tModBody) {
            if(frezze == true){
                row.disable = true
            } else {
                row.disable = false
            }
        }
    }
    openCloseAddItem(bool){
        if(bool==true){
            return "open"
        } else {
            return "close"
        }
    }
    colspan(){
        let checkbox: number = 0
        let data: number = 0
        let buttons: number = 0
        let colspanNum: number

        if(this.hasCheckbox){
           checkbox = 1
        }
        if(this.tModHead){
           data = this.tModHead.length
        }
        if(this.tModConfig.rowViewActions || this.tModConfig.rowEditActions ){ 
           buttons =  1
        }
        colspanNum = checkbox + data + buttons
        return colspanNum
    }
    getTotalItems() {
        let totalItems = 0
        for (let row of this.tModBody) {
            //if(row.checked){
            totalItems++
            //}
        }
        return totalItems
    }
    getTotalValue() {
        let totalValue = 0
        for (let row of this.tModBody) {
            totalValue += row.rowData.value
        }
        return totalValue
    }
    rowCheck(index) {
        this.tModBody[index].checked = this.tModBody[index].checked ? false : true;
        
    }
    checkAll = false
    rowCheckAll() {
        let totalItems = 0
        for (let row of this.tModBody) {
            if (row.checked) {
                totalItems++
            }
        }
        if (totalItems == this.tModBody.length) {
            this.checkAll = false
            for (let row of this.tModBody) {
                row.checked = false
            }
        } else {
            this.checkAll = true
            for (let row of this.tModBody) {
                row.checked = true
            }
        }
    }



//NgSelect 
    private value: any = {};
    private _disabledV: string = '0';
    private disabled: boolean = false;

    private get disabledV(): string {
        return this._disabledV;
    }
    private set disabledV(value: string) {
        this._disabledV = value;
        this.disabled = this._disabledV === '1';
    }
    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }
    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }
    public typed(value: any): void {
        console.log('New search input: ', value);
    }
    public refreshValue(value: any): void {
        this.value = value;
    }
// End NgSelect

}

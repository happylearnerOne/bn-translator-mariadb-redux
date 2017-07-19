import { Component, Output, EventEmitter } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
    selector: 'child-cell',
    template: `<span><button class="mini ui button" (click)="onEditRow()">update</button></span>`
})
export class EditButtonComponent implements ICellRendererAngularComp {
	
    public params: any;

    @Output() onEditBtnClick : EventEmitter<any>;

    constructor() {
        this.onEditBtnClick = new EventEmitter();
    }

    agInit(params: any): void {
        this.params = params;
    }
    

    onEditRow(params) {
    	console.log("params update=", this.params);

        //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
        // alert("press update");
        //this.showModal = true;
        this.onEditBtnClick.emit(this.params);
    }
}
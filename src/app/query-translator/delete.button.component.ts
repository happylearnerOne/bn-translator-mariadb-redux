import { Component, EventEmitter, Output } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
    selector: 'child-cell',
    template: `<span><button class="mini ui button" (click)="onDeleteRow()">delete</button></span>`
})
export class DeleteButtonComponent implements ICellRendererAngularComp {
	    
    public params: any;
    @Output() onDeleteBtnClick : EventEmitter<any>;
    
    constructor() {
        this.onDeleteBtnClick = new EventEmitter();
    }

    agInit(params: any): void {
        this.params = params;
    }
    

    onDeleteRow() {
    	console.log("delete params=", this.params);

        //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
         this.onDeleteBtnClick.emit(this.params);        
    }

}

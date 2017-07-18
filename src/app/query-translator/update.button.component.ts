import { Component, Output, EventEmitter } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
    selector: 'child-cell',
    template: `<span><button class="mini ui button" (click)="onUpdateRow()">update</button></span>`
})
export class UpdateButtonComponent implements ICellRendererAngularComp {
	
    // public params: any;

    @Output() onUpdateBtnClick : EventEmitter<any>;

    

    agInit(params: any): void {
        // this.params = params;
    }
    

    public onUpdateRow(params) {
    	console.log("params update=", params);

        //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
        // alert("press update");
        //this.showModal = true;
        this.onUpdateBtnClick.emit();

    }
}
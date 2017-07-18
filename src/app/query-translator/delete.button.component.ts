import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'child-cell',
    template: `<span><button style="height: 20px" (click)="onDeleteRow()">delete</button></span>`
})
export class DeleteButtonComponent implements ICellRendererAngularComp {
	
    // public params: any;

    agInit(params: any): void {
        // this.params = params;
    }
    

    public onDeleteRow(params) {
    	console.log("params=", params);

        //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
        alert("press delete");
    }
}
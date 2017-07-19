import { Component, Output, EventEmitter, ViewChild } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";


import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
    data:string;
}

@Component({
    selector: 'edit-btn',
    template: `<span><button class="mini ui button" (click)="onEditRow()">update</button></span>
<ng-template let-context let-modal="modal" #modalTemplate>
    <div class="header">Example</div>
    <div class="content">
        <p>{{ context.data }}</p>
    </div>
    <div class="actions">
        <button class="ui red button" (click)="modal.deny('denied')">Cancel</button>
        <button class="ui green button" (click)="modal.approve('approved')" autofocus>OK</button>
    </div>
</ng-template>
    `
})
export class EditButtonComponent implements ICellRendererAngularComp {
	@ViewChild('modalTemplate')
  public modalTemplate:ModalTemplate<IContext, string, string>

    public params: any;
    dynamicContent:string = "Example";

    @Output() editBtnClick : EventEmitter<any>;

    constructor(public modalService:SuiModalService) {
        this.editBtnClick = new EventEmitter();
    }

    agInit(params: any): void {
        this.params = params;
    }
    

    onEditRow() {
    	// console.log("params update=", this.params);

        
        console.log("aaa=", this.params);

        //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
        // alert("press update");
        //this.showModal = true;
        // this.editBtnClick.emit(this.params);
        const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = "closed!";
    config.context = { data: this.dynamicContent };

    this.modalService
        .open(config)
        .onApprove(result => {  
            alert("ok");
        })
        .onDeny(result => { 
            alert("no");
        });
    }
}
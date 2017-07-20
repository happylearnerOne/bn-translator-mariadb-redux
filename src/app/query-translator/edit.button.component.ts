import { Component, Output, EventEmitter, ViewChild } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular/main";
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

export interface IContext {
    data:string;
}

@Component({
    selector: 'edit-btn',
    templateUrl: './edit.button.component.html'
})
export class EditButtonComponent implements ICellRendererAngularComp {
	@ViewChild('modalTemplate')
    public modalTemplate:ModalTemplate<IContext, string, string>;

    public params: any;

    @Output() editBtnClick: EventEmitter<any> = new EventEmitter();

    constructor(public modalService:SuiModalService) {
    }

    agInit(params: any): void {
        this.params = params;
    }
    

    onEditRow() {
    	// console.log("params update=", this.params);
        
        // console.log("aaa=", this.params);

        //this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
        // alert("press update");
        //this.showModal = true;
        // this.editBtnClick.emit(this.params);

        const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

        // config.closeResult = "closed!";
        // config.size = "small";
        // config.context = { data: this.dynamicContent };

        this.modalService
            .open(config)
            .onApprove(result => {  
                // alert("ok");
                console.log(1);
                try{
                    this.editBtnClick.emit(this.params);
                }
                catch(e){
                    console.log(e);
                }
                
                console.log(2);
            })
            .onDeny(result => { 
                alert("no");
            });
    }
}
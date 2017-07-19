import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { QueryTranslatorService } from './query-translator.service';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GridOptions } from "ag-grid/main";

import { EditButtonComponent } from './edit.button.component';
import { DeleteButtonComponent } from './delete.button.component';


// import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';

// export interface IContext {
//     data:string;
// }

/*
  //@ViewChild('modalTemplate')
    

    constructor(public modalService:SuiModalService) {}
    */
@Component({
  selector: 'app-query-translator',
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent {

  @ViewChild('modalTemplate')
  //public modalTemplate:ModalTemplate<IContext, string, string>

  gridOptions: GridOptions;
  
  columnDefs : any;
  data : any;
  showModal : boolean = false;
  dynamicContent:string = "Example";
  
	queryform : FormGroup;
  /*
  settings = {
    columns: {
    
      phone_no: {
        title: 'Phone No'
      },
      ctc_cntry_code: {
        title: 'Contact Country Code'
      },
      ctc_phone_no: {
        title: 'Contact Phone No'
      },
      email: {
        title: 'Email'
      },
      address: {
        title: 'Address'
      },
      native_lang: {
        title: 'Native Language'
      },
      trgt_lang_from: {
        title: 'Target Language From'
      },
      trgt_lang_to: {
        title: 'Target Language To'
      },
      direction: {
        title: 'Direction'
      },
      education: {
        title: 'Education'
      },
      year_exp: {
        title: 'Experience'
      },
      prof_field: {
        title: 'Professional'
      },
      certificate: {
        title: 'Certificate'
      },
      ref_work: {
        title: 'Reference Works'
      },
      result: {
        title: 'Result'
      },
      comment: {
        title: 'Comments'
      }
    }
  };
  */



  constructor(fb: FormBuilder, 
  			  	  private queryTranslatorService : QueryTranslatorService,
              private changeDetectorRef : ChangeDetectorRef
              // ,
              // public modalService:SuiModalService
              ) { 
    this.gridOptions = <GridOptions>{};

    console.log("constructor");
    console.log(this.gridOptions);
    //設定欄位的width會影響horizontal scroll bar出現與否 
    this.columnDefs = [
      { headerName: "#1", field: "id", cellRendererFramework: DeleteButtonComponent},
      { headerName: "#2", field: "id", cellRendererFramework: EditButtonComponent},
      { headerName: "ID", field: "id" },
      { headerName: "Full Name", field: "name" },
      { headerName: "Skype", field: "skype" },
      { headerName: "Country Code", field: "cntry_code" }
    ];

    this.queryTranslatorService.searchTranslator()
      .then((result) => {
        console.log("query-ngOnInit, result:", result);
        this.data = result;
        this.changeDetectorRef.detectChanges();
      })
      .catch((error) => {
        console.log("query-ngOnInit, error:", error);
      });      
  }

  ngOnInit() {
    

  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();

    console.log("GridReady");
    console.log(params.api);
  }

  selectAllRows() {
    this.gridOptions.api.selectAll();
  }
  onRemoveSelected(event) {
    console.log("onRemoveSelected");
  }

  onEditBtnClick(params : any) {
     console.log("222 edit emit=", params);

    alert(1);


    // this.modal.show();

    /*
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = "closed!";
    config.context = { data: this.dynamicContent };

    this.modalService
        .open(config)
        .onApprove(result => {  })
        .onDeny(result => { });
        */
    
  }
  onDeleteBtnClick(params: any) {
    console.log("delete emit=", params);
  }

  /* 第二種ag-grid寫法 -->
  /*
  onEditRow() {
      console.log("onEditRow");
  }

  onDeleteRow(params) : any{
    console.log("onDeleteRow");

  } 
  
  //Cell Render Button
  deleteButtonCellRenderer(params) {
      var deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "delete";
      deleteBtn.addEventListener("click", function(){
        alert("press delete");
      });
      return deleteBtn;
  }

  editButtonCellRenderer(params) {
      var editBtn = document.createElement('button');
      editBtn.innerHTML = "edit";
      editBtn.addEventListener("click", function(){
        alert("press edit");
      });
      return editBtn;
  }  
  */ 
}

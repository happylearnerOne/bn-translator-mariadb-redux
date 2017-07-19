import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { QueryTranslatorService } from './query-translator.service';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GridOptions } from "ag-grid/main";

import { EditButtonComponent } from './edit.button.component';
import { DeleteButtonComponent } from './delete.button.component';

import { SuiModal } from 'ng2-semantic-ui';


@Component({
  selector: 'app-query-translator',
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent {

  gridOptions: GridOptions;
  
  columnDefs : any;
  data : any;
  showModal : boolean = false;
  
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
              private changeDetectorRef : ChangeDetectorRef) { 
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
    console.log("edit emit=", params);
    this.showModal = true;

    this.modal.show();
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

import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { QueryTranslatorService } from './query-translator.service';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { GridOptions } from "ag-grid/main";

import { UpdateButtonComponent } from './update.button.component';
import { DeleteButtonComponent } from './delete.button.component';


@Component({
  selector: 'app-query-translator',
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent {

  gridOptions: GridOptions;
  
  columnDefs : any;
  data : any;
  
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
    this.columnDefs = [
      {headerName: "#1", field: "id", cellRendererFramework: DeleteButtonComponent},
      {headerName: "#2", field: "id", cellRendererFramework: UpdateButtonComponent},
      {headerName: "ID", field: "id"},
      {headerName: "Full Name", field: "name"},
      {headerName: "Skype", field: "skype"},
      {headerName: "Country Code", field: "cntry_code"}
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

  selectTheNode(node) {
    this.gridOptions.api.selectNode(node);
  }


  onRowSelected(event) {
    console.log(event);
  }
  onRemoveSelected(event) {
    /*
      var selectedData = this.gridOptions.api.getSelectedRows();
      // this.gridOptions.api.updateRowData({remove: selectedData});
      console.log("onRemoveSelected");
      console.log(selectedData);
      */
      console.log("onRemoveSelected");
      console.log(this.gridOptions.api);

      console.log("event");
      console.log(event);

  }

  onEditRow() {
    alert("edit");
      console.log("onEditRow");
      // console.log(event);

  }

  onDeleteRow(params) : any{
    alert("delete");
          console.log("onEditRow");
     
      // console.log(event);

  }  
  onUpdateBtnClick() {
    alert("emit parent");
  }
  deleteButtonCellRenderer(params) {

      console.log("country222");
      console.log(params);
              /*

        var aa = document.createElement('button');
        
        aa.addEventListener("click", function(){
          alert("press aa");
        });
        aa.innerHTML = "button" ;
        */

      var deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "delete";
      deleteBtn.addEventListener("click", function(){
        alert("press delete");
      });

      //deleteBtn.addEventListener("click", self.onDeleteRow(params));

     // deleteBtn.onclick = this.onDeleteRow();

      /*

      deleteBtn.addEventListener("click", function(){
        alert("delete");
      });
      */
      console.log("button=", deleteBtn);
      return deleteBtn;
  }

  editButtonCellRenderer(params) {
      console.log("country");
      console.log(params);


      return "<button (click)='onEditRow(2)'>edit</button>";

      // var data = params.data;

      /*
      var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='http://www.ag-grid.com/images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
      return flag + " " + params.value;
      */
  }  
}

import { Component, ChangeDetectorRef } from '@angular/core';
import { QueryTranslatorService } from './query-translator.service';
// import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-query-translator',
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent{
  // public modalTemplate:ModalTemplate<IContext, string, string>;
  // public params :any;

  data : any;  
  thedata : any;
	// queryform : FormGroup;
  closeResult: string;


  constructor(private queryTranslatorService : QueryTranslatorService,
              private changeDetectorRef : ChangeDetectorRef,
              private modalService: NgbModal
              ) { 
/*
    this.queryTranslatorService.searchTranslator()
      .then((result) => {
        console.log("query-ngOnInit, result:", result);
        this.data = result;
        this.changeDetectorRef.detectChanges();
      })
      .catch((error) => {
        console.log("query-ngOnInit, error:", error);
      });      
      */
      this.data = [
        {id: "1", skype: "skype", name: "name"},
        {id: "2", skype: "skype2", name: "name2"}
      ];
  }

  tmpEditBtn(content, tpr) {
    this.thedata = tpr;

     this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  tmpDeleteBtn(tpr) {
    console.log("delete");
    console.log(tpr);
  }


}

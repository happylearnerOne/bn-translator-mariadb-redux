import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { QueryTranslatorService } from './query-translator.service';
import { SuiModalService, TemplateModalConfig, ModalTemplate } from 'ng2-semantic-ui';
import { ConfirmModal } from '../confirm-modal/confirm-modal.component';

export interface IContext {
    data:string;
}

@Component({
  selector: 'app-query-translator',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent implements OnInit {

  @ViewChild('modalTemplate')
  public modalTemplate:ModalTemplate<IContext, string, string>;

  editform : FormGroup;
  theResult : any;
  data : any;

  constructor(fb: FormBuilder, 
              private queryTranslatorService : QueryTranslatorService,
              private changeDetectorRef : ChangeDetectorRef,
              public modalService:SuiModalService,
              private ngZone: NgZone) { 
    
    /*
    this.theResult = [
      { id: "1", skype: "skype1", name: "name1" },
      { id: "2", skype: "skype2", name: "name2" },
      { id: "3", skype: "skype3", name: "name3" }
    ];
    */
    this.editform = fb.group({
      'name' : [],
      'skype' : []
    });    
      
    this.getTranslators();
       
      
  }

  ngOnInit() {
    //this.changeDetectorRef.markForCheck();
    /*
    this.queryTranslatorService.searchTranslator(this.queryform)
      .then((result) => {
        console.log("query-ngOnInit, result:", result);
      })
      .catch((error) => {
        console.log("query-ngOnInit, error:", error);
      });
      */
  }

  getTranslators() {

    this.queryTranslatorService.searchTranslator()
      .then((result) => {
        console.log("query-ngOnInit, result:", result);
        this.theResult = result;
        this.ngZone.run(() => {
          console.log("run");
        });
        // this.changeDetectorRef.detectChanges();
        // this.changeDetectorRef.reattach();
      })
      .catch((error) => {
        console.log("query-ngOnInit, error:", error);
      }); 
  }

  editBtnClick(tpr) {
    console.log("tpr=", tpr);
    console.log(this.modalTemplate);
    console.log(this.modalService);
    this.data = tpr;
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = "closed!";
    config.context = { data: "dynamicContent" };
    config.size = "small";

    this.modalService
        .open(config)
        .onApprove(result => this.editRecord(tpr))
        .onDeny(result => { 
          console.log("refuse to edit data");
        });
  }

  deleteBtnClick(tpr) {
    this.modalService
      .open(new ConfirmModal("Are you sure?", "Are you sure about deleting this?"))
      .onApprove(() => this.deleteRecord(tpr))
      .onDeny(() => alert("User has denied."));
  }

  deleteRecord(tpr) {
    var id = Number(tpr.id);
    tpr.id = id;
    this.queryTranslatorService.deleteTranslator(tpr)
      .then(result => {
        console.log("delete result=", result);
        this.getTranslators();
      })
      .catch(error => {
        console.log("update error=", error);
      });
  }

  editRecord(tpr) {

    var id = Number(tpr.id);

    var tprRec = {
      id: id,
      name: this.editform.value.name,
      skype: this.editform.value.skype
    }

    console.log("tprRec:", tprRec);

    this.queryTranslatorService.updateTranslator(tprRec)
      .then(result => {
        console.log("update result=", result);
        this.getTranslators();
      })
      .catch(error => {
        console.log("update error=", error);
      });
  }
}

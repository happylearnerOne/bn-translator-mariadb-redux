import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { QueryTranslatorService } from './query-translator.service';
// import { Ng2SmartTableModule } from 'ng2-smart-table';



@Component({
  selector: 'app-query-translator',
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent implements OnInit {

  @Input() data : object = [];
  
	queryform : FormGroup;
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      skype: {
        title: 'Skype'
      },
      cntry_code: {
        title: 'Country Code'
      },
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


  constructor(fb: FormBuilder, 
  			  	  private queryTranslatorService : QueryTranslatorService) { }

  ngOnInit() {
    
  	this.queryTranslatorService.searchTranslator()
  		.then((result) => {
  			console.log("query-ngOnInit, result:", result);
        this.data = result;
  		})
  		.catch((error) => {
  			console.log("query-ngOnInit, error:", error);
  		});
      
  }

}

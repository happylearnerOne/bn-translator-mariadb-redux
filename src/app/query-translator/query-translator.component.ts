import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { QueryTranslatorService } from './query-translator.service';

@Component({
  selector: 'app-query-translator',
  templateUrl: './query-translator.component.html',
  styleUrls: ['./query-translator.component.css']
})
export class QueryTranslatorComponent implements OnInit {

	queryform : FormGroup;

  constructor(fb: FormBuilder, 
  			  	  private queryTranslatorService : QueryTranslatorService) { }

  ngOnInit() {
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

}

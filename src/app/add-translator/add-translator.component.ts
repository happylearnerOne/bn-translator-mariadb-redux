import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-translator',
  templateUrl: './add-translator.component.html',
  styleUrls: ['./add-translator.component.css']
})
export class AddTranslatorComponent implements OnInit {

	addform : FormGroup;
	
  constructor() { }

  ngOnInit() {
  }

}

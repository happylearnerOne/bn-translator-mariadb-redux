import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Promise } from 'es6-promise';
import 'rxjs/add/operator/toPromise'; 
// import * as firebase from 'firebase';

let apiUrl = "http://localhost:3000/";

@Injectable()
export class AddTranslatorService {

    // db : any = firebase.database().ref();

  	constructor(private http : Http){

  	}
  
   saveTranslator(form : any){
     let promise = new Promise((resolve, reject) => {
       this.http.post(apiUrl + "api/addTranslator", form)
         .toPromise()
         .then(res => {
           return resolve();
         })
         .catch(error => {
           return reject();
         });
     });     
     return promise;                   
   }
}
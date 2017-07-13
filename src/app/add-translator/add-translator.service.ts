import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Promise } from 'es6-promise';
// import 'rxjs/add/operator/toPromise'; 
// import * as firebase from 'firebase';

@Injectable()
export class AddTranslatorService {

    // db : any = firebase.database().ref();

  	constructor(){

  	}
  
   saveTranslator(form : any){

     console.log("saveTranslator=", form);
     var recObj = {

     };
     /*
     return this.db.child("translator")
                   .push(form)
                   .then((result) => {
                     console.log("in save service, result:", result);
                     return Promise.resolve(result);
                   })
                   .catch((error) => {
                     console.log("in save service, error:", error);
                     return Promise.reject(error);
                   });
                   */

                   
   }
}
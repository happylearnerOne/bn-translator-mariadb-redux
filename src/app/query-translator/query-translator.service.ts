import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Promise } from 'es6-promise';
// import 'rxjs/add/operator/toPromise'; 
import * as firebase from 'firebase';

@Injectable()
export class QueryTranslatorService {

    db : any = firebase.database().ref();

  	constructor(){

  	}

    searchTranslator(form : any){
      return this.db.child("translator")
                    .once("value")
                    .then((snapshot) => {
                      return Promise.resolve(snapshot.val());
                    })
                    .catch((error) => {
                      return Promise.reject(error);
                    });
    }

  
}
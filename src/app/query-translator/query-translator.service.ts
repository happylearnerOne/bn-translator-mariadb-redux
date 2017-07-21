import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Promise } from 'es6-promise';
import 'rxjs/add/operator/toPromise'; 

import apiUrl from '../../config'; 

@Injectable()
export class QueryTranslatorService {

	constructor(private http : Http){

	}

  searchTranslator(){
    var promise = new Promise((resolve, reject) => {
      this.http.get(apiUrl + "api/getTranslators")
      	.toPromise()
      	.then(res => {
      		return resolve(res.json());
      	})
      	.catch(err => {
      		return reject();
      	});
    });
    return promise;
  }

  updateTranslator(tpr){
    var promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl + "api/updateTranslator", tpr)
        .toPromise()
        .then(res => {
          console.log("update service:", res.json());
          return resolve(res.json());
        })
        .catch(err => {
          return reject();
        });          
    });
    return promise;
  }

  deleteTranslator(tpr) {
    console.log("in delete service, ", tpr);
    var promise = new Promise((resolve, reject) => {
      this.http.post(apiUrl + "api/deleteTranslator", tpr)
        .toPromise()
        .then(res => {
          console.log("delete service:", res.json());
          return resolve(res.json());
        })
        .catch(err => {
          return reject();
        });
    });
    return promise;
  }

  
}
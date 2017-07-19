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

  
}
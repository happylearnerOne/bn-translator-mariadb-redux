import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Promise } from 'es6-promise';
// import 'rxjs/add/operator/toPromise'; 
// import * as firebase from 'firebase';

@Injectable()
export class LoginService {
  	constructor(private http:Http){

  	}
  
    login(id: string, password: string){
      console.log("id=",id);
      console.log("password=", password);

      return new Promise((resolve, reject)=>{
                return resolve("OK");
              });
      /*
          return firebase.auth()
            .signInWithEmailAndPassword(id, password)
            // .signInWithEmailAndPassword("fylin92@gmail.com", "075581488")
            .then(function(user){
              console.log("login success,",user);
              return new Promise((resolve, reject)=>{
                return resolve("OK");
              });
            })
            .catch(function(error) {
                // Handle Errors here.
                console.log("login failed,",error);
                return new Promise((resolve, reject)=>{
                  return reject("NOT OK");
                });
            });
            */
    }
}
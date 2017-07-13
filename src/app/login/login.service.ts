import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Promise } from 'es6-promise';
import 'rxjs/add/operator/toPromise'; 
// import * as firebase from 'firebase';

let apiUrl = "http://localhost:3000/"

@Injectable()
export class LoginService {
  	constructor(private http:Http){

  	}
  
    login(id: string, password: string){
      console.log("id=",id);
      console.log("password=", password);

      let promise = new Promise((resolve, reject) => {
        this.http.get(apiUrl + "api/getAllAccounts")
          .toPromise()
          .then(res => {
            console.log("get res:", res);
            console.log("res.json():", res.json());
            resolve();
          });
      });
      return promise;
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


search(term : string){
          let promise = new Promise((resolve, reject) => {
              console.log("calling a promise");
              let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
              this.http.get(apiURL)
                  .toPromise()
                  .then(res => {
                      console.log("get res:", res);
                      console.log("res.json():", res.json());
                      resolve();
                  });
          });
          return promise;
      }


            */
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUrl: string = `${environment.apiUrl}/api/users/login`;  // Assign a default value
  
  constructor(
    private httpClient: HttpClient,
  ) { 
    console.log(this.loginUrl);
    let myPromise = new Promise((resolve, reject) => {
      // Asynchronous operation
      let success = false;
      
      if (success) {
        resolve("Operation was successful!");
      } else {
        reject("Operation failed.");
      }
    });
    
    myPromise
      .then(result => {
        console.log(result); // "Operation was successful!"
      })
      .catch(error => {
        console.log(error); // "Operation failed."
      });
    
  }

  onLogin(body: any){
    return this.httpClient.post(this.loginUrl, body);
  }
}


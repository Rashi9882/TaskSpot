//THIS FILE HANDLE ALL THE WEB SERVICE REQUEST
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  //WE ARE INTIATING THE URL AND CONNECTING OUR LOCALHOST WITH WEBREQUEST SERVICE
  readonly ROOT_URL;

  constructor(private http : HttpClient) {
    //server is running at the port 3000
    this.ROOT_URL = 'http://localhost:3000';
   }

   get(uri:string){
     return this.http.get(`${this.ROOT_URL}/${uri}`);
   }

   post(uri:string, payload: Object) {
     return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
   }

   patch(uri:string,payload: Object){
     return this.http.patch(`${this.ROOT_URL}/${uri}`,payload);
   }

   delete(uri:string){
     return this.http.delete(`${this.ROOT_URL}/${uri}`);
   }
}

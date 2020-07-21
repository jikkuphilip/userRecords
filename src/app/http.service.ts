import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {environment}  from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private   http: HttpClient) { }

  getData () {
   return this.http.get(environment.BASE_URL+'items/');
  }

  postData (data) {
    return this.http.post(environment.BASE_URL+'items/', data);
  }

  deleteData (id) {
    return  this.http.delete(environment.BASE_URL+'items/'+id);
  }
}

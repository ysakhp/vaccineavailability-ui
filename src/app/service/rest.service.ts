import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  //readonly APIURL = "http://www.vaccinationnotification.online:8081/api"; 
  readonly APIURL = "http://127.0.0.1:8081/api";
  constructor(private httpClient: HttpClient) { }

  post(model: any, path: String) {

    return this.httpClient.post<any>(this.APIURL + path, model)
  }

  get(path : String){
    return this.httpClient.get<any>(this.APIURL+path)
  }

}

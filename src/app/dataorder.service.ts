import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataorderService {
  baseUrl = "http://localhost:8083/";
  constructor(private http: HttpClient) { }

  getApi = (lien) => {
    return this.http.get(this.baseUrl + lien);
  }

}
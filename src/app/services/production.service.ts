import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  baseUrl:string = environment.baseUrl +'Production/'
  constructor(private http: HttpClient) { }

  addBill(billObj) {
    console.log("bill-add", billObj);
    return this.http.post(this.baseUrl+'SaveBill', billObj)
  }
}

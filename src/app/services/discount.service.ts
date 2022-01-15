import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  baseUrl:string='https://jsonplaceholder.cypress.io/'
  constructor(private http:HttpClient) { }

  listDiscount(){
    return this.http.get(this.baseUrl+'users')
  }
}

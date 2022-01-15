import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  baseUrl:string = environment.baseUrl +'StockManage/'
  constructor(private http: HttpClient) { }

  listStock() {
    return this.http.get(this.baseUrl + 'GetStock')
  }

  editStock(stock) {
    console.log("stock-edit", stock);
    return this.http.post(this.baseUrl + 'UpdateStock', stock)
  }
}


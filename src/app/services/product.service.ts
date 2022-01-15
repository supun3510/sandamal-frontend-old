import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl:string = environment.baseUrl +'Product/'
  constructor(private http:HttpClient) { }

  listProduct(){
    return this.http.get(this.baseUrl+'GetProducts')
  }

  addProduct(product){
    console.log("product-add",product);
    return this.http.post(this.baseUrl+'SaveProduct',product)
  }

  editProduct(product){
    console.log("product-edit",product);
    return this.http.put(this.baseUrl+'UpdateProduct',product)
  }

  deleteProduct(id){
    // return this.http.delete(this.baseUrl+`DeleteCategory + ${id}`)
    return this.http.delete(this.baseUrl+ 'DeleteProduct' + '/' +id)
    // return this.http.delete(this.baseUrl+ 'DeleteCategory',id)

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl:string = environment.baseUrl + 'Brand/'
  constructor(private http:HttpClient) { }

  listBrand(){
    return this.http.get(this.baseUrl+'GetBrands')
  }

  addBrand(brand){
    console.log("brand-add",brand);
    return this.http.post(this.baseUrl+'SaveBrand',brand)
  }

  editBrand(brand){
    console.log("brand-edit",brand);
    return this.http.put(this.baseUrl+'UpdateBrand',brand)
  }

  deleteBrand(id){
    // return this.http.delete(this.baseUrl+`DeleteCategory + ${id}`)
    return this.http.delete(this.baseUrl+ 'DeleteBrand' + '/' +id)
    // return this.http.delete(this.baseUrl+ 'DeleteBrand',id)

  }
}

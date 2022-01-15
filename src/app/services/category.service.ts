import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 baseUrl:string = environment.baseUrl +'Category/'
  constructor(private http: HttpClient) { }

  listCategories() {
    return this.http.get(this.baseUrl + 'GetCategories')
  }

  addCategory(category) {
    console.log("category-add", category);
    return this.http.post(this.baseUrl + 'SaveCategory', category)
  }

  editCategory(category) {
    console.log("category-edit", category);
    return this.http.put(this.baseUrl + 'UpdateCategory', category)
  }

  deleteCategory(id) {
    // return this.http.delete(this.baseUrl+`DeleteCategory + ${id}`)
    return this.http.delete(this.baseUrl + 'DeleteCategory' + '/' + id)
    // return this.http.delete(this.baseUrl+ 'DeleteCategory',id)

  }
}

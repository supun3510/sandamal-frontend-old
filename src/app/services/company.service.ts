import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl:string = environment.baseUrl + 'Company/'
  constructor(private http: HttpClient) { }

  listCompany() {
    return this.http.get(this.baseUrl + 'GetCompanies')
  }

  addCompany(company) {
    console.log("company-add", company);
    return this.http.post(this.baseUrl + 'SaveCompany', company)
  }

  editCompany(company) {
    console.log("company-edit", company);
    return this.http.put(this.baseUrl + 'UpdateCompany', company)
  }

  deleteCompany(id) {
    // return this.http.delete(this.baseUrl+`DeleteCompany + ${id}`)
    return this.http.delete(this.baseUrl + 'DeleteCompany' + '/' + id)
    // return this.http.delete(this.baseUrl+ 'DeleteCompany',id)

  }
}

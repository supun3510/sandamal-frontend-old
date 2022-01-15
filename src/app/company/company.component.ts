import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'app/services/company.service';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  listCompany: any;
  modalTitle = 'New';
  public company = new Company();
  constructor(private companyService: CompanyService) { }


  ngOnInit() {
    this.getAllCompanies();
  }

  getAllCompanies() {
    this.companyService.listCompany().subscribe(data => {
      // $('#example').DataTable();
      this.listCompany = data;
      console.log("listcompany", data);

    })
  }

  editItem(com) {
    console.log(com);
    this.modalTitle = 'Edit';
    this.company.contact_No = com.contact_No;
    this.company.company_Name = com.company_Name;
    this.company.status = com.status;
    this.company.id = com.id;

  }

  addItem() {
    this.modalTitle = 'New';
    this.company = {} as Company;
    this.company.status = false;
  }

  save() {
    if (!this.company.id) {
      this.companyService.addCompany(this.company)
        .subscribe(res => {
          console.log("res", res);
          this.getAllCompanies();
        })
      // this.closeModel.nativeElement.click();
      // document.getElementById("closeModel").click();
      // $('#closeModel').attr("data-dismiss", "modal");

    } else {
      this.companyService.editCompany(this.company)
        .subscribe(res => {
          console.log("res", res);
          this.getAllCompanies();
        })
    }
  }

  deleteItem(com) {
    if (confirm(`Are you sure to delete ${com.company_Name} ?`)) {
      this.companyService.deleteCompany(com.id)
        .subscribe(res => {
          console.log("res", res);
          this.getAllCompanies();
        })
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Brand } from 'app/models/brand.model';
import { BrandService } from 'app/services/brand.service';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  listBrand: any;
  modalTitle = 'New';
  public brand = new Brand();
  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.getAllBrands();
  }

  getAllBrands() {
    this.brandService.listBrand().subscribe(data => {
      // $('#example').DataTable();
      console.log("listbrand", data);

      this.listBrand = data;
    })
  }

  editItem(brand) {
    console.log(brand);
    this.modalTitle = 'Edit';
    this.brand.brand_Code = brand.brand_Code;
    this.brand.brand_Name = brand.brand_Name;
    this.brand.status = brand.status;
    this.brand.id = brand.id;

  }

  addItem() {
    this.modalTitle = 'New';
    this.brand = {} as Brand;
  }

  save() {
    if (!this.brand.id) {
      this.brandService.addBrand(this.brand)
        .subscribe(res => {
          console.log("res", res);
          this.getAllBrands();

        })
      // this.closeModel.nativeElement.click();
      // document.getElementById("closeModel").click();
      // $('#closeModel').attr("data-dismiss", "modal");

    } else {
      this.brandService.editBrand(this.brand)
        .subscribe(res => {
          console.log("res", res);
          this.getAllBrands();

        })
    }
  }

  deleteItem(brand) {
    if (confirm(`Are you sure to delete ${brand.brand_Name} ?`)) {
      this.brandService.deleteBrand(brand.id)
        .subscribe(res => {
          console.log("res", res);
          this.getAllBrands();
        })
    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Brand } from 'app/models/brand.model';
import { Category } from 'app/models/category.model';
import { Company } from 'app/models/company.model';
import { Product } from 'app/models/product.model';
import { BrandService } from 'app/services/brand.service';
import { CategoryService } from 'app/services/category.service';
import { CompanyService } from 'app/services/company.service';
import { ProductService } from 'app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listProduct = [];
  listBrand = [];
  listCategory = [];
  listCompany = [];
  modalTitle = 'New';
  public product = new Product();
  constructor(private productService: ProductService,
    private brandService: BrandService,
    private companyService: CompanyService,
    private categoryService: CategoryService) { }


  ngOnInit() {
    this.getProductList();
    this.getBrandList();
    this.getCategoryList();
    this.getCompanyList();
  }

  editItem(prod) {
    console.log(prod);
    this.modalTitle = 'Edit';
    this.product.itemCode = prod.itemCode;
    this.product.itemName = prod.itemName;
    this.product.company_Id = prod.company_Id;
    this.product.brand_Id = prod.brand_Id;
    this.product.category_Id = prod.category_Id;
    this.product.retail_Price = prod.retail_Price;
    this.product.buy_Price = prod.buy_Price;
    this.product.status = prod.status;
    this.product.id = prod.id;

  }

  addItem() {
    this.modalTitle = 'New';
    this.product = {} as Product;
  }

  save() {
    if (!this.product.id) {
      this.productService.addProduct(this.product)
        .subscribe(res => {
          console.log("res", res);
          this.getProductList();

        })
      // this.closeModel.nativeElement.click();
      // document.getElementById("closeModel").click();
      // $('#closeModel').attr("data-dismiss", "modal");

    } else {
      this.productService.editProduct(this.product)
        .subscribe(res => {
          console.log("res", res);
          this.getProductList();

        })
    }
  }

  deleteItem(product) {
    if (confirm(`Are you sure to delete ${product.product_Name} ?`)) {
      this.productService.deleteProduct(product.id)
        .subscribe(res => {
          console.log("res", res);
          this.getProductList();
        })
    }
  }

  getProductList() {
    this.productService.listProduct().subscribe((data: Product[]) => {
      // var array = data;
      // for (let i = 0; i < array.length; i++) {
      //   const element = array[i];
      //   this.listProduct[i].brand_Name = this.listBrand.find(e=> e.id = array[i].brand_Id)
      //   this.listProduct[i].category_Name = this.listBrand.find(e=> e.id = array[i].brand_Id)
      // }
      this.listProduct = data;
      // $('#example').DataTable();
      console.log("listproduct:", data)

    });
  }

  getBrandList() {
    this.brandService.listBrand().subscribe((data: Brand[]) => {
      this.listBrand = data;
      // $('#example').DataTable();
      console.log("listbrand:", data)

    })
  }

  getCategoryList() {
    this.categoryService.listCategories().subscribe((data: Category[]) => {
      this.listCategory = data;
      // $('#example').DataTable();
      console.log("listCategory:", data)

    })
  }

  getCompanyList() {
    this.companyService.listCompany().subscribe((data: Company[]) => {
      this.listCompany = data;
      // $('#example').DataTable();
      console.log("listCompany:", data)

    })
  }

  findBrand(id) {
    var brandName = this.listBrand.find(e => e.id == id)?.brand_Name;
    return brandName;
  }

  findCategory(id) {
    var categoryName = this.listCategory.find(e => e.id == id)?.category_Name;
    return categoryName;
  }

  findCompany(id) {
    var companyName = this.listCompany.find(e => e.id == id)?.company_Name;
    return companyName;
  }

}

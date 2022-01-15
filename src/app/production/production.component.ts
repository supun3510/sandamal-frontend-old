import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'app/models/product.model';
import { ProductionCart } from 'app/models/productionCart.model';
import { ProductionVM } from 'app/models/productionVM.model';
import { ProductService } from 'app/services/product.service';
import { ProductionService } from 'app/services/production.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith } from 'rxjs/operators';
// import { countries } from './countries';
// import { test } from './countries';
@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {
  listProduction: any;
  listProduct = [];
  productArray = [];
  public product = new Product();
  public productVM = new ProductionVM();
  public productCart = new ProductionCart();

  constructor(private productionService: ProductionService,
    private productService: ProductService,
    private formBuilder: FormBuilder) { }

  uploadForm: FormGroup;
  private searchSubscribe;
  isCheque = false;
  isCard = false;
  floatLabelControl = new FormControl();
  filteredOptions: Observable<string[]>;

  options = ["one", "two", "three"]

  // typeahead: FormControl = new FormControl();
  // countries: string[] = countries;

  suggestions: string[] = [];

  suggest() {
    // this.suggestions = this.countries
    //   .filter(c => c.startsWith(this.typeahead.value))
    //   .slice(0, 5);
  }

  ngOnInit() {
    this.getProductList();
    // this.productionService.listProduction().subscribe(data => {
    //   this.listProduction = data;
    //   console.log("production",data);

    // })

    this.uploadForm = this.formBuilder.group({
      branch: [null, Validators.required]
    });

    this.searchSubscribe = this.uploadForm
      .get('branch')
      .valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    // this.filteredOptions = this.uploadForm.valueChanges
    //     .pipe(
    //       startWith(''),
    //       map(value => this._filter(value))
    //     );
    // .valueChanges.debounceTime(400)
    // .distinctUntilChanged()
    // .subscribe(value => {
    //   value = value.toLowerCase();
    //   // process the search data
    // });

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log(value);

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  addProduct() {
    let prodObj = new ProductionCart();

    prodObj.item_Name = this.productCart.item_Name,
      prodObj.retail_Price = this.listProduct.find(ele => ele.itemName == prodObj.item_Name).retail_Price,
      prodObj.discount = this.listProduct.find(ele => ele.itemName == prodObj.item_Name).discount,
      prodObj.quantity = this.productCart.quantity,
      prodObj.total_Amount = this.productCart.total_Amount
      //add by supun
      prodObj.bill_Code = "bill-code";
      prodObj.item_Code = "item-code";
      prodObj.status = true;

    if (!this.productArray.includes(prodObj,0)) {
      this.productArray.push(prodObj);
      
    } else {
      console.log("exist",prodObj);
     
    }
    this.productCart.item_Name = '';
    this.productCart.quantity = null;

    // this.productArray.push(prodObj);
    console.log("productArray", this.productArray);


  }

  calculateDiscount(prod) {
    if (prod.discount) {
      prod.discounted = prod.retail_Price - prod.discount;
      this.CalculateTotalSum();
      // this.productArray.find(ele => ele.itemName == prod.item_Name).discounted = discounted;
      // this.productArray.find(ele => ele.itemName == prod.item_Name).total_Amount = discounted * prod.quantity;
      return prod.discounted;
    } else {
      this.CalculateTotalSum();
      // this.productArray.find(ele => ele.itemName == prod.item_Name).total_Amount = prod.retail_Price * prod.quantity;
      return 0;
    }

  }

  calculateTotalAmount(prod) {
    if (prod.discount) {
      prod.total_Amount = prod.discounted * prod.quantity;
      // this.productVM.customer_Bill += prod.total_Amount; 
      return prod.total_Amount
    } else {
      prod.total_Amount = prod.retail_Price * prod.quantity;
      // this.productVM.customer_Bill += prod.total_Amount; 
      return prod.total_Amount;
    }
  }

  CalculateTotalSum(){
    var totalSum = 0;
    this.productArray.forEach(i => {
      totalSum += i.total_Amount;
    })
    this.productVM.customer_Bill = totalSum;
    this.productVM.customer_Balance = this.productVM.customer_Payment - this.productVM.customer_Bill;
    return totalSum;
  }

  saveBill(){

    this.productVM.productionCarts = this.productArray;
    this.productVM.bank_Name = "BOC";
    this.productVM.check_Number = "CK123";
    console.log("Bill", this.productArray);
    console.log("cart", this.productVM);
    this.productArray = [];

    this.productionService.addBill(this.productVM)
    .subscribe(res => {
      console.log("res", res);

    })

  }

  printBill() {
    // console.log("Bill", this.productArray);
    // this.productArray = [];

  }

  changePaymentType(e) {
    var type = e.target.value;
    switch (type) {
      case "cheque":
        this.productVM.payment_Type ='cheque';
        this.isCheque = true;
        this.isCard = false;

        break;
      case "card":
        this.productVM.payment_Type ='card';
        this.isCard = true;
        this.isCheque = false;

        break;

      default:
        this.productVM.payment_Type ='cash';
        this.isCard = false;
        this.isCheque = false;

        break;
    }
  }

  deleteItem(prod) {
    this.productArray.splice(this.productArray.indexOf(prod), 1);
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

  changeBank(e) {
    this.productVM.bank_Name = e.target.value;
    console.log("bank", e.target.value);

  }

}

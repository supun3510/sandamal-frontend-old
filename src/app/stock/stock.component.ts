import { Component, OnInit, ViewChild } from '@angular/core';
import { Stock } from 'app/models/stock.model';
import { StockService } from 'app/services/stock.service';
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  listStock: any;
  modalTitle = 'New';
  public stock = new Stock();
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.listStock().subscribe(data => {
      this.listStock = data;
      // $('#example').DataTable();
      console.log("liststock", data);

    })
  }


  editItem(stock) {
    console.log(stock);
    this.modalTitle = 'Edit';
    this.stock.itemCode = stock.itemCode;
    this.stock.itemName = stock.itemName;
    this.stock.quantity = stock.quantity;
    this.stock.id = stock.id;
  }

  addItem() {
    this.modalTitle = 'New';
    this.stock = {} as Stock;
  }

  save(){
    // if (!this.stock.id) {
    // // this.categoryService.addCategory(this.category)
    // // .subscribe(res =>{
    // //   console.log("res",res);
    //   console.log(this.stock);
      
    // // })
    //   // this.closeModel.nativeElement.click();
    //   // document.getElementById("closeModel").click();
    //   // $('#closeModel').attr("data-dismiss", "modal");
      
    // } else {
       this.stockService.editStock(this.stock)
       .subscribe(res =>{
         console.log("res",res);
      console.log(this.stock);
        
       })
   // }
  }
}

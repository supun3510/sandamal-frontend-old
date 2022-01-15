import { Component, OnInit,ViewChild } from '@angular/core';
import { DiscountService } from 'app/services/discount.service';
@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
    listDiscount :any;
  constructor(private discountService: DiscountService ) { }

  
  ngOnInit() {
    $('#example').DataTable();
    this.discountService.listDiscount().subscribe(data=>{
      this.listDiscount = data;
    })
  }

  }

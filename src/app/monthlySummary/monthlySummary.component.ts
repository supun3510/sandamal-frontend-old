import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StockService } from 'app/services/stock.service';
@Component({
  selector: 'app-monthlySummary',
  templateUrl: './monthlySummary.component.html',
  styleUrls: ['./monthlySummary.component.css']
})
export class MonthlySummaryComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
    listStock: any;
  constructor(private stockService:StockService ) { }

  ngOnInit() {
    
  }

  }

import { Component, OnInit,ViewChild } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { StockService } from 'app/services/stock.service';
@Component({
  selector: 'app-dailySummary',
  templateUrl: './dailySummary.component.html',
  styleUrls: ['./dailySummary.component.css']
})
export class DailySummaryComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
    listStock: any;
  constructor(private stockService:StockService ) { }

  ngOnInit() {
    
  }

  }

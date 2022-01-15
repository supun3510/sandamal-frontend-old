import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from 'app/models/category.model';
import { isEmptyObject } from 'jquery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('closeModel', { static: false }) closeModel: ElementRef;
  listCategories: any;
  modalTitle = 'New';
  public category = new Category();
  constructor(private categoryService: CategoryService) { }



  ngOnInit() {
    this.getAllCategories();

  }

  getAllCategories() {
    this.categoryService.listCategories().subscribe(data => {
      this.listCategories = data;
   
      console.log("getcato:", data)
    })
  }


  editItem(cat) {
    this.modalTitle = 'Edit';
    console.log(cat);
    this.category.category_Code = cat.category_Code;
    this.category.category_Name = cat.category_Name;
    this.category.status = cat.status;
    this.category.id = cat.id;

  }

  addItem() {
    this.modalTitle = 'New';
    this.category = {} as Category;
    this.category.status = false;
  }

  save() {
    if (!this.category.id) {
      this.categoryService.addCategory(this.category)
        .subscribe(res => {
          console.log("res", res);
          // console.log(form);
          this.getAllCategories();
        })
      // this.closeModel.nativeElement.click();
      // document.getElementById("closeModel").click();
      // $('#closeModel').attr("data-dismiss", "modal");

    } else {
      this.categoryService.editCategory(this.category)
        .subscribe(res => {
          console.log("res", res);
          // console.log(form);
          this.getAllCategories();
        })
    }
  }

  deleteItem(cat) {
    if (confirm(`Are you sure to delete ${cat.category_Name} ?`)) {
      this.categoryService.deleteCategory(cat.id)
        .subscribe(res => {
          console.log("res", res);
          this.getAllCategories();
        })
    }
  }

  
}




import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { CategoryComponent } from 'app/category/category.component';
import { BrandComponent } from 'app/brand/brand.component';
import { ProductComponent } from 'app/Product/product.component';
import { DiscountComponent } from 'app/discount/discount.component';
import { StockComponent } from 'app/stock/stock.component';
import { ProductionComponent } from 'app/production/production.component';
import { MonthlySummaryComponent } from 'app/monthlySummary/monthlySummary.component';
import { CompanyComponent } from 'app/company/company.component';
import { DailySummaryComponent } from 'app/dailySummary/dailySummary.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CategoryComponent,
    BrandComponent,
    ProductComponent,
    DiscountComponent,
    CompanyComponent,
    StockComponent,
    ProductionComponent,
    MonthlySummaryComponent,
    DailySummaryComponent
  ]
})

export class AdminLayoutModule {}

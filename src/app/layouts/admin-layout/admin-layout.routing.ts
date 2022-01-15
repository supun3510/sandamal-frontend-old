import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { CategoryComponent } from 'app/category/category.component';
import { BrandComponent } from 'app/brand/brand.component';
import { ProductComponent } from 'app/Product/product.component';
import { DiscountComponent } from 'app/discount/discount.component';
import { StockComponent } from 'app/stock/stock.component';
import { ProductionComponent } from 'app/production/production.component';
import { MonthlySummaryComponent } from 'app/monthlySummary/monthlySummary.component';
import { CompanyComponent } from 'app/company/company.component';
import { DailySummaryComponent } from 'app/dailySummary/dailySummary.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'category',     component: CategoryComponent },
    { path: 'brand',     component: BrandComponent },
    { path: 'company',     component: CompanyComponent },
    { path: 'product',     component: ProductComponent },
    { path: 'discount',     component: DiscountComponent },
    { path: 'stock',     component: StockComponent },
    { path: 'production',     component: ProductionComponent },
    { path: 'dailySummary',     component: DailySummaryComponent },
    { path: 'monthlySummary',     component: MonthlySummaryComponent }
];

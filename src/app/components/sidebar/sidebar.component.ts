import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/category', title: 'Category List',  icon:'category', class: '' },
    { path: '/brand', title: 'Brand List',  icon:'branding_watermark', class: '' },
    { path: '/company', title: 'Company List',  icon:'book', class: '' },
    { path: '/product', title: 'Product List',  icon:'shopping_cart', class: '' },
    // { path: '/discount', title: 'Discount List',  icon:'local_offer', class: '' },
    { path: '/stock', title: 'Stock List',  icon:'local_offer', class: '' },
    { path: '/production', title: 'Production List',  icon:'local_offer', class: '' },
    { path: '/dailySummary', title: 'Daily Summary Report',  icon:'book', class: '' },
    { path: '/monthlySummary', title: 'Monthly Summary Report',  icon:'book', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

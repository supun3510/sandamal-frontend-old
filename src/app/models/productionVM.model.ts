import { ProductionCart } from 'app/models/productionCart.model';

export class ProductionVM {
    payment_Type: string;
    customer_Name: string;
    customer_Mobile: string;
    check_Number: string;
    customer_Bill: number;
    customer_Payment: number;
    customer_Balance: number;
    bank_Name: string;
    productionCarts: ProductionCart[]; 
}
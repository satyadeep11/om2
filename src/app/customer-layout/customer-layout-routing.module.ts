import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout.component';

const routes: Routes = [
    {
        path: '',
        component: CustomerLayoutComponent,
        children: [
            
            { path: '', redirectTo: 'home', pathMatch: 'prefix' },           
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
            { path: 'products/:id', loadChildren: './products/products.module#ProductsModule' },   
            { path: 'products', loadChildren: './products/products.module#ProductsModule' },  
            { path: 'products/search/:search', loadChildren: './products/products.module#ProductsModule' },           
            { path: 'product-detail/:id', loadChildren: './product-detail/product-detail.module#ProductDetailModule' },            
            { path: 'cart', loadChildren: './cart/cart.module#CartModule' },  
            { path: 'customer-orders', loadChildren: './customer-orders/customer-orders.module#CustomerOrdersModule' },
            { path: 'checkout', loadChildren: './checkout/checkout.module#CheckoutModule' }
            
        ]
    }
]; 

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerLayoutRoutingModule {} 
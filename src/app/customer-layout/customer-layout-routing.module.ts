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
            { path: 'products', loadChildren: './products/products.module#ProductsModule' },            
            { path: 'product-detail', loadChildren: './product-detail/product-detail.module#ProductDetailModule' },            
            { path: 'cart', loadChildren: './cart/cart.module#CartModule' }
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerLayoutRoutingModule {} 
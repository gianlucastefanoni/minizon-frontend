import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './client/auth/login.component';
import { RegisterComponent } from './client/auth/register.component';
import { ProductListComponent } from './client/product-list/product-list.component';
import { ProfileManagerComponent } from './client/profile-manager/profile-manager.component';
import { OrdersComponent } from './client/orders/orders.component';
import { OrderDetailsComponent } from './client/order-details/order-details.component';
import { ProductComponent } from './client/product/product.component';
import { LoginComponent as AdminLoginComponent } from './admin/login/login.component';
import { CreateAdminComponent } from './admin/create-admin/create-admin.component';
import { ProductListComponent as AdminProductListComponent } from './admin/product-list/product-list.component';
import { ProductComponent as AdminProductComponent } from './admin/product/product.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'catalog', component: ProductListComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: 'profile-manager', component: ProfileManagerComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'order-details/:id', component: OrderDetailsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: RegisterComponent },
      { path: 'admin/catalog', component: AdminProductListComponent },
      { path: 'admin/product/:id', component: AdminProductComponent },
      { path: 'admin/manage-orders', component: ManageOrdersComponent },
      { path: 'admin/login', component: AdminLoginComponent },
      { path: 'admin/create-admin', component: CreateAdminComponent },
      { path: '', redirectTo: 'catalog', pathMatch: 'full' },
      { path: '**', redirectTo: 'catalog', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

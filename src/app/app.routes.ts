import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutasComponent } from './aboutas/aboutas.component';
import { ContactasComponent } from './contactas/contactas.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {path: '',redirectTo: '/login', pathMatch: 'full' },
    {path: 'login' , component: LoginComponent },
    {path: 'home' , component: HomeComponent },
    {path: 'aboutas' , component: AboutasComponent },
    {path: 'contactas' , component: ContactasComponent },
    {path: 'products' , component: ProductsComponent },
];

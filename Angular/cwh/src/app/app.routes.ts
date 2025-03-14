import { Routes } from '@angular/router';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { AboutComponentComponent } from './components/about-component/about-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';

export const routes: Routes = [
    {path:'', component:HomeComponentComponent},
    {path:'about', component:AboutComponentComponent},
    {path:'contact', component:ContactComponentComponent},
    {path:'products', component:ProductsComponentComponent},
    {path:'blogs', component:BlogComponentComponent}
];

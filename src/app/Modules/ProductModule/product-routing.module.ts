import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../AuthModule/Guard/Auth.guard';
import { ProdutAddComponent } from './Components/product-add/produt-add.component';
import { ProdutViewComponent } from './Components/product-view/produt-view.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: ProdutAddComponent },
  { path: 'view/:id', component: ProdutViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

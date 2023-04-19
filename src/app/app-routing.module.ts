import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Modules/AuthModule/Guard/Auth.guard';
import { NotFoundComponent } from './Shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./Modules/AuthModule/auth.module').then(m => m.AuthModule) },
  { path: 'product', loadChildren: () => import('./Modules/ProductModule/product.module').then(m => m.ProductModule), canActivate: [AuthGuard]  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

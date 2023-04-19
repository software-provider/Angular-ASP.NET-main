import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms"; 
import { CsvModule } from '@ctrl/ngx-csv';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProdutAddComponent } from './Components/product-add/produt-add.component';
import { ProdutViewComponent } from './Components/product-view/produt-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcessBarComponent } from 'src/app/Shared/components/processbar/processbar.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    ProductListComponent,
    ProdutAddComponent,
    ProdutViewComponent,
    ProcessBarComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgxDatatableModule,
    FormsModule,
    CsvModule
  ]
})
export class ProductModule { }

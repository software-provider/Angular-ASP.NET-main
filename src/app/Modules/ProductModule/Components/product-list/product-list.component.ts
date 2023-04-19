import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Product } from '../../Model/Prodcut';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data: Product[] = [];
  temp: Product[] = [];
  rows: Product[] = [];
  editing: any= {};
  editedList: number[] = [];
  isDeleted: boolean = false;
  isSaved: boolean = false;
  loadingIndicator = true;
  ColumnMode = ColumnMode;

  filterEMP: string = '';
  filterResponceType: string = '';
  filterViewResponded: boolean = false;
  filterCLosed: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data) => {
      this.data = data;
      this.temp = [...data];
      this.rows = this.temp;
      this.loadingIndicator = false;
    })
  }

  Delete(id: number) {
    this.productService.DeleteProduct(id).subscribe((data) => {
      this.isDeleted = true;
    });
  }

  Save() {
    this.editedList.forEach((element,index) => {
      this.productService.UpdateProduct(this.rows[element]).subscribe();
      if(index == this.editedList.length -1 ) this.isSaved = true;
    });
    
  }

  updateValue(event: any, cell: any, rowIndex: any) {
    this.editing[rowIndex + '-' + cell] = false;
    (this.rows[rowIndex] as any)[cell] = event.target.value;
    this.rows = [...this.rows];

    const found = this.editedList.find((i) => {
      return i === rowIndex;
    });
    if(!found)
      this.editedList.push(rowIndex);
  }

  getRowClass = (row: any) => {    
    return {
      'row-color': row.CLosed,
    };
   }

  exportDatas(documentType: string) {
      // Call Export Service
  }

  updateFilter(event: any) {
    let filters = {
      EMP : this.filterEMP,
      ResponceType: this.filterResponceType,
      ViewResponded: this.filterViewResponded,
      CLosed: this.filterCLosed
    }
    this.loadingIndicator = true;
    this.productService.getAllProduct(filters).subscribe((data) => {
      this.data = data;
      this.temp = [...data];
      this.rows = this.temp;
      this.loadingIndicator = false;
    });

  }
}

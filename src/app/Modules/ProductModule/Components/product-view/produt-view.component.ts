import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Service/product.service';
import {ActivatedRoute} from "@angular/router";
import { Validations } from 'src/app/Shared/Validations/Validations';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-produt-view',
  templateUrl: './produt-view.component.html',
  styleUrls: ['./produt-view.component.scss']
})
export class ProdutViewComponent implements OnInit {
  id: number = 0;
  
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  productForm: FormGroup;
  errorMessage: string = '';
  showError: boolean = false;
  formsubmited: boolean = false;

  data: any[] = [];
  temp: any[] = [];
  rows: any[] = [];
  isDeleted: boolean = false;
  isInEditingMood: boolean = false;
  loadingIndicator = true;
  ColumnMode = ColumnMode;

  filterAmmount: string = '';
  filterEligibility: string = '';
  filterViewCommented: boolean = false;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private fb: FormBuilder) { 
    this.route.params.subscribe( params => this.id = params['id'] ); 
    this.productForm = this.fb.group({
      Date: ['', Validations.Date],
      Docket: ['', Validations.RequiredAlpha],
      LineNo: ['', Validations.RequiredAlpha],
      EMP: ['', Validations.RequiredAlpha],
      Sufix: ['', Validations.RequiredAlpha],
      Steps: ['', Validations.RequiredAlpha],
      Eligibility: ['', Validations.RequiredAlpha],
      Amount: ['', Validations.RerquiredPrice],
    });   
  }

  get FormElement() {
    return this.productForm.controls
  }

  onSubmit(form: FormGroup) {
    this.showError = false;
    let x = {...form.value};
    x.Id = this.id;
    this.productService.UpdateProduct(x).subscribe((data) => {
      this.formsubmited = true;
    }, (error) => {
      this.errorMessage = error.message;
      this.showError = true;
      this.formsubmited = false;
    });
  }

  ngOnInit(): void {
    this.productService.getProduct(this.id).subscribe((data) => {
      this.data = data;
      this.temp = [...data];
      this.rows = this.temp;
      this.loadingIndicator = false;
    })
  }

  Delete(id: number) {
    this.productService.DeleteProduct(id).subscribe((data) => {
      this.isDeleted = true;
    })
  }

  onActivate(event: any){    
    if(event.type == 'click') {
      let index = this.table.bodyComponent.getRowIndex(event.row);
      this.rows[index].Date = new Date(this.rows[index].Date).toJSON().split('T')[0];;
      this.productForm.patchValue(event.row);
      this.isInEditingMood = true;
    }
  }

  exportDatas(documentType: string) {
      // Call Export Service
  }

  updateFilter(event: any) {
    let filters = {
      Ammount : this.filterAmmount,
      Eligibility: this.filterEligibility,
      ViewCommented: this.filterEligibility
    }
    this.loadingIndicator = true;
    this.productService.getProduct(this.id,filters).subscribe((data) => {
      this.data = data;
      this.temp = [...data];
      this.rows = this.temp;
      this.loadingIndicator = false;
    });
  }
}

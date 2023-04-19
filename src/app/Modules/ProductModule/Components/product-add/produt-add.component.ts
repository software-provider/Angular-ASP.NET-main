import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProcessBarComponent } from 'src/app/Shared/components/processbar/processbar.component';
import { Validations } from 'src/app/Shared/Validations/Validations';
import { ProductService } from '../../Service/product.service';

@Component({
  selector: 'app-produt-add',
  templateUrl: './produt-add.component.html',
  styleUrls: ['./produt-add.component.scss']
})
export class ProdutAddComponent implements OnInit {

  productForm: FormGroup;
  errorMessage: string = '';
  showError: boolean = false;
  formsubmited: boolean = false;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private modalService: NgbModal) {
    this.productForm = this.fb.group({
      EMP: ['', Validations.RequiredAlpha],
      Suffix: ['', Validations.RequiredAlpha],
      StartDate: ['', Validations.Date],
      Amount: ['', Validations.RerquiredPrice],
      ResponceType: ['', Validations.RequiredAlpha],
      ResponceDate: ['', Validations.Date],
      Comment: ['', Validations.RequiredAlpha],
    });
  }

  ngOnInit(): void {
  }

  get FormElement() {
    return this.productForm.controls
  }

  onSubmit(form: FormGroup) {
    this.showError = false;
    this.productService.AddProduct(form.value).subscribe((data) => {
      this.formsubmited = true;
      this.startPrograss();
    }, (error) => {
      this.errorMessage = error.message;
      this.showError = true;
      this.formsubmited = false;
    });
  }

  startPrograss() {
    const modalRef = this.modalService.open(ProcessBarComponent, { size: 'xl', backdrop: 'static', keyboard: false, centered: true });
  }
}

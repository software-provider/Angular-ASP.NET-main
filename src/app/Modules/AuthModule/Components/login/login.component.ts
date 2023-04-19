import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  formsubmited: boolean = false;

  constructor(
    private loginService: AuthService,
    private fb: FormBuilder,
    private router: Router) {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  get FormElement() {
    return this.loginForm.controls;
  }

  onSubmit(form: FormGroup) {
    if(this.loginService.Login(form.value.email,form.value.password)){
      this.router.navigate(["product"])
    };
  }
}

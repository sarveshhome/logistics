import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import {roles} from '../../shared/master-enum.enum';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private router: Router,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
  });
  }

  login(form) {
    if (form.valid) {
      const loginInfo = form.value;
      this.loginService.validateUser(loginInfo).subscribe(res => {
        if (res) {
          this.goToDashboard(res);
        }
      },
      err => {
        this.toastrService.error(err.error.message, 'Error');
      });
    }
  }

  goToDashboard(res) {
    const role = _.find(roles, (role) => {
      return role.roleId === res.roleId;
    });
    this.router.navigateByUrl(role.url);
  }

}

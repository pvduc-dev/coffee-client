import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoading = false;

  constructor(private readonly authService: AuthService,
              private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  public async onSubmit() {
    this.isLoading = true;
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: async value => {
          await this.authService.storingToken(value.access_token);
          await this.router.navigate(['users']);
        },
        error: err => console.log(err)
      });
  }

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
}

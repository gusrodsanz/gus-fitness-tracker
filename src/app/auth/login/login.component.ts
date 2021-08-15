import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
// import { map } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
// import * as fromApp from '../../app.reducer';
import * as fromRoot from '../../app.reducer';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;
  private loadingSub: Subscription;

  constructor(
    private authService: AuthService,
    // private uiServ: UIService,
    private store: Store<{ ui: fromRoot.State}>
  ) {}

  ngOnInit() {
    // this.isLoading$ = this.store.select(state => state.ui.ui.isLoading);
    //NOW USING STORE NGRX
    this.isLoading$ = this.store.select( fromRoot.getIsLoading);

    // this.loadingSub = this.uiServ.loadingStateChanged.subscribe(
      // (isLoading) => {
    //   this.isLoading = isLoading;
    // });

    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });
  }

  // ngOnDestroy() {
  //   if (this.loadingSub) {
  //     this.loadingSub.unsubscribe();
  //   }
  // }
}

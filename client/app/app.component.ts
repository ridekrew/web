import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

import { RideRequestService } from './services/rideRequest.service';
import { AuthService } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ RideRequestService , AuthService ]
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  currentUser: any;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['ffosb22@gmail.com', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  login(event) {
    event.preventDefault();
    var email = this.loginForm.get('email').value;
    var password = this.loginForm.get('password').value;
    this.authService.login(email, password)
      .subscribe(res => {
        var user = res.user;
        var sessionID = res.sessionID;
        if (user && sessionID) {
          localStorage.setItem('currentUser', user);
        }
        this.currentUser = user;
      });
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        return false;
    }
  
}
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';

import { RideRequestService } from './services/rideRequest.service';
import { AuthService } from './services/auth.service';

import { User } from './models/User'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ RideRequestService , AuthService ]
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  currentUser: User;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['ffosb22@gmail.com', [Validators.required]],
      password: ['test', [Validators.required]]
    });
    if (this.isAuthenticated()) {
      this.authService.getUser(localStorage.getItem('userID'))
        .subscribe(res => {
          var user = res[0];
          this.currentUser = user;
        });
    }
  }

  login(event) {
    event.preventDefault();
    var email = this.loginForm.get('email').value;
    var password = this.loginForm.get('password').value;
    this.authService.login(email, password)
      .subscribe(res => {
        var user = res.user[0];
        var sessionID = res.sessionID;
        if (user && sessionID) {
          localStorage.setItem('token', sessionID);
          localStorage.setItem('userID', user._id);
        }
        this.currentUser = user;
      });
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
        if (localStorage.getItem('token')) {
            return true;
        }
        return false;
    }
  
}
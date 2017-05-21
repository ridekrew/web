"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const rideRequest_service_1 = require("./services/rideRequest.service");
const auth_service_1 = require("./services/auth.service");
let AppComponent = class AppComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['ffosb22@gmail.com', [forms_1.Validators.required]],
            password: ['test', [forms_1.Validators.required]]
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
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        providers: [rideRequest_service_1.RideRequestService, auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
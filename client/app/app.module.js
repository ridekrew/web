"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const home_component_1 = require("./components/home/home.component");
const confirm_component_1 = require("./components/confirm/confirm.component");
const rideRequests_component_1 = require("./components/rideRequests/rideRequests.component");
const profile_component_1 = require("./components/profile/profile.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.ReactiveFormsModule,
            router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'confirm', component: confirm_component_1.ConfirmComponent },
                { path: 'profile', component: rideRequests_component_1.RideRequestsComponent },
                { path: 'profile/:id', component: profile_component_1.ProfileComponent },
                { path: '**', redirectTo: '' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent,
            confirm_component_1.ConfirmComponent,
            rideRequests_component_1.RideRequestsComponent,
            profile_component_1.ProfileComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { RideRequestsComponent } from './components/rideRequests/rideRequests.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'confirm', component: ConfirmComponent },
            { path: 'profile', component: RideRequestsComponent },
            { path: 'profile/:id', component: ProfileComponent },
            { path: '**', redirectTo: '' }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ConfirmComponent,
        RideRequestsComponent,
        ProfileComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
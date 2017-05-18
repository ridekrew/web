import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { RideRequestsComponent } from './components/rideRequests/rideRequests.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'confirm', component: ConfirmComponent },
            { path: 'profile', component: RideRequestsComponent },
            { path: '**', redirectTo: '' }
        ])
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ConfirmComponent,
        RideRequestsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
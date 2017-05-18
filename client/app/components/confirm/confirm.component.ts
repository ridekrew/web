import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RideRequestService } from '../../services/rideRequest.service';

@Component({
    moduleId: module.id,
    templateUrl: './confirm.component.html'
})
export class ConfirmComponent implements OnInit { 
    origin: string;
    destination: string;
    date: string;
    time: string;

    constructor(private activatedRoute: ActivatedRoute, private rideRequestService: RideRequestService) {

    }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.origin = params['origin'];
            this.destination = params['destination'];
            this.date = params['date'];
            this.time = params['time'];
        });
    }

    bookRide(event) {
        event.preventDefault();
        var newRideRequest = {
            origin: this.origin,
            destination: this.destination,
            date: this.date,
            time: this.time,
        }

        this.rideRequestService.addRideRequest(newRideRequest)
            .subscribe();
    }

}
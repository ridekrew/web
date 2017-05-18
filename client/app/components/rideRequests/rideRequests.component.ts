import { Component, OnInit } from '@angular/core';
import { RideRequestService } from '../../services/rideRequest.service';

import { Ride } from '../../models/Ride';

@Component({
    moduleId: module.id,
    selector: 'ride-requests',
    templateUrl: './rideRequests.component.html'
})
export class RideRequestsComponent implements OnInit {
    rideRequests: Ride[];
    origin: string;
    destination: string;
    date: string;
    time: string;

    constructor(private rideRequestService: RideRequestService) { }

    ngOnInit(): void {
        this.rideRequestService.getRideRequests()
            .subscribe(rides => {
                this.rideRequests = rides;
            });
    }

    bookRide(event) {
        event.preventDefault();
        var newRideRequest = {
            origin: this.origin,
            destination: this.destination,
            date: this.date,
            time: this.time,
            claimed: false
        }

        this.rideRequestService.addRideRequest(newRideRequest)
            .subscribe(rideRequest => {
                this.rideRequests.push(rideRequest);
                this.origin = "";
                this.destination = "";
                this.date = "";
                this.time = "";
            });
    }

    claimRide(rideRequest) {
        this.rideRequestService.claimRide(rideRequest._id)
            .subscribe(data => {
                if (data.n == 1) {
                    for (var i = 0; i < this.rideRequests.length; i++) {
                        if (this.rideRequests[i] == rideRequest) {
                            this.rideRequests.splice(i, 1);
                        }
                    }
                }
            });
    }
}
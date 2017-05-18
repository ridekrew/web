import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RideRequestService {
    constructor(private http: Http) {} 

    getRideRequests() {
        return this.http.get('/api/rideRequests')
            .map(res => res.json());
    }

    addRideRequest(rideRequest) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/rideRequest', JSON.stringify(rideRequest), {headers: headers})
            .map(res => res.json());
    }

    claimRide(id) {
        return this.http.delete('/api/rideRequest/' + id)
            .map(res => res.json());
    }
}
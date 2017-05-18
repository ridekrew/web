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
const rideRequest_service_1 = require("../../services/rideRequest.service");
let RideRequestsComponent = class RideRequestsComponent {
    constructor(rideRequestService) {
        this.rideRequestService = rideRequestService;
    }
    ngOnInit() {
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
        };
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
};
RideRequestsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ride-requests',
        templateUrl: './rideRequests.component.html'
    }),
    __metadata("design:paramtypes", [rideRequest_service_1.RideRequestService])
], RideRequestsComponent);
exports.RideRequestsComponent = RideRequestsComponent;
//# sourceMappingURL=rideRequests.component.js.map
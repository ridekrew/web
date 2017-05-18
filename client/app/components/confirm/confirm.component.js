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
const router_1 = require("@angular/router");
const rideRequest_service_1 = require("../../services/rideRequest.service");
let ConfirmComponent = class ConfirmComponent {
    constructor(activatedRoute, rideRequestService) {
        this.activatedRoute = activatedRoute;
        this.rideRequestService = rideRequestService;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params) => {
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
        };
        this.rideRequestService.addRideRequest(newRideRequest)
            .subscribe();
    }
};
ConfirmComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './confirm.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, rideRequest_service_1.RideRequestService])
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map
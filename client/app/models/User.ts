import { Ride } from './Ride';

export class User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    homeLocation: string;
    isDriver: boolean;
    rideHistory: Ride[];
    driveHistory: Ride[];
    upcomingRides: Ride[];
    upcomingDrives: Ride[];
}
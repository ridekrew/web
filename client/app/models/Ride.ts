import { User } from './User';

export class Ride {
    origin: string;
    destination: string;
    date: string;
    time: string;
    riders: User[];
    distance: number;
    price: number;
    duration: number;
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Booking } from './booking';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/observer';

function numRidersRange(c: AbstractControl): {[key: string]: boolean} | null {
    if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 4)) {
        return { 'numRiders': true }
    };
    return null;
}

@Component({
    moduleId: module.id,
    selector: 'krew-booking',
    templateUrl: './booking-form.component.html',
    styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{ 
    bookingForm: FormGroup;
    booking: Booking = new Booking();
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor(private _fb: FormBuilder) {
        this.observable = new Observable<boolean>((observer: any) => this.observer = observer);

        setTimeout(() => this.observer.next(true), 2000);
    }

    ngOnInit(): void {
        this.bookingForm = this._fb.group({
            origin: ['', [Validators.required]],
            destination: ['', [Validators.required]],
            date: ['', [Validators.required]],
            time: ['', [Validators.required]],
            riders: ['1', [Validators.required, numRidersRange]]
        });

    }

    book() {
        console.log(this.bookingForm);
        console.log(JSON.stringify(this.bookingForm.value));
    }

    populateTestData(): void {
        this.bookingForm.patchValue({
            destination: 'Austin, TX',
            date: 'March 5, 2017',
            time: '8:00 PM'
        })
    }

    
}
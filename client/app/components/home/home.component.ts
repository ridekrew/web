import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
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
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    bookingForm: FormGroup;
    public observable: Observable<boolean>;
    private observer: Observer<boolean>;

    constructor(private fb: FormBuilder ) {

    }

    ngOnInit(): void {
        this.bookingForm = this.fb.group({
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
}
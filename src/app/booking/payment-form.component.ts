import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Payment } from './payment.interface';

@Component({
    moduleId: module.id,
    selector: 'payment-form',
    templateUrl: './payment-form.component.html' 
})
export class PaymentForm implements OnInit {
    paymentForm: FormGroup;

    constructor(private _fb: FormBuilder) {}

    ngOnInit() {
        this.paymentForm = this._fb.group({
            firstName: ['', [Validators.required, Validators.minLength(2)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]]
        })
    }

    onSubmit({ value, valid }: { value: Payment, valid: boolean }) {
        console.log(value, valid);
    }
}
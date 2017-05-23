import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    userId: string;

    constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {}

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            console.log(params);
            this.userId = params['id'];
        });
    }
}
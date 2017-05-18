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
const forms_1 = require("@angular/forms");
function numRidersRange(c) {
    if (c.value != undefined && (isNaN(c.value) || c.value < 1 || c.value > 4)) {
        return { 'numRiders': true };
    }
    ;
    return null;
}
let HomeComponent = class HomeComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.bookingForm = this.fb.group({
            origin: ['', [forms_1.Validators.required]],
            destination: ['', [forms_1.Validators.required]],
            date: ['', [forms_1.Validators.required]],
            time: ['', [forms_1.Validators.required]],
            riders: ['1', [forms_1.Validators.required, numRidersRange]]
        });
    }
    book() {
        console.log(this.bookingForm);
        console.log(JSON.stringify(this.bookingForm.value));
    }
};
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
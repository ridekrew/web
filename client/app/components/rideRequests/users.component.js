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
const user_service_1 = require("../../services/user.service");
let UsersComponent = class UsersComponent {
    constructor(userService) {
        this.userService = userService;
        this.userService.getUsers()
            .subscribe(users => {
            this.users = users;
        });
    }
    addUser(event) {
        event.preventDefault();
        var newUser = {
            title: this.title,
            isDone: false
        };
        this.taskService.addUser(newUser)
            .subscribe(task => {
            this.tasks.push();
            this.title = "";
        });
    }
    deleteUser(id) {
        var users = this.users;
        this.taskService.deleteUser(id)
            .subscribe(data => {
            if (data.n == 1) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i]._id == id) {
                        users.splice(i, 1);
                    }
                }
            }
        });
    }
    updateStatus(user) {
        var _user = {
            _id: user._id,
            title: user.title,
            isDone: !user.isDone
        };
        this.taskService.updateStatus(_user)
            .subscribe(data => {
            user.isDone = !user.isDone;
        });
    }
};
UsersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'users',
        templateUrl: 'users.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map
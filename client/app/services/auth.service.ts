import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    constructor(private http: Http) {}

    login(email, password) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/auth/login', JSON.stringify({ email: email, password: password }), {headers: headers})
            .map(res => {
                var user = res.json();
                console.log(user.token);
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
        return this.http.get('/auth/logout')
            .map(res => res.json());
    }
}
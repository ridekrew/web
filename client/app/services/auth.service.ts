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
            .map(res => res.json());
    }

    logout() {
        localStorage.removeItem('currentUser');
        return this.http.get('/auth/logout')
            .map(res => res.json());
    }

    getUser(id) {
        return this.http.get('/auth/user/id')
            .map(res => res.json());
    }

    
}
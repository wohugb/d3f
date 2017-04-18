import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Restangular } from 'ngx-restangular';

@Injectable()
export class AuthenticationService {
    private urlPrefix: string;
    constructor(
      private http: Http,
      private restangular: Restangular
    ) {}

    public login(username: string, password: string) {
        return this.restangular.one('authenticate').post('', { username, password })
          .map((response) => {
              let user = response.plain();
              if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
              }
            });
    }
    public logout() {
        localStorage.removeItem('currentUser');
    }
}

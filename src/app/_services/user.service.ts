import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Restangular } from 'ngx-restangular';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    public urlPrefix: string;

    constructor(
      private http: Http,
      private restangular: Restangular
    ) {
      this.urlPrefix = 'http://api.d3f.pw/admin';
    }

    public getAll() {
        return this.restangular.all('manager').getList();

    }

    public getById(id: number) {
        return this.http.get(this.urlPrefix + '/manager/' + id,
          this.jwt()).map((response: Response) => response.json());
    }

    public create(user: User) {
        return this.http.post(this.urlPrefix + '/register', user,
          this.jwt()).map((response: Response) => response.json());
    }

    public update(user: User) {
        return this.http.put(this.urlPrefix + '/manager/' + user.id, user,
          this.jwt()).map((response: Response) => response.json());
    }

    public delete(id: number) {
        return this.http.delete(this.urlPrefix + '/manager/' + id,
          this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ Authorization: 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers });
        }
    }
}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Survey } from '../_models/survey';

@Injectable()
export class SurveyService {
    public urlPrefix: string;

    constructor(private http: Http) {
      this.urlPrefix = 'http://api.d3f.pw/admin';
    }

    public save(surveyDate: any) {
        return this.http.post(this.urlPrefix + '/survey', surveyDate,
          this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ Authorization: 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers });
        }
    }
}

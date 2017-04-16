import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { SurveyModel } from '../_models/survey';
import { HttpService } from './http.service';

@Injectable()
export class SurveyService {
    public urlPrefix: string;

    constructor(private http: HttpService) {
      this.urlPrefix = 'http://api.d3f.pw/admin';
    }

    public save(surveyData: any) {
        return this.http.post(this.urlPrefix + '/survey', surveyData)
          .map((response: Response) => response.json());
    }
    public getAll() {
        return this.http.get(this.urlPrefix + '/survey')
          .map((response: Response) => response.json());
    }
    public getById(id: string) {
        return this.http.get(this.urlPrefix + '/survey/' + id,
          this.jwt()).map((response: Response) => response.json());
    }
    public delete(id: string) {
        return this.http.delete(this.urlPrefix + '/survey/' + id,
          this.jwt()).map((response: Response) => response.json());
    }
    public gather(id: string, surveyData: any) {
        return this.http.post(this.urlPrefix + '/survey/' + id + '/gather', surveyData,
          this.jwt()).map((response: Response) => response.json());
    }
    public getGathers() {
        return this.http.get(this.urlPrefix + '/gather')
          .map((response: Response) => response.json());
    }
    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ Authorization: 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers });
        }
    }
}

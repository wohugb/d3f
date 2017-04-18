import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// import { ConfModel } from '../_models/conf';
import { HttpService } from '../_services/http.service';

@Injectable()
export class ConfService {
    public urlPrefix: string;

    constructor(private http: HttpService) {
      this.urlPrefix = 'http://api.d3f.pw/admin';
    }

    public save(confData: any) {
        return this.http.post(this.urlPrefix + '/conf', confData)
          .map((response: Response) => response.json());
    }
    public getAll() {
        return this.http.get(this.urlPrefix + '/conf')
          .map((response: Response) => response.json());
    }
    public getById(id: string) {
        return this.http.get(this.urlPrefix + '/conf/' + id)
          .map((response: Response) => response.json());
    }
    public delete(id: string) {
        return this.http.delete(this.urlPrefix + '/conf/' + id)
          .map((response: Response) => response.json());
    }
}

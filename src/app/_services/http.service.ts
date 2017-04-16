import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request,
  RequestOptionsArgs, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

  constructor (backend: XHRBackend, options: RequestOptions) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
        options.headers.set('Authorization', `Bearer ${currentUser.token}`);
    }
    super(backend, options);
  }

  public request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser ? currentUser.token : '';
    if (typeof url === 'string') { // meaning we have to add the token to the options, not in url
      if (!options) {
        // let's make option object
        options = {headers: new Headers()};
      }
      options.headers.set('Authorization', `Bearer ${token}`);
    } else {
    // we have to add the token to the url object
      url.headers.set('Authorization', `Bearer ${token}`);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }
  private catchAuthError (self: HttpService) {
    // we have to pass HttpService's own instance here as `self`
    return (res: Response) => {
      if (res.status === 401 || res.status === 403) {
        // 既然弄个router这么费劲，那就直接全局location吧，哈哈
        location.href = '/login';
      }
      return Observable.throw(res);
    };
  }
}

/**
 * Created by Mzz on 2017/5/10.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class TaskService {

  constructor(private http: Http) {
  }

  getTasks(url: URL, id: string, token: string): Observable<Response> {
    let params = {
      'jsonrpc': '2.0',
      'method': 'aria2.tellActive',
      'id': id,
      'params': ['token:' + token]
    };
    return this.http.post(url.toString(), params);
  }

  getUrl(): URL {
    return new URL('jsonrpc', 'http://domain:port');
  }

  getToken(): string {
    return 'token';
  }

  getVersion(url: URL, id: string, token: String): Observable<Response> {
    let params = {
      'jsonrpc': '2.0',
      'method': 'aria2.getVersion',
      'id': id,
      'params': ['token:' + token]
    };
    return this.http.post(url.toString(), params);
  }
}

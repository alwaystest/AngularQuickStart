/**
 * Created by Mzz on 2017/5/10.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Task} from './Task';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class TaskService {

  constructor(private http: Http) {
  }

  getTasks(): Promise<Task[]> {
    return Promise.resolve([
      {name: 'First Task', size: 10, progress: 10},
      {name: 'Second Task', size: 20, progress: 10},
      {name: 'Third Task', size: 30, progress: 10}
    ]);
  }

  getUrl(): URL {
    return new URL('jsonrpc', 'http://domain:port');
  }

  getToken(): String {
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

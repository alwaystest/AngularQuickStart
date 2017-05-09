/**
 * Created by Mzz on 2017/5/10.
 */

import {Injectable} from '@angular/core';
import {Task} from './Task';
@Injectable()
export class TaskService {
  getTasks(): Promise<Task[]> {
    return Promise.resolve([
      {name: 'First Task', size: 10, progress: 10},
      {name: 'Second Task', size: 20, progress: 10},
      {name: 'Third Task', size: 30, progress: 10}
    ]);
  }
}

import {Component, Input} from '@angular/core';
import {Task} from './Task';
import {TaskService} from './task.service';

/**
 * Created by Mzz on 2017/5/3.
 */
@Component({
  selector: 'task-detail',
  templateUrl: './taskdetail.component.html',
  providers: [TaskService]
})
export class TaskDetailComponent {
  tasks: Array<Task>;

  constructor(private taskService: TaskService) {
  }

  getTasks() {
    this.taskService.getTasks(this.taskService.getUrl(), Date.now().toString(), this.taskService.getToken())
      .subscribe(response => {
        console.log(response.json().result);
        if (! response.json().result) {
          return;
        }
        for (let item of response.json().result) {
          let task = new Task();
          task.name = this.getTaskName(item);
          task.size = item.totalLength;
          task.progress = item.completedLength;
          this.tasks.push(task);
        }
      });
  }

  getTaskName(result: any): string {
    let taskName = 'Undefined';
    if (!result || result.length === 0) {
      return taskName;
    }
    if (result.bittorrent && result.bittorrent.info) {
      taskName = result.bittorrent.info.name;
    }
    if (!taskName && result.files && result.files.length > 0) {
      taskName = this.getFileName(result.files[0]);
    }
    return taskName;
  };

  getFileName (file: any) {
    if (!file) {
      return 'Undefined';
    }
    let path = file.path;
    if (!path && file.uris && file.uris.length > 0) {
      path = file.uris[0].uri;
    }
    let index = path.lastIndexOf('/');
    if (index <= 0 || index === path.length) {
      return path;
    }
    return path.substring(index + 1);
}

  ngOnInit() {
    this.tasks = [];
    this.getTasks();
  }
}

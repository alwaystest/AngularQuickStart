import {Component} from '@angular/core';
import {TaskService} from './task.service';
import {Task} from './Task';

@Component({
  selector: 'my-app',
  templateUrl: './menu.component.html',
  providers: [TaskService]
})
export class AppComponent {
  name = 'Angular';
  title = 'AriaNg';
  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  getVersion() {
    this.taskService.getVersion(new URL('jsonrpc', 'http://domain:port'), 'id', 'token')
      .subscribe(response => console.log(response.json()));
  }

  ngOnInit() {
    this.getTasks();
    this.getVersion();
  }
}

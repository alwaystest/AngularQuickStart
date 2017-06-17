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
  tasks: Task[];

  constructor(private taskService: TaskService) {
  }

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }
}

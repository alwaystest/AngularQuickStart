import {Component, Input} from '@angular/core';
import {Task} from './Task';

/**
 * Created by Mzz on 2017/5/3.
 */
@Component({
  selector: 'task-detail',
  templateUrl: './taskdetail.component.html'
})
export class TaskDetailComponent {
  @Input() tasks: Task[];
}

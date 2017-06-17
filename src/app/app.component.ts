import {Component} from '@angular/core';
import {TaskService} from './task.service';

@Component({
  selector: 'my-app',
  templateUrl: './menu.component.html',
  providers: [TaskService]
})
export class AppComponent {
  name = 'Angular';
  title = 'AriaNg';
}

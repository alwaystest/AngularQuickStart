/**
 * Created by Mzz on 2017/6/17.
 */
import {Component} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'version',
  templateUrl: './version.component.html',
  providers: [TaskService]
})

export class VersionComponent {
  private version: string;
  constructor(private taskService: TaskService) {
  }

  getVersion() {
    this.taskService.getVersion(this.taskService.getUrl(), Date.now().toString(), this.taskService.getToken())
      .subscribe(response => {
        console.log(response.text());
        this.version = response.text();
      });
  }

  ngOnInit() {
    this.getVersion();
  }
}

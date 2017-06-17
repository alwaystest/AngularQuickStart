/**
 * Created by Mzz on 2017/6/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {VersionComponent} from './version/version.component';
import {TaskDetailComponent} from './task-detail.component';
const routes: Routes = [
  {path: 'main', component: AppComponent},
  {path: 'version', component: VersionComponent},
  {path: 'tasks', component: TaskDetailComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

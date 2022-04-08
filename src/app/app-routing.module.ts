import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';

//we will write the every routes of the component in this file app-routing-module
const routes: Routes = [
  { path : '',redirectTo: '/lists' , pathMatch:'full'},
  { path : 'new-list',component: NewListComponent},
  { path : 'lists/:listId',component: TaskViewComponent},
  { path : 'lists',component: TaskViewComponent},
  { path : 'lists/:listId/new-task',component: NewTaskComponent},
  { path : 'login',component: LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

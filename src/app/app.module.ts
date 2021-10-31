import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {TodoComponent} from './todo/todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskAddComponent } from './task-add/task-add.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    // contains the whole todo list
    path: 'tasks',
    component: TodoComponent  
  },
  {
    // display the form to add a new task
    path: 'tasks/add',
    component: TaskAddComponent,
    data: {title: 'Add new task'}
  },
  {
    // display the form to add a new task
    path: 'tasks/:id/edit',
    component: TaskEditComponent,
    data: {title: 'Task edition'}
  },
  // Always go on /tasks path
  { path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskEditComponent,
    TaskAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

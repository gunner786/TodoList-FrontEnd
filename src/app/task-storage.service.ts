import {Injectable} from '@angular/core';

import {Task} from "../app/shared/models/task.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  
  initialized: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public getTasks(): Observable<any> {
    return this.httpClient.get(environment.getTodo);
  }

  public add(taskName: string, taskDescription: string) {
    let task = new Task(taskName, taskDescription,'');
     this.httpClient.post(environment.addTodo,task).subscribe(value => {
       console.log(value); 
       });
  }

  public update(id: number,taskName: string, taskDescription: string) {
      let task = new Task(taskName, taskDescription,id);
       this.httpClient.post(environment.updateTodo,task).subscribe(value => {
         console.log(value); 
         });
  }

  public delete(id: number) {
    this.httpClient.post(environment.deleteTodo+id,id).subscribe(value => {
      });
  }

  public editTask(id: any): Observable<any> {
    return this.httpClient.get(environment.editTodo+id);
  }
}

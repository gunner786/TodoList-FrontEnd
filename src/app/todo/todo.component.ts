import {Component, OnInit} from '@angular/core';
import {TaskStorageService} from "../task-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  taskList: any [];

  constructor(private storage: TaskStorageService,
    private router: Router ) {
  }

  ngOnInit() : void{
    this.storage.getTasks().subscribe(data => {
      this.taskList = data;
    });
  }

  public delete(id: number): void {
    this.storage.delete(id);
    window.location.reload();
  }
}
